import { useState } from 'react'
import { skillGroups } from '../data/portfolio'
import { Reveal, SectionHead } from './ui'

export default function Skills() {
  const [idx, setIdx] = useState(0)
  const group = skillGroups[idx]
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead title="Skills" lead="The tools I use most, grouped by the kind of work they support." />
        <Reveal className="skills">
          <div className="tabs" role="tablist" aria-label="Skill categories">
            {skillGroups.map((g, i) => (
              <button
                key={g.name}
                role="tab"
                aria-selected={i === idx}
                className={i === idx ? 'tab on' : 'tab'}
                onClick={() => setIdx(i)}
              >
                {g.name}
                <em>{g.items.length}</em>
              </button>
            ))}
          </div>
          <div className="panel" role="tabpanel" key={group.name}>
            <p className="panel-blurb">{group.blurb}</p>
            <ul className="chips">
              {group.items.map((it, i) => (
                <li key={it} style={{ '--i': i }}>{it}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
