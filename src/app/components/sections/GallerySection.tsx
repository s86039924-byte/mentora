'use client';

const galleryCards = [
  { id: 'g1', title: 'Celebration Highlights', color: 'var(--gallery-pink)' },
  { id: 'g2', title: 'Classroom Session', color: 'var(--gallery-blue)' },
  { id: 'g3', title: 'Mentor Interaction', color: 'var(--gallery-amber)' },
  { id: 'g4', title: 'Focused Classroom', color: 'var(--gallery-cyan)' },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Gallery</div>
          <div className="title-underline" />
        </div>
        <div className="gallery-simple-grid">
          {galleryCards.map(card => (
            <article key={card.id} className="gallery-card-simple" style={{ background: card.color }}>
              <div className="gallery-card-simple__title">{card.title}</div>
              <p className="gallery-card-simple__caption">Moments from Vidya Bhumi classrooms.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
