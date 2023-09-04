import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import {fetchExperience, fetchProjects, fetchSkill} from "@/hooks/fetchData";

export default async function Home() {
  const skills = await fetchSkill();
  const experiences = await fetchExperience();
  const projects = await fetchProjects();
  return (
    <main className="max-w-6xl mx-auto p-2">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects allProjects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Logo />
    </main>
  );
}
