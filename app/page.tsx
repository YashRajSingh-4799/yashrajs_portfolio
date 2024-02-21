import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Timeline from "@/components/timeline";
import Blogs from "@/components/blogs";
export default function Home() {
  const timelineData = [
    // { title: "Event 1", description: "Description for Event 1" },
    {
      title: "SDE (Internship) @ Impulsive Web",
      description: "Dec 2023 - Present",
    },
    {
      title: "Technical Head @ GeeksforGeeks",
      description: "Aug 2022 - Jul 2023",
    },
    {
      title: "Mentor & Organizer @ Novathon",
      description: "Nov 2022 - Nov 2022 ",
    },
    {
      title: "Subject Matter Expert @ Chegg",
      description: "Feb 2022 - Jul 2022 · 6 mos",
    },
    // Add more timeline data as needed
  ];
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Hero />
      <AboutSection />
      <Timeline timelineData={timelineData} />
      {/* <Blogs /> */}
      <ProjectsSection />
    </main>
  );
}
