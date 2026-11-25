import React, { useState, useEffect } from 'react'
import '../css/gallery.css'
import img1 from '../../public/IMG-20260411-WA0066.jpg'
import img2 from '../../public/IMG-20260411-WA0062.jpg'
import img3 from '../../public/IMG_7458.jpg'
import img4 from '../../public/IMG-20260411-WA0085.jpg'
import img5 from '../../public/IMG-20260411-WA0082.jpg'
import img6 from '../../public/IMG-20260411-WA0084.jpg'
import img7 from '../../public/IMG_0317.jpg'
import img8 from '../../public/IMG_9851.jpg'
import img9 from '../../public/img6.jpg'
import img10 from '../../public/img11.jpg'
import img11 from '../../public/IMG_7460.jpg'
import img12 from '../../public/IMG_9759.jpg'
import img13 from '../../public/IMG_0355.jpg'
import img14 from '../../public/IMG_0480.jpg'
import img15 from '../../public/IMG_9771.jpg'
import img16 from '../../public/IMG_9788.jpg'
import img17 from '../../public/IMG_0405.jpg'
import img18 from '../../public/IMG_0450.jpg'
import img19 from '../../public/IMG_0475.jpg'
import img20 from '../../public/IMG_9772.jpg'
import img21 from '../../public/IMG_9780.jpg'
import img22 from '../../public/IMG_9786.jpg'
import img23 from '../../public/IMG_0401.jpg'
import img24 from '../../public/img5.jpg'
import img25 from '../../public/img8.jpg'
import img26 from '../../public/img9.jpg'
import img27 from '../../public/IMG_9766.jpg'
import img28 from '../../public/IMG_9782.jpg'
import img29 from '../../public/img12.jpg'


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29]

function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 120)
        return () => clearTimeout(timer)
    }, [])

    const openLightbox = (index) => {
        setSelectedImg(index)
        document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
        setSelectedImg(null)
        document.body.style.overflow = 'unset'
    }

    return (
        <>
            <div className='gallery-container'>
                <div className='gallery-inner-container'>
                    <h1>Captured Moments</h1>
                    <p>A collection of our most memorable events and experiences.</p>
                </div>
            </div>

            <div className='gallery-photos-container'>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`gallery-photos-box ${visible ? 'gallery-photos-box--visible' : ''}`}
                        style={{ transitionDelay: `${index * 90}ms` }}
                        onClick={() => openLightbox(index)}
                    >
                        <img src={img} loading = "lazy" alt={`Gallery ${index + 1}`} />
                        <div className='gallery-photos-box__overlay' />
                        <span className='gallery-photos-box__icon'>✦</span>
                    </div>
                ))}
            </div>

            {selectedImg !== null && (
                <div className='gallery-lightbox' onClick={closeLightbox}>
                    <button className='gallery-lightbox__close' onClick={closeLightbox}>✕</button>
                    <div className='gallery-lightbox__content' onClick={(e) => e.stopPropagation()}>
                        <img src={images[selectedImg]} alt={`Gallery ${selectedImg + 1}`} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery