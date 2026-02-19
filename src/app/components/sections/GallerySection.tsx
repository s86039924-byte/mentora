'use client';

import './GallerySection.css';


const galleryCards = [
  { id: 'g1', title: 'Celebration Highlights', caption: 'Students celebrating their IIT & NEET successes with the Mentora team.', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 'g2', title: 'Classroom Session', caption: 'An active problem-solving session in a small, capped batch.', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 'g3', title: 'Mentor Interaction', caption: 'Faculty mentors working one-on-one with students outside class hours.', color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
  { id: 'g4', title: 'Focused Classroom', caption: 'The Mentora learning environment — structured, calm, and focused.', color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Gallery</div>
          <div className="title-underline" />
        </div>
        <div className="gallery-videos">
          <div className="video-wrapper">
            <iframe
              src="https://drive.google.com/file/d/1W5TTTMD6ztK62YD9hEmalsOfTfAnP1NA/preview"
              allow="autoplay"
              className="gallery-iframe"
            ></iframe>
          </div>
          <div className="video-wrapper vertical">
            <iframe
              src="https://drive.google.com/file/d/13xGlzXYVA3kPCSVXNt4XYQQrbIvdq2aJ/preview"
              allow="autoplay"
              className="gallery-iframe"
            ></iframe>
          </div>
          <div className="video-wrapper vertical">
            <iframe
              src="https://drive.google.com/file/d/1hBqvWjFfC6rsNyudKO02RiFDaV2PFzHw/preview"
              allow="autoplay"
              className="gallery-iframe"
            ></iframe>
          </div>
        </div>

        <div className="gallery-simple-grid">
          {galleryCards.map(card => (
            <article key={card.id} className="gallery-card-simple" style={{ background: card.color }}>
              <div className="gallery-card-simple__title">{card.title}</div>
              <p className="gallery-card-simple__caption">{card.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
