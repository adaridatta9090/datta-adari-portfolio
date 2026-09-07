'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'Fake News Detection',
    category: 'MACHINE LEARNING',
    description:
      'A machine learning system designed to identify whether a news article is real or fake by analysing textual information and patterns within the content.',
    technologies: 'Python · Pandas · Scikit-learn · NLP',
    work:
      'Data preprocessing, feature extraction, model training, testing and evaluation.',
    outcome:
      'Built a classification-based solution to support automated fake-news identification.',
  },
  {
    number: '02',
    title: 'E-Commerce Website',
    category: 'FULL STACK DEVELOPMENT',
    description:
      'A full-stack e-commerce website designed to provide users with a simple and intuitive online shopping experience.',
    technologies: 'HTML · CSS · JavaScript · Full Stack',
    work:
      'Designed the interface, developed website functionality and created a smooth shopping experience.',
    outcome:
      'Developed a responsive e-commerce platform with a clean and user-friendly interface.',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '120px 6vw',
        background: '#f5f2eb',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '70px',
          gap: '30px',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            lineHeight: 0.8,
            fontWeight: 700,
            letterSpacing: '-0.06em',
          }}
        >
          PROJECTS
        </h2>

        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          SELECTED WORK
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '24px',
        }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.number}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              minHeight: '620px',
              padding: '34px',
              border: '1px solid #121211',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#ebe7de',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(18,18,17,0.35)',
                paddingBottom: '18px',
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                }}
              >
                {project.number}
              </span>

              <span
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {project.category}
              </span>
            </div>

            <div style={{ marginTop: '50px' }}>
              <h3
                style={{
                  margin: '0 0 25px',
                  fontSize: 'clamp(2.3rem, 4vw, 4.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  fontWeight: 600,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  margin: '0 0 30px',
                  maxWidth: '600px',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  marginBottom: '25px',
                  padding: '18px 0',
                  borderTop: '1px solid rgba(18,18,17,0.25)',
                  borderBottom: '1px solid rgba(18,18,17,0.25)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    marginBottom: '8px',
                  }}
                >
                  TECHNOLOGIES
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                  }}
                >
                  {project.technologies}
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    marginBottom: '8px',
                  }}
                >
                  MY ROLE
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                  }}
                >
                  {project.work}
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    marginBottom: '8px',
                  }}
                >
                  OUTCOME
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                  }}
                >
                  {project.outcome}
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: '40px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(18,18,17,0.35)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              <span>DATTA ADARI</span>
              <span>2026</span>
            </div>
          </motion.article>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          section {
            padding: 80px 5vw !important;
          }

          section > div:first-child {
            align-items: flex-start !important;
            flex-direction: column !important;
          }

          section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}