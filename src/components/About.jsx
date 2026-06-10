import client4 from '../assets/clients/client4.png'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src={client4} alt="Prakalya - Founder of Pins & Pleats" />
          <div className="about-tag">
            <span>📍</span>
            <span>Rathanapuri, Coimbatore</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">The Art of Perfect Pleating</h2>
          <p className="section-subtitle" style={{ marginBottom: '20px' }}>
            Welcome to <strong>Pins &amp; Pleats by Prakalya</strong> — where every fold tells a story of
            elegance, tradition, and care. Based in the heart of Coimbatore at Rathanapuri,
            we specialize in professional saree pre-pleating and draping that lets you look
            your absolute best effortlessly.
          </p>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Whether it's a family function, a wedding, or a festive celebration, our expert hands
            ensure your saree drapes perfectly and stays that way. We serve customers across all
            of Tamil Nadu with quick turnaround and careful packaging.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <div className="highlight-icon">🎯</div>
              <div>
                <strong>Precision Pleating</strong>
                <p>Every pleat crafted with care for a flawless, even look</p>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">📦</div>
              <div>
                <strong>Safe Packaging</strong>
                <p>Sarees packaged neatly so they arrive wrinkle-free</p>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🌟</div>
              <div>
                <strong>Affordable Pricing</strong>
                <p>Premium service at prices accessible to everyone</p>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🚚</div>
              <div>
                <strong>Pan Tamil Nadu</strong>
                <p>We deliver beautiful pleats to every corner of Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
