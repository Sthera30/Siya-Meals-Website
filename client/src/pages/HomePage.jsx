import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Footer from '../components/Footer.jsx'

function HomePage() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "CateringService",
        "name": "Siya Meals",
        "image": "https://siyameals.co.za/Siya_Meals_Logo.png",
        "url": "https://siyameals.co.za",
        "telephone": "+27 78 998 9093",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gqeberha",
            "addressRegion": "Eastern Cape",
            "addressCountry": "ZA"
        }
    }

    return (
        <div>

            <Helmet>

                <title>Siya Meals | Catering Services in Gqeberha & Eastern Cape</title>
                <meta name='description' content='Siya Meals offers bespoke catering in Gqeberha, Port Elizabeth, Port Alfred, and Grahamstown for weddings, corporate events, funerals and special occasions.' />
                <meta name='keywords' content='Siya Meals, catering Gqeberha, catering Port Elizabeth, Eastern Cape catering, wedding catering, corporate catering, event catering, funeral catering, Port Alfred catering, Grahamstown catering' />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://siyameals.co.za/" />

                <meta property="og:title" content="Siya Meals | Catering Services in Gqeberha & Eastern Cape" />
                <meta property="og:description" content="Bespoke catering services across Gqeberha, Port Elizabeth, Port Alfred, and Grahamstown. Siya Meals delivers fresh, high-quality food for all events." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://siyameals.co.za/" />
                <meta property="og:image" content="https://siyameals.co.za/Siya_Meals_Logo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Siya Meals | Catering Services in Gqeberha & Eastern Cape" />
                <meta name="twitter:description" content="Bespoke catering in Gqeberha and surrounding areas for weddings, corporate events, and special occasions." />
                <meta name="twitter:image" content="https://siyameals.co.za/Siya_Meals_Logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>

            </Helmet>

            <Hero />
            <ServicesSection />
            <Footer />

        </div >
    )
}

export default HomePage