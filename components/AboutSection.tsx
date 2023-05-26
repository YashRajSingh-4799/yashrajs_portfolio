import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "MongoDB" },
  { skill: "Python" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Firebase" }, 
  // { skill: "Sanity.io" },
  // { skill: "WordPress" },
  { skill: "C++" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-light text-4xl tracking-[15px] uppercase mb-8">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Yash Raj Singh and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in India.
            </p>
            <br />
            <p>
              I still doing my graduation at the Babu Banarasi Das Engineering
              College, Lucknow. The program is a B.Tech in Computer Science
              Engineering and have been working in the field of Development and
              Communities even before I started my degree.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, cycling, rapping & web surfing (got keep up with
              what&#39;s happening in Technology World), Coding - it&#39;s
              basically started my new hobby, to write my experiences in a Blog
              on{" "}
              <span className="font-bold text-teal-500">
                <a href="https://yrsinghx.hashnode.dev/">
                  YashRaj&#39;s Blog!!! (Hashnode)
                </a>
              </span>
              , I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe you should never stop growing, and that&#39;s what
              I&#39;m trying to do with a passion for technology and a desire to
              constantly push the boundaries of what&#39;s possible. I am
              excited to see where my career will take me and I am always open
              to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-900 px-4 py-2 mr-2 mt-2 text-gray-300 rounded-xl font-light"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden mt-6 md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection