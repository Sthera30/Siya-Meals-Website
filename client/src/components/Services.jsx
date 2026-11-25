import React, { useEffect } from 'react'
import img from '../../public/IMG-20260411-WA0077.jpg'
import '../css/services.css'
import { motion } from 'framer-motion'
import img1 from '../../public/mergeImg.png'
import Event from '../components/Event.jsx'

function Services() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = [
        { title: 'Daily Meals', desc: 'Delicious, home-style daily meals prepared fresh to give individuals, teams, and organisations convenient, satisfying food every day.' },
        { title: 'Event Catering', desc: 'Tailored menus designed to suit your occasion, taste, and budget, creating a memorable food experience for every event.' },
        { title: 'Luxury Presentation', desc: 'Clean, professional food setups that add warmth, style, and a welcoming touch to your event or service space.' },
        { title: 'Reliable Service', desc: 'A friendly and professional team committed to delivering quality food and dependable service with care.' },
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    }

    return (
        <>
            <div className='our-serv-container' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})` }}>
                <div className='our-serv-inner'>
                    <h1>OUR SERVICES</h1>
                </div>
            </div>

            <div className='services-heading-'>
                <motion.h2 initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }}>OUR SERVICES</motion.h2>
                <motion.h3 initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: .8 }}>What we bring to your table</motion.h3>
                <motion.p>At Siya Meals, we believe great food brings people together. Fresh ingredients, generous portions, and a team that truly cares — <span style={{ fontWeight: '500' }}>Our Services</span>:</motion.p>
            </div>

            <div className='service-cont-'>

                <div className='service-cont-right'>
                    <img src={img1} width={1006} height={420} loading='lazy' alt="" />
                </div>

                <div className='service-cont-left'>
                    <motion.div
                        className='our-services-container'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className='our-services-inner-container' style={{ marginTop: '-2.5rem' }}>
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className='service-card'
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    <p style={{ marginTop: '-1rem', fontWeight: '300', lineHeight: '1.3', fontSize: '1.1rem' }}><span>{service.title}:</span>&nbsp;{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>

            <Event />
        </>
    )
}

export default Services