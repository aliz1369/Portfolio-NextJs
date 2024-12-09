"use client";
import { StyledTetris, StyledTetrisWrapper } from "@/app/App.styles";
import { createStage, isColliding } from "@/app/games/tetris/gameHelpers";
import { useGameStatus } from "@/app/hooks/useGameStatus";
import { useInterval } from "@/app/hooks/useInterval";
import { usePlayer } from "@/app/hooks/usePlayer";
import { useStage } from "@/app/hooks/useStage";
import Display from "@/components/Display/Display";
import Stage from "@/components/Stage/Stage";
import StartButton from "@/components/StartButton/StartButton";
import React, { useRef, useState } from "react";

const Tetris: React.FC = () => {
  const [dropTime, setDroptime] = useState<null | number>(null);
  const [gameover, setGameover] = useState<boolean>(true);

  const gameArea = useRef<HTMLDivElement>(null);

  const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer();
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel } =
    useGameStatus(rowsCleared);

  const [touchPosition, setTouchPosition] = useState<null | number>(null);
  const [touchPositionY, setTouchPositionY] = useState<null | number>(null);
  const movePlayer = (dir: number) => {
    if (!isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (!gameover) {
      if (keyCode === 40) {
        setDroptime(1000 / level + 200);
      }
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) gameArea.current.focus();
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(0);
    setGameover(false);
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (!gameover) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        if (repeat) return;
        setDroptime(30);
      } else if (keyCode === 38) {
        playerRotate(stage);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    setTouchPosition(touchX);
    setTouchPositionY(touchY);
  };

  const touch = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;
    const touchY = touchPositionY;
    if (touchDown === null || touchY === null) {
      return;
    }
    const currentTouchY = e.touches[0].clientY;
    const currentTouch = e.touches[0].clientX;
    const diffY = touchY - currentTouchY;
    const diff = touchDown - currentTouch;
    if (!gameover) {
      if (diff > 5) {
        movePlayer(-1);
      }
      if (diff < -5) {
        movePlayer(1);
      }
      if (diffY > 5) {
        playerRotate(stage);
      }
      if (diffY < -5) {
        // if (repeat) return;
        setDroptime(30);
      }
    }
    setTouchPosition(null);
  };

  const drop = (): void => {
    if (rows > level * 10) {
      setLevel((prev) => prev + 1);
      setDroptime(1000 / level + 200);
    }

    if (!isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("Game over!");
        setGameover(true);
        setDroptime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={move}
      onKeyUp={keyUp}
      onTouchStart={handleTouchStart}
      onTouchMove={touch}
      ref={gameArea}
    >
      <StyledTetris>
        <div className="display">
          {gameover ? (
            <>
              <Display gameover={gameover} text="Game Over!" />
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </>
          )}
        </div>
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
