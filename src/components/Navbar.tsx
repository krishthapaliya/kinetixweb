const assetPathPrefix = "/assets"

const imgLogo061 = `${assetPathPrefix}/brand-logo.png`

const imgAkarIconsArrowUpRight = `${assetPathPrefix}/arrow-up-right-white.svg`

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 max-w-[1440px] mx-auto">
      <div className="w-[180px] h-[70px] relative overflow-hidden flex-shrink-0">
        <img
          alt="Kinetix Web"
          className="absolute inset-0 object-contain w-full h-full"
          src={imgLogo061}
        />
      </div>
      <nav className="hidden md:flex items-center gap-2">
        {["Home", "Services", "Our Work", "About US", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-['Outfit:Regular'] font-normal text-[18px] text-white px-4 py-2 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="bg-white h-[52px] rounded-[45px] px-5 flex items-center gap-2 flex-shrink-0">
        <span className="font-['Outfit:Regular'] font-normal text-[#055d17] text-[18px] whitespace-nowrap">
          Lets Talk
        </span>
        <img
          alt=""
          className="w-6 h-6 flex-shrink-0"
          src={imgAkarIconsArrowUpRight}
        />
      </button>
    </header>
  )
}
