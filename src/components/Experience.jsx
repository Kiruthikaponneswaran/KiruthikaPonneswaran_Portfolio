import { experience } from '../data/portfolio'
import { Reveal, SectionHead } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead title="Experience" lead="From mentoring learners to shipping enterprise software." />
        <ol className="timeline">
          {experience.map((x, i) => (
            <Reveal as="li" key={x.company + x.period} delay={i * 60} className="t-item">
              <span className="t-dot" aria-hidden="true" />
              <div className="card t-card">
                <div className="t-top">
                  <div>
                    <h3>{x.role}</h3>
                    <p className="t-co">{x.company}, {x.place}</p>
                  </div>
                  <span className="t-period">{x.period}</span>
                </div>
                <ul className="t-points">
                  {x.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <ul className="chips small">
                  {x.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
