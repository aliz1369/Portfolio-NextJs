import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Projects from "@/components/Projects";
import TopSection from "@/components/TopSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <TopSection />
        <About />
        {/* <Projects /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
