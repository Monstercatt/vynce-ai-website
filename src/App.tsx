import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import SocialProof from "./sections/SocialProof"
import ProblemSolution from "./sections/ProblemSolution"
import Features from "./sections/Features"
import Industries from "./sections/Industries"
import Demo from "./sections/Demo"
import CTA from "./sections/CTA"

import useLenis from "./hooks/useLenis"

function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <Industries />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
