export interface Experience {
  id: string
  company: string
  role: string
  period: string
  duration: string
  location: string
  type: 'CTO' | 'Dev' | 'Management'
  tags: string[]
  description: string[]
  impact?: string[]
  color: string
}

export interface Project {
  id: string
  title: string
  company: string
  description: string
  longDescription: string
  tags: string[]
  impact?: string
  color: string
  icon: string
}

export interface Skill {
  category: string
  icon: string
  items: string[]
  color: string
  featured?: boolean
}

export interface Talk {
  id: string
  event: string
  description: string
  year: string
  type: 'conference' | 'podcast' | 'forum'
  icon: string
}

export interface Education {
  degree: string
  school: string
  year: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  honeypot?: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

export interface ImpactStat {
  value: string
  numericValue: number
  suffix: string
  label: string
  icon: string
}

export interface WhyMeItem {
  icon: string
  title: string
  description: string
  color: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  initials: string
  color: string
}
