const socialIcons = [
  "/assets/social-facebook.svg",
  "/assets/social-instagram.svg",
  "/assets/social-linkedin.svg",
  "/assets/social-twitter.svg",
]

export function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-16">
          <div className="flex flex-col gap-6 max-w-[224px]">
            <p className="font-['Outfit:SemiBold'] font-semibold text-[24px] text-black tracking-[0.24px] leading-[18px]">
              Contact
            </p>
            <div className="flex flex-col gap-4 font-['Outfit:Medium'] font-medium text-[14px] text-black">
              <p className="leading-[18px]">+977 980909090</p>
              <p className="leading-[24px]">Kathmandu, Nepal</p>
              <p className="leading-[18px]">kinetixw@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-['Outfit:SemiBold'] font-semibold text-[24px] text-black tracking-[-0.48px] leading-[18px]">
              Navigate
            </p>
            <div className="flex flex-col gap-4 font-['Outfit:Medium'] font-medium text-[14px] text-black">
              {["Home", "About Us", "Service", "Pricing", "Blogs"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="leading-[18px] hover:opacity-70 transition-opacity"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-['Outfit:SemiBold'] font-semibold text-[24px] text-black tracking-[0.96px] leading-[18px]">
              Services
            </p>
            <div className="flex flex-col gap-4 font-['Outfit:Medium'] font-medium text-[14px] text-black">
              <p className="leading-[18px]">Ecommerce Website</p>
              <p className="leading-[18px]">Tour And Travels</p>
              <p className="leading-[24px]">Portfolio Management</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-['Outfit:SemiBold'] font-semibold text-[24px] text-black tracking-[0.96px] leading-[18px]">
              Follow Us
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-[38px] h-[38px] flex-shrink-0 hover:opacity-70 transition-opacity"
                >
                  <img
                    alt="Social"
                    className="w-full h-full object-contain"
                    src={icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[rgba(0,0,0,0.1)] pt-6">
          <p className="font-['Outfit:Medium'] font-medium text-[14px] text-black leading-[20px]">
            © Copyright Kinetixweb@2026
          </p>
          <div className="flex gap-5 font-['Outfit:Regular'] font-normal text-[14px] text-black leading-[19px]">
            <a href="#" className="hover:opacity-70 transition-opacity">
              Privacy & Policy
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Terms & Condition
            </a>
          </div>
        </div>
        <div className="mt-8 overflow-hidden">
          <p className="font-['Outfit:Regular'] font-normal text-[#055d17] text-[clamp(60px,12vw,200px)] leading-[1] tracking-[-0.48px] whitespace-nowrap select-none">
            KINETIX WEB
          </p>
        </div>
      </div>
    </footer>
  )
}
