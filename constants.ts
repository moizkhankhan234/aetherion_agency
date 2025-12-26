import { 
  Cpu, Globe, Palette, Layers, Rocket, Shield, 
  Terminal, BarChart, Code, Smartphone, Zap, 
  Search, MessageSquare, Briefcase, Users
} from 'lucide-react';
import { NavLink, ServiceItem, PortfolioItem, StatItem, TimelineItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Process', path: '/process' },
  { label: 'Insights', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Partners', path: '/partners' },
    { label: 'Legal', path: '/legal' },
  ],
  services: [
    { label: 'Web Design', path: '/services/web-design' },
    { label: 'App Development', path: '/services/app-dev' },
    { label: 'AI Solutions', path: '/services/ai' },
    { label: 'SEO & Marketing', path: '/services/marketing' },
  ],
  social: [
    { label: 'Twitter', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'GitHub', url: '#' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Experience',
    description: 'Immersive, award-winning web platforms built on modern frameworks.',
    icon: Globe,
    tags: ['React', 'WebGL', 'Three.js'],
  },
  {
    id: 'branding',
    title: 'Digital Branding',
    description: 'Identity systems that cut through the noise and define markets.',
    icon: Palette,
    tags: ['Strategy', 'Identity', 'Voice'],
  },
  {
    id: 'ui-ux',
    title: 'Product Design',
    description: 'User-centric interfaces designed for conversion and retention.',
    icon: Layers,
    tags: ['UX Research', 'Prototyping', 'Systems'],
  },
  {
    id: 'ai-auto',
    title: 'AI Automation',
    description: 'Leveraging LLMs and agents to streamline complex workflows.',
    icon: Cpu,
    tags: ['GenAI', 'LLMs', 'Workflows'],
  },
  {
    id: 'saas',
    title: 'SaaS Engineering',
    description: 'Scalable, secure, and multi-tenant architectures for global products.',
    icon: Code,
    tags: ['Cloud', 'Scalability', 'Security'],
  },
  {
    id: 'mobile',
    title: 'Mobile Ecosystems',
    description: 'Native and cross-platform applications for iOS and Android.',
    icon: Smartphone,
    tags: ['React Native', 'Swift', 'Kotlin'],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Floxera ',
    category: 'Ecommerce web',
    // Dark abstract geometric, matching the "Void" aesthetic
    image: 'images/image1.png',
    description: 'An e-commerce website is an online platform that allows businesses to sell products and services directly to customers through secure digital transactions.',
    link: 'https://694dc88a1d20c70dede6c7aa--superlative-klepon-ebfa9f.netlify.app/'
  },
  {
    id: '2',
    title: 'GLOSSLAB',
    category: 'Automotive',
    // Dark luxury car detail, matching the "Ultimate Reflection" aesthetic
    image: 'images/image2.png',
    description: 'The aesthetics of physics. High-molecular graphene and ceramic infusion for automotive preservation.',
    link: 'https://694b0264f2ba81c01be82151--extraordinary-kataifi-6b63a2.netlify.app/'
  },
  {
    id: '3',
    title: 'OTI NEURAL',
    category: 'Gaming Interface',
    // Cyberpunk/Neon gaming setup, matching "Neural Overlink"
    image: 'images/image3.png',
    description: 'The next evolution of human-machine gaming parity. Direct consciousness connection.',
    link: 'https://694dca06ff4b40383a044a3c--heartfelt-madeleine-3372e0.netlify.app/'
  },
  {
    id: '4',
    title: 'GeoTerra',
    category: 'Spatial Intelligence',
    // Earth from space, matching "Navigate the Unknown"
    image: 'images/image4.png',
    description: 'Navigate the unknown. Real-time geographical telemetry and AI-driven predictive mapping.',
    link: 'https://694dc922ca751438b924b644--coruscating-dragon-d34b83.netlify.app/'
  },
  {
    id: '5',
    title: 'Onyx Infra ',
    category: 'Technology',
    // Clean bright kitchen/botanical, matching "Purely Botanical"
    image: 'images/image5.png',
    description: 'Onyx Infra is a secure digital infrastructure platform for sovereign-grade system control and privacy.',
    link: 'http://694dc607d57c3c05021fb21b--sprightly-peony-931c45.netlify.app/'
  },
  {
    id: '6',
    title: 'eduaether',
    category: 'educational',
    // Clean medical tech
    image: 'images/image6.png',
    description: 'Elevating the modern mind through a boundless, future-focused learning ecosystem.',
    link: 'https://694dcbaae05f920381d1b119--benevolent-lokum-f1bbc3.netlify.app/'
  },
]

export const STATS: StatItem[] = [
  { value: '150+', label: 'Global Clients' },
  { value: '45+', label: 'Design Awards' },
  { value: '98%', label: 'Retention Rate' },
  { value: '5yr', label: 'Market Leadership' },
];

export const TIMELINE: TimelineItem[] = [
  { year: '2019', title: 'The Inception', description: 'Founded as a boutique design studio in London.' },
  { year: '2021', title: 'Global Expansion', description: 'Opened offices in NYC and Tokyo, expanded into AI.' },
  { year: '2023', title: 'Enterprise Shift', description: 'Focus shifted to Fortune 500 digital transformation.' },
  { year: '2025', title: 'Aetherion V2', description: 'Launch of our proprietary AI-driven agency platform.' },
];