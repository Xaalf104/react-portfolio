import React, { Component, useEffect, useRef } from 'react'
import { gsap, Power3, ScrollTrigger } from 'gsap/all'

const Fade = ({ children }) => {
  let Element = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const animation = gsap.to(Element.current, {
      duration: 1.3,
      y: -50,
      ease: Power3.easeOut,
      delay: 0.1,
      scrollTrigger: Element.current,
      opacity: 1,
    })

    return () => {
      animation.reverse()
    }
  }, [])

  return <div ref={Element}>{children}</div>
}

export default Fade
