import React, { useState, useEffect } from 'react'
import '../css/hero.css'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import img100 from '../../public/img100.jpg'
import img102 from '../../public/img102.jpg'
import img103 from '../../public/img103.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'

function Hero() {

  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])

  const slides = [
    { type: 'single', image: img1 },
    { type: 'split', images: [img100, img102, img103] },
    { type: 'single', image: img2 },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
   const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)  // 6 seconds — not too fast
    return () => clearInterval(interval)

  }, [])
  return (
    <div className='hero-container'>

      <AnimatePresence>

        {slides[current].type === 'single' ? (
          <motion.div
            key={current}
            className="hero-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        ) : (
          <motion.div
            key={current}
            className="hero-split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {slides[current].images.map((img, i) => (
              <div
                key={i}
                className="hero-split-img"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </motion.div>
        )}

      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className='hero-inner-container'>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8, delay: .8 }}
        >
          ELEVATE YOUR EVENT WITH OUR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8, delay: .8 }}
        >
        BESPOKE CATERING
        </motion.h1>

        <div className='button-container'>
          <NavLink to={"/contact-us/"}>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8, delay: .8 }}
              className='btn'
            >
              BOOK US NOW
            </motion.button>

          </NavLink>
        </div>

      </div>

      {/* DOTS */}
      <div className='hero-dots'>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

    </div>
  )
}

export default Hero