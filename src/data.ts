export const contact = {
  email: 'thandochipango316@gmail.com',
  phone: '+265 992 714 117',
  github: 'https://github.com/Thando-rgb',
  linkedin: 'https://www.linkedin.com/in/thando-chipango',
  cv: '/resume.pdf',
}

export type ProjectCategory = 'Web development' | 'Cybersecurity' | 'Data/AI';
export type PreviewKind = 'nids' | 'poultry' | 'nexa' | 'portfolio' | 'data';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  discipline: string;
  year: string;
  preview: PreviewKind;
  description: string;
  stack: string[];
  challenge: string;
  approach: string;
  outcome: string;
  features: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 'google-local-sentiment',
    number: '01',
    title: 'Google Local Datasets - Sentiment Analysis (School Assignment)',
    category: 'Data/AI',
    discipline: 'DATA SCIENCE / AI',
    year: '2026',
    preview: 'data',
    description: 'Cleaning, analysing and classifying sentiment across 66,000+ Google Local reviews and places.',
    stack: ['Python', 'pandas', 'NLTK', 'scikit-learn', 'SQLite'],
    challenge: 'Work with large, messy real-world data (22,476 places, 21,767 reviews, 21,858 users) with broken links, missing values, and free-text that needed careful cleaning.',
    approach: 'Cleaned and structured data with pandas and regex, profiled quality, cross-checked with SQL in SQLite, preprocessed text (language detection, contraction expansion, spell correction, tokenization, lemmatization), and compared VADER, TextBlob and Logistic Regression for sentiment classification.',
    outcome: 'Classified sentiment of 15,960 English reviews. Logistic Regression achieved 85.3% accuracy on a held-out test set (VADER 83.4%, TextBlob 80.4%). Findings translated into a business strategy with data ethics and GDPR safeguards considered.',
    features: ['End-to-end data cleaning and profiling', 'NLP preprocessing pipeline', 'Multi-model sentiment classification with evaluation', 'SQL validation of pandas results', 'Ethics and GDPR considerations'],
  },
  {
    id: 'network-intrusion-detection',
    number: '02',
    title: 'Network Intrusion Detection',
    category: 'Cybersecurity',
    discipline: 'CYBERSECURITY / PYTHON',
    year: '2026',
    preview: 'nids',
    description: 'Making invisible threats visible. A real-time network security tool, built from the ground up.',
    stack: ['Python', 'Scapy', 'Flask', 'Chart.js'],
    challenge: 'Understand how network attacks actually work, then build a system that can recognise them in live traffic. No follow-along tutorial, just independent research, experimentation, and a lot of debugging.',
    approach: 'Built a packet-capture engine with Python and Scapy, using sliding time windows to identify suspicious traffic patterns. A Flask dashboard brings detections into view with timestamped event logs, attack breakdowns, and automatically refreshed data.',
    outcome: 'Successfully detected port scans, SYN floods, and ARP sweeps in a controlled test environment using a Kali Linux attacker VM and a Windows defender. This is a hands-on learning system, not a production-grade security product.',
    features: ['Live network traffic capture and analysis', 'Port scan, SYN flood, ARP sweep, and ping sweep detection', 'Persistent logs and configurable detection thresholds', 'Dashboard with attack breakdowns and an event timeline'],
    github: 'https://github.com/Thando-rgb/NIDS',
  },
  {
    id: 'poultry-management',
    number: '03',
    title: 'Poultry Management System',
    category: 'Web development',
    discipline: 'FULL-STACK / AGRICULTURE',
    year: '2025 - PRESENT',
    preview: 'poultry',
    description: 'Less paperwork. Healthier flocks. A practical platform for smallholder farmers in Lilongwe.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    challenge: 'Smallholder poultry farmers need a straightforward way to understand their operations, from daily egg production to the real cost of feed. The experience needs to work on smartphones and low-bandwidth connections.',
    approach: 'Designed and developed a responsive management platform with an intuitive overview of flock inventory, bird health, feed consumption, production, and finances. The interface prioritises the everyday tasks farmers actually need to complete.',
    outcome: 'Deployed as a pilot with 10 local farmers in Lilongwe, with positive feedback on usability and practical impact. The platform continues to develop around real farmer needs.',
    features: ['Flock inventory, breed, age, and health tracking', 'Feed consumption, stock, and cost management', 'Egg production, mortality, and vaccination records', 'Financial tracking to support informed decisions'],
  },
  {
    id: 'nexacode',
    number: '04',
    title: 'NexaCode',
    category: 'Web development',
    discipline: 'WEB DEVELOPMENT / BUSINESS',
    year: '2026',
    preview: 'nexa',
    description: 'A clear digital presence for a technology business, engineered for performance and reliability.',
    stack: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Playwright'],
    challenge: 'Give NexaCode a responsive, professional marketing platform with a clear service hierarchy and a stable technical foundation.',
    approach: 'Built the platform on Next.js and Tailwind CSS, deployed through Vercel, and integrated Playwright end-to-end testing. Diagnosed and resolved a critical Content Security Policy nonce mismatch that was causing hydration failures across the site.',
    outcome: 'Delivered the company\'s primary marketing and business platform, along with a practical improvement roadmap covering SEO, WCAG accessibility, security hardening, and code modernisation.',
    features: ['Responsive service and business presentation', 'Performance-conscious Next.js architecture', 'Automated end-to-end validation with Playwright', 'Security debugging and a long-term improvement roadmap'],
    live: 'https://nexa-web-swart.vercel.app/',
  },
  {
    id: 'personal-portfolio',
    number: '05',
    title: 'Personal Portfolio',
    category: 'Web development',
    discipline: 'DESIGN / DEVELOPMENT',
    year: '2025',
    preview: 'portfolio',
    description: 'A home for my work and the story behind it. An exploration of thoughtful, lightweight web design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    challenge: 'Build a focused, accessible place to share my projects, technical skills, and growing professional experience without relying on a JavaScript framework.',
    approach: 'Created a dark-themed, mobile-first portfolio using semantic HTML, Tailwind CSS, and vanilla JavaScript. Added smooth section transitions, animated navigation, and live project previews.',
    outcome: 'Shipped a responsive personal website on Vercel, bringing project work, experience, and direct contact avenues together in one place. The original version remains available to explore.',
    features: ['Framework-free, modular implementation', 'Responsive navigation and smooth scrolling', 'Live iframe project previews on hover', 'Accessible content structure and direct contact links'],
    github: 'https://github.com/Thando-rgb/portfolio',
    live: 'https://thando-portfolio-steel.vercel.app/',
  },
]

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  organisation: string;
  type: string;
  details: string[];
  link?: string;
}

