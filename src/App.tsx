import { HeroSection } from "./components/HeroSection"

import { OurClients } from "./components/OurClients"

import { WhyKinetix } from "./components/WhyKinetix"

import { About } from "./components/About"

import { Services } from "./components/Services"

import { HowWeWork } from "./components/HowWeWork"

import { Expertise } from "./components/Expertise"

import { Portfolio } from "./components/Portfolio"

import { FAQ } from "./components/FAQ"

import { Contact } from "./components/Contact"

import { CTA } from "./components/CTA"

import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-clip">
      <HeroSection />
      <OurClients />
      <WhyKinetix />
      <About />
      <Services />
      <HowWeWork />
      <Expertise />
      <div className="relative h-100vh">
      <Portfolio />
      </div>
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}
