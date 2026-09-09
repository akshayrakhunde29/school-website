import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

const heroSlides = [
  {
    badge: 'CBSE • Est. 2006 • Classes I–XII',
    title: 'A joyful campus where learning grows with values',
    text: 'Gurukul School offers a balanced education where academics, creativity, sports, and life skills are nurtured every day.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    badge: 'Holistic education',
    title: 'Future-ready learners with strong character',
    text: 'We build curiosity, discipline, and confidence through guided learning in classrooms, labs, and the arts.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    badge: 'Campus life',
    title: 'Sports, creativity and discovery every day',
    text: 'From science fairs to sports fields and music rooms, students experience growth beyond textbooks.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80',
  },
]

export default function Home() {
  const { t, lang } = useApp()
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const activeSlide = heroSlides[slideIndex]

  const goToPrev = () => {
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setSlideIndex((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(23, 23, 23, 0.82), rgba(23, 23, 23, 0.58)), url('${activeSlide.image}')`,
        }}
      >
        <div className="container hero-content">
          <span className="badge">{activeSlide.badge}</span>
          <h1>{activeSlide.title}</h1>
          <p>{activeSlide.text}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/facilities">
              {t.home.ctaPrimary}
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              {t.home.ctaSecondary}
            </Link>
          </div>

          <div className="hero-controls" aria-label="Hero slideshow controls">
            <button type="button" className="slide-arrow slide-arrow-left" onClick={goToPrev} aria-label="Previous slide">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 5.5 9 12l6.5 6.5" />
              </svg>
            </button>
            <button type="button" className="slide-arrow slide-arrow-right" onClick={goToNext} aria-label="Next slide">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 5.5 15 12l-6.5 6.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div className="container stats">
        {t.home.stats.map((item) => (
          <article className="stat" key={item.label}>
            <b>{item.value}</b>
            <span className="meta">{item.label}</span>
          </article>
        ))}
      </div>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>{t.home.aboutTitle}</h2>
            <p className="lede">{t.home.aboutText}</p>
          </div>
          <div>
            <h2>{t.home.highlightsTitle}</h2>
            <div className="timeline">
              {content.highlights.map((item) => (
                <article className="card" key={item.en.title}>
                  <h3>{item[lang].title}</h3>
                  <p className="meta">{item[lang].text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>School life in focus</h2>
          </div>
          <div className="showcase-grid">
            {content.gallery.map((item) => (
              <figure className="showcase-card" key={item.title.en}>
                <img src={item.image} alt={item.title[lang]} />
                <figcaption>{item.title[lang]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
