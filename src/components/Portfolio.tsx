"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { SectionBadge } from "./SectionBadge";

const projects = [
  {
    title: "Shertalks",
    category: "Advertising",
    year: "2025",
    desc: "Portfolio Manager and Share Market learning Platform",
    img: "/assets/project-shertalks.png",
  },
  {
    title: "The Connect Education",
    category: "Advertising",
    year: "2025",
    desc: "Study abroad platform connecting students with courses, universities and countries.",
    img: "/assets/project-connect-education.png",
  },
  {
    title: "Trekking Website",
    category: "Advertising",
    year: "2025",
    desc: "A modern travel platform designed to showcase Nepal trekking experiences.",
    img: "/assets/project-trekking.png",
  },
];

export function Portfolio() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-6 flex flex-col items-center gap-4">
          <SectionBadge label="Featured Project" />

          <h2 className="text-center font-['Urbanist'] text-[clamp(28px,4vw,48px)] font-bold leading-[0.98] text-black">
            Ideas We've Brought to Life
          </h2>
        </div>

        <p className="mx-auto mb-16 max-w-[720px] text-center font-['Outfit'] text-base leading-relaxed text-black sm:text-xl">
          Explore our selected projects where thoughtful design, powerful
          technology, and creative thinking come together.
        </p>

        {/* Projects */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  /*
   * Card moves slightly while entering the viewport.
   */
  const y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
        ["80px", "0px", "0px", "-20px"] // Original line
  );

  /*
   * Slight zoom when the card becomes active.
   */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
        [0.94, 1, 1, 0.96] // Original line
  );

  /*
   * Previous cards become slightly darker.
   */
  const brightness = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
        [0.85, 1, 0.92, 0.8] // Original line
  );

  /*
   * Small image zoom for the premium portfolio feel.
   */
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1, 1.04]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[78vh] max-h-[800px] sticky top-0"
      style={{
        top: 0,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? 0 : "8vh",
      }}
    >
      <motion.article
        style={{
          y,
          scale,
          filter: `brightness(${brightness})`,
        }}
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-black/10
          bg-neutral-900
          shadow-[0_-8px_40px_rgba(0,0,0,0.12)]
          sm:rounded-[32px]
          will-change-transform
        "
      >
        {/* Image */}
        <motion.img
          src={project.img}
          alt={project.title}
          style={{ scale: imageScale }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            will-change-transform
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-black/35
            via-black/20
            to-black/75
          "
        />

        {/* Content */}
        <div
          className="
            relative
            flex
            h-full
            flex-col
            justify-between
            p-5
            sm:p-8
            md:p-10
          "
        >

          {/* Top */}
          <div className="flex items-center justify-between">
            <span className="font-['Outfit'] text-sm text-white sm:text-base">
              {project.year}
            </span>

            <span
              className="
                rounded-full
                border
                border-white/50
                px-4
                py-2
                font-['Outfit']
                text-xs
                text-white
                backdrop-blur-sm
                sm:text-sm
              "
            >
              {project.category}
            </span>
          </div>

          {/* Center */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              pb-4
              text-center
              sm:pb-8
            "
          >
            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/70
              "
            >
              Selected Work / 0{index + 1}
            </span>

            <h3
              className="
                font-['Outfit']
                text-[clamp(32px,5vw,64px)]
                font-medium
                leading-tight
                text-white
              "
            >
              {project.title}
            </h3>

            <p
              className="
                max-w-[600px]
                font-['Urbanist']
                text-sm
                text-white/90
                sm:text-base
              "
            >
              {project.desc}
            </p>

            <button
              type="button"
              className="
                mt-3
                flex
                h-[48px]
                items-center
                gap-3
                rounded-full
                border
                border-white/80
                px-6
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                sm:h-[52px]
              "
            >
              <span className="font-['Urbanist'] text-base sm:text-lg">
                View Case Study
              </span>

              <span
                aria-hidden="true"
                className="
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
}