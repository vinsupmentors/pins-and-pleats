import './Services.css'

const services = [
  {
    id: 1,
    name: 'Box Folding',
    emoji: '📦',
    price: '₹300',
    tag: 'Most Popular',
    features: [
      'Neat Box Pleats',
      'Keeps Saree Safe & Tidy',
      'Compact & Travel Friendly',
    ],
    desc: 'Classic neat box pleats perfect for everyday wear, functions, and travel. Clean, structured, and easy to drape.',
  },
  {
    id: 2,
    name: 'Fluffy Box Folding',
    emoji: '✨',
    price: '₹400',
    tag: 'Best for Celebrations',
    features: [
      'Soft & Natural Volume',
      'Fluffy & Elegant Pleats',
      'Perfect for Functions & Celebrations',
    ],
    desc: 'Give your saree a lush, voluminous look with soft fluffy pleats. Ideal for functions and festive events.',
    highlight: true,
  },
  {
    id: 3,
    name: 'Hanger Folding',
    emoji: '🎀',
    price: '₹400',
    priceHeavy: '₹450 (Heavy Sarees)',
    tag: 'Perfect for Special Occasions',
    features: [
      'Easy to Carry & Store',
      'Fluffy & Elegant Pleats',
      'Perfect for Special Occasions',
      'Keeps Saree Wrinkle-Free',
    ],
    desc: 'Hanger-style pleating for special occasions. Stays pristine, carries beautifully, and drapes effortlessly.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Pleating That Fits Every Occasion</h2>
          <p className="section-subtitle">
            From everyday sarees to bridal silk — choose the style that suits your event.
            All services come with neat packaging and careful handling.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div key={s.id} className={`service-card ${s.highlight ? 'highlighted' : ''}`}>
              {s.highlight && <div className="service-ribbon">Best Choice</div>}
              <div className="service-emoji">{s.emoji}</div>
              <div className="service-tag">{s.tag}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}>
                    <span className="check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="service-price">
                <span className="price-amount">{s.price}</span>
                {s.priceHeavy && <span className="price-heavy">{s.priceHeavy}</span>}
              </div>
              <a
                href="https://wa.me/919003883129?text=Hi%20Prakalya%2C%20I%20am%20interested%20in%20your%20pleating%20service."
                target="_blank"
                rel="noopener noreferrer"
                className={s.highlight ? 'btn-primary' : 'btn-outline'}
                style={{ marginTop: '8px', justifyContent: 'center' }}
              >
                Book This Service
              </a>
            </div>
          ))}
        </div>

        <div className="bridal-banner">
          <div className="bridal-content">
            <div className="bridal-emoji">👰</div>
            <div>
              <h3>Bridal Packages Available</h3>
              <p>Special bridal pleating &amp; draping packages tailored for your big day. Perfect care, perfect pleats, timeless elegance.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919003883129?text=Hi%20Prakalya%2C%20I%20am%20interested%20in%20a%20bridal%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  )
}
