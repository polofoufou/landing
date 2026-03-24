import type {
  Experience,
  Project,
  Skill,
  Talk,
  Education,
  Certification,
  ImpactStat,
  WhyMeItem,
} from '@/types'

export const experiences: Experience[] = [
  {
    id: 'sherpas',
    company: 'Les Sherpas',
    role: 'CTO',
    period: 'Avr. 2021 → Sep. 2025',
    duration: '4 ans 6 mois',
    location: 'Paris (Hybrid)',
    type: 'CTO',
    tags: ['EdTech', 'Leadership', 'IA', 'TypeScript', 'React/Next.js', 'Nest.js', 'React Native', 'AWS'],
    description: [
      'Premier employé, membre du comité de direction ; équipe passée de 1 à 50 collaborateurs (15 en Tech/Produit/Design)',
      'Culture agile et d\'apprentissage : recrutement, 1:1, rituels Scrum, amélioration continue',
      'Évangélisation et mise en production de fonctionnalités IA pour l\'expérience élève/prof et la productivité interne',
      'Architecture scalable (TypeScript, Next.js/React, Nest.js/Node, Expo/React Native, AWS) pour soutenir croissance et pivots',
    ],
    impact: [
      '+30 000 familles accompagnées',
      '+3 000 profs formés',
      '+4,36 pts de progrès/élève',
      '4,9/5 satisfaction',
      'Marque de l\'Année 2026',
    ],
    color: '#3B82F6',
  },
  {
    id: 'phenix',
    company: 'PHENIX',
    role: 'CTO',
    period: 'Juin 2016 → Jan. 2021',
    duration: '4 ans 8 mois',
    location: 'Paris',
    type: 'CTO',
    tags: ['Tech for Good', 'Marketplace B2B', '.NET', 'Cloud AWS', 'Data-driven', 'Agile'],
    description: [
      'Transformation d\'une startup en scale-up européenne de l\'économie circulaire ; équipe Tech/Produit de 1 à 12',
      'Refonte de la plateforme B2B, migration Azure → AWS, architectures hybrides .NET, CI/CD, monitoring',
      'Passage de 10 à 1 000 clients actifs ; plateforme utilisée par des majors de la distribution/agroalimentaire',
      'Levée de fonds 15M€ en 2022, vise le statut de licorne à impact',
    ],
    impact: [
      '70M de repas sauvés',
      '45 000 tonnes de déchets évitées (2024)',
      '10 → 1 000 clients actifs',
      '15M€ levés en 2022',
    ],
    color: '#10B981',
  },
  {
    id: 'euronext',
    company: 'Euronext',
    role: 'IT Project Manager & ScrumMaster',
    period: 'Sep. 2015 → Avr. 2016',
    duration: '8 mois',
    location: 'La Défense',
    type: 'Management',
    tags: ['Agile', 'Scrum', 'Kanban', 'Change management', 'FinTech'],
    description: [
      'Mission de transition : passage de 4 équipes cycle en V vers Scrum, et d\'une équipe ITIL vers Kanban',
      'Animation des rituels, coaching des équipes métier & dev, accompagnement au changement',
      '+20 à +30% sur la production et le moral des équipes',
    ],
    color: '#F59E0B',
  },
  {
    id: 'square-veolia-pm',
    company: 'Square-IT / Veolia',
    role: 'IT Project Manager',
    period: 'Jan. 2012 → Avr. 2016',
    duration: '4 ans',
    location: 'Paris',
    type: 'Management',
    tags: ['ERP', 'Gestion de projet', 'Agile/Scrum', 'TMA'],
    description: [
      'Pilotage d\'un ERP pour 1 000 utilisateurs, haute dispo 20h/24, équipe de 12 devs',
      'Chiffrage, cadrage, planification, accompagnement au changement et reporting direction',
      'Plans DR/PRA, tests de montée en charge, documentation technique',
    ],
    color: '#8B5CF6',
  },
  {
    id: 'square-veolia-dev',
    company: 'Square-IT / Veolia',
    role: 'Développeur .NET Confirmé',
    period: 'Oct. 2010 → Déc. 2012',
    duration: '2 ans',
    location: 'Paris',
    type: 'Dev',
    tags: ['.NET', 'TDD', 'MVC', 'Perf'],
    description: [
      'Développement de l\'ERP maison ; mise en place de patterns et d\'outils de génération de code (T4)',
      'Tests d\'évolutivité et optimisation des performances',
    ],
    color: '#6366F1',
  },
  {
    id: 'teralibris',
    company: 'Teralibris / Actissia',
    role: 'Développeur .NET',
    period: 'Mars 2009 → Sep. 2010',
    duration: '1 an 6 mois',
    location: 'Paris',
    type: 'Dev',
    tags: ['.NET', 'ETL', 'BizTalk'],
    description: [
      'Applications pour l\'industrie du livre : référentiel, annuaire client (RNVP), bus de données (SSIS, BizTalk)',
    ],
    color: '#EC4899',
  },
  {
    id: 'atos-bouygues',
    company: 'Atos / Bouygues Telecom',
    role: 'Développeur .NET',
    period: 'Sep. 2008 → Déc. 2009',
    duration: '1 an 3 mois',
    location: 'Paris',
    type: 'Dev',
    tags: ['.NET', 'LDAP', 'TMA'],
    description: [
      'Synchronisation d\'annuaires LDAP, TMA en environnement agile, migration DAL ADO.NET → Entity Framework',
    ],
    color: '#14B8A6',
  },
]

