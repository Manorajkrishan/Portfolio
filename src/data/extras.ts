import type { Testimonial } from '@/types/portfolio'

export const testimonials: Testimonial[] = [
  {
    quote:
      'Manoraj brings rare depth — structured QA discipline paired with the ability to ship full-stack and AI features end to end.',
    author: 'Engineering Lead',
    role: 'Product Team',
    company: 'Thrive 360',
  },
  {
    quote:
      'Consistent execution across AI SaaS, forecasting systems, and production-grade web applications — with clear product thinking behind every build.',
    author: 'Mentor',
    role: 'AI Programme',
    company: 'ExaltAI',
  },
  {
    quote:
      'Strong communicator who translates complex technical work into reliable, user-facing product outcomes.',
    author: 'Senior Engineer',
    role: 'Software Delivery',
    company: 'Thuli Software',
  },
]

export const aiPipelineSteps = [
  { label: 'Data Ingestion', detail: 'ETL, OCR, API feeds' },
  { label: 'Feature Engineering', detail: 'Preprocessing & embeddings' },
  { label: 'Model Training', detail: 'scikit-learn, TensorFlow, ML.NET' },
  { label: 'Evaluation', detail: 'Metrics, A/B, validation' },
  { label: 'Deployment', detail: 'FastAPI, Next.js, edge inference' },
  { label: 'Monitoring', detail: 'Drift detection & feedback loops' },
]

export const globalStats = [
  { value: 15, suffix: '+', label: 'Products Delivered' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 6, suffix: '', label: 'Research Projects' },
  { value: 6, suffix: '', label: 'Certifications' },
  { value: 5, suffix: '+', label: 'Product Verticals' },
]
