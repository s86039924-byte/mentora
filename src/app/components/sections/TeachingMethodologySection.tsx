'use client';

import { motion } from 'framer-motion'

const masteryBullets = [
  'Focused 75-minute sessions maintain attention and conceptual clarity.',
  'A spiral revision approach ensures concepts are revisited, strengthened, and retained over time.',
  'Lecture recordings act as a safety net, so students never fall behind due to absence or doubt.',
]

const gpsBullets = [
  'Faculty sit with students and identify individual mental blocks.',
  'Students are guided step-by-step until they solve independently.',
  'Doubts are resolved before they compound.',
]

const teachingImage = '/images/image_3.png'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function TeachingMethodologySection() {
  return (
    <section id="methodology" className="teaching section section-theme teaching-embedded">
      <div className="container teaching-shell">
        <motion.div className="teaching-header section-header" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <h2 className="teaching-title">Our Teaching Methodology</h2>
          <p className="teaching-subtitle">Mastery and Support — Not Burnout</p>
          <div className="section-divider" aria-hidden="true" />
        </motion.div>

        <div className="teaching-layout teaching-layout--stacked">
          <motion.div
            className="teaching-content"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-140px' }}
          >
            <div className="methodology-copy">
              <p>
                Our academic system is built for long-term retention and deep understanding, not exhaustion.
              </p>
              <ul className="teaching-list teaching-list--tight">
                {masteryBullets.map((item) => (
                  <li key={item}>
                    <span className="teaching-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="methodology-gps">
              <h3>Guided Practice Sessions (GPS)</h3>
              <p>Learning doesn’t end when the lecture ends.</p>
              <p>After every concept, students enter Guided Practice Sessions, where:</p>
              <ul className="teaching-list teaching-list--tight">
                {gpsBullets.map((item) => (
                  <li key={item}>
                    <span className="teaching-line" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="methodology-conclusion">
                This ensures students don’t just understand concepts—they can apply them confidently.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="teaching-visual"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-140px' }}
          >
            <div className="teaching-visual__frame">
              <img
                src={teachingImage}
                alt="Students collaborating during a Re-Wise session"
                className="teaching-visual__img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
