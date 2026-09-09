import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

export default function Activities() {
  const { t, lang } = useApp()

  return (
    <section className="section">
      <div className="container page-head">
        <h1>{t.activities.title}</h1>
        <p>{t.activities.intro}</p>
      </div>
      <div className="container grid-2">
        <div>
          <h2>{t.activities.circulars}</h2>
          <div className="timeline">
            {content.circulars.map((item) => (
              <article className="card" key={item.date}>
                <div className="meta">{item.date}</div>
                <h3>{item[lang].title}</h3>
                <p className="meta">{item[lang].text}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h2>{t.activities.events}</h2>
          <div className="timeline">
            {content.events.map((item) => (
              <article className="card event" key={item.en.title}>
                <div className="date-chip">{item.date[lang]}</div>
                <div>
                  <h3>{item[lang].title}</h3>
                  <p className="meta">{item[lang].text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
