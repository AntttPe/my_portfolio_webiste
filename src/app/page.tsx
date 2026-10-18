import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function Divider() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
