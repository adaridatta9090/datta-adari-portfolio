```tsx
'use client'

import { motion } from 'framer-motion'

const quotes = [
  {
    number: '01',
    quote:
      'I turn data into insights, and insights into ideas that create impact.',
  },
  {
    number: '02',
    quote:
      'Every dataset tells a story. My goal is to discover it, understand it, and make it useful.',
  },
  {
    number: '03',
    quote:
      'I believe the future belongs to those who can turn data into meaningful decisions.',
  },
]

export default function QuotesSection() {
  return (
    <section
      id="quotes"
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
          THE STU
        </h2>

        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          DATTA ADARI
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '24px',
        }}
      >
        {quotes.map((item, index) => (
          <motion.article
            key={item.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            style={{
              minHeight: '420px',
              padding: '34px',
              border: '1px solid #121211',
              background: '#ebe7de',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
              }}
            >
              {item.number}
            </span>

            <p
              style={{
                margin: 0,
                fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              “{item.quote}”
            </p>

            <div
              style={{
                paddingTop: '20px',
                borderTop: '1px solid rgba(18,18,17,0.3)',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              — DATTA ADARI
            </div>
          </motion.article>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div:nth-child(2) {
            grid-template-columns: 1fr 1fr !important;
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
```
