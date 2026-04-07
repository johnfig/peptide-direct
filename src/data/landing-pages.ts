import { LandingPage } from '@/types';

export const landingPages: LandingPage[] = [
  {
    slug: 'bpc-157',
    headline: 'Heal Faster with BPC-157 Peptide Therapy',
    subheadline:
      'Physician-supervised BPC-157 protocols for accelerated tissue repair, gut healing, and recovery. Delivered to your door through convenient telehealth.',
    ctaText: 'Start Your Recovery',
    benefits: [
      'Accelerates tendon, ligament, and muscle healing',
      'Supports gut lining repair and reduces GI inflammation',
      'Promotes new blood vessel formation at injury sites',
      'Reduces systemic inflammation naturally',
      'Neuroprotective properties support nerve healing',
      'Well-tolerated with minimal side effects',
    ],
    peptideSlug: 'bpc-157',
    pricingHighlight: 'Starting at $149/mo with the Starter plan',
  },
  {
    slug: 'peptide-therapy',
    headline: 'Peptide Therapy, Prescribed by Physicians, Delivered to You',
    subheadline:
      'Evidence-based peptide protocols for recovery, performance, anti-aging, and sexual health. Licensed providers, compounding pharmacies, and personalized treatment plans.',
    ctaText: 'Get Started Today',
    benefits: [
      'Board-certified physicians design your personalized protocol',
      'Peptides sourced from licensed US compounding pharmacies',
      'Convenient telehealth consultations from home',
      'Comprehensive plans starting at $149/month',
      'All supplies included with free shipping',
      'Ongoing provider monitoring and protocol optimization',
    ],
    pricingHighlight: 'Plans from $149/mo — no hidden fees',
  },
  {
    slug: 'recovery',
    headline: 'The Recovery Stack: BPC-157 + TB-500',
    subheadline:
      'Two powerful recovery peptides working through complementary mechanisms. The most popular combination for athletes, post-surgical patients, and anyone dealing with chronic injuries.',
    ctaText: 'Explore Recovery Protocols',
    benefits: [
      'BPC-157 heals locally while TB-500 works systemically',
      'Accelerated tissue repair through dual mechanisms of action',
      'Reduces inflammation and promotes new blood vessel growth',
      'Improves flexibility and range of motion',
      'Minimizes scar tissue and adhesion formation',
      'Ideal for chronic injuries that have not responded to conventional treatment',
    ],
    pricingHighlight: 'Available with the Performance plan at $249/mo',
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((lp) => lp.slug === slug);
}
