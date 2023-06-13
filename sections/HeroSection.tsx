import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import LinkButton from "../components/LinkButton";

import satNaing from "../public/satnaing-illustration.webp";
import laptop from "../public/laptop-illustration.webp";

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // bg text parallax effect
    gsap.to(q(".bg-text"), {
      scrollTrigger: {
        trigger: q(".bg-text"),
        scrub: true,
      },
      y: 350,
    });

    // text animation after initial load
    let tl = gsap.timeline({ defaults: { stagger: 0.2, duration: 0.3 } });
    tl.fromTo(q(".text-animation"), { y: 100 }, { y: 0, delay: 1 });

    // illustration floating effect
    let imgTl = gsap.timeline({ repeat: -1 });
    imgTl
      .to(q(".image-animation"), 3, {
        y: "-=30",
        x: "+=20",
        rotation: "-=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 2, {
        y: "+=30",
        x: "-=20",
        rotation: "-=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 3, {
        y: "-=20",
        rotation: "+=2",
        ease: "power1.easeInOut",
      })
      .to(q(".image-animation"), 3, {
        y: "+=20",
        rotation: "+=2",
        ease: "power1.easeInOut",
      });

    // laptop floating effect
    let laptopTl = gsap.timeline({ repeat: -1 });
    laptopTl
      .to(q(".laptop"), 3, {
        y: "-=10",
        x: "+=10",
        rotation: "-=1",
        ease: "Power1.easeInOut",
      })
      .to(q(".laptop"), 2, {
        y: "+=10",
        x: "-=10",
        rotation: "-=1",
        ease: "power1.easeInOut",
      })
      .to(q(".laptop"), 3, {
        y: "-=10",
        rotation: "+=1",
        ease: "power1.easeInOut",
      })
      .to(q(".laptop"), 3, {
        y: "+=10",
        rotation: "+=1",
        ease: "power1.easeInOut",
      });
  }, [q]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse"
    >
      <span
        aria-hidden="true"
        className="bg-text absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0"
      >
        PASSIONATE PROGRAMMER FREELANCER FRONTEND DEVELOPER
      </span>

      <div className="z-10 px-0 mx-auto mt-0 select-none image-animation xs:mt-6 sm:mt-14 lg:mt-0 lg:p-0 lg:basis-1/3">
        <div className="relative flex items-center mx-auto w-72 md:w-80 h-80">
          <div className="absolute mx-auto scale-90 pointer-events-none xs:scale-95">
            <Image
              src={satNaing}
              width={1177}
              height={1374}
              priority
              id="character-illustration"
              aria-label="Sat Naing character illustration levitating with a Macbook"
              alt="Sat Naing character illustration"
            />
          </div>
          <div className="laptop absolute top-14 sm:top-16 left-0 scale-[.41] xs:scale-[.45] pointer-events-none">
            <Image
              src={laptop}
              width={559}
              height={386}
              aria-hidden="true"
              alt="Laptop illustration"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 lg:basis-2/3">
        <span className="font-medium text-marrsgreen lg:text-lg dark:text-carrigreen">
          Hi my name is
        </span>
        <div className="overflow-hidden">
          <h1 className="my-1 text-4xl font-semibold text-animation md:text-5xl lg:text-7xl md:my-2">
            Olakunle Stephen
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="block text-2xl font-medium text-animation md:text-3xl lg:text-5xl md:my-3 text-marrsgreen dark:text-carrigreen">
            A Full-stack Developer
          </span>
        </div>
        <div className="my-4 mt-2 md:mb-8">
          <p>I&apos;m a Full-stack Developer based in Abuja, Nigeria.</p>
          <p>
            I am passionate about writing codes and developing web applications
            to solve <span className="whitespace-nowrap">real-life</span>{" "}
            challenges.
          </p>
        </div>
        <LinkButton href="https://wa.me/message/2FCXILQF2S64E1">
          Contact me!
        </LinkButton>
      </div>
      <a
        href="#whoami"
        className="absolute flex-col items-center hidden transform -translate-x-1/2 group link-outline animate-bounce md:bottom-14 lg:bottom-16 left-1/2 md:flex"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-carrigreen">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
