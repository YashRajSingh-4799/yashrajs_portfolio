import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  // {
  //   name: "BTC-wallet CLI",
  //   description:
  //     "built a CLI based BTC wallet using Node.js scripting to create import update check balance and display the transactions on the bitcoin address",
  //   image: "/btcwallet.jpg",
  //   github: "https://github.com/YashRajSingh-4799/",
  //   link: "https://github.com/YashRajSingh-4799/",
  // },
  {
    name: "Focus Tube",
    description:
      "Created a Youtube Clone that only focuses on learning and studying. There are no distractions such as reels and entertainment videos.Especially made for college students.",
    image: "/focustube.jpg",
    github: "https://github.com/YashRajSingh-4799/FocusTube",
    link: "https://focustube-yrs.netlify.app/",
  },
  {
    name: "Novathon (Real World Project)",
    description:
      "Designed and deployed web application of NOVATHON for the branding and spreading awareness of the Hackathon. Enabled about 200 Applications of teams to register in a hackathon from the website and verify the genuineness of applicants with unique Team ID",
    image: "/novathon.jpg",
    github: "https://github.com/YashRajSingh-4799/novathon-website",
    link: "https://novathon.netlify.app/",
  },
  {
    name: "GO Medicos (Freelance)",
    description:
      "Developed a brand website for a medical consulting company, leveraging HTML, CSS, and JavaScript in website to create a modern and user-friendly interface that effectively showcases all the company’s services and expertise. Received positive feedback from the client, who reported increased visibility and engagement as a result of the website. Procured a domain name and handled all technical aspects of site deployment, and hosted with the domain name.",
    image: "/gomedicos.jpg",
    github: "https://github.com/bhekumuzitshuma/netflix-clone",
    link: "https://gomedicos.in/",
  },
  {
    name: "Enigma Community Website Clone ",
    description:
      "A student hunt accommodation platform for students all over the world.",
    image: "/enigma.jpg",
    github: "https://github.com/YashRajSingh-4799/Enigma",
    link: "https://yashrajsingh-4799.github.io/Enigma/index.html",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A Simple Tic-Tac-Toe game using basic Vanilla Javascript without any backend or server",
    image: "/tic_tac_toe.jpg",
    github: "https://github.com/YashRajSingh-4799/Tic-Tac-Toe-Project",
    link: "https://yashrajsingh-4799.github.io/Tic-Tac-Toe-Project/",
  },
  {
    name: "Password Strength Checker",
    description:
      "This is my first proeject using Vanilla Javascript which takes the password and shows the strength on the basis of types and numbers of characters used in password",
    image: "/password.jpg",
    github: "https://github.com/YashRajSingh-4799/Password_Checker",
    link: "https://yashrajsingh-4799.github.io/Password_Checker/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-light text-4xl tracking-[15px] uppercase mb-8">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank" rel="no-follow">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
