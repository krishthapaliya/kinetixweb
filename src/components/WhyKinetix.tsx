import { SectionBadge } from "./SectionBadge"

const assetPathPrefix = "/assets"

const imgFaRegularUserCircle = `${assetPathPrefix}/feature-user.svg`

const imgGroup2 = `${assetPathPrefix}/feature-creative.svg`

const imgAtIconsCode = `${assetPathPrefix}/feature-development.svg`

const imgFluentTabletLaptop24Regular = `${assetPathPrefix}/feature-services.svg`

const imgFluentArrowTrendingLines20Filled = `${assetPathPrefix}/feature-growth.svg`

const imgFluentHandshake32Regular = `${assetPathPrefix}/feature-partnership.svg`

const featureCards = [
  {
    icon: imgFaRegularUserCircle,
    iconSize: 40,
    title: "User-Focused Design",
    desc: "We create intuitive, engaging experiences that make every interaction simple and meaningful.",
    accent: false,
  },

  {
    icon: imgGroup2,
    iconSize: 40,
    title: "Creative Solutions",
    desc: "We combine fresh ideas and thoughtful design to create digital experiences that stand out.",
    accent: true,
  },

  {
    icon: imgAtIconsCode,
    iconSize: 34,
    title: "Reliable Development",
    desc: "We build responsive, scalable, and dependable digital solutions tailored to your business needs.",
    accent: false,
  },

  {
    icon: imgFluentTabletLaptop24Regular,
    iconSize: 50,
    title: "Complete Digital Services",
    desc: "From websites and apps to branding and marketing, we bring everything together under one roof.",
    accent: false,
  },

  {
    icon: imgFluentArrowTrendingLines20Filled,
    iconSize: 42,
    title: "Strategic Growth",
    desc: "We use thoughtful digital strategies to strengthen your online presence and support business growth.",
    accent: false,
  },

  {
    icon: imgFluentHandshake32Regular,
    iconSize: 43,
    title: "Long-Term Partnership",
    desc: "We collaborate closely, communicate clearly, and support your business throughout its digital journey.",
    accent: false,
  },
]

export function WhyKinetix() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-6">
          <SectionBadge label="Why Kinetix Web" />
          <h2 className="font-['Urbanist:Bold'] font-bold leading-[0.98] text-[clamp(28px,4vw,48px)] text-black text-center max-w-[900px]">
            Why Businesses Choose Kinetix Web?
          </h2>
        </div>
        <p className="font-['Outfit:Regular'] font-normal leading-[0.98] text-[20px] text-black text-center mb-16 max-w-[720px] mx-auto">
          Creative ideas. Smart technology. Digital solutions built around your
          business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between h-[370px] rounded-[24px] p-8 overflow-hidden border border-[rgba(255,255,255,0.18)] ${
                card.accent ? "" : "bg-[#f7f7f7]"
              }`}
              style={
                card.accent
                  ? {
                      backgroundImage:
                        "linear-gradient(145.37deg, rgb(8,125,131) 0%, rgb(18,169,149) 58%, rgb(110,195,88) 100%)",
                      boxShadow:
                        "0px 18px 46px 0px rgba(8,125,131,0.2), 0px 3px 10px 0px rgba(7,53,74,0.08)",
                    }
                  : undefined
              }
            >
              <div
                className={`flex h-[70px] w-[73px] items-center justify-center rounded-[58px] ${
                  card.accent ? "bg-[rgba(255,255,255,0.15)]" : "bg-[#ececec]"
                }`}
                style={{ boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.3)" }}
              >
                <img
                  alt=""
                  src={card.icon}
                  style={{ width: card.iconSize, height: card.iconSize }}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3
                  className={`font-['Urbanist:Bold'] font-bold text-[24px] tracking-[-0.6px] leading-[32px] ${
                    card.accent ? "text-white" : "text-black"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-['Outfit:Regular'] font-normal text-[16px] leading-[28px] ${
                    card.accent
                      ? "text-[rgba(255,255,255,0.85)]"
                      : "text-[rgba(0,0,0,0.85)]"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
