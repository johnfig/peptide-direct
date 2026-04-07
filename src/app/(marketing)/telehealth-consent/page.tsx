import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SUPPORT_EMAIL, PHONE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Telehealth Informed Consent",
  description:
    "Telehealth Informed Consent for PeptideRx Direct. Understand the nature, risks, benefits, and your rights related to telehealth consultations for peptide therapy.",
  alternates: { canonical: `${SITE_URL}/telehealth-consent` },
};

export default function TelehealthConsentPage() {
  return (
    <article className="py-10 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Telehealth Consent" },
          ]}
        />

        <header className="mt-6">
          <h1 className="text-3xl font-bold text-navy md:text-4xl">
            Telehealth Informed Consent
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: March 1, 2026
          </p>
        </header>

        <div className="prose-legal mt-10 space-y-10 text-gray-600 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              1. Purpose of Telehealth Services
            </h2>
            <p className="mt-3">
              PeptideRx Direct uses telehealth technology to deliver healthcare
              services remotely, allowing you to consult with licensed medical
              providers through secure video, audio, and messaging
              communications. The purpose of our telehealth services is to
              evaluate your candidacy for peptide therapy, design personalized
              treatment protocols, prescribe appropriate medications, and
              provide ongoing monitoring and follow-up care.
            </p>
            <p className="mt-3">
              Telehealth is not intended to replace your relationship with your
              primary care physician or specialist. We encourage you to maintain
              regular care with your existing healthcare providers and to inform
              them of any treatments prescribed through PeptideRx Direct.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              2. Nature of Telehealth Consultations
            </h2>
            <p className="mt-3">
              During a telehealth consultation, your provider will review your
              medical history, discuss your health concerns and treatment goals,
              perform a clinical assessment based on the information you
              provide, and make recommendations regarding peptide therapy. The
              consultation may include:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                Live video or audio consultations using HIPAA-compliant
                telehealth technology
              </li>
              <li>
                Asynchronous (store-and-forward) review of your medical intake
                forms, lab results, and health questionnaires
              </li>
              <li>
                Secure messaging through the patient portal for follow-up
                questions and protocol adjustments
              </li>
              <li>
                Review of uploaded photographs, documents, or test results
                relevant to your care
              </li>
            </ul>
            <p className="mt-3">
              Your provider may determine that your condition requires an
              in-person examination, diagnostic testing, or referral to a
              specialist. In such cases, your provider will advise you
              accordingly and may assist in facilitating appropriate in-person
              care.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              3. Risks and Benefits
            </h2>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Benefits of Telehealth
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>
                Convenient access to specialized providers regardless of your
                geographic location
              </li>
              <li>
                Reduced need for travel, time off work, and associated costs of
                in-person visits
              </li>
              <li>
                Faster access to consultations and follow-up care
              </li>
              <li>
                Ability to receive care from the comfort and privacy of your own
                home
              </li>
              <li>
                Secure digital recordkeeping for easy access to your treatment
                history
              </li>
            </ul>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Risks and Limitations
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>
                Telehealth consultations rely on electronic communication,
                which may be subject to technical difficulties including poor
                video or audio quality, network interruptions, or software
                malfunctions
              </li>
              <li>
                The inability to perform a hands-on physical examination may
                limit your provider&apos;s ability to fully assess your
                condition, potentially resulting in misdiagnosis or incomplete
                evaluation
              </li>
              <li>
                Despite strong security measures, there is a small risk that
                electronic communications could be intercepted or accessed by
                unauthorized parties
              </li>
              <li>
                Delays in care may occur due to technology failures, and in such
                situations, alternatives including rescheduling or in-person
                referral may be recommended
              </li>
              <li>
                Your provider may determine that telehealth is not appropriate
                for your specific medical situation and may recommend in-person
                evaluation instead
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              4. Patient Rights and Responsibilities
            </h2>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Your Rights
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>
                You have the right to withdraw your consent and discontinue
                telehealth services at any time without affecting your right to
                future care or treatment
              </li>
              <li>
                You have the right to request an in-person consultation instead
                of or in addition to telehealth services
              </li>
              <li>
                You have the right to know the identity and qualifications of
                the provider delivering your care
              </li>
              <li>
                You have the right to be informed of expected wait times and the
                expected duration of consultations
              </li>
              <li>
                You have the right to privacy and confidentiality during your
                telehealth sessions, as outlined in our Privacy Policy and
                HIPAA Notice
              </li>
              <li>
                You have the right to a copy of your medical records generated
                through our platform
              </li>
            </ul>

            <h3 className="mt-4 text-lg font-medium text-gray-800">
              Your Responsibilities
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-6">
              <li>
                Provide complete and accurate medical history, including all
                current medications, supplements, allergies, and pre-existing
                conditions
              </li>
              <li>
                Inform your provider of any changes to your health status,
                medications, or circumstances during the course of treatment
              </li>
              <li>
                Follow the prescribed treatment protocol as directed by your
                provider, including dosing schedules, injection technique, and
                storage requirements
              </li>
              <li>
                Attend scheduled follow-up consultations and respond to provider
                communications in a timely manner
              </li>
              <li>
                Ensure you are in a private, appropriate environment during live
                video consultations
              </li>
              <li>
                Report any adverse reactions, side effects, or concerns to your
                provider promptly
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              5. Privacy and Confidentiality
            </h2>
            <p className="mt-3">
              All telehealth consultations are conducted through
              HIPAA-compliant, encrypted communication platforms. Your medical
              information is protected by federal and state privacy laws,
              including HIPAA. We implement the following safeguards:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                End-to-end encryption for all video, audio, and messaging
                communications
              </li>
              <li>
                Secure, access-controlled electronic health records
              </li>
              <li>
                Regular security audits and HIPAA compliance assessments
              </li>
              <li>
                Workforce training on privacy and confidentiality obligations
              </li>
              <li>
                Business Associate Agreements with all technology vendors who
                access PHI
              </li>
            </ul>
            <p className="mt-3">
              Telehealth sessions are not recorded unless you provide explicit
              written consent. Your provider may take clinical notes during or
              after the consultation, which become part of your medical record.
              For complete information about how we handle your data, please
              review our{" "}
              <a href="/privacy" className="text-medical-blue hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              6. Emergency Situations
            </h2>
            <p className="mt-3">
              Telehealth services provided through PeptideRx Direct are not
              designed to address emergency medical situations. If you
              experience any of the following, discontinue the telehealth
              session immediately and call 911 or go to the nearest emergency
              department:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                Severe allergic reaction (anaphylaxis), including difficulty
                breathing, swelling of the throat or face, or widespread hives
              </li>
              <li>
                Chest pain, shortness of breath, or symptoms of a heart attack
                or stroke
              </li>
              <li>
                Severe or uncontrolled bleeding
              </li>
              <li>
                Loss of consciousness, seizures, or altered mental status
              </li>
              <li>
                Suicidal thoughts or thoughts of self-harm
              </li>
              <li>
                Any other condition you believe to be a medical emergency
              </li>
            </ul>
            <p className="mt-3">
              When scheduling a telehealth consultation, you will be asked to
              provide your physical location so that emergency services can be
              dispatched to you if needed during the session.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              7. Technical Requirements
            </h2>
            <p className="mt-3">
              To participate in telehealth consultations, you will need:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                A device with a working camera and microphone (smartphone,
                tablet, or computer)
              </li>
              <li>
                A stable internet connection with a minimum recommended speed of
                5 Mbps for video consultations
              </li>
              <li>
                An up-to-date web browser (Chrome, Safari, Firefox, or Edge) or
                our mobile application
              </li>
              <li>
                A private, well-lit location where you can speak freely and
                without interruption
              </li>
            </ul>
            <p className="mt-3">
              PeptideRx Direct is not responsible for technical issues on your
              end, including insufficient internet bandwidth, outdated software,
              or hardware malfunctions. If technical difficulties prevent
              completion of a scheduled consultation, we will work with you to
              reschedule at no additional charge.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-navy">
              8. Consent to Treatment
            </h2>
            <p className="mt-3">
              By proceeding with a telehealth consultation through PeptideRx
              Direct, you acknowledge and agree to the following:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                I have read and understand this Telehealth Informed Consent
                document in its entirety.
              </li>
              <li>
                I understand the nature, risks, and benefits of telehealth
                services as described above.
              </li>
              <li>
                I understand that telehealth is not a substitute for emergency
                medical care, and I agree to seek emergency services when
                appropriate.
              </li>
              <li>
                I agree to provide accurate and complete medical information to
                my provider.
              </li>
              <li>
                I understand that my provider may determine that telehealth is
                not appropriate for my condition and may recommend in-person
                evaluation.
              </li>
              <li>
                I understand that I may withdraw my consent at any time without
                penalty or loss of benefits to which I am otherwise entitled.
              </li>
              <li>
                I consent to the use of telehealth technology for the purpose of
                receiving healthcare services, including evaluation,
                prescription, and monitoring of peptide therapy protocols.
              </li>
            </ul>
            <p className="mt-3">
              Your electronic signature or acceptance during the patient intake
              process constitutes your informed consent to receive telehealth
              services from PeptideRx Direct and its affiliated providers.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-navy">
              Questions About This Consent?
            </h2>
            <p className="mt-2">
              If you have any questions or concerns about this Telehealth
              Informed Consent, please contact us before your consultation:
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
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
