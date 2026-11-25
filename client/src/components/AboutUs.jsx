import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import img1 from '../../public/img18.jpg'
import '../css/aboutUs.css'
import Vision from './Vision.jsx'
import OurJourneyBurner from './OurJourneyBurner.jsx'

function AboutUs() {

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (

        <>

        <OurJourneyBurner />

            <div className='page-title' id='OUR-STORY'>

                <h1>
                   OUR STORY

                </h1>

                <div className='our-journey-container'>

                    <div className='our-journey-box'>

                        <img src={img1} width={1600} height={1066} loading='lazy' alt="" />

                    </div>

                    <div className='our-journey-box'>

                        <p>Siya Meals is a proudly South African catering company based in Gqeberha. Started in 2020 from home kitchen, driven by a deep love for food and a dream to bring people together through great meals. What began with cooking for family and small gatherings has grown into a company that now caters for weddings, funerals, corporate functions, and all types of events across Gqeberha and the Eastern Cape.</p>
                        <p>At Siya Meals, we believe food should tell a story — one of warmth, culture, and community. Our dishes are inspired by authentic South African flavours, from hearty pap aand chakalaka to modern gourmet platters. We focus on quality, affordability, and presentation, because we want every guest to feel valued and every event to be unforgettable.</p>
                        <p>Today, we work with a dedicated team of ten active staff members, including talented chefs. Together, we deliver not just food, but a full experience of hospitality and professionalism.</p>
                        <p></p>
                    </div>

                </div>


            </div>


            <Vision />

        </>
    )
}

export default AboutUs
