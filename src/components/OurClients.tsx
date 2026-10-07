import { SectionBadge } from "./SectionBadge"

const assetPathPrefix = "/assets"

const partnerLogos = [
  { src: `${assetPathPrefix}/client-logo-01.svg`, alt: "Partner 1", h: 44 },

  { src: `${assetPathPrefix}/client-logo-02.svg`, alt: "Partner 2", h: 37 },

  { src: `${assetPathPrefix}/client-logo-03.svg`, alt: "Partner 3", h: 32 },

  { src: `${assetPathPrefix}/client-logo-04.svg`, alt: "Partner 4", h: 34 },
]

export function OurClients() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-10">
          <SectionBadge label="Our Clients" />
          <p className="font-['Outfit:Regular'] font-normal leading-[0] text-[0px] text-black text-center">
            <span className="font-['Urbanist:Bold'] font-bold leading-[0.98] text-[clamp(28px,4vw,48px)]">
              Trusted By 20+
            </span>
            <span className="font-['Urbanist:Bold'] font-bold leading-[0.98] text-[clamp(28px,4vw,48px)]">
              {" "}
              Businesses Across and Beyond
            </span>
          </p>
        </div>
        <div className="overflow-hidden relative">
          <div className="marquee-track">
            {[
              ...partnerLogos,
              ...partnerLogos,
              ...partnerLogos,
              ...partnerLogos,
            ].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[207px] flex items-center justify-center mx-8"
              >
                <img
                  alt={logo.alt}
                  src={logo.src}
                  style={{ height: logo.h }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
