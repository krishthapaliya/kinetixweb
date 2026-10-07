import { SectionBadge } from "./SectionBadge"

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "We build fast, responsive, and scalable websites that bring your business online and deliver seamless user experiences.",
    img: "/assets/service-web-development.png",
  },

  {
    num: "02",
    title: "Web Design & UI/UX",
    desc: "We design intuitive, visually engaging interfaces that make digital experiences simple, enjoyable, and user-friendly.",
    img: "/assets/service-web-design.png",
  },

  {
    num: "03",
    title: "App Development",
    desc: "We create powerful, user-friendly mobile applications that connect your business with customers on the go.",
    img: "/assets/service-app-development.png",
  },

  {
    num: "04",
    title: "Digital Marketing",
    desc: "We create strategic digital campaigns that increase brand visibility, reach the right audience, and support business growth.",
    img: "/assets/service-digital-marketing.png",
  },

  {
    num: "05",
    title: "Social Media Management",
    desc: "We manage your social media presence with engaging content, consistent branding, and meaningful audience interaction.",
    img: "/assets/service-social-media.png",
  },

  {
    num: "06",
    title: "Graphic Design & Branding",
    desc: "We create distinctive visual identities and creative designs that communicate your brand's personality and make it memorable.",
    img: "/assets/service-branding.png",
  },
]

export function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-6">
          <SectionBadge label="Our Services" />
          <h2 className="font-['Urbanist:Bold'] font-bold leading-[0.98] text-[clamp(28px,4vw,48px)] text-black text-center">
            Everything You Need to Grow Digitally
          </h2>
        </div>
        <p className="font-['Outfit:Regular'] font-normal leading-[0.98] text-[20px] text-black text-center mb-16 max-w-[720px] mx-auto">
          From stunning websites and intuitive apps to creative branding and
          digital marketing, we bring everything together to help your business
          thrive.
        </p>
        <div className="flex flex-col gap-8">
          {[0, 2, 4].map((rowStart) => (
            <div
              key={rowStart}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {services.slice(rowStart, rowStart + 2).map((service, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="bg-[#f6f6f6] rounded-[33px] overflow-hidden aspect-[662/517] relative">
                    <img
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      src={service.img}
                    />
                  </div>
                  <div className="px-2">
                    <h3 className="font-['Urbanist:Bold'] font-bold text-[34px] text-black tracking-[-0.6px] leading-[32px] mb-3">
                      {service.num}. {service.title}
                    </h3>
                    <p className="font-['Outfit:Regular'] font-normal text-[20px] text-[rgba(0,0,0,0.85)] leading-[28px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
