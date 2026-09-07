'use client'

import { motion } from 'framer-motion'

const certificates = [
  {
    number: '01',
    title: 'Short-Term Internship',
    category: 'POWER BI',
    organization: 'ULearn',
    period: '14 APR 2025 – 31 MAY 2025',
    grade: 'GRADE A',
    image: '/assets/short-term-internship.webp',
  },
  {
    number: '02',
    title: 'Long-Term Internship',
    category: 'MACHINE LEARNING',
    organization: 'Adhoc Networking Solutions',
    period: '01 DEC 2025 – 07 MAR 2026',
    grade: '',
    image: '/assets/long-term-internship.webp',
  },
  {
    number: '03',
    title: 'What is Data Science?',
    category: 'DATA SCIENCE',
    organization: 'IBM / Coursera',
    period: '09 SEP 2025',
    grade: '',
    image: '/assets/what-is-data-science.webp',
  },
  {
  number: '04',
  title: 'Tools for Data Science',
  category: 'DATA SCIENCE',
  organization: 'IBM / Coursera',
  period: '21 SEP 2025',
  grade: '',
  image: '/assets/tools-for-data-science.webp',
},
{
  number: '05',
  title: 'Data Science Methodology',
  category: 'DATA SCIENCE',
  organization: 'IBM / Coursera',
  period: '27 SEP 2025',
  grade: '',
  image: '/assets/data-science-methodology.webp',
},
{
  number: '06',
  title: 'Python for Data Science, AI & Development',
  category: 'DATA SCIENCE',
  organization: 'IBM / Coursera',
  period: '08 OCT 2025',
  grade: '',
  image: '/assets/python-for-data-science.webp',
},
{
  number: '07',
  title: 'Databases and SQL for Data Science with Python',
  category: 'SQL / DATA SCIENCE',
  organization: 'IBM / Coursera',
  period: '18 OCT 2025',
  grade: '',
  image: '/assets/databases-sql-data-science-python.webp',
},
{
  number: '08',
  title: 'Data Analysis with Python',
  category: 'PYTHON / DATA ANALYSIS',
  organization: 'IBM / Coursera',
  period: '24 OCT 2025',
  grade: '',
  image: '/assets/data-analysis-with-python.webp',
},
{
  number: '09',
  title: 'Data Visualization with Python',
  category: 'PYTHON / DATA VISUALIZATION',
  organization: 'IBM / Coursera',
  period: '31 OCT 2025',
  grade: '',
  image: '/assets/data-visualization-with-python.webp',
},
{
  number: '10',
  title: 'Machine Learning with Python',
  category: 'MACHINE LEARNING / PYTHON',
  organization: 'IBM / Coursera',
  period: '06 NOV 2025',
  grade: '',
  image: '/assets/machine-learning-with-python.webp',
},
{
  number: '11',
  title: 'Power BI DAX Essentials: Basic DAX Formulas and Functions',
  category: 'POWER BI / DAX',
  organization: 'Udemy',
  period: '05 JUL 2025',
  grade: '',
  image: '/assets/power-bi-dax-essentials.webp',
},
{
  number: '12',
  title: 'AI Essentials: Introduction to Artificial Intelligence',
  category: 'ARTIFICIAL INTELLIGENCE',
  organization: 'Udemy',
  period: '13 AUG 2025',
  grade: '',
  image: '/assets/ai-essentials-introduction-to-artificial-intelligence.webp',
},
  
]

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
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
          CERTIFICATES
        </h2>

        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          ACHIEVEMENTS
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '24px',
        }}
      >
        {certificates.map((certificate) => (
          <motion.article
            key={certificate.number}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              border: '1px solid #121211',
              background: '#ebe7de',
              padding: '20px',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                border: '1px solid rgba(18,18,17,0.35)',
                overflow: 'hidden',
                background: '#f5f2eb',
              }}
            >
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    CERTIFICATE IMAGE
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: '18px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(18,18,17,0.35)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                  }}
                >
                  {certificate.number}
                </span>

                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {certificate.category || 'ACHIEVEMENT'}
                </span>
              </div>

              <h3
                style={{
                  margin: '0 0 10px',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                  fontWeight: 600,
                }}
              >
                {certificate.title}
              </h3>

              {certificate.organization && (
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {certificate.organization}
                </div>
              )}

              {certificate.period && (
                <div
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {certificate.period}
                </div>
              )}

              {certificate.grade && (
                <div
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {certificate.grade}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div:nth-child(2) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 600px) {
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