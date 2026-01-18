'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type HeroFormData = {
  name: string;
  email: string;
  mobile: string;
  class: string;
  batch: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function HeroSection() {
 

  const [formData, setFormData] = useState<HeroFormData>({
    name: '',
    email: '',
    mobile: '',
    class: '',
    batch: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange =
    (field: keyof HeroFormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/hero-submission', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          class: formData.class,
          batch: formData.batch,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'Unable to send your request right now');
      }

      setStatusMessage('Thanks for reaching out! We will notify you shortly.');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        class: '',
        batch: '',
      });
    } catch (error) {
      setStatusMessage(
        (error as Error).message || 'Something went wrong—please try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="section hero-section rw-hero" aria-labelledby="hero-heading">
      <div className="container hero-content">
        <motion.div
          className="rw-hero__left hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="hero-heading" className="hero-title hero-title--inline" variants={titleVariants}>
            <span className="hero-title__brand">MENTORA</span>
            <span className="hero-title__tagline">Where dreams find true mentors.</span>
            <span className="hero-title__highlight">
              100+ Students placed in IITs &amp; NITs<br />
              <br></br>
              250+ Students in Govt. Medical Colleges
            </span>
          </motion.h1>

        </motion.div>

        <motion.div
          className="hero-form-container"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
        >
          <form className="hero-form" onSubmit={handleSubmit} noValidate>
            <div className="hero-form-badge">
              <span role="img" aria-label="gift">
                🎁
              </span>{' '}
              GET 20% OFF ON YOUR FIRST BATCH!
            </div>
            <div className="hero-form-title">Quick Enrollment</div>
            <div className="hero-form-subtitle">Join our community of achievers</div>

            <div className="hero-form-group">
              <label htmlFor="hero-name">YOUR NAME</label>
              <input
                id="hero-name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange('name')}
                required
              />
            </div>

            <div className="hero-form-group">
              <label htmlFor="hero-email">EMAIL ID</label>
              <input
                id="hero-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </div>

            <div className="hero-form-group">
              <label htmlFor="hero-mobile">MOBILE NUMBER</label>
              <input
                id="hero-mobile"
                type="tel"
                placeholder="10-digit number"
                value={formData.mobile}
                onChange={handleChange('mobile')}
                required
              />
            </div>

            <div className="hero-form-group">
              <label htmlFor="hero-class">CLASS</label>
              <div className="hero-form-select-wrapper">
                <select
                  id="hero-class"
                  className="hero-form-select"
                  value={formData.class}
                  onChange={handleChange('class')}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                  <option value="jee">JEE Aspirant</option>
                  <option value="neet">NEET Aspirant</option>
                </select>
              </div>
            </div>

            <div className="hero-form-group hero-form-batch">
              <label htmlFor="hero-batch">PREFERRED BATCH</label>
              <div className="hero-form-select-wrapper">
                <select
                  id="hero-batch"
                  className="hero-form-select"
                  value={formData.batch}
                  onChange={handleChange('batch')}
                  required
                >
                  <option value="">Select Batch</option>
                  <option value="ignite">Ignite Program (For class IX)</option>
                  <option value="catalyst">Catalyst Program (For class X)</option>
                  <option value="pinnacle-rise">Pinnacle-Rise Program (For class XI)</option>
                  <option value="pinnacle-apex">Pinnacle-Apex Program (For class XII)</option>
                  <option value="phoenix">Phoenix Program (For reappearing students)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="hero-form-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Apply Now'}
            </button>

            {isSubmitting && (
              <p className="hero-form-sending" role="status">
                Sending your request… this may take a moment.
              </p>
            )}

            <p className="hero-form-note">
              ✓ Expert guidance • ✓ Free assessment • ✓ Personalized roadmap
            </p>

            {statusMessage && (
              <p className="hero-form-status" aria-live="polite">
                {statusMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
