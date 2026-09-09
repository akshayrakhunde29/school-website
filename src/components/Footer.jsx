import { useApp } from '../context/AppContext.jsx'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div>
          <strong>{t.school}</strong>
          <div>{t.footer.affiliation}</div>
        </div>
        <div>{t.footer.copy}</div>
      </div>
    </footer>
  )
}
