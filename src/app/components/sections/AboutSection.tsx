'use client';

import './AboutSection.css';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Teaching Methodology</h2>
          <div className="header-underline"></div>
        </motion.div>

        <motion.div
          className="methodology-visual"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-120px' }}
        >
          <img
            src="/images/learning.jpeg"
            alt="Students engaged in learning"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="about-card" variants={itemVariants}>
            <h3>Mastery and Support — Not Burnout</h3>
            <p className="methodology-lead">
              Our academic system is built for long-term retention and deep understanding, not exhaustion.
            </p>
            <ul>
              <li>Focused 75-minute sessions maintain attention and conceptual clarity.</li>
              <li>A spiral revision approach ensures concepts are revisited strengthened and retained over time.</li>
              <li>Extended availability of faculty for doubt solving.</li>
              <li>5 days a week classes and biweekly test.</li>
            </ul>
          </motion.div>

          <motion.div className="about-card" variants={itemVariants}>
            <h3>Guided Practice Sessions (GPS)</h3>
            <p className="methodology-lead">Learning doesn’t end when the lecture ends.</p>
            <p>After every concept, students enter Guided Practice Sessions, where:</p>
            <ul>
              <li>Faculty sit with students and identify individual mental blocks.</li>
              <li>Students are guided step-by-step until they solve independently.</li>
              <li>Doubts are resolved before they compound.</li>
            </ul>
            <p className="methodology-conclusion">
              This ensures students don’t just understand concepts—they can apply them confidently.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
