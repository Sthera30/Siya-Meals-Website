import React from 'react'
import img1 from "../../public/Siya Meals Logo.png"
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaPhone } from 'react-icons/fa'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import "../css/footer.css"

function Footer() {


    const currentYear = new Date().getFullYear()

    return (

        <>

            <div className='footer-container'>


                <div className='footer-inner-container'>

                    <div className='footer-con'>

                        <div className='footer-box'>


                            <div className="logo-social-wrapper">

                                <NavLink to={"/"}>

                                    <img src={img1} width={1589} height={1343} loading='lazy' alt="siya meals logo" />

                                </NavLink>

                            </div>


                        </div>

                        <div className='footer-box'>

                            <h3>Quick Links</h3>
                            <a href="http://localhost:5173">Home</a>
                            <a href="http://localhost:5173/about-us/">About Us</a>
                            <a href="http://localhost:5173/our-services/">Services</a>
                            <a href="http://localhost:5173/our-gallery/">Gallery</a>
                            <a href="http://localhost:5173/contact-us/">Contact Us</a>

                        </div>

                        <div className='footer-box'>

                            <h3>CONTACT INFO</h3>
                            <a><FaPhone />&nbsp;078 998 9093</a>
                            <a><TfiEmail />&nbsp;info@siyameals.com</a>
                            <a><CiLocationOn /> Fairview, Gqeberha , South Africa</a>

                        </div>

                    </div>

                </div>

                <div className='socials-container'>
                    <div className='socials-inner'>

                        <a href='https://www.facebook.com/SiyaMeals' target='_blank'><FaFacebook />&nbsp;<span>FACEBOOK</span></a>
                        <a href='https://www.tiktok.com/@siya_meals' target='_blank'><FaTiktok />&nbsp; <span>TIKTOK</span></a>
                        <a href='https://www.instagram.com/siya_meals/' target='_blank'><FaInstagram />&nbsp; <span>INSTAGRAM</span></a>
                        <a href="https://wa.me/27789989093"
                            target="_blank"
                            rel="noopener noreferrer"><FaWhatsapp />&nbsp; <span>WHATSAPP</span></a>

                    </div>
                </div>

                <p className='foot'>© Copyright {currentYear}  Siya Meals - Catering for all events | All Rights Reserved</p>

            </div>




        </>
    )
}

export default Footer
