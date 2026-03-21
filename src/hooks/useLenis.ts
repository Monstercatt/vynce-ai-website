import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function useLenis() {

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches

    if (prefersReducedMotion || isTouchDevice) {
      return
    }

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true
    })

    let rafId = 0

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }

  }, [])

}