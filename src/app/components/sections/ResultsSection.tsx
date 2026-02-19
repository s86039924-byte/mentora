'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import './ResultsSection.css';

type Result = {
    name: string;
    year: string;
    rank?: string;
    marks?: string;
    college?: string;
};

const jeeResults: Result[] = [
    { name: 'Vraj Shah', year: '2022', rank: '243' },
    { name: 'Dwij Kalariya', year: '2017', rank: '247' },
    { name: 'Vardhman Jain', year: '2022', rank: '604' },
];

const neetResults: Result[] = [
    { name: 'Jeet Thakkar', year: '2024', marks: '710', college: 'AIIMS Jodhpur' },
    { name: 'Tirth Shah', year: '2021', marks: '695', college: 'BJ Medical College' },
    { name: 'Pranam Khandelwal', year: '2024', marks: '691', college: 'BJ Medical College' },
    { name: 'Sparsh Farmer', year: '2024', marks: '691', college: 'BJ Medical College' },
    { name: 'Divy Patel', year: '2023', marks: '686', college: 'AIIMS Jodhpur' },
];

export default function ResultsSection() {
    const [activeTab, setActiveTab] = useState<'jee' | 'neet'>('jee');

    return (
        <section id="results" className="results-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="section-badge">Proven Track Record</div>
                    <h2>Our Faculty’s Hall of Fame</h2>
                    <p>Celebrating the consistent excellence of our students in national entrance examinations</p>
                </motion.div>

                <div className="results-toggle">
                    <button
                        className={`toggle-btn ${activeTab === 'jee' ? 'active' : ''}`}
                        onClick={() => setActiveTab('jee')}
                    >
                        JEE Results
                    </button>
                    <button
                        className={`toggle-btn ${activeTab === 'neet' ? 'active' : ''}`}
                        onClick={() => setActiveTab('neet')}
                    >
                        NEET Results
                    </button>
                </div>

                <div className="results-grid-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="results-grid"
                        >
                            {(activeTab === 'jee' ? jeeResults : neetResults).map((result, index) => (
                                <ResultCard key={result.name} result={result} type={activeTab} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function ResultCard({ result, type }: { result: Result; type: 'jee' | 'neet' }) {
    return (
        <motion.div
            className="result-card"
            whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(196, 30, 58, 0.15)' }}
        >
            <div className="result-card__header">
                <div className="result-icon-bg">
                    <Trophy className="result-icon" size={24} />
                </div>
                <div className="result-year">{result.year}</div>
            </div>

            <div className="result-card__content">
                <h3>{result.name}</h3>
                <div className="result-divider"></div>

                {type === 'jee' ? (
                    <div className="result-stat">
                        <Award size={18} className="stat-icon" />
                        <span className="stat-label">AIR</span>
                        <span className="stat-value">#{result.rank}</span>
                    </div>
                ) : (
                    <div className="result-details">
                        <div className="result-stat">
                            <Star size={18} className="stat-icon" />
                            <span className="stat-label">Marks</span>
                            <span className="stat-value">{result.marks}/720</span>
                        </div>
                        <p className="result-college">{result.college}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
