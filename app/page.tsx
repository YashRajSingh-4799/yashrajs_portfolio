import AboutSection from "@/components/AboutSection"
import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"
import Timeline from "@/components/timeline"
import Blogs from "@/components/blogs"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Hero />
      <AboutSection />
      {/* <Timeline /> */}
      {/* <Blogs /> */}
      <ProjectsSection />
    </main>
  )
}
