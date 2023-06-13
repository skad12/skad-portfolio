import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import moviedb from "public/projects/moviedb.png";
import iflip1 from "public/projects/iflip1.png";
import duru from "public/projects/duru.png";
import weather from "public/projects/weather.png";
import service_form from "public/projects/service_form.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="text-center project-title">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="block mb-4 text-center project-desc" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn&apos;t misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="mb-16 text-center others">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/skad12"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "MoviesDb",
    type: "Full-Stack",
    image: (
      <Image
        src={moviedb}
        sizes="100vw"
        fill
        alt="MoviesDb "
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "Moviesdb Clone ",
    tags: ["NextJs", "JavaScript", "Rapid API"],
    liveUrl: "https://moviesdb1-skad12.vercel.app/",
    codeUrl: "",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "i-Flip",
    type: "Full-Stack",
    image: (
      <Image
        src={iflip1}
        sizes="100vw"
        fill
        alt="i-Flip image"
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "SwiperJs", "Semantic Ui"],
    liveUrl: "https://iflip2.vercel.app/",
    codeUrl: "https://github.com/skad12/iflip2",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Duru Dove Apartments",
    type: "Frontend",
    image: (
      <Image
        src={duru}
        sizes="100vw"
        fill
        alt="duru"
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "Durudove Apartments is a luxury serviced apartment located in kubwa, Abuja, Nigeria. ",
    tags: ["HTML5", "JavaScript", "Tailwindcss", "SwiperJS"],
    liveUrl: "https://durudove.vercel.app/",
    codeUrl: "https://github.com/skad12/durudove",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Weather App",
    type: "Frontend",
    image: (
      <Image
        src={weather}
        sizes="100vw"
        fill
        alt="weather"
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "A weather app that tells gives current and specific weather information of any location in the World ",
    tags: ["DaisyUi", "JavaScript", "NextJs", "TailwindCSS"],
    liveUrl: "https://weatherstat.vercel.app/",
    codeUrl: "https://github.com/skad12/weather2",
    bgColor: "bg-[#9FD0E3]",
  },

  {
    title: "Information form",
    type: "Frontend",
    image: (
      <Image
        src={service_form}
        sizes="100vw"
        fill
        alt="info image"
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "An Information stepper for User Registration Process. ",
    tags: ["NextJS", "TailwindCSS"],
    liveUrl: "https://service-form-iota.vercel.app/",
    codeUrl: "https://github.com/skad12/service-form",
    bgColor: "bg-[#A6CECE]",
  },
];

export default ProjectSection;
