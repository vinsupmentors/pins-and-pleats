import client1 from '../assets/clients/client1.jpg'
import client2 from '../assets/clients/client2.jpg'
import client3 from '../assets/clients/client3.jpg'
import client4 from '../assets/clients/client4.png'
import './ClientDiary.css'

const diaries = [
  {
    img: client1,
    name: 'Radiant in Red',
    desc: 'A gorgeous Kanjivaram silk pleated in box style for a vibrant temple occasion. The saree draped effortlessly!',
    occasion: 'Temple Function',
  },
  {
    img: client2,
    name: 'Golden Glow',
    desc: 'Fluffy box folding on a golden silk saree made this client shine at her engagement ceremony.',
    occasion: 'Engagement',
  },
  {
    img: client3,
    name: 'Timeless Elegance',
    desc: 'Hanger folding for this beautiful purple saree ensured perfect drape throughout the entire day.',
    occasion: 'Family Function',
  },
  {
    img: client4,
    name: 'Festive Glow',
    desc: 'A light yellow silk saree with crisp pleats that stayed perfect all day — comfort meets elegance.',
    occasion: 'Festival Celebration',
  },
]

export default function ClientDiary() {
  return (
    <section className="client-diary" id="diary">
      <div className="container">
        <div className="diary-header">
          <span className="section-label">Client Diaries</span>
          <h2 className="section-title">Beautiful Moments, Perfect Pleats</h2>
          <p className="section-subtitle">
            Our clients wear their confidence — every pleat, every drape, every memory captured beautifully.
          </p>
        </div>

        <div className="diary-grid">
          {diaries.map((d, i) => (
            <div key={i} className="diary-card">
              <div className="diary-img-wrap">
                <img src={d.img} alt={d.name} loading="lazy" />
                <span className="diary-occasion">{d.occasion}</span>
              </div>
              <div className="diary-info">
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
