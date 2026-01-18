'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const differentiators = [
  {
    title: 'Mastery, not coverage',
    description: 'Most institutes race through content. We focus on deep mastery so each concept becomes second nature.',
  },
  {
    title: 'A clarity-first philosophy',
    description: 'At Mentora we believe clarity, consistency, and personal guidance—not hours—build toppers.',
  },
  {
    title: 'Small, capped batches',
    description: '24 students max so mentors can notice and support every learner.',
  },
  {
    title: 'Actual faculty mentors',
    description: 'Our mentors are teaching faculty, not call-center counselors or outsourced support.',
  },
  {
    title: 'We map how minds work',
    description: 'We track how a student thinks and solves, not just what they score on a test.',
  },
  {
    title: 'Retention-first system',
    description: 'Learning with long-term retention—not short-term cramming—is the way we prepare students.',
  },
  {
    title: 'Precision coaching',
    description: 'This is not factory-style education. It’s precision coaching built around each student.',
  },
]

export default function DifferentiatorsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="differentiators" ref={ref} className="differentiators">
      <div className="container differentiators-intro">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2 className="title-text">
            Curious to know what makes us unique?
          </h2>
          <div className="title-underline" />
          <p className="title-subtext">
            Most institutes focus on coverage. We focus on mastery.
          </p>
          <p className="title-subtext">
            At Mentora, we don’t believe that more hours, bigger batches, or faster syllabi create toppers. What creates results is clarity, consistency, and personal guidance—and that’s where we stand apart.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="differentiators-visual"
        >
          <img
            src="/images/image_4.png"
            alt="Mentora mentoring students"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>

      <div className="differentiators-grid">
        {differentiators.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
            className="diff-card"
          >
            <div className="diff-number">{index + 1}</div>
            <div className="diff-title">{item.title}</div>
            <p className="diff-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
