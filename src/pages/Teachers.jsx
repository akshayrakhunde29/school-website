import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

export default function Teachers() {
  const { t, lang } = useApp()

  return (
    <section className="section">
      <div className="container page-head">
        <h1>{t.teachers.title}</h1>
        <p>{t.teachers.intro}</p>
      </div>
      <div className="container teacher-grid">
        {content.teachers.map((teacher) => (
          <article className="card teacher-card" key={teacher.name}>
            <img className="teacher-photo" src={teacher.image} alt={teacher.name} />
            <div className="avatar" aria-hidden="true" />
            <h3>{teacher.name}</h3>
            <p className="meta">{teacher.subject[lang]}</p>
            <p className="meta">{teacher.years}+ yrs</p>
          </article>
        ))}
      </div>
    </section>
  )
}
