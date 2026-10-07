const imgBackgroundImage = "/assets/contact-background.png"

const imgName = "/assets/contact-name.svg"

const imgPhone = "/assets/contact-phone.svg"

const imgEmail = "/assets/contact-email.svg"

const imgMessage = "/assets/contact-message.svg"

export function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[418px]">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={imgBackgroundImage}
        />
        <div className="absolute inset-0 bg-[rgba(4,4,4,0.4)]" />
      </div>
      <div className="max-w-[1240px] mx-auto px-6 -mt-40 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex flex-col gap-6 text-white max-w-[444px]">
            <h2 className="font-['Urbanist:ExtraBold'] font-extrabold text-[clamp(36px,4vw,56px)] tracking-[-1.12px] leading-[1.2] whitespace-pre-line">{`Book Service?\nGet in Touch`}</h2>
            <div>
              <h3 className="font-['Urbanist:SemiBold'] font-semibold text-[#111318] text-[clamp(24px,3vw,40px)] tracking-[-1.2px] leading-[1.2] mb-2">
                Respond in 2-3 hours
              </h3>
              <p
                className="font-['DM Sans:Regular'] font-normal text-[#4e5255] text-[16px] tracking-[-0.48px] leading-[22.4px]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Got questions or need digital solutions? Our team is here to
                help you plan, design, and build the right solution to grow your
                business and strengthen your digital presence.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-[32px] p-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <div className="flex gap-6">
                  <div className="relative flex-1">
                    <input
                      placeholder="Enter your name"
                      className="w-full border border-[#cfd1d0] rounded-[999px] pl-4 pr-10 py-[17px] font-['DM Sans:Regular'] font-normal text-[16px] tracking-[-0.48px] text-[#a0a3a1] outline-none"
                    />
                    <img
                      alt=""
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                      src={imgName}
                    />
                  </div>
                  <div className="relative flex-1">
                    <input
                      placeholder="Enter your Phone"
                      className="w-full border border-[#cfd1d0] rounded-[999px] pl-4 pr-10 py-[17px] font-['DM Sans:Regular'] font-normal text-[16px] tracking-[-0.48px] text-[#a0a3a1] outline-none"
                    />
                    <img
                      alt=""
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                      src={imgPhone}
                    />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="relative flex-1">
                    <input
                      placeholder="Enter your email"
                      className="w-full border border-[#cfd1d0] rounded-[999px] pl-4 pr-10 py-[17px] font-['DM Sans:Regular'] font-normal text-[16px] tracking-[-0.48px] text-[#a0a3a1] outline-none"
                    />
                    <img
                      alt=""
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                      src={imgEmail}
                    />
                  </div>
                  <div className="relative flex-1">
                    <select className="w-full border border-[#cfd1d0] rounded-[999px] pl-4 pr-10 py-[17px] font-['DM Sans:Regular'] font-normal text-[16px] tracking-[-0.48px] text-[#a0a3a1] outline-none appearance-none bg-white">
                      <option value="">Select Service Type</option>
                      <option>Web Development</option>
                      <option>Web Design & UI/UX</option>
                      <option>App Development</option>
                      <option>Digital Marketing</option>
                      <option>Social Media Management</option>
                      <option>Graphic Design & Branding</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Leave a message"
                    rows={6}
                    className="w-full border border-[#cfd1d0] rounded-[24px] pl-6 pr-10 pt-4 pb-4 font-['DM Sans:Regular'] font-normal text-[16px] tracking-[-0.48px] text-[#a0a3a1] outline-none resize-none"
                  />
                  <img
                    alt=""
                    className="absolute right-4 top-4 w-5 h-5 object-contain"
                    src={imgMessage}
                  />
                </div>
              </div>
              <button className="bg-[#055d17] text-white rounded-[999px] px-6 py-4 w-full font-['DM Sans:SemiBold'] font-semibold text-[16px] tracking-[-0.48px]">
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
