import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import SocialProof from "./sections/SocialProof"
import ProblemSolution from "./sections/ProblemSolution"
import Features from "./sections/Features"
import Industries from "./sections/Industries"
import Demo from "./sections/Demo"
import CTA from "./sections/CTA"
import Contacts from "./sections/Contact"


import useLenis from "./hooks/useLenis"

function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <div>
          <Hero />
          <SocialProof />
          <ProblemSolution />
          <Features />
          <Industries />
          <Demo />
          <CTA />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
