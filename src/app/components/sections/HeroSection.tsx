'use client';

import './HeroSection.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy } from 'lucide-react';
import { LOGO } from '@/lib/constants';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 15 },
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


          <motion.h1 id="hero-heading" className="hero-heading hero-title--inline" variants={titleVariants}>
            <span className="hero-title__brand">MENTORA</span>
            <span className="hero-title__tagline">Where dreams find true mentors</span>
            <span className="hero-title__highlight">
              A premier institute for IIT-JEE and NEET.
            </span>
          </motion.h1>


          <motion.div className="hero-cta-container" variants={bodyVariants}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNGtsGGTM2wrsMblMsIW54Bo8zUlZyvIJaxwaVqltjwIW1CQ/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="hero-msat-btn"
            >
              Apply for MSAT
              <span className="btn-glow-effect"></span>
            </a>

          </motion.div>


        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
        >
          <Image
            src="/logo/home.png"
            alt="Mentora Hero"
            width={500}
            height={400}
            className="hero-image"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
