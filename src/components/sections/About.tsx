"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectors, languages } from "@/lib/data";

const techStack = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Node.js", color: "#83CD29" },
  { name: "Nest.js", color: "#E0234E" },
  { name: "React Native", color: "#61DAFB" },
  { name: "AWS", color: "#FF9900" },
  { name: ".NET", color: "#512BD4" },
  { name: "Docker", color: "#2496ED" },
  { name: "K8s", color: "#326CE5" },
  { name: "Terraform", color: "#844FBA" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#080f1e]"
      aria-label="À propos de Paul Pacheco"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — avatar + stats */}
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-blue-900/30 relative">
                  <Image
                    src="/paul-photo-about.jpeg"
                    alt="Paul Pacheco"
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: "65% 60%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/30 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs" aria-hidden="true">
                    ✓
                  </span>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">
                  Langues
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <div
                      key={l.lang}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg"
                    >
                      <span aria-hidden="true">{l.code}</span>
                      <span className="text-white/80 text-sm">{l.lang}</span>
                      <span className="text-white/40 text-xs">— {l.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors */}
              <div>
                <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">
                  Secteurs de prédilection
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((s) => (
                    <Badge key={s} variant="glow">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — bio + tech stack */}
          <div className="space-y-8">
            <ScrollReveal>
              <SectionHeading
                label="À propos"
                title="Produit, impact, croissance."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  J'ai choisi dès le départ de ne travailler que sur des
                  produits avec une mission. Chez{" "}
                  <span className="text-emerald-400 font-semibold">PHENIX</span>{" "}
                  d'abord — éviter 70 millions de repas gaspillés. Puis chez{" "}
                  <span className="text-blue-400 font-semibold">
                    Les Sherpas
                  </span>{" "}
                  — rendre le soutien scolaire accessible à tous. Les deux fois,
                  j'étais le{" "}
                  <span className="text-white font-semibold">
                    premier CTO recruté
                  </span>{" "}
                  : tout construire, de l'architecture au recrutement, sans
                  filet.
                </p>
                <p>
                  Concrètement : je conçois les architectures qui tiennent quand
                  vous passez de 10 à 1 000 clients, je constitue et coache les
                  équipes tech/produit, et je mets{" "}
                  <span className="text-white font-semibold">
                    l'IA en production
                  </span>{" "}
                  là où elle crée une vraie valeur — pas juste un effet de
                  manche.
                </p>
                <p className="text-white/50 text-sm border-l-2 border-blue-500/40 pl-3">
                  Sur l'IA : la valeur n'est pas dans le modèle, elle est dans
                  l'intégration. Un LLM bien orchestré dans un workflow
                  utilisateur bat à plate couture une implémentation brute.
                  C'est ce que j'ai appris en le déployant pour{" "}
                  <span className="text-white/70 font-semibold">
                    30 000+ utilisateurs
                  </span>
                  .
                </p>
              </div>
            </ScrollReveal>

            {/* Tech stack */}
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                  Stack technique
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span
                        className="px-3 py-1.5 rounded-lg text-sm font-mono border text-white/80 bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                        style={{ borderColor: `${tech.color}40` }}
                        title={tech.name}
                      >
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
