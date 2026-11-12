import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          <span className="gold-text">{profile.name}</span>
        </p>
        <p>Designed and built with React. &copy; {new Date().getFullYear()}</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
