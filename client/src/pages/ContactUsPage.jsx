import React from 'react'
import ContactUs from '../components/ContactUs.jsx'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer.jsx'

function ContactUsPage() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Siya Meals",
        "description": "Request a catering quote from Siya Meals. We provide professional catering services in Gqeberha and the Eastern Cape for weddings, corporate events, funerals, and special occasions.",
        "url": "https://siyameals.co.za/contact-us/",

        "mainEntity": {
            "@type": "CateringService",
            "name": "Siya Meals",
            "telephone": "+27 78 998 9093",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gqeberha",
                "addressRegion": "Eastern Cape",
                "addressCountry": "ZA"
            }
        }
    }

    return (
        <div>

            <Helmet>

                <title>Siya Meals | Request a Quote</title>

                <meta
                    name="description"
                    content="Request a catering quote from Siya Meals. We offer professional catering services in Gqeberha and Eastern Cape for weddings, events, and corporate functions."
                />

                <meta
                    name="keywords"
                    content="catering quote Gqeberha, Siya Meals contact, wedding catering quote, event catering Eastern Cape, food catering booking"
                />

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="canonical"
                    href="https://siyameals.co.za/contact-us/"
                />

                <meta property="og:title" content="Siya Meals | Request a Quote" />

                <meta
                    property="og:description"
                    content="Request a catering quote from Siya Meals for weddings, corporate events, funerals, and special occasions in Gqeberha."
                />

                <meta property="og:type" content="website" />

                <meta
                    property="og:url"
                    content="https://siyameals.co.za/contact-us/"
                />

                <meta
                    property="og:image"
                    content="https://siyameals.co.za/Siya_Meals_Logo.png"
                />

                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:title" content="Siya Meals | Request a Quote" />

                <meta
                    name="twitter:description"
                    content="Get a catering quote from Siya Meals in Gqeberha for weddings, events, and corporate functions."
                />

                <meta
                    name="twitter:image"
                    content="https://siyameals.co.za/Siya_Meals_Logo.png"
                />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>

            </Helmet>

            <ContactUs />
            <Footer />

        </div>
    )
}

export default ContactUsPage
