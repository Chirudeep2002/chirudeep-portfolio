import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Background from "@/components/Background";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main>
      <Loader />
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubStats />
      <Certifications />
      <Contact />
    </main>
  );
}