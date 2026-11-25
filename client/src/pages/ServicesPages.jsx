import React from 'react'
import Services from '../components/Services.jsx'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer.jsx'

function ServicesPages() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "CateringService",
        "name": "Siya Meals",
        "image": "https://siyameals.co.za/Siya_Meals_Logo.png",
        "url": "https://siyameals.co.za/our-services/",
        "telephone": "+27 78 998 9093",

        "description": "Siya Meals provides catering services in Gqeberha including daily meals, event catering, luxury presentation, and reliable service for weddings, corporate events, and special occasions across the Eastern Cape.",

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
        ],

        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catering Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Event Catering"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Daily Meals"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Luxury Presentation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Reliable Catering Service"
                    }
                }
            ]
        }
    }


    return (
        <div>

            <Helmet>

                <title>Siya Meals | Catering Services in Gqeberha</title>
                <meta name='description' content='Siya Meals offers professional catering services in Gqeberha, including daily meals, event catering, luxury food presentation, and reliable service for weddings, corporate functions, and special occasions.' />
                <meta name='keywords' content="catering Gqeberha, event catering Eastern Cape, daily meals, wedding catering, corporate catering, Siya Meals services" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://siyameals.co.za/our-services/" />

                <meta property="og:title" content="Siya Meals | Catering Services in Gqeberha" />
                <meta property="og:description" content="From daily meals to full event catering, Siya Meals delivers fresh food, luxury presentation, and reliable service across Gqeberha and the Eastern Cape." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://siyameals.co.za/our-services/" />
                <meta property="og:image" content="https://siyameals.co.za/Siya_Meals_Logo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Siya Meals | Catering Services in Gqeberha" />
                <meta name="twitter:description" content="Catering services in Gqeberha including daily meals, event catering, and professional food presentation for all occasions." />
                <meta name="twitter:image" content="https://siyameals.co.za/Siya_Meals_Logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>

            </Helmet>


            <Services />
            <Footer />

        </div>
    )
}


export default ServicesPages