export const experience: JourneyItem[] = [
  {
    id: 'nexa-role',
    period: '2026',
    title: 'Co-founder, Chief Strategy Officer & Web Developer',
    organisation: 'NexaCode Systems',
    type: 'DEVELOPMENT',
    details: [
      'Lead company strategy and documentation for a six-person freelance team offering web development, mobile app development and cybersecurity services.',
      'Designed and built the company\'s primary marketing platform with Next.js 14, Tailwind CSS, and JavaScript, architected for performance and SEO, deployed to Vercel.',
      'Resolved a critical CSP nonce mismatch causing sitewide hydration failures and introduced Playwright end-to-end testing with an automated validation pipeline that runs before production deploys.',
      'Established a roadmap for SEO, WCAG accessibility, security hardening, and code modernisation.',
    ],
    link: 'https://nexa-web-swart.vercel.app/',
  },
  {
    id: 'taskmate-role',
    period: '2026',
    title: 'Systems & UX Audit Consultant',
    organisation: 'TaskMate Malawi',
    type: 'INDEPENDENT PROJECT',
    details: [
      'Audited a live MVP (taskmate-malawi-hub.lovable.app) across user experience, technical architecture, and conversion metrics.',
      'Identified six high-priority barriers, including pricing ambiguity and friction in payment security flows, and proposed alternative UI solutions to build user trust.',
      'Developed a four-phase implementation roadmap to improve mobile responsiveness (target 60-70% mobile traffic) and conversion rates.',
      'Recommended technical SEO improvements: schema.org structured data, heading hierarchies, and XML sitemaps.',
    ],
  },
  {
    id: 'mwezi-role',
    period: 'JUL - AUG 2026',
    title: 'Media & Data Volunteer',
    organisation: 'Mwezi Arts',
    type: 'VOLUNTEERING',
    details: [
      'Supported the five-day Theatre Renaissance Cabaret International Festival in Lilongwe, with participants from 11 countries.',
      'Collected and curated media content (footage and data) from TV stations and individual contributors for timely, multi-platform social distribution.',
      'Collaborated with an international team during live operations, coordinating accreditation, equipment, and laptop-based on-site logistics.',
    ],
  },
]

export const education: JourneyItem[] = [
  {
    id: 'level-five',
    period: 'EXPECTED 2027',
    title: 'Level 5 Diploma',
    organisation: 'Computing with Business Management',
    type: 'NACIT',
    details: [
      'Currently studying at the National College of Information Technology in Lilongwe, Malawi.',
      'Coursework: Backend Web Development, Big Data Analysis and Data Science, Mobile App Development, and Principles of Business Operations.',
    ],
  },
  {
    id: 'level-four',
    period: '2025',
    title: 'Level 4 Diploma',
    organisation: 'Computing with Business Management',
    type: 'NACIT',
    details: [
      'Completed at the National College of Information Technology.',
      'Coursework: Frontend Web Development, Computer Networks, Databases, eBusiness, Understanding Business Organisations, and Essentials of Business Management.',
    ],
  },
  {
    id: 'level-three',
    period: '2025',
    title: 'Level 3 Diploma',
    organisation: 'Computing',
    type: 'NACIT',
    details: [
      'Completed at the National College of Information Technology.',
      'Coursework: Python Programming, Web Technologies, Computer Science, Object-Oriented Programming, and System Analysis and Design.',
    ],
  },
]

export const skills = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'HTML & CSS', 'SQL', 'PHP'] },
  { title: 'Frameworks', items: ['React', 'React Native', 'Next.js', 'Flask', 'Tailwind CSS'] },
  { title: 'Data & Analytics', items: ['pandas', 'NLTK', 'scikit-learn', 'Jupyter', 'STATA', 'ODK', 'SurveyCTO', 'SQLite'] },
  { title: 'Security & Networking', items: ['Scapy', 'Kali Linux', 'Network security', 'Networking', 'Technical audits'] },
  { title: 'Tools', items: ['Git', 'Linux', 'Node.js', 'MongoDB', 'VS Code', 'Playwright'] },
  { title: 'Mobile Development', items: ['Flutter', 'Swift'] },
  { title: 'Professional Development', items: ['Pursuing certifications in Networking, Cloud Computing and Cybersecurity through Nzeru Hub'] },
]
