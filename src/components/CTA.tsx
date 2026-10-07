const imgAkarIconsArrowUpRight1 = "/assets/arrow-up-right.svg"

const imgEllipse427 = "/assets/cta-ring.svg"
const imgEllipse422 = "/assets/cta-ring-small.svg"
const imgEllipse423 = "/assets/cta-ring-medium.svg"
const imgEllipse424 = "/assets/cta-ring-large.svg"
const imgEllipse425 = "/assets/cta-ring-right.svg"
const imgEllipse426 = "/assets/cta-ring-outer.svg"
const imgEllipse428 = "/assets/cta-dot-01.png"
const imgEllipse429 = "/assets/cta-dot-02.png"
const imgEllipse430 = "/assets/cta-dot-03.png"
const imgEllipse431 = "/assets/cta-dot-04.png"
const imgEllipse432 = "/assets/cta-dot-05.png"
const imgPolygon1 = "/assets/cta-pointer.svg"

export function CTA() {
  return (
    <section className="bg-[#055d17] relative overflow-hidden py-24 px-6 mt-32">
      <div className="absolute right-0 top-0 w-[594px] h-full pointer-events-none">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-30"
          src={imgEllipse427}
        />
        <img
          alt=""
          className="absolute inset-[30%] w-[180px] h-[180px] object-contain"
          src={imgEllipse422}
        />
        <img
          alt=""
          className="absolute inset-[22%] w-[260px] h-[260px] object-contain"
          src={imgEllipse423}
        />
        <img
          alt=""
          className="absolute inset-[14%] w-[350px] h-[350px] object-contain"
          src={imgEllipse424}
        />
        <img
          alt=""
          className="absolute top-[88px] right-[31px] w-[420px] h-[420px] object-contain"
          src={imgEllipse425}
        />
        <img
          alt=""
          className="absolute top-12 right-0 w-[500px] h-[500px] object-contain opacity-50"
          src={imgEllipse426}
        />
        <img
          alt=""
          className="absolute top-1 right-[94px] w-[61px] h-[61px]"
          src={imgEllipse428}
        />
        <img
          alt=""
          className="absolute top-16 right-[230px] w-[55px] h-[55px]"
          src={imgEllipse429}
        />
        <img
          alt=""
          className="absolute top-[176px] right-0 w-[50px] h-[50px]"
          src={imgEllipse430}
        />
        <img
          alt=""
          className="absolute top-[248px] right-[260px] w-[40px] h-[40px]"
          src={imgEllipse431}
        />
        <img
          alt=""
          className="absolute top-[248px] right-[290px] w-[40px] h-[40px]"
          src={imgEllipse432}
        />
        <div className="absolute top-[301px] right-[120px]">
          <div className="bg-white rounded-[28px] px-5 py-[10px]">
            <p className="font-['Outfit:Regular'] font-normal text-[#055d17] text-[20px] whitespace-nowrap">
              Let's get started
            </p>
          </div>
        </div>
        <div className="absolute top-[273px] right-[230px]">
          <div style={{ transform: "rotate(-41.39deg)" }}>
            <img
              alt=""
              className="w-[25px] h-[25px] object-contain"
              src={imgPolygon1}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-[668px] flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h2 className="font-['Outfit:Medium'] font-medium text-white text-[clamp(32px,4vw,48px)] leading-[1.15] max-w-[509px]">
              Your Digital Journey Starts Here
            </h2>
            <p className="font-['Outfit:ExtraLight'] font-extralight text-white text-[clamp(16px,2vw,24px)] leading-[1.4]">
              Build your digital presence with confidence. From websites and
              mobile apps to branding and digital marketing, we create smart,
              scalable solutions that help your business grow, connect with
              customers, and move forward.
            </p>
          </div>
          <button className="bg-white h-[52px] rounded-[45px] px-6 flex items-center gap-3 w-fit">
            <span className="font-['Urbanist:Regular'] font-normal text-black text-[20px] whitespace-nowrap">
              Get Started
            </span>
            <img
              alt=""
              className="w-6 h-6 flex-shrink-0"
              src={imgAkarIconsArrowUpRight1}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
