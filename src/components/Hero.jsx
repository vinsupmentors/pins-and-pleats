import client1 from '../assets/clients/client1.jpg'
import client2 from '../assets/clients/client2.jpg'
import client3 from '../assets/clients/client3.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-bg-pattern" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-label">Coimbatore's Trusted Pleating Experts</span>
          <h1 className="hero-title">
            Elegance in<br />
            <span className="hero-title-accent">Every Pleat.</span>
          </h1>
          <p className="hero-desc">
            Professional saree pre-pleating &amp; draping services across Tamil Nadu.
            Perfect pleats, pristine packaging, and pure elegance — at prices that won't break the bank.
          </p>

          <div className="hero-badges">
            <div className="hero-badge">
              <span className="badge-icon">✦</span>
              <span>All Types of Sarees</span>
            </div>
            <div className="hero-badge">
              <span className="badge-icon">✦</span>
              <span>Across Tamil Nadu</span>
            </div>
            <div className="hero-badge">
              <span className="badge-icon">✦</span>
              <span>Bridal Packages</span>
            </div>
          </div>

          <div className="hero-actions">
            <a
              href="https://wa.me/919003883129?text=Hi%20Prakalya%2C%20I%20would%20like%20to%20book%20a%20saree%20pleating%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
            <a href="#services" className="btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Pricing
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>500+</strong>
              <span>Sarees Pleated</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>100%</strong>
              <span>Satisfied Clients</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>All TN</strong>
              <span>Delivery Available</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-images">
            <div className="hero-img-main">
              <img src={client2} alt="Client in beautifully pleated saree" loading="eager" />
            </div>
            <div className="hero-img-side">
              <img src={client1} alt="Happy client in pleated saree" loading="eager" />
              <img src={client3} alt="Client draped in saree" loading="eager" />
            </div>
          </div>
          <div className="hero-floating-card">
            <div className="floating-card-icon">⭐</div>
            <div>
              <strong>5.0 Rating</strong>
              <p>From happy customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAFAFA"/>
        </svg>
      </div>
    </section>
  )
}
