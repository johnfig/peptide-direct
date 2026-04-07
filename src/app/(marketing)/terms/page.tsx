import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SUPPORT_EMAIL, PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for PeptideRx Direct telehealth peptide therapy platform. Read our terms governing service use, eligibility, payments, and more.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsOfServicePage() {
  return (
    <article className="py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" },
          ]}
        />

        <header className="mt-6">
          <h1 className="text-3xl font-bold text-navy md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: March 1, 2026
          </p>
        </header>

        <div className="prose-legal mt-10 space-y-10 text-gray-600 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using the PeptideRx Direct website, mobile
              application, telehealth platform, or any related services
              (collectively, the &ldquo;Services&rdquo;), you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). If you do not agree with any part
              of these Terms, you must not access or use the Services.
            </p>
            <p className="mt-3">
              PeptideRx Direct reserves the right to modify these Terms at any
              time. Material changes will be communicated via email to the
              address associated with your account or through a prominent notice
              on our website. Your continued use of the Services following the
              posting of revised Terms constitutes your acceptance of such
              changes.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              2. Description of Services
            </h2>
            <p className="mt-3">
              PeptideRx Direct is a telehealth platform that connects patients
              with licensed medical providers who evaluate, prescribe, and
              monitor peptide therapy protocols. Our Services include, but are
              not limited to:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                Online health assessments and medical intake questionnaires
              </li>
              <li>
                Telehealth video consultations with licensed physicians and
                healthcare providers
              </li>
              <li>
                Prescription of peptide medications when clinically appropriate
              </li>
              <li>
                Coordination with licensed US compounding pharmacies for
                medication fulfillment
              </li>
              <li>
                Ongoing monitoring, protocol adjustments, and follow-up
                consultations
              </li>
              <li>
                Educational content and resources related to peptide therapy
              </li>
            </ul>
            <p className="mt-3">
              PeptideRx Direct does not directly practice medicine. Medical
              services are provided by independently licensed healthcare
              providers who use our platform to deliver care. PeptideRx Direct
              facilitates the technology, logistics, and administrative
              infrastructure that supports the provider-patient relationship.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              3. Eligibility Requirements
            </h2>
            <p className="mt-3">
              To use the Services, you must meet the following eligibility
              requirements:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                You must be at least 18 years of age at the time of
                registration.
              </li>
              <li>
                You must be a legal resident of the United States or its
                territories with a valid US mailing address for medication
                delivery.
              </li>
              <li>
                You must provide accurate, complete, and current medical history
                and personal health information as requested during the intake
                process.
              </li>
              <li>
                You must have the legal capacity to enter into a binding
                agreement and consent to medical treatment.
              </li>
              <li>
                You must not be using the Services on behalf of another person
                without proper legal authorization (e.g., healthcare proxy or
                power of attorney).
              </li>
            </ul>
            <p className="mt-3">
              PeptideRx Direct reserves the right to refuse service, terminate
              accounts, or cancel orders at our sole discretion if eligibility
              requirements are not met or if we reasonably believe the
              information provided is inaccurate.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              4. Medical Disclaimers
            </h2>
            <p className="mt-3">
              The Services provided through PeptideRx Direct are not a
              substitute for in-person medical care, emergency medical services,
              or the care of your primary care physician or specialist. If you
              are experiencing a medical emergency, call 911 or go to the
              nearest emergency department immediately.
            </p>
            <p className="mt-3">
              Prescribing decisions are made solely by licensed healthcare
              providers based on their independent medical judgment. PeptideRx
              Direct does not guarantee that any specific medication will be
              prescribed. Providers reserve the right to decline treatment,
              recommend alternative therapies, or refer you to another
              healthcare professional if they determine that peptide therapy is
              not clinically appropriate for your condition.
            </p>
            <p className="mt-3">
              Peptide therapy involves the use of prescription medications that
              carry inherent risks and potential side effects. Results vary by
              individual and are not guaranteed. You acknowledge that you have
              been informed of the risks and benefits of telehealth services and
              peptide therapy, and that you consent to treatment voluntarily.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              5. Account Responsibilities
            </h2>
            <p className="mt-3">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You agree to:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                Provide accurate and truthful information when creating your
                account and completing medical intake forms.
              </li>
              <li>
                Promptly update your account information if there are any
                changes to your medical history, medications, allergies, or
                contact information.
              </li>
              <li>
                Notify PeptideRx Direct immediately if you suspect unauthorized
                access to your account.
              </li>
              <li>
                Not share your account credentials with any third party or allow
                others to use your account.
              </li>
              <li>
                Not use the Services for any unlawful purpose or in violation of
                these Terms.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              6. Payment Terms
            </h2>
            <p className="mt-3">
              PeptideRx Direct operates on a monthly subscription model. By
              selecting a subscription plan, you authorize recurring charges to
              your designated payment method at the beginning of each billing
              cycle.
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Billing:</strong> Subscription fees are billed on a
                monthly recurring basis. The first charge occurs upon approval of
                your treatment plan by your provider.
              </li>
              <li>
                <strong>Price Changes:</strong> PeptideRx Direct reserves the
                right to adjust pricing. You will be notified at least 30 days
                before any price increase takes effect on your subscription.
              </li>
              <li>
                <strong>Cancellation:</strong> You may cancel your subscription
                at any time through the patient portal or by contacting our
                support team. Cancellation takes effect at the end of the current
                billing period. We require at least 7 days&apos; notice before
                your next billing date to avoid charges for the upcoming month.
              </li>
              <li>
                <strong>Refunds:</strong> Subscription fees are generally
                non-refundable once a billing cycle has begun. Refunds for
                medications that have already been compounded and shipped are not
                available due to patient safety regulations. Exceptions may be
                made at PeptideRx Direct&apos;s sole discretion.
              </li>
              <li>
                <strong>Failed Payments:</strong> If a payment fails, we will
                attempt to reprocess the charge. If payment cannot be collected
                after reasonable attempts, your subscription may be suspended
                until the outstanding balance is resolved.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              7. Shipping &amp; Delivery
            </h2>
            <p className="mt-3">
              Medications are shipped by our licensed compounding pharmacy
              partners directly to the address you provide. Shipping speed
              depends on your subscription tier: Starter plan (5&ndash;7
              business days), Performance plan (3&ndash;5 business days), and
              Elite plan (2&ndash;3 business days).
            </p>
            <p className="mt-3">
              PeptideRx Direct is not responsible for delays caused by carriers,
              weather events, customs (for US territories), incorrect shipping
              addresses provided by the patient, or circumstances outside our
              reasonable control. All shipments include cold-chain packaging to
              maintain medication stability. If you receive a damaged or
              incorrect shipment, contact us within 48 hours for a replacement.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              8. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on the PeptideRx Direct platform, including but not
              limited to text, graphics, logos, images, software, and the
              compilation thereof, is the property of PeptideRx Direct or its
              content suppliers and is protected by United States and
              international copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, or otherwise exploit any content from the
              Services without the prior written consent of PeptideRx Direct,
              except for personal, non-commercial use related to your own
              healthcare.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by applicable law, PeptideRx
              Direct, its officers, directors, employees, agents, and affiliates
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, use, or goodwill, arising out of or in
              connection with your use of the Services.
            </p>
            <p className="mt-3">
              PeptideRx Direct&apos;s total aggregate liability to you for all
              claims arising out of or related to the Services shall not exceed
              the total amount you paid to PeptideRx Direct during the twelve
              (12) months preceding the claim.
            </p>
            <p className="mt-3">
              Nothing in these Terms is intended to limit liability for gross
              negligence, willful misconduct, or any liability that cannot be
              excluded or limited by applicable law.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              10. Governing Law
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, without regard to its conflict
              of law provisions. Any legal proceedings arising out of or relating
              to these Terms or your use of the Services shall be brought
              exclusively in the state or federal courts located in Wilmington,
              Delaware, and you hereby consent to the personal jurisdiction of
              such courts.
            </p>
            <p className="mt-3">
              Any dispute arising under these Terms shall first be submitted to
              good-faith mediation. If mediation is unsuccessful, disputes shall
              be resolved through binding arbitration administered by the
              American Arbitration Association under its Healthcare Arbitration
              Rules, except that either party may seek injunctive relief in court
              for intellectual property matters.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              11. Contact Information
            </h2>
            <p className="mt-3">
              If you have questions about these Terms of Service, please contact
              us:
            </p>
            <ul className="mt-3 list-none space-y-1.5 pl-0">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-medical-blue hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <strong>Phone:</strong> {PHONE}
              </li>
              <li>
                <strong>Mail:</strong> PeptideRx Direct, Attn: Legal Department,
                1209 Orange Street, Wilmington, DE 19801
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
