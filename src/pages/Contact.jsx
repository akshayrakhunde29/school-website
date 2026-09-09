import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { content } from '../i18n.js'

export default function Contact() {
  const { t, lang } = useApp()
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section">
      <div className="container page-head">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.intro}</p>
      </div>
      <div className="container contact-grid">
        <aside className="card">
          <p>
            <strong>{t.contact.address}</strong>
            <br />
            {content.address[lang]}
          </p>
          <p>
            <strong>{t.contact.phone}</strong>
            <br />
            {content.phone}
          </p>
          <p>
            <strong>{t.contact.email}</strong>
            <br />
            {content.email}
          </p>
          <p>
            <strong>{t.contact.hours}</strong>
            <br />
            {t.contact.hoursValue}
          </p>
        </aside>

        <form className="card form form-card" onSubmit={onSubmit}>
          {sent ? (
            <div className="success" role="status">
              {t.contact.sent}
            </div>
          ) : (
            <>
              <label>
                {t.contact.formName}
                <input name="name" required />
              </label>
              <label>
                {t.contact.formEmail}
                <input type="email" name="email" required />
              </label>
              <label>
                {t.contact.formPhone}
                <input type="tel" name="phone" />
              </label>
              <label>
                {t.contact.formMessage}
                <textarea name="message" required />
              </label>
              <button className="btn btn-primary" type="submit">
                {t.contact.submit}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
