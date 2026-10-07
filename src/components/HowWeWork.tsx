
import { SectionBadge } from "./SectionBadge";

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
  rotation: number;
};

const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Define",
    desc: "We begin by understanding your business, target audience, goals, challenges, and overall vision. Through research and discussion, we define the right strategy, project direction, features, and priorities before moving into design.",
    rotation: -15,
  },
  {
    num: "02",
    title: "Design",
    desc: "Once the direction is clear, we turn ideas into structured and engaging digital experiences. We focus on user flow, layout, branding, usability, responsive behavior, and visual consistency to create a design that feels modern and works effortlessly.",
    rotation: 15,
  },
  {
    num: "03",
    title: "Build",
    desc: "Our development team transforms the approved design into a fully functional, fast, responsive, and scalable digital product. We focus on clean development, performance, security, integrations, and smooth functionality across devices.",
    rotation: -15,
  },
  {
    num: "04",
    title: "Launch",
    desc: "Before going live, we carefully test the product across different devices and browsers, optimize performance, fix final issues, and prepare everything for deployment. Once everything is ready, we launch your product and make sure it performs smoothly in the real world.",
    rotation: 15,
  },
];

function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[430px]"
      style={{ transform: `rotate(${step.rotation}deg)` }}
    >
      <div className="relative rounded-[32px] bg-white p-5 shadow-[12px_15px_22px_rgba(0,0,0,0.20)] sm:p-7">
        {/* Circular connector */}
        <div className="mx-auto mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-[#777] bg-white">
          <div className="h-4 w-4 rounded-full bg-[#858585] shadow-[0_0_0_1px_#999]" />
        </div>

        {/* Card content */}
        <div className="rounded-[24px] bg-[#F3F3F3] p-5 sm:p-6">
          <p className="mb-3 font-['Outfit'] text-xl font-semibold text-black">
            {step.num}
          </p>

          <h3 className="mb-4 font-['Urbanist'] text-lg font-medium text-black">
            {step.title}
          </h3>

          <p className="text-justify font-['Outfit'] text-xs leading-[1.55] text-black">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HowWeWork() {
  return (
    <section className="overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <div className="mb-6 flex flex-col items-center gap-4">
          <SectionBadge label="How we work?" />

          <h2 className="max-w-[834px] text-center font-['Urbanist'] text-[clamp(28px,4vw,48px)] font-bold leading-[1.05] text-black">
            Let Us Show You How We Take Your Brand to New Heights
          </h2>
        </div>

        <p className="mx-auto mb-20 max-w-[600px] text-center font-['Outfit'] text-base leading-relaxed text-black sm:text-xl">
          From strategy to launch, we turn your ideas into meaningful digital
          experiences designed to grow your brand and create lasting impact.
        </p>

        {/* Timeline and cards */}
        <div className="relative mx-auto max-w-[1000px]">
          {/* Dotted curved line */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible md:block"
            viewBox="0 0 1000 1050"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="
                M 700 80
                C 600 110, 420 150, 270 230
                C 170 290, 360 320, 500 390
                C 650 465, 730 535, 590 610
                C 450 690, 300 740, 260 800
                C 220 870, 420 940, 650 1010
              "
              stroke="#888888"
              strokeWidth="2"
              strokeDasharray="9 12"
              strokeLinecap="round"
            />
          </svg>

          {/* Process cards */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-x-20 gap-y-20 md:grid-cols-2 md:gap-y-32">
            {/* 01 — Define */}
            <div className="md:col-start-2 md:row-start-1">
              <ProcessCard step={processSteps[0]} />
            </div>

            {/* 02 — Design */}
            <div className="md:col-start-1 md:row-start-1 md:mt-28">
              <ProcessCard step={processSteps[1]} />
            </div>

            {/* 03 — Build */}
            <div className="md:col-start-2 md:row-start-2 md:-mt-4">
              <ProcessCard step={processSteps[2]} />
            </div>

            {/* 04 — Launch */}
            <div className="md:col-start-1 md:row-start-2 md:mt-28">
              <ProcessCard step={processSteps[3]} />
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 h-16 max-w-[1000px] sm:mt-16 md:mt-12">
          <p className="absolute right-[5%] top-[-5] rotate-[10deg] whitespace-nowrap font-['Urbanist'] text-base font-medium text-black sm:right-[18%] sm:text-xl">
            Ready To Be Delivered!!
          </p>
        </div>
      </div>
    </section>
  );
}