import React from 'react'
import img from '../../public/img6.jpg'
import '../css/ourjourneyBurner.css'

function OurJourneyBurner() {
    return (
        <>

            <div className='our-journey-burner' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})` }}>

                <div className='our-journey-burner-inner'>

                    <h1>ABOUT US</h1>

                </div>

            </div>

        </>
    )
}

export default OurJourneyBurner
