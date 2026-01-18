import React from 'react'

const points = [
  'Two core subjects, one disciplined philosophy',
  'Concepts + exams, not shortcuts',
  'Small batches, honest mentoring',
  'High-quality tailored material',
  'Continuous performance tracking',
]

export default function DifferenceSection() {
  return (
    <section id="difference" className="difference section">
      <div className="container difference-shell">
        <h2 className="difference-title" data-anim="fade-up">
          What Makes This Coaching Different?
        </h2>
        <div className="difference-list">
          {points.map((line, idx) => (
            <div
              key={line}
              className="difference-row"
              data-anim="fade-up"
              style={{ '--anim-delay': `${0.06 * idx}s` } as React.CSSProperties}
            >
              <span className="difference-line" aria-hidden="true" />
              <span className="difference-text">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
