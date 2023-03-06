import React, { useEffect, useRef } from 'react'

const Parallax = ({ children }) => {
   useEffect(() => parallax(), [])
   const parallaxRef = useRef(null)
   const parallax = () => {
      let parallaxOffset = 0
      let ease = 0.75
      window.addEventListener('scroll', _ => {
         if (
            window.scrollY < window.innerHeight &&
            window.innerWidth >= 1280 &&
            navigator.deviceMemory >= 8
         )
            parallaxOffset = window.scrollY * ease
         else if (window.innerWidth < 1280) parallaxOffset = 0

         parallaxRef.current &&
            (parallaxRef.current.style.transform = `translateY(${parallaxOffset}px)`)
      })
   }
   return React.createElement('div', { ref: parallaxRef }, children)
}

export default Parallax
