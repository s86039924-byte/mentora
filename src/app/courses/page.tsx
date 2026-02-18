import type { Metadata } from 'next'
import Link from 'next/link'

const courseCategories = [
  {
    title: 'Mathematics',
    slug: 'math',
    items: [
      'Grade 9 & 10 Mathematics (Foundation)',
      'Grade 11 & 12 Mathematics',
      'JEE Main & Advanced (Mathematics)',
      'AP Calculus AB & BC',
      'SAT Mathematics',
      'International Curricula (Australia / US / UK)',
    ],
  },
  {
    title: 'Biology',
    slug: 'bio',
    items: [
      'Grade 9 & 10 Biology',
      'Grade 11 & 12 Biology',
      'NEET (UG) Biology',
      'International Biology Curricula',
    ],
  },
]

const emojiMap: Record<string, string[]> = {
  math: ['📘', '🧮', '🚀', '🧾', '🧠', '🌏'],
  bio: ['🔬', '🧬', '🩺', '🌿'],
}

export const metadata: Metadata = {
  title: 'Courses | Re-Wise',
  description:
    'Explore Re-Wise crash courses, target batches, and practice clinics for JEE 2027 with discounted fees, DOST access, and mentor-led doubt support.',
}

export default function CoursesPage() {
  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero__grid">
            <div className="courses-hero__content">
              <p className="eyebrow">Programs for every serious aspirant</p>
              <h1>Courses Offered</h1>
              <p className="lead">
                Focused Mathematics and Biology programs across school grades, competitive exams, and
                international curricula.
              </p>
              <div className="hero-cta-row">
                <Link href="/contact" className="btn btn--primary hero-cta">
                  Book a Counselling Call
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc99Uh20hAO9mb2kyoRZGNzfSBRJLp_K4LdK9Vi1lknVRX_FA/viewform?usp=sharing&ouid=109109604170305733892"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--msat hero-cta"
                  style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #800000 100%)', color: '#fff' }}
                >
                  Apply for MSAT
                </a>
              </div>
            </div>

            <div className="courses-hero__spotlight">
              <div className="dream-card">
                <p className="dream-card__tag">Math & Biology</p>
                <h3>School, competitive exams, and international pathways.</h3>
                <p>
                  Structured teaching, practice labs, and mentorship aligned to Boards, JEE, NEET, SAT, AP, and global curricula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-sections">
        <div className="container">
          <div className="courses-sections__grid">
            <div className="courses-assessment course-block course-block--assessment">
              <div className="assessment-card">
                <div className="assessment-eyebrow">Enrollment Process &amp; Assessment</div>
                <h2>Diagnostic-first onboarding for Grade 11–12, JEE, NEET, and advanced courses.</h2>
                <p className="assessment-lede">
                  Every serious learner begins with a quick diagnostic so we can place you in the right batch,
                  fix gaps early, and set clear goals from day one.
                </p>
                <div className="assessment-grid">
                  <div className="assessment-point">
                    <span className="assessment-emoji" aria-hidden>🧠</span>
                    <div>
                      <strong>Assess conceptual readiness</strong>
                      <p>Gauge strengths across core topics before the grind begins.</p>
                    </div>
                  </div>
                  <div className="assessment-point">
                    <span className="assessment-emoji" aria-hidden>🛠️</span>
                    <div>
                      <strong>Identify gaps</strong>
                      <p>Pinpoint the tricky areas so practice plans stay efficient.</p>
                    </div>
                  </div>
                  <div className="assessment-point">
                    <span className="assessment-emoji" aria-hidden>📊</span>
                    <div>
                      <strong>Right batch, right pace</strong>
                      <p>Join peers at a similar level for sharper discussions and growth.</p>
                    </div>
                  </div>
                  <div className="assessment-point">
                    <span className="assessment-emoji" aria-hidden>🎯</span>
                    <div>
                      <strong>Clear expectations</strong>
                      <p>Roadmaps and milestones from day one for a focused environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="courses-offered course-block course-block--courses">
              <div className="course-list-grid">
                {courseCategories.map((cat) => (
                  <article key={cat.title} className={`course-list-card course-list-card--${cat.slug}`}>
                    <h2>{cat.title}</h2>
                    <ul>
                      {cat.items.map((item, idx) => {
                        const emoji = (emojiMap[cat.slug] || [])[idx % (emojiMap[cat.slug]?.length || 1)] || '✨'
                        return (
                          <li key={item}>
                            <span className="course-emoji" aria-hidden>{emoji}</span>
                            <span>{item}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
