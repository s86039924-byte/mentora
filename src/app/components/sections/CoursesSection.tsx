'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './CoursesSection.css';


const assessmentFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSc99Uh20hAO9mb2kyoRZGNzfSBRJLp_K4LdK9Vi1lknVRX_FA/viewform?usp=sharing&ouid=109109604170305733892';

const programs = [
  { slug: 'ignite', title: 'Ignite Program', subtitle: 'For class IX' },
  { slug: 'catalyst', title: 'Catalyst Program', subtitle: 'For class X' },
  { slug: 'pinnacle-rise', title: 'Pinnacle-Rise Program', subtitle: 'For class XI' },
  { slug: 'pinnacle-apex', title: 'Pinnacle-Apex Program', subtitle: 'For class XII' },
  { slug: 'phoenix', title: 'Phoenix Program', subtitle: 'For reappearing students' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CoursesSection() {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Our Courses</h2>
          <p>Tailored pathways for every student and curriculum</p>
        </motion.div>

        <motion.div
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className={`course-card course-card--image course-card--${program.slug}`}
              variants={cardVariants}
            >
              <div className="course-number">{index + 1}</div>
              <h3 className="course-level">{program.title}</h3>
              <p className="course-desc">{program.subtitle}</p>
              <div className="course-accent"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="courses-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p>Not sure which course is right for you?</p>
          <a
            className="btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc99Uh20hAO9mb2kyoRZGNzfSBRJLp_K4LdK9Vi1lknVRX_FA/viewform?usp=sharing&ouid=109109604170305733892"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Your Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
