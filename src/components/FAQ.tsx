import { useState } from "react"

const imgAkarIconsArrowUpRight2 = "/assets/arrow-up-right-green.svg"

const imgVector3 = "/assets/faq-plus-vertical.svg"

const imgVector4 = "/assets/faq-plus-horizontal.svg"

const imgVector5 = "/assets/faq-minus.svg"

const faqs = [
  { q: "How much does it cost to build a website?" },
  {
    q: "How long does it take to develop a website?",
    a: "A standard business website usually takes around 2–4 weeks, while larger platforms such as e-commerce, travel booking, or custom web applications may require additional time depending on the features and complexity.",
    open: true,
  },
  { q: "Can you design and develop a custom website?" },
  { q: "Do you also provide digital marketing services?" },
  { q: "Can you help improve our website's visibility on Google?" },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(1)
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:max-w-[392px] flex flex-col gap-11">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Urbanist:Bold'] font-bold text-[#111318] text-[clamp(32px,4vw,48px)] tracking-[-1.44px] leading-[1.2] whitespace-pre-line">{`Frequently Asked \nQuestions`}</h2>
              <p
                className="font-['DM Sans:9pt Regular'] font-normal text-[#4e5255] text-[16px] tracking-[-0.48px] leading-[22.4px] max-w-[345px]"
                style={{ fontVariationSettings: '"opsz" 9' }}
              >
                Have questions about your website or digital project? We've
                answered some of the most common things clients ask before
                getting started with us.
              </p>
            </div>
            <button className="bg-[#16785b] h-[52px] rounded-[45px] px-6 flex items-center gap-3 w-fit">
              <span className="font-['Urbanist:Regular'] font-normal text-[20px] text-white whitespace-nowrap">
                Start a Project
              </span>
              <img alt="" className="w-6 h-6" src={imgAkarIconsArrowUpRight2} />
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="relative rounded-[12px] border border-[#e7e8e7]"
              >
                <div
                  className={`flex flex-col gap-2 p-5 cursor-pointer ${
                    i === openIndex ? "bg-white" : ""
                  }`}
                  onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-['Urbanist:SemiBold'] font-semibold text-[#111318] text-[clamp(16px,2vw,24px)] tracking-[-0.48px] leading-[1.2]">
                      {faq.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-[24px] flex items-center justify-center border ${
                        i === openIndex
                          ? "bg-[#16785b] border-[#16785b]"
                          : "border-[#001d22]"
                      }`}
                    >
                      {i === openIndex ? (
                        <img
                          alt="minus"
                          className="w-5 h-5 object-contain"
                          src={imgVector5}
                        />
                      ) : (
                        <div className="relative w-5 h-5">
                          <img
                            alt="plus-v"
                            className="absolute inset-0 w-full h-full object-contain"
                            src={imgVector3}
                          />
                          <img
                            alt="plus-h"
                            className="absolute inset-0 w-full h-full object-contain"
                            src={imgVector4}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {i === openIndex && faq.a && (
                    <p
                      className="font-['DM Sans:9pt Regular'] font-normal text-[#4e5255] text-[16px] tracking-[-0.48px] leading-[22.4px] max-w-[531px]"
                      style={{ fontVariationSettings: '"opsz" 9' }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
