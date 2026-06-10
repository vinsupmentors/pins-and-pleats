import review1 from '../assets/reviews/review1.jpg'
import review2 from '../assets/reviews/review2.jpg'
import review3 from '../assets/reviews/review3.jpg'
import './Reviews.css'

// Files copied alphabetically: review1=1000646859(Mano), review2=1000648313(Yuva), review3=1000648908(Ajilinicia)
const testimonials = [
  {
    screenshot: review3,
    name: 'Ajilinicia',
    text: '"So beautifully pleated, it was so easy to drape also. And package was clean and perfect. Thanks! ❤️✨"',
    rating: 5,
    occasion: 'Wedding Function',
  },
  {
    screenshot: review1,
    name: 'Mano',
    text: '"Really super! Very very satisfied. Will definitely come to you again for all my sarees. Highly recommend! 😊"',
    rating: 5,
    occasion: 'Family Event',
  },
  {
    screenshot: review2,
    name: 'Yuva',
    text: '"Perfect pleating done akka! Thanks a lot, the pleats were perfectly done and the fit was exactly right. Loved it!"',
    rating: 5,
    occasion: 'Festive Occasion',
  },
]

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="section-label">Happy Customers</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real words from real customers — because the best testimonial is a happy client in a beautifully draped saree.
          </p>
        </div>

        <div className="reviews-grid">
          {testimonials.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {'★'.repeat(r.rating)}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-footer">
                <div className="review-avatar">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.occasion}</span>
                </div>
              </div>
              <div className="review-screenshot-wrap">
                <img src={r.screenshot} alt={`Customer review from ${r.name}`} loading="lazy" />
                <div className="screenshot-label">Actual WhatsApp Review</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <div className="cta-content">
            <h3>Ready to experience the difference?</h3>
            <p>Join hundreds of happy customers across Tamil Nadu who trust Pins &amp; Pleats by Prakalya.</p>
          </div>
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Prakalya%2C%20I%20would%20like%20to%20book%20a%20pleating%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Your Saree Pleating Now
          </a>
        </div>
      </div>
    </section>
  )
}
