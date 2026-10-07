import { Navbar } from "./Navbar"

const assetPathPrefix = "/assets"

const imgRectangle1 = `${assetPathPrefix}/hero-background.png`

const imgAkarIconsArrowUpRight1 = `${assetPathPrefix}/arrow-up-right.svg`

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={imgRectangle1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,20,15,0.7)]" />
      </div>
      <Navbar />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center pt-28 pb-24 px-6">
        <div className="border border-white rounded-[52px] px-6 py-[10px] mb-8">
          <p className="font-['Outfit:Medium'] font-medium text-[11px] text-white uppercase tracking-widest">
            Creative technology partner
          </p>
        </div>
        <h1 className="font-['Outfit:Regular'] font-normal text-[clamp(40px,6vw,76px)] text-white leading-[0.98] text-center max-w-[900px] mb-6">
          Your Vision. Our Expertise. Limitless Possibilities.
        </h1>
        <p className="font-['Urbanist:Regular'] font-normal text-[16px] text-white text-center leading-[1.35] max-w-[563px] mb-10 opacity-90">
          We Build Digital Experiences That Move Businesses Forward. From
          powerful websites and intuitive digital products to creative branding
          and digital marketing, we help businesses turn ideas into meaningful
          digital experiences.
        </p>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <button className="bg-white h-[52px] rounded-[45px] px-6 flex items-center gap-3">
            <span className="font-['Urbanist:Regular'] font-normal text-black text-[18px] whitespace-nowrap">
              Start a Project
            </span>
            <img
              alt=""
              className="w-6 h-6 flex-shrink-0"
              src={imgAkarIconsArrowUpRight1}
            />
          </button>
          <button className="border border-white h-[52px] rounded-[45px] px-6 flex items-center">
            <span className="font-['Urbanist:Regular'] font-normal text-white text-[18px] whitespace-nowrap">
              Explore Our Work
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
