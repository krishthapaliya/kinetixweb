import { SectionBadge } from "./SectionBadge"

const imgRectangle5 = "/assets/about-image.png"

const stats = [
  {
    num: "06",
    label: "Core Services",
    sub: "Everything your business needs,\nall under one roof.",
  },

  {
    num: "360°",
    label: "Digital Services",
    sub: "From creative ideas to complete\ndigital execution.",
  },

  {
    num: "04",
    label: "Project Stages",
    sub: "Discover, design, develop, and launch.",
  },

  {
    num: "01",
    label: "Creative Partner",
    sub: "One team for your complete\ndigital journey.",
  },
]

export function About() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#f7f7f7] rounded-[42px] overflow-hidden px-8 py-16">
          <div className="flex flex-col items-center gap-4 mb-6">
            <SectionBadge label="About us" />
            <h2 className="font-['Urbanist:Bold'] font-bold leading-[0.98] text-[clamp(28px,4vw,48px)] text-black text-center">
              Built for Better Digital Experiences
            </h2>
          </div>
          <p className="font-['Outfit:Regular'] font-normal leading-[0.98] text-[20px] text-black text-center mb-12 max-w-[720px] mx-auto">
            We combine creative thinking, modern technology, and strategic
            design to help businesses build meaningful digital experiences and
            grow online.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-center">
            <div className="flex flex-col gap-4 w-full lg:w-[267px] flex-shrink-0">
              {stats.slice(0, 2).map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[17px] p-7 flex flex-col gap-16 h-[253px]"
                >
                  <div className="font-['Outfit:Medium'] font-medium text-[54px] text-black leading-[1.05]">
                    {stat.num}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Outfit:Medium'] font-medium text-[20px] text-black leading-[1.05]">
                      {stat.label}
                    </p>
                    <p className="font-['Outfit:Medium'] font-medium text-[12px] text-black leading-[1.05] whitespace-pre-line">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 min-h-[517px] rounded-[32px] overflow-hidden relative">
              <img
                alt="About us"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgRectangle5}
              />
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[267px] flex-shrink-0">
              {stats.slice(2).map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[17px] p-7 flex flex-col gap-16 h-[253px]"
                >
                  <div className="font-['Outfit:Medium'] font-medium text-[54px] text-black leading-[1.05]">
                    {stat.num}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-['Outfit:Medium'] font-medium text-[20px] text-black leading-[1.05]">
                      {stat.label}
                    </p>
                    <p className="font-['Outfit:Medium'] font-medium text-[12px] text-black leading-[1.05] whitespace-pre-line">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