export const projects: Project[] = [
  {
    id: 'ia-pedagogique',
    title: 'IA pédagogique & copilote interne',
    company: 'Les Sherpas',
    description: 'Résumé de cours, génération de quiz/QCM et gamification pédagogique. Bots anti-churn/anti-bypass.',
    longDescription:
      'Conception et déploiement de fonctionnalités IA en production : résumé de cours automatique, génération de quiz/QCM personnalisés, gamification pédagogique. Bots anti-churn et anti-bypass pour protéger l\'expérience, ainsi qu\'un copilote interne pour booster la productivité des équipes.',
    tags: ['IA appliquée', 'LLM', 'NLP', 'TypeScript'],
    impact: 'IA en production pour 30k+ utilisateurs',
    color: '#3B82F6',
    icon: '🧠',
  },
  {
    id: 'app-mobile',
    title: 'Application mobile compagnon',
    company: 'Les Sherpas',
    description: 'App élèves/parents (React Native/Expo), notifications push, offline, analytics, auth sécurisée.',
    longDescription:
      'Application mobile cross-platform pour élèves et parents avec React Native/Expo. Notifications push, mode offline, analytics détaillés, authentification sécurisée. CI/CD automatisé, publication sur les stores, suivi de performance. Intégration IA (recommandations) et dashboards professeurs.',
    tags: ['React Native', 'Expo', 'Mobile', 'CI/CD'],
    impact: '4,9/5 de satisfaction utilisateur',
    color: '#10B981',
    icon: '📱',
  },
  {
    id: 'marketplace-sherpas',
    title: 'Marketplace élève-prof',
    company: 'Les Sherpas',
    description: 'Matching, reviews, réservation, paiement. Stack TypeScript, Next.js, Nest.js, AWS.',
    longDescription:
      'Marketplace full-stack permettant la mise en relation élèves/professeurs. Système de matching intelligent, avis, réservation et paiement sécurisé. Architecture TypeScript, Next.js frontend, Nest.js backend, déployée sur AWS. Optimisation du funnel acquisition/conversion, QA et monitoring.',
    tags: ['Marketplace', 'Next.js', 'Nest.js', 'AWS', 'Scaling'],
    impact: '+30k familles, +3k profs',
    color: '#F59E0B',
    icon: '🎓',
  },
  {
    id: 'migration-aws',
    title: 'Migration Azure → AWS',
    company: 'PHENIX',
    description: 'Refonte mono → services, IaC (Terraform, Ansible, Docker, K8s). HA et autoscaling.',
    longDescription:
      'Migration complète de l\'infrastructure Azure vers AWS avec refonte mono → microservices. Infrastructure as Code (Terraform, Ansible), containerisation Docker, orchestration Kubernetes. Haute disponibilité et autoscaling. Capacité >35k req/s, SLO 99,7% atteint.',
    tags: ['AWS', 'Terraform', 'Docker', 'K8s', 'Migration'],
    impact: '>35k req/s · SLO 99,7%',
    color: '#8B5CF6',
    icon: '☁️',
  },
  {
    id: 'marketplace-phenix',
    title: 'Marketplace B2B des invendus',
    company: 'PHENIX',
    description: 'Conception initiale, architecture .NET MVC, évolution produit (ponctuel, récurrence, IoT).',
    longDescription:
      'Conception et développement de la marketplace B2B permettant aux grandes surfaces de vendre leurs invendus. Architecture .NET MVC, évolution vers la récurrence, intégration IoT et vente à date courte. App mobile de signature numérique (React Native, C#, Android). Équipe montée et formée de 0.',
    tags: ['Marketplace B2B', '.NET', 'React Native', 'IoT'],
    impact: '10 → 1000 clients · 70M repas sauvés',
    color: '#EC4899',
    icon: '♻️',
  },
]

