import { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  {
    label: 'Peptides',
    href: '/peptides',
    children: [
      { label: 'BPC-157', href: '/peptides/bpc-157' },
      { label: 'TB-500', href: '/peptides/tb-500' },
      { label: 'CJC-1295/Ipamorelin', href: '/peptides/cjc-1295-ipamorelin' },
      { label: 'Sermorelin', href: '/peptides/sermorelin' },
      { label: 'PT-141', href: '/peptides/pt-141' },
      { label: 'Tesamorelin', href: '/peptides/tesamorelin' },
    ],
  },
  {
    label: 'How It Works',
    href: '/how-it-works',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'FAQs',
    href: '/faqs',
  },
];

export const footerNav: NavItem[] = [
  {
    label: 'Peptides',
    href: '/peptides',
    children: [
      { label: 'BPC-157', href: '/peptides/bpc-157' },
      { label: 'TB-500', href: '/peptides/tb-500' },
      { label: 'CJC-1295/Ipamorelin', href: '/peptides/cjc-1295-ipamorelin' },
      { label: 'Sermorelin', href: '/peptides/sermorelin' },
      { label: 'PT-141', href: '/peptides/pt-141' },
      { label: 'Tesamorelin', href: '/peptides/tesamorelin' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    label: 'Support',
    href: '#',
    children: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Patient Portal', href: '/portal' },
      { label: 'Shipping Info', href: '/faqs#shipping' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
  {
    label: 'Legal',
    href: '#',
    children: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'HIPAA Notice', href: '/hipaa' },
      { label: 'Telehealth Consent', href: '/telehealth-consent' },
    ],
  },
];
