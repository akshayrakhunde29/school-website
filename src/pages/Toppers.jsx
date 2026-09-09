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
      <div className="container rank-list">
        {content.toppers.map((student) => (
          <article className="card rank-item" key={student.name}>
            <div className="rank">{student.rank}</div>
            <div>
              <strong>{student.name}</strong>
              <div className="meta">
                {t.toppers.stream}: {student.stream[lang]}
              </div>
            </div>
            <div className="score">
              {t.toppers.score} {student.score}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
