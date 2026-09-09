import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

const icons = {
  lab: 'Lab',
  book: 'Lib',
  sport: 'Play',
  art: 'Art',
  bus: 'Bus',
  food: 'Cafe',
}

export default function Facilities() {
  const { t, lang } = useApp()

  return (
    <section className="section">
      <div className="container page-head">
        <h1>{t.facilities.title}</h1>
        <p>{t.facilities.intro}</p>
      </div>
      <div className="container grid-3">
        {content.facilities.map((item) => (
          <article className="card" key={item.icon}>
            <div className="icon">{icons[item.icon]}</div>
            <h3>{item[lang].title}</h3>
            <p className="meta">{item[lang].text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
