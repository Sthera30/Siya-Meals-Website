import React from 'react'
import { motion } from 'framer-motion'
import '../css/productSection.css'
import Experience from './Experience.jsx'
import Review from './Review.jsx'


function ServicesSection() {

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

            <div className='product-section-container' id='our-services'>

                <motion.h2 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>OUR SERVICES</motion.h2>
                <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, delay: .8 }}>Siya Meals offers full-service catering for events of all sizes. Whether it's a corporate function, wedding, birthday, or private dinner, we handle the food so you can focus on the moment. Quality ingredients, generous portions, and reliable service — every time.</motion.p>

            </div>


            <motion.div
                className='our-services-container'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='our-services-inner-container'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className='service-card'
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <p><span>{service.title}:</span>&nbsp;{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>


            <Experience />




        </>
    )
}

export default ServicesSection
