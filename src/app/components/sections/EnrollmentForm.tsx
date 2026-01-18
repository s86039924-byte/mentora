'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  class: string;
  subject: string;
  batchPreference: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function EnrollmentForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    class: '',
    subject: '',
    batchPreference: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with your Google Form action URL
      // You'll provide the Google Form endpoint, and we'll submit data to it
      console.log('Form data ready to submit:', formData);
      
      // For now, show success message
      setSubmitMessage('✅ Assessment form submitted! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', class: '', subject: '', batchPreference: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      setSubmitMessage('❌ Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="enrollment-section">
      <div className="enrollment-container">
        <motion.div
          className="enrollment-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2 variants={itemVariants}>Book Your Diagnostic Assessment</motion.h2>
          <motion.p variants={itemVariants}>
            Fill out the form below to schedule your personalized assessment and understand which batch & level suits you best.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="enrollment-form"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="form-row">
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </motion.div>
          </div>

          <div className="form-row">
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="class">Current Class / Level *</label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option value="">Select your class</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
                <option value="JEE Main">JEE Main Aspirant</option>
                <option value="JEE Advanced">JEE Advanced Aspirant</option>
                <option value="NEET">NEET Aspirant</option>
                <option value="AP Calculus">AP Calculus (AB/BC)</option>
                <option value="International">International Curricula</option>
              </select>
            </motion.div>
          </div>

          <div className="form-row">
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="subject">Subject of Interest *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
                <option value="Both">Both Mathematics & Biology</option>
              </select>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="batchPreference">Batch Preference *</label>
              <select
                id="batchPreference"
                name="batchPreference"
                value={formData.batchPreference}
                onChange={handleChange}
                required
              >
                <option value="">Select batch type</option>
                <option value="One-to-One">One-to-One Sessions</option>
                <option value="Batch (20)">Batch Classes (Max 20 students)</option>
                <option value="Both">Open to Both</option>
              </select>
            </motion.div>
          </div>

          <motion.div className="form-actions" variants={itemVariants}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-submit"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Assessment'}
            </button>
            <p className="form-note">
              ✓ We'll review your details and contact you within 24 hours to schedule your assessment.
            </p>
          </motion.div>

          {submitMessage && (
            <motion.div
              className="submit-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {submitMessage}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
