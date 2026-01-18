'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      description: 'B.Tech, IIT Kharagpur | 10+ Yrs Exp. (Ex-Allen & FIITJEE)',
      image: '/images/JEE/Rajkumar somani.png',
      details:
        'An IIT Kharagpur alumnus, Rajkumar sir brings a decade of elite experience from both Allen (SBR) and FIITJEE. He has shaped thousands of IITians by rejecting the passive lecture model. His workshop approach ensures students actively participate in problem-solving, building the confidence and analytical skills needed to conquer JEE Physics.',
    },
    {
      name: 'Tarun Garg',
      subject: 'Mathematics Faculty',
      description: 'B.Tech + M.Tech, IIT Dhanbad | 12 Yrs Exp. (Ex-Allen Coordinator, Maninagar)',
      image: '/images/JEE/tarun gerg.png',
      details:
        'A rare blend of an IITian\'s sharp logic and a seasoned academic leader\'s empathy. As a former Center Coordinator at Allen (Maninagar), Tarun sir understands why students get lost in the crowd. He is a master at identifying the root of a student\'s doubt and co-founded Mentaraa to create a system that solves it personally.',
    },
    {
      name: 'Anmol Bhandari',
      subject: 'Chemistry Faculty',
      description: 'B.Tech, NIT Jaipur | 7 Yrs Exp. (Ex-Allen & Olympiad Specialist)',
      image: '/images/JEE/Anmol Bhandari.png',
      details:
        'An NIT Jaipur graduate and an Olympiad specialist, Anmol sir\'s passion is for building true conceptual understanding, not just "tricks." His experience at Allen and in training Chemistry Olympiad ranks makes him a master of guiding students from foundational concepts to elite-level problem-solving, a core pillar of the Mentaraa philosophy.',
    },
  ],
  neet: [
    {
      name: 'Deepak Prakash',
      subject: 'Biology Faculty',
      description: 'B.Pharma, SBS University | 12 Yrs Exp. (Ex-Allen)',
      image: '/images/NEET/Deepak Prakash.png',
      details:
        'The mentor behind "perfect scores." Deepak sir\'s track record is a testament to the Mentaraa method: five consecutive years of mentoring students to a perfect 360/360 in NEET Biology. He has guided over 100 students to AIIMS (Delhi, Jodhpur, etc.) and BJ Medical College by focusing on deep conceptual mastery, not just rote memorization.',
    },
    {
      name: 'Satyam Goyal',
      subject: 'Chemistry Faculty',
      description: 'B.Tech, RGPV | 7 Yrs Exp. (Ex-Allen)',
      image: '/images/NEET/satyam goyal.png',
      details:
        'A specialist in all three branches of Chemistry and a former Subject Head at Allen (Maninagar), Satyam sir has an inside-out understanding of competitive curriculum design and its flaws. He has mentored numerous students to top their dream universities and medical colleges. At Mentaraa, he applies his expertise to ensure our cyclical curriculum builds mastery, not burnout.',
    },
    {
      name: 'Preet Jain',
      subject: 'Physics Faculty',
      description: 'B.Tech + M.Tech (Gold Medalist), IIT Dhanbad | 12 Yrs Exp. (Ex-Allen Coordinator, Maninagar)',
      image: '/images/NEET/preet jain.png',
      details:
        'As a Gold Medalist from IIT and a former HOD at Allen (Maninagar), Preet sir is one of the most respected physics mentors in the country. He has guided over 200 students to top IITs and AIIMS. He left the "factory" model he once led to build Mentaraa\'s "Active Practice" pedagogy, where he personally ensures students learn to solve problems themselves.',
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
  const [selectedStream, setSelectedStream] = useState<'jee' | 'neet'>('jee');

  const activeFaculty = facultyRoster[selectedStream];
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
          <div className="faculty-tabs">
            <button
              className={`tab-button faculty-tab ${selectedStream === 'jee' ? 'active' : ''}`}
              onClick={() => setSelectedStream('jee')}
            >
              JEE Experts
            </button>
            <button
              className={`tab-button faculty-tab ${selectedStream === 'neet' ? 'active' : ''}`}
              onClick={() => setSelectedStream('neet')}
            >
              NEET Experts
            </button>
          </div>
        </motion.div>

        <motion.div
          className="faculty-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {activeFaculty.map((teacher, index) => (
            <motion.div
              key={`${selectedStream}-${index}`}
              className="faculty-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="faculty-index">{index + 1}</div>
              <div className="faculty-photo">
                <img src={teacher.image} alt={teacher.name} loading="lazy" />
              </div>
              <h3 className="faculty-name">{teacher.name}</h3>
              <div className="faculty-accent"></div>
              <p className="faculty-subject">{teacher.subject}</p>
              <p className="faculty-bio">{teacher.description}</p>
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
