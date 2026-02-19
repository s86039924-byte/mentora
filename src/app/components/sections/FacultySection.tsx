'use client';

import './FacultySection.css';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

type FacultyMember = {
  name: string;
  subject: string;
  description: string;
  image: string;
  details: string;
};

const facultyRoster: Record<'jee' | 'neet', FacultyMember[]> = {
  jee: [
    {
      name: 'Rajkumar Somani',
      subject: 'Physics Faculty',
      description: 'B.Tech, IIT Kharagpur | 10+ Yrs Exp.',
      image: '/images/JEE/Rajkumar somani.png',
      details:
        'An IIT Kharagpur alumnus Rajkumar sir brings a decade of elite experience. He has shaped thousands of IITians by rejecting the passive lecture model. His "workshop" approach ensures students actively participate in problem-solving building the confidence and analytical skills needed to conquer JEE Physics.',
    },
    {
      name: 'Tarun Garg',
      subject: 'Mathematics Faculty',
      description: 'B.Tech + M.Tech, IIT Dhanbad | 12 Yrs Exp.',
      image: '/images/JEE/tarun gerg.png',
      details:
        'A rare blend of an IITian\'s sharp logic and a seasoned academic leader\'s empathy. Tarun sir has a deep understanding of why students get lost in the crowd. He is a master at identifying the root of a student\'s doubt and co-founded Mentora to create a system that solves it personally.',
    },
    {
      name: 'Anmol Bhandari',
      subject: 'Chemistry Faculty',
      description: 'B.Tech, NIT Jaipur | 7 Yrs Exp. (Olympiad Specialist)',
      image: '/images/JEE/Anmol Bhandari.png',
      details:
        'An NIT Jaipur graduate and an Olympiad specialist. Anmol sir\'s passion is for building true conceptual understanding not just "tricks". His experience in training Chemistry Olympiad ranks makes him a master of guiding students from foundational concepts to elite-level problem-solving a core pillar of the Mentora philosophy.',
    },
  ],
  neet: [
    {
      name: 'Deepak Prakash',
      subject: 'Biology Faculty',
      description: 'B.Pharma, SBS University | 12 Yrs Exp.',
      image: '/images/NEET/Deepak Prakash.png',
      details:
        'The mentor behind "perfect scores". Deepak sir\'s track record is a testament to the Mentora method: five consecutive years of mentoring students to a perfect 360/360 in NEET Biology. He has guided over 100 students to AIIMS (Delhi Jodhpur etc.) and BJ Medical College by focusing on deep conceptual mastery not just rote memorization.',
    },
    {
      name: 'Satyam Goyal',
      subject: 'Chemistry Faculty',
      description: 'B.Tech, RGPV | 7 Yrs Exp.',
      image: '/images/NEET/satyam goyal.png',
      details:
        'A specialist in all three branches of Chemistry. Satyam sir has an inside-out understanding of competitive curriculum design and its flaws. He has mentored over many students to top their dream universities and medical colleges. At Mentora he applies his expertise to ensure our cyclical curriculum builds mastery not burnout.',
    },
    {
      name: 'Preet Jain',
      subject: 'Physics Faculty',
      description: 'B.Tech + M.Tech (Gold Medalist), IIT Dhanbad | 12 Yrs Exp.',
      image: '/images/NEET/preet jain.png',
      details:
        'As a Gold Medalist from IIT Preet sir is one of the most respected physics mentors in the country. He has guided over 200 students to top IITs and AIIMS. He left the "factory" model to build Mentora\'s "Active Practice" pedagogy where he personally ensures students learn to solve problems themselves.',
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -12,
    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.12)',
    transition: { duration: 0.3 },
  },
};

export default function FacultySection() {
  // Combine all faculty members
  const allFaculty = [...facultyRoster.jee, ...facultyRoster.neet];
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedFaculty(null);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isModalOpen]);

  const openModal = (teacher: FacultyMember) => {
    setSelectedFaculty(teacher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
  };

  return (
    <section id="faculty" className="faculty-section">
      <div className="faculty-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2>Meet Our Expert Faculty</h2>
          <p>Subject specialists with proven teaching excellence and competitive exam expertise</p>
        </motion.div>

        <motion.div
          className="faculty-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            facultyRoster.neet.find(f => f.name === 'Preet Jain'),
            facultyRoster.jee.find(f => f.name === 'Tarun Garg'),
            facultyRoster.jee.find(f => f.name === 'Rajkumar Somani'),
            facultyRoster.neet.find(f => f.name === 'Satyam Goyal'),
            facultyRoster.neet.find(f => f.name === 'Deepak Prakash'),
            facultyRoster.jee.find(f => f.name === 'Anmol Bhandari')
          ].map((teacher, index) => teacher && (
            <motion.div
              key={`faculty-${index}`}
              className="faculty-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="faculty-card__photo-wrap">
                <img className="faculty-card__photo" src={teacher.image} alt={teacher.name} loading="lazy" />
              </div>
              <div className="faculty-card__body">
                <span className={`faculty-badge ${facultyRoster.jee.includes(teacher) ? 'faculty-badge--jee' : 'faculty-badge--neet'}`}>
                  {facultyRoster.jee.includes(teacher) ? 'JEE' : 'NEET'}
                </span>
                <h3 className="faculty-card__name">{teacher.name}</h3>
                <div className="faculty-accent"></div>
                <p className="faculty-card__role">{teacher.subject}</p>
                <p className="faculty-card__highlights">{teacher.description}</p>
              </div>
              <button
                type="button"
                className="faculty-card__cta"
                onClick={() => openModal(teacher)}
              >
                Know more
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="faculty-footer-tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="faculty-tagline-text">Proven track record of faculty</p>
          <div className="faculty-stats-row">
            <div className="faculty-stat-item">
              <Trophy className="faculty-stat-icon" size={24} />
              <span>100+ Students placed in IITs &amp; NITs</span>
            </div>
            <div className="faculty-stat-item">
              <Trophy className="faculty-stat-icon" size={24} />
              <span>250+ Students in Govt. Medical Colleges</span>
            </div>
          </div>
        </motion.div>

        {isModalOpen && selectedFaculty && (
          <div
            className="faculty-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedFaculty.name} details`}
            onClick={closeModal}
          >
            <div className="faculty-modal" onClick={(event) => event.stopPropagation()}>
              <div className="faculty-modal__header">
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="faculty-modal__photo"
                />
                <div>
                  <h3>{selectedFaculty.name}</h3>
                  <p>{selectedFaculty.subject}</p>
                </div>
                <button type="button" className="faculty-modal__close" onClick={closeModal}>
                  ×
                </button>
              </div>
              <p className="faculty-modal__description">{selectedFaculty.description}</p>
              <p className="faculty-modal__details">{selectedFaculty.details}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}




