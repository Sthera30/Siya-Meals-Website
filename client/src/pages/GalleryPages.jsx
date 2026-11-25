import React from 'react'
import Gallery from '../components/Gallery.jsx'
import Footer from '../components/Footer.jsx'
import { Helmet } from 'react-helmet'

function GalleryPages() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Siya Meals",
        "description": "Captured Moments — A collection of Siya Meals' most memorable events and catering experiences in Gqeberha and across the Eastern Cape.",
        "url": "https://siyameals.co.za/our-gallery/",

        "image": [
            "https://siyameals.co.za/Siya_Meals_Logo.png"
        ],

        "publisher": {
            "@type": "Organization",
            "name": "Siya Meals",
            "logo": {
                "@type": "ImageObject",
                "url": "https://siyameals.co.za/Siya_Meals_Logo.png"
            }
        }
    }

    return (
        <div>


            <Helmet>

                <title>Siya Meals | Our Work & Events</title>

                <meta
                    name="description"
                    content="Captured Moments — A collection of Siya Meals' most memorable events and catering experiences in Gqeberha and across the Eastern Cape."
                />

                <meta
                    name="keywords"
                    content="Siya Meals gallery, catering photos Gqeberha, event catering images, wedding catering Eastern Cape, food presentation"
                />

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link
                    rel="canonical"
                    href="https://siyameals.co.za/our-gallery/"
                />

                <meta property="og:title" content="Siya Meals | Our Work & Events" />

                <meta
                    property="og:description"
                    content="Captured Moments — A collection of Siya Meals' most memorable events and catering experiences in Gqeberha and across the Eastern Cape."
                />

                <meta property="og:type" content="website" />

                <meta
                    property="og:url"
                    content="https://siyameals.co.za/our-gallery/"
                />

                <meta
                    property="og:image"
                    content="https://siyameals.co.za/Siya_Meals_Logo.png"
                />

                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:title" content="Siya Meals | Our Work & Events" />

                <meta
                    name="twitter:description"
                    content="Captured Moments — A collection of Siya Meals' most memorable events and catering experiences."
                />

                <meta
                    name="twitter:image"
                    content="https://siyameals.co.za/Siya_Meals_Logo.png"
                />

                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>

            </Helmet>

            <Gallery />
            <Footer />

        </div>
    )
}

export default GalleryPages