export const skills: Skill[] = [
  {
    category: 'Forces',
    icon: '⚡',
    items: ['Leadership & coaching', 'Vision produit', 'Culture agile', 'Architecture & scaling', 'Delivery & execution'],
    color: '#F59E0B',
    featured: true,
  },
  {
    category: 'IA appliquée',
    icon: '🧠',
    items: ['Prototypage LLM', 'Mise en production IA', 'NLP', 'RAG', 'Prompt engineering', 'Agents IA'],
    color: '#3B82F6',
    featured: true,
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    color: '#06B6D4',
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Nest.js', 'C#', '.NET', 'REST', 'GraphQL'],
    color: '#10B981',
  },
  {
    category: 'Mobile',
    icon: '📱',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
    color: '#8B5CF6',
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: ['AWS (EC2, EKS, S3, RDS, ALB)', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'CI/CD'],
    color: '#F97316',
  },
  {
    category: 'Data & BI',
    icon: '📊',
    items: ['SQL', 'BigQuery', 'Looker', 'dbt'],
    color: '#14B8A6',
  },
  {
    category: 'Architecture',
    icon: '🏗️',
    items: ['Microservices', 'DDD', '3-tier', 'SaaS', 'APIs REST/GraphQL'],
    color: '#6366F1',
  },
  {
    category: 'Sécurité',
    icon: '🔒',
    items: ['IAM', 'OAuth', 'SAML', 'OpenID Connect'],
    color: '#EF4444',
  },
]

export const talks: Talk[] = [
  {
    id: 'tech-rocks-2020',
    event: 'Summit Tech Rocks 2020',
    description: 'La conférence tech française de référence. Intervention sur la transformation tech et l\'impact.',
    year: '2020',
    type: 'conference',
    icon: '🎤',
  },
  {
    id: 'wagon-talks-53',
    event: 'Les Talks du Wagon — Épisode 53',
    description: 'Podcast tech sur le parcours CTO, la tech for good et l\'IA appliquée.',
    year: '2020',
    type: 'podcast',
    icon: '🎙️',
  },
  {
    id: 'centrale-supelec-2019',
    event: 'Forum CentraleSupélec 2019',
    description: 'Intervention devant les étudiants ingénieurs sur l\'entrepreneuriat tech et la tech à impact.',
    year: '2019',
    type: 'forum',
    icon: '🎓',
  },
]

