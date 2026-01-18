'use client'

const quotes = [
  {
    id: 't1',
    name: 'Aarav Mehta',
    meta: 'JEE Aspirant',
    text:
      'Vidya Bhumi helped me build the depth that exams demand. Every doubt was addressed with clarity and patience.',
  },
  {
    id: 't2',
    name: 'Ishika Sharma',
    meta: 'Grade 12 · NEET',
    text:
      'The classes are structured and the coaching keeps me motivated. I feel confident entering my boards now.',
  },
  {
    id: 't3',
    name: 'Rohan Pillai',
    meta: 'AP Calculus',
    text:
      'Personal attention from mentors and the analytics-led practice gave me a huge advantage in solving tricky problems.',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials warm">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Testimonials</div>
          <div className="title-underline" />
        </div>
        <div className="testimonials-grid">
          {quotes.map(quote => (
            <article key={quote.id} className="testimonial-card-simple">
              <h3>{quote.name}</h3>
              <p className="testimonial-meta">{quote.meta}</p>
              <p className="testimonial-quote">{quote.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
