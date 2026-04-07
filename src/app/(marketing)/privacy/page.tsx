import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SUPPORT_EMAIL, PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PeptideRx Direct Privacy Policy. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA regulations.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <header className="mt-6">
          <h1 className="text-3xl font-bold text-navy md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: March 1, 2026
          </p>
        </header>

        <div className="prose-legal mt-10 space-y-10 text-gray-600 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              1. Introduction
            </h2>
            <p className="mt-3">
              PeptideRx Direct (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting the privacy and
              security of your personal information and Protected Health
              Information (&ldquo;PHI&rdquo;). This Privacy Policy describes how
              we collect, use, disclose, and safeguard your information when you
              use our website, telehealth platform, and related services
              (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p className="mt-3">
              As a telehealth platform that handles health information,
              PeptideRx Direct operates in compliance with the Health Insurance
              Portability and Accountability Act of 1996 (&ldquo;HIPAA&rdquo;),
              the HITECH Act, and applicable state privacy laws. This Privacy
              Policy supplements, and does not replace, our Notice of Privacy
              Practices required under HIPAA.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              2. Information We Collect
            </h2>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Personal Information
            </h3>
            <p className="mt-2">
              When you create an account and use our Services, we collect
              identifying information including your full legal name, date of
              birth, email address, phone number, mailing address, and payment
              information (processed through PCI-compliant payment processors).
            </p>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Health Information
            </h3>
            <p className="mt-2">
              To provide telehealth services and facilitate prescriptions, we
              collect health-related information including your medical history,
              current medications and supplements, allergies, prior diagnoses,
              lab results, treatment goals, symptoms, provider consultation
              notes, and prescription records. This information is classified as
              Protected Health Information (PHI) under HIPAA.
            </p>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Device &amp; Technical Information
            </h3>
            <p className="mt-2">
              We automatically collect certain technical information when you
              access our Services, including your IP address, browser type and
              version, operating system, device identifiers, referring URLs, and
              time zone settings. This information is used for security, fraud
              prevention, and to improve our Services.
            </p>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Usage Data
            </h3>
            <p className="mt-2">
              We collect information about how you interact with our Services,
              including pages viewed, features used, click patterns, session
              duration, and navigation paths. This data is collected through
              cookies, pixels, and analytics tools and is used to improve the
              user experience and optimize our platform.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                To facilitate telehealth consultations and provide medical
                services through our licensed providers
              </li>
              <li>
                To process prescriptions and coordinate medication fulfillment
                with pharmacy partners
              </li>
              <li>
                To manage your account, process payments, and administer your
                subscription
              </li>
              <li>
                To communicate with you about your treatment, appointments, and
                account activity
              </li>
              <li>
                To provide customer support and respond to inquiries
              </li>
              <li>
                To improve, personalize, and optimize our Services and user
                experience
              </li>
              <li>
                To comply with legal obligations, including medical
                recordkeeping and reporting requirements
              </li>
              <li>
                To detect, prevent, and address fraud, abuse, and security
                incidents
              </li>
              <li>
                To send marketing communications (with your consent, where
                required by law)
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              4. HIPAA Compliance
            </h2>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Protected Health Information (PHI)
            </h3>
            <p className="mt-2">
              Your health information collected through medical intake forms,
              consultations, prescriptions, and treatment records is classified
              as PHI and is subject to the privacy and security protections
              required by HIPAA. We use and disclose PHI only as permitted or
              required by the HIPAA Privacy Rule, including for treatment,
              payment, and healthcare operations.
            </p>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Business Associates
            </h3>
            <p className="mt-2">
              We share PHI with third-party service providers
              (&ldquo;Business Associates&rdquo;) who perform functions on our
              behalf that involve access to PHI. These include our compounding
              pharmacy partners, electronic health record (EHR) providers,
              telehealth technology vendors, and payment processors. All
              Business Associates are required to sign Business Associate
              Agreements (BAAs) and maintain HIPAA-compliant safeguards for your
              information.
            </p>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Your HIPAA Rights
            </h3>
            <p className="mt-2">
              Under HIPAA, you have the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>
                Access and obtain a copy of your PHI maintained by PeptideRx
                Direct
              </li>
              <li>
                Request amendments or corrections to your PHI if you believe it
                is inaccurate or incomplete
              </li>
              <li>
                Request restrictions on certain uses and disclosures of your PHI
              </li>
              <li>
                Request an accounting of disclosures of your PHI made by
                PeptideRx Direct
              </li>
              <li>
                Request to receive communications from us through alternative
                means or at alternative locations
              </li>
              <li>
                File a complaint with PeptideRx Direct or the U.S. Department of
                Health and Human Services if you believe your privacy rights
                have been violated
              </li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact our Privacy Officer at{" "}
              <a
                href={`mailto:privacy@peptiderxdirect.com`}
                className="text-medical-blue hover:underline"
              >
                privacy@peptiderxdirect.com
              </a>
              .
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              5. Information Sharing
            </h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information or PHI to
              third parties for marketing purposes. We may share your
              information in the following limited circumstances:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Healthcare Providers:</strong> With the licensed
                physicians and healthcare providers who deliver care through our
                platform, as necessary for your treatment.
              </li>
              <li>
                <strong>Pharmacy Partners:</strong> With our licensed compounding
                pharmacy partners to fulfill your prescriptions and deliver
                medications.
              </li>
              <li>
                <strong>Service Providers:</strong> With trusted third-party
                vendors who assist in operating our platform, processing
                payments, and delivering services, subject to contractual
                confidentiality obligations and, where applicable, BAAs.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, subpoena, or government regulatory authority, or when we
                believe disclosure is necessary to protect our rights, your
                safety, or the safety of others.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of all or a portion of our assets,
                your information may be transferred as part of the transaction,
                subject to applicable privacy protections.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              6. Data Security Measures
            </h2>
            <p className="mt-3">
              We implement administrative, technical, and physical safeguards
              designed to protect your information in accordance with HIPAA
              Security Rule requirements. These measures include:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                AES-256 encryption for data at rest and TLS 1.3 encryption for
                data in transit
              </li>
              <li>
                Multi-factor authentication for all accounts with access to PHI
              </li>
              <li>
                Role-based access controls limiting data access to authorized
                personnel on a need-to-know basis
              </li>
              <li>
                Regular security assessments, vulnerability scanning, and
                penetration testing
              </li>
              <li>
                Continuous monitoring, intrusion detection systems, and automated
                threat response
              </li>
              <li>
                Mandatory workforce security training and HIPAA compliance
                education
              </li>
              <li>
                Documented incident response procedures for potential data
                breaches
              </li>
            </ul>
            <p className="mt-3">
              While we take extensive precautions to protect your information, no
              method of transmission over the internet or electronic storage is
              100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              7. Your Rights
            </h2>
            <p className="mt-3">
              In addition to your HIPAA rights outlined in Section 4, you have
              the following rights regarding your personal information:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Access:</strong> You may request access to the personal
                information we hold about you at any time.
              </li>
              <li>
                <strong>Correction:</strong> You may request that we correct
                inaccurate or incomplete personal information.
              </li>
              <li>
                <strong>Deletion:</strong> You may request deletion of your
                personal information, subject to legal and regulatory retention
                requirements. Note that medical records must be retained as
                required by applicable state and federal law.
              </li>
              <li>
                <strong>Data Portability:</strong> You may request a copy of
                your personal information in a structured, commonly used, and
                machine-readable format.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may opt out of marketing
                communications at any time by clicking the unsubscribe link in
                any marketing email or by contacting us directly.
              </li>
            </ul>
            <p className="mt-3">
              Certain state laws, including the California Consumer Privacy Act
              (CCPA) and similar state privacy regulations, may provide
              additional rights. To exercise any of your rights, contact us
              using the information in Section 12.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              8. Cookies &amp; Tracking
            </h2>
            <p className="mt-3">
              We use cookies, pixels, and similar tracking technologies to
              operate and improve our Services. The types of cookies we use
              include:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Essential Cookies:</strong> Required for the platform to
                function, including authentication and session management. These
                cannot be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website so we can improve performance
                and user experience (e.g., Google Analytics).
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to track the
                effectiveness of advertising campaigns and deliver relevant ads
                (e.g., Google Ads, Meta Pixel).
              </li>
            </ul>
            <p className="mt-3">
              You can manage your cookie preferences through your browser
              settings. Disabling certain cookies may affect the functionality
              of our Services. We honor Do Not Track (DNT) signals where
              technically feasible.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              9. Third-Party Services
            </h2>
            <p className="mt-3">
              Our Services may contain links to or integrate with third-party
              websites, applications, and services that are not operated by
              PeptideRx Direct. These third parties have their own privacy
              policies, and we are not responsible for their privacy practices.
              We encourage you to review the privacy policies of any third-party
              services you access through our platform.
            </p>
            <p className="mt-3">
              Third-party integrations used by our platform may include payment
              processors, video conferencing technology, email service
              providers, analytics platforms, and customer support tools. We
              select vendors that maintain appropriate security and privacy
              standards and, where PHI is involved, require HIPAA-compliant
              Business Associate Agreements.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              10. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              Our Services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from minors. If
              you are a parent or guardian and believe that your child has
              provided personal information to PeptideRx Direct, please contact
              us immediately. If we become aware that we have collected personal
              information from a minor, we will take steps to promptly delete
              such information.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              11. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will notify you by
              email or through a prominent notice on our website at least 30
              days before the changes take effect. The &ldquo;Last
              updated&rdquo; date at the top of this page indicates when the
              policy was most recently revised.
            </p>
            <p className="mt-3">
              Your continued use of the Services after the effective date of the
              revised Privacy Policy constitutes your acceptance of the changes.
              If you do not agree with the revised policy, you should
              discontinue use of the Services and contact us to request deletion
              of your non-medical personal information.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              12. Contact Information
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or wish to
              exercise your privacy rights, please contact us:
            </p>
            <ul className="mt-3 list-none space-y-1.5 pl-0">
              <li>
                <strong>Privacy Officer:</strong>{" "}
                <a
                  href="mailto:privacy@peptiderxdirect.com"
                  className="text-medical-blue hover:underline"
                >
                  privacy@peptiderxdirect.com
                </a>
              </li>
              <li>
                <strong>General Support:</strong>{" "}
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
                <strong>Mail:</strong> PeptideRx Direct, Attn: Privacy Officer,
                1209 Orange Street, Wilmington, DE 19801
              </li>
            </ul>
            <p className="mt-3">
              You may also file a complaint directly with the U.S. Department
              of Health and Human Services Office for Civil Rights if you
              believe your privacy rights under HIPAA have been violated.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
