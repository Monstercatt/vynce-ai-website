import { Routes, Route } from "react-router-dom"
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
import Pricing from "./sections/Pricing"

import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import RefundCancellation from "./pages/RefundCancellation"
import ShippingDelivery from "./pages/ShippingDelivery"
import AboutUs from "./pages/AboutUs"

import useLenis from "./hooks/useLenis"

function HomePage() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <Industries />
      <Demo />
      <Pricing />
      <CTA />
      <Contacts />
    </div>
  )
}

function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundCancellation />} />
          <Route path="/shipping" element={<ShippingDelivery />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
