import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

export default function Toppers() {
  const { t, lang } = useApp()

  return (
    <section className="section">
      <div className="container page-head">
        <h1>{t.toppers.title}</h1>
        <p>{t.toppers.intro}</p>
        <p className="meta">{t.toppers.year}</p>
      </div>
      <div className="container topper-grid">
        {content.toppers.map((student) => (
          <article className="card topper-card" key={student.name}>
            <div className="topper-rank">#{student.rank}</div>
            <img className="topper-photo" src={student.image} alt={student.name} />
            <div className="topper-info">
              <h3>{student.name}</h3>
              <p className="meta">
                {t.toppers.stream}: {student.stream[lang]}
              </p>
              <div className="score">
                {t.toppers.score} {student.score}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