export const education: Education[] = [
  { degree: 'Formation DevOps', school: 'Born2Scale', year: '2020' },
  { degree: 'Master Management', school: 'Cegos', year: '2014' },
  { degree: 'Certification ScrumMaster', school: 'Agilebee', year: '2013' },
  {
    degree: 'MCPD (Microsoft Certified Professional Developer)',
    school: 'F2i',
    year: '2010',
  },
  {
    degree: 'BTS & Licence Informatique de Gestion',
    school: 'ORT Montreuil',
    year: '2008',
  },
]

export const certifications: Certification[] = [
  { name: 'DevOps', issuer: 'Born2Scale', year: '2020' },
  { name: 'Master Management', issuer: 'Cegos', year: '2014' },
  { name: 'ScrumMaster', issuer: 'Agilebee', year: '2013' },
  { name: 'MCPD', issuer: 'Microsoft / F2i', year: '2010' },
]

export const impactStats: ImpactStat[] = [
  {
    value: '17+',
    numericValue: 17,
    suffix: '+',
    label: "années d'expérience",
    icon: '🏆',
  },
  {
    value: '30k+',
    numericValue: 30000,
    suffix: '+',
    label: 'familles accompagnées',
    icon: '👨‍👩‍👧',
  },
  {
    value: '70M+',
    numericValue: 70000000,
    suffix: '+',
    label: 'repas sauvés du gaspillage',
    icon: '🍽️',
  },
  {
    value: '35k+',
    numericValue: 35000,
    suffix: '+',
    label: 'req/s en production',
    icon: '⚡',
  },
]

export const whyMeItems: WhyMeItem[] = [
  {
    icon: '🧠',
    title: 'Expertise technique & stratégique',
    description:
      'Conception d\'architectures scalables et pilotage d\'équipes vers des objectifs ambitieux — sans jamais quitter le terrain.',
    color: '#3B82F6',
  },
  {
    icon: '🔥',
    title: 'Épreuve du feu',
    description:
      'Deux expériences CTO multi-casquettes, de la startup à la scale-up, avec IA en production et constitution d\'équipes solides.',
    color: '#EF4444',
  },
  {
    icon: '📈',
    title: 'Impact mesurable',
    description:
      'Produits utiles avec un fort focus sur le ROI et l\'impact social/environnemental. Les chiffres parlent d\'eux-mêmes.',
    color: '#10B981',
  },
  {
    icon: '🔄',
    title: 'Adaptabilité',
    description:
      'Environnements en forte croissance, pivots business, enjeux de scale et d\'investissement (Seed, Série A & B).',
    color: '#F59E0B',
  },
  {
    icon: '🎯',
    title: 'Culture produit',
    description:
      'Approche centrée utilisateur, data-driven, orientée résultats — parce que la tech n\'a de valeur que si elle sert l\'usage.',
    color: '#8B5CF6',
  },
  {
    icon: '🔧',
    title: 'Multi-casquettes',
    description:
      'Toujours actif dans le code, avec un fort attrait pour la stratégie, le pilotage produit et la fédération d\'équipes.',
    color: '#EC4899',
  },
]

export const interests = [
  { label: 'Tech & IoT', icon: '🔌' },
  { label: 'Histoire & sciences', icon: '📚' },
  { label: 'Stratégie & jeux', icon: '♟️' },
  { label: 'Football & boxe', icon: '⚽' },
]

export const languages = [
  { lang: 'Français', level: 'Natif', code: '🇫🇷' },
  { lang: 'Anglais', level: 'Professionnel', code: '🇬🇧' },
  { lang: 'Espagnol', level: 'Professionnel', code: '🇪🇸' },
]

export const sectors = [
  'ESS',
  'Éducation',
  'Green-tech',
  'Santé publique',
  'Inclusion',
  'Économie circulaire',
  'Recyclage/upcycling',
]
