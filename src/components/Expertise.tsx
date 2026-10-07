import { useState } from "react"

import { SectionBadge } from "./SectionBadge"

const imgSvg = "/assets/browser-icon.svg"

const imgSvg1 = "/assets/search-icon.svg"

const imgSvg2 = "/assets/cart-icon.svg"

const imgSvg3 = "/assets/arrow-icon.svg"

const imgSvg4 = "/assets/favorite-icon.svg"

const imgSvg18 = "/assets/explore-arrow.svg"

const expertiseTabs = ["E-Commerce", "Travel & Tour", "Education Institute"]

const expertiseContent = [
  {
    label: "01",
    category: "Digital commerce",
    title: "E-Commerce Websites",
    desc: "High-performance online stores built for selling, managing products, payments, orders, and customers.",
    tags: [
      "Product & Inventory",
      "Online Payments",
      "Cart & Checkout",
      "Admin Dashboard",
      "Order Management",
    ],
    mockUrl: "store.luma.com",
  },

  {
    label: "02",
    category: "Travel & Tourism",
    title: "Travel & Tour Websites",
    desc: "Beautifully designed travel websites with booking systems, itineraries, and destination showcases.",
    tags: [
      "Online Booking",
      "Tour Packages",
      "Destination Pages",
      "Payment Gateway",
      "Review System",
    ],
    mockUrl: "travel.example.com",
  },

  {
    label: "03",
    category: "Education",
    title: "Education Platforms",
    desc: "Modern learning management systems and institutional websites for schools, colleges, and online educators.",
    tags: [
      "Course Management",
      "Student Portal",
      "Online Exams",
      "Certificates",
      "Video Lessons",
    ],
    mockUrl: "learn.institute.com",
  },
]

type ExpertiseContent = typeof expertiseContent[0]

