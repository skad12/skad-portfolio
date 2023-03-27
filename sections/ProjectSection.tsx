import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import aibra from "public/projects/aibra.png";
import iflip1 from "public/projects/iflip1.png";
import haruApi from "public/projects/haru-api.webp";
import weather from "public/projects/weather.png";

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
    title: "Aibra.io",
    type: "Full-Stack",
    image: (
      <Image
        src={aibra}
        sizes="100vw"
        fill
        alt="Aibra.io "
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "Aibra.io is Blockchain and A.I Enabled websites which helps Job Seekers to Find Jobs in over 15+ Country the World and also Purchase the aibra token. ",
    tags: ["React", "JavaScript", "Python"],
    liveUrl: "https://aibra.io/",
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
    title: "Haru API",
    type: "Backend",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Haru API"
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
    ),
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
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
];

export default ProjectSection;
