import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

export default function Home() {
  const { t, lang } = useApp()

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="badge">{t.home.badge}</span>
          <h1>{t.home.bannerTitle}</h1>
          <p>{t.home.bannerText}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/facilities">
              {t.home.ctaPrimary}
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              {t.home.ctaSecondary}
            </Link>
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