export function ExpertiseMockup({ content }: { content: ExpertiseContent }) {
  return (
    <div className="backdrop-blur-sm bg-[rgba(255,255,255,0.82)] border border-[rgba(20,41,36,0.09)] rounded-[26px] shadow-[0px_3px_6px_0px_rgba(25,48,41,0.02),0px_19px_53px_0px_rgba(25,48,41,0.04)] overflow-hidden">
      <div className="px-10 pt-10 pb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#16785b] border border-[#d8e0d9] rounded-[13px] w-10 h-10 flex items-center justify-center">
              <span className="font-['Outfit:Bold'] font-bold text-[10.6px] text-white">
                {content.label}
              </span>
            </div>
            <div className="w-[1px] h-6 bg-[#dfe4de]" />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="font-['Outfit:Bold'] font-bold text-[#16785b] text-[9.6px] tracking-[1.35px] uppercase">
              {content.category}
            </p>
            <h3 className="font-['Urbanist:SemiBold'] font-semibold text-[#142320] text-[clamp(24px,3vw,35.5px)] tracking-[-1.24px] leading-[1.1]">
              {content.title}
            </h3>
            <p className="font-['Outfit:Regular'] font-normal text-[#64706c] text-[13px] leading-[21px]">
              {content.desc}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ml-14 mb-4">
          {content.tags.map((tag) => (
            <div
              key={tag}
              className="bg-[#fafbf9] border border-[#e2e6e2] rounded-[999px] px-[9px] py-[6px]"
            >
              <span className="font-['Outfit:SemiBold'] font-semibold text-[#6b7672] text-[8.7px]">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#ecf0eb] rounded-[20px] mx-3 mb-3 overflow-hidden">
        <div className="bg-white">
          <div className="bg-[#f7f8f6] border-b border-[#e6eae5] flex items-center justify-between px-3 h-[31px]">
            <div className="flex gap-1">
              <div className="w-[4.82px] h-[4.82px] rounded-full bg-[#cdd4d0]" />
              <div className="w-[4.82px] h-[4.82px] rounded-full bg-[#cdd4d0]" />
              <div className="w-[4.82px] h-[4.82px] rounded-full bg-[#cdd4d0]" />
            </div>
            <div className="bg-white border border-[#e4e8e4] rounded-[5px] flex items-center gap-1 px-2 py-1">
              <div className="bg-[#16785b] rounded-[1.45px] w-[2.89px] h-[2.89px]" />
              <span className="font-['Outfit:Regular'] font-normal text-[#92a09a] text-[6.8px]">
                {content.mockUrl}
              </span>
            </div>
            <div className="w-4 h-4">
              <img
                alt=""
                className="w-full h-full object-contain"
                src={imgSvg}
              />
            </div>
          </div>
          <div className="border-b border-[#edf0ed] flex items-center justify-between px-6 h-[49px]">
            <span className="font-['Outfit:Bold'] font-bold text-[#1e2926] text-[11.6px] tracking-[2.3px]">
              {content.title.split(" ")[0].toUpperCase()}
            </span>
            <div className="flex gap-5">
              {["New in", "Objects", "Journal"].map((item) => (
                <span
                  key={item}
                  className="font-['Outfit:Regular'] font-normal text-[#67716e] text-[6.8px]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <img
                alt=""
                className="w-[15px] h-[15px] object-contain"
                src={imgSvg1}
              />
              <div className="relative">
                <img
                  alt=""
                  className="w-[16px] h-[16px] object-contain"
                  src={imgSvg2}
                />
                <div className="absolute -top-2 -right-2 bg-[#16785b] rounded-[6px] w-[12.54px] h-[12.54px] flex items-center justify-center">
                  <span className="font-['Outfit:Bold'] font-bold text-[6.8px] text-white">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f7f8f5] p-5">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="font-['Outfit:Regular'] font-normal text-[#8a9590] text-[5.8px] tracking-[0.81px] uppercase mb-1">
                  THE EDIT
                </p>
                <p className="font-['Urbanist:SemiBold'] font-semibold text-[#1e2926] text-[18px] tracking-[-0.55px]">
                  Objects for better living.
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-['Outfit:Regular'] font-normal text-[#16785b] text-[6.8px]">
                  View all
                </span>
                <img
                  alt=""
                  className="w-[12.54px] h-[12.54px] object-contain"
                  src={imgSvg3}
                />
              </div>
            </div>
            <div className="flex gap-2">
              {["#f3e4db", "#dde9ed", "#e0e9dd"].map((bg, i) => (
                <div key={i} className="flex-1 flex flex-col gap-2">
                  <div
                    className="rounded-[9px] overflow-hidden relative flex items-center justify-center"
                    style={{ background: bg, height: "168px" }}
                  >
                    <div className="absolute top-2 right-2">
                      <img
                        alt=""
                        className="w-[12.54px] h-[12.54px] object-contain"
                        src={imgSvg4}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-2">
            <span className="font-['Outfit:Bold'] font-bold text-[#16785b] text-[10.8px] tracking-[0.76px] uppercase">
              Explore solution
            </span>
            <img
              alt=""
              className="w-[16.72px] h-[16.72px] object-contain"
              src={imgSvg18}
            />
          </div>
          <span className="font-['Outfit:Regular'] font-normal text-[#9ba49f] text-[7.9px] tracking-[0.31px]">
            Built for growth · Optimized for conversion
          </span>
        </div>
      </div>
    </div>
  )
}

export function Expertise() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-6 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#f7f7f7] rounded-[42px] overflow-hidden px-10 py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-[420px] flex-shrink-0">
              <SectionBadge label="Our Specialization" />
              <h2 className="font-['Urbanist:Bold'] font-bold leading-[0.98] text-[clamp(28px,3.5vw,48px)] text-black mt-6 mb-4 w-[455px] max-w-full">
                Our Main Expertise In Web Development
              </h2>
              <p className="font-['Outfit:Regular'] font-normal text-[15px] text-black text-justify leading-[1.75] mb-2 max-w-[418px]">
                We build industry-focused digital experiences designed to help
                businesses grow, operate efficiently, and convert more
                customers.
              </p>
              <p className="font-['Outfit:Regular'] font-normal text-[15px] text-black mb-8 max-w-[418px]">
                We don't just build websites — we build specialized digital
                solutions.
              </p>
              <div className="flex flex-col gap-6 relative pl-6">
                <div className="absolute left-[3px] top-4 bottom-4 w-px bg-black">
                  <div
                    className="absolute top-0 left-[-2px] w-[5px] h-[34px] bg-black rounded-[10px]"
                    style={{ top: `${active * 52}px`, transition: "top 0.3s" }}
                  />
                </div>
                {expertiseTabs.map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 text-left transition-opacity ${
                      i === active ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <span className="font-['Outfit:Bold'] font-bold text-[12px] text-black tracking-[0.96px]">
                      0{i + 1}
                    </span>
                    <span className="font-['Outfit:Regular'] font-normal text-[12px] text-black">
                      {tab}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <ExpertiseMockup content={expertiseContent[active]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
