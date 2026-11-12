import { about, stats } from '../data/portfolio'
import { useCountUp, useInView } from '../hooks'
import { Reveal, SectionHead } from './ui'

function Stat({ value, suffix, label }) {
  const [ref, seen] = useInView(0.4)
  const n = useCountUp(value, seen)
  return (
    <div ref={ref} className="stat">
      <strong>{n.toLocaleString('en-US')}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead title="About me" />
        <div className="about-grid">
          <Reveal className="about-text">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>
          <Reveal className="stats" delay={120}>
            {stats.map((s) => <Stat key={s.label} {...s} />)}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
