import React from 'react'
import { Helmet } from 'react-helmet'
import AboutUs from '../components/AboutUs.jsx'
import Footer from '../components/Footer.jsx'

function AboutUsPage() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": "Siya Meals",
    "image": "https://siyameals.co.za/Siya_Meals_Logo.png",
    "url": "https://siyameals.co.za/about-us/",
    "telephone": "+27 78 998 9093",

    "description": "Siya Meals is a proudly South African catering company based in Gqeberha, Eastern Cape. Founded in 2020, we provide bespoke catering services for weddings, funerals, corporate functions, and special events, delivering authentic flavours and memorable experiences.",

    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gqeberha",
      "addressRegion": "Eastern Cape",
      "addressCountry": "ZA"
    },

    "areaServed": {
      "@type": "Place",
      "name": "Eastern Cape"
    },

    "sameAs": [
      "https://www.facebook.com/SiyaMeals",
      "https://www.instagram.com/siya_meals/",
      "https://www.tiktok.com/@siya_meals"
    ]
  }

  return (
    <div>

      <Helmet>

        <title>Siya Meals | About Us</title>
        <meta name='description' content='Siya Meals is a proudly South African catering company based in Gqeberha, offering bespoke catering for weddings, funerals, corporate events, and special occasions across the Eastern Cape.' />
        <meta name='keywords' content="Siya Meals, catering Gqeberha, catering Eastern Cape, event catering, wedding catering, corporate catering, bespoke catering" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://siyameals.co.za/about-us/" />

        <meta property="og:title" content="Siya Meals | About Us" />
        <meta property="og:description" content="From humble beginnings in 2020 to a trusted catering brand in Gqeberha, Siya Meals delivers authentic South African flavours and unforgettable event experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://siyameals.co.za/about-us/" />
        <meta property="og:image" content="https://siyameals.co.za/Siya_Meals_Logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siya Meals | About Us" />
        <meta name="twitter:description" content="Authentic South African catering services in Gqeberha for weddings, corporate events, and special occasions." />
        <meta name="twitter:image" content="https://siyameals.co.za/Siya_Meals_Logo.png" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

      </Helmet>

      <AboutUs />
      <Footer />

    </div>
  )
}

export default AboutUsPage
