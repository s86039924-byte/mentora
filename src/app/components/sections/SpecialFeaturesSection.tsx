'use client';

import './SpecialFeaturesSection.css';
import React from 'react';
import { motion } from 'framer-motion';

const differentiators = [
  {
    title: 'Small, capped batches',
    description: '24 students max so no one gets lost in the crowd.',
  },
  {
    title: 'Faculty mentors, not call-center reps',
    description: 'Actual faculty act as mentors, not outsourced counselors or call-center support.',
  },
  {
    title: 'We track thinking, not just scores',
    description: 'We track how a student thinks and solves, not just what they score.',
  },
  {
    title: 'Retention-first system',
    description: 'Our spiral revision emphasizes learning with retention, not short-term cramming.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
})

export default function SpecialFeaturesSection() {
  return (
    <section id="what-makes-us-unique" className="special-features-section">
      <div className="special-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>What Makes Mentora Unique</h2>
          <p className="section-highlight">
            <strong>Most institutes focus on coverage. We focus on mastery.</strong>
          </p>
          <p className="section-highlight">
            <strong>
              At Mentora, we don’t believe that long hours, bigger batches, or faster syllabi create toppers.
              What creates results is clarity, consistency, and personal guidance—and that’s where we stand apart.
            </strong>
          </p>
        </motion.div>

        <motion.div
          className="special-image"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <img
            src="/images/what_make_unique/what_make_unique.jpeg"
            alt="Mentora making us unique"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {differentiators.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={cardVariants(index)}
              whileHover="hover"
            >
              <div className="feature-card-badge">{String(index + 1).padStart(2, '0')}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="special-conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="special-conclusion-quote">
            <p>This is not factory-style education.</p>
            <p>This is precision coaching designed around each student.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
