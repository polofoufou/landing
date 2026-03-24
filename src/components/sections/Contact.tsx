'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Code2, ExternalLink, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL } from '@/lib/constants'
import type { ContactFormData } from '@/types'

const MAX_LENGTHS = { name: 100, email: 254, message: 2000 }

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [status, setStatus] = useState<Status>('idle')
  const formId = useId()

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    if (!form.name.trim()) newErrors.name = 'Le nom est requis'
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide"
    }
    if (!form.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#080f1e]" aria-label="Contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <SectionHeading
            label="Contact"
            title="Parlons de votre prochain projet"
            description="Une idée à concrétiser, un défi tech à relever, ou simplement échanger ? Je suis là."
            centered
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Me retrouver</h3>
                <div className="space-y-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors group"
                    aria-label="LinkedIn (nouvel onglet)"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">LinkedIn</div>
                      <div className="text-white/40 text-xs">/in/pacheco-paul</div>
                    </div>
                  </a>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                    aria-label="GitHub (nouvel onglet)"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Code2 className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">GitHub</div>
                      <div className="text-white/40 text-xs">github.com/polofoufou</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-white/60">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white/40" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Localisation</div>
                      <div className="text-white/40 text-xs">Paris, France — Remote friendly</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                <p className="text-emerald-400/80 text-sm leading-relaxed">
                  <span className="font-semibold text-emerald-400">Disponible à partir d'avril 2026</span> pour de nouveaux projets à impact. Pas d'adtech, pas de marketing pur — mais tout ce qui sert les utilisateurs et la planète.
                </p>
              </div>

              <p className="text-white/30 text-xs">
                * Mention RGPD : les informations transmises via ce formulaire sont utilisées uniquement pour vous répondre et ne sont pas partagées avec des tiers.
              </p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
              />

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-white/70 mb-1.5">
                    Nom *
                  </label>
                  <input
                    id={`${formId}-name`}
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value.slice(0, MAX_LENGTHS.name) }))}
                    placeholder="Votre nom"
                    maxLength={MAX_LENGTHS.name}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                      errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-blue-500/50'
                    }`}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id={`${formId}-name-error`} className="mt-1 text-red-400 text-xs flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-white/70 mb-1.5">
                    Email *
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value.slice(0, MAX_LENGTHS.email) }))}
                    placeholder="votre@email.com"
                    maxLength={MAX_LENGTHS.email}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                      errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-blue-500/50'
                    }`}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id={`${formId}-email-error`} className="mt-1 text-red-400 text-xs flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-white/70 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value.slice(0, MAX_LENGTHS.message) }))}
                    placeholder="Votre message…"
                    rows={5}
                    maxLength={MAX_LENGTHS.message}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${
                      errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-blue-500/50'
                    }`}
                    aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                    aria-invalid={!!errors.message}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message ? (
                      <p id={`${formId}-message-error`} className="text-red-400 text-xs flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-white/30 text-xs">{form.message.length}/{MAX_LENGTHS.message}</span>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  isLoading={status === 'loading'}
                  disabled={status === 'loading'}
                  className="w-full"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </Button>

                {/* Status messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                      <p className="text-emerald-400 text-sm">Message envoyé ! Je vous répondrai dans les plus brefs délais.</p>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl"
                      role="alert"
                      aria-live="assertive"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
                      <p className="text-red-400 text-sm">Une erreur est survenue. Réessayez ou contactez-moi directement.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
