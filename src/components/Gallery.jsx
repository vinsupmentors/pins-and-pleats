import { useState } from 'react'
import './Gallery.css'

import p1 from '../assets/pleated/pleated1.png'
import p2 from '../assets/pleated/pleated2.jpeg'
import p3 from '../assets/pleated/pleated3.jpeg'
import p4 from '../assets/pleated/pleated4.jpeg'
import p5 from '../assets/pleated/pleated5.jpeg'
import p6 from '../assets/pleated/pleated6.jpeg'
import p7 from '../assets/pleated/pleated7.jpeg'
import p8 from '../assets/pleated/pleated8.jpeg'
import p9 from '../assets/pleated/pleated9.jpeg'
import p10 from '../assets/pleated/pleated10.jpeg'
import p11 from '../assets/pleated/pleated11.jpeg'
import p12 from '../assets/pleated/pleated12.jpeg'

const images = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const close = () => setLightbox(null)
  const prev = () => setLightbox(i => (i - 1 + images.length) % images.length)
  const next = () => setLightbox(i => (i + 1) % images.length)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Pleated with Perfection</h2>
          <p className="section-subtitle">
            A glimpse of our carefully crafted pleating work — every saree handled with love and precision.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <button key={i} className="gallery-item" onClick={() => setLightbox(i)} aria-label={`View pleated saree ${i + 1}`}>
              <img src={src} alt={`Pleated saree work ${i + 1} by Pins & Pleats`} loading="lazy" />
              <div className="gallery-overlay">
                <span>🔍</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          <button className="lightbox-nav prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>
          <img
            src={images[lightbox]}
            alt={`Pleated saree ${lightbox + 1}`}
            onClick={e => e.stopPropagation()}
          />
          <button className="lightbox-nav next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">›</button>
          <div className="lightbox-counter">{lightbox + 1} / {images.length}</div>
        </div>
      )}
    </section>
  )
}
