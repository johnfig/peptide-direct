import { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 149,
    period: 'month',
    description:
      'Perfect for individuals beginning their peptide therapy journey with a single targeted protocol.',
    features: [
      'Choose 1 peptide',
      'Monthly provider consultation',
      'Standard shipping (5-7 days)',
      'Email support',
      'Dosing guide included',
    ],
    highlighted: false,
    ctaText: 'Get Started',
  },
  {
    name: 'Performance',
    price: 249,
    period: 'month',
    description:
      'Our most popular plan for those ready to optimize recovery, performance, and well-being with a multi-peptide protocol.',
    features: [
      'Choose up to 2 peptides',
      'Bi-weekly provider check-ins',
      'Priority shipping (3-5 days)',
      'Priority support',
      'Body composition tracking',
      'Dosing optimization',
    ],
    highlighted: true,
    ctaText: 'Start Optimizing',
  },
  {
    name: 'Elite',
    price: 399,
    period: 'month',
    description:
      'The complete peptide therapy experience with maximum customization, dedicated support, and comprehensive lab monitoring.',
    features: [
      'Choose up to 3 peptides',
      'Weekly provider consultations',
      'Express shipping (2-3 days)',
      'Dedicated support line',
      'Quarterly lab work included',
      'Custom protocol design',
    ],
    highlighted: false,
    ctaText: 'Go Elite',
  },
];
