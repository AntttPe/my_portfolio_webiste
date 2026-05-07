import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <div className="relative">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent" />
          </div>
          <Projects />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent" />
          </div>
          <Skills />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent" />
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
