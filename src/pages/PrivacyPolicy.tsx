import React from "react";

export type PrivacyPolicyProps = {
  companyName?: string;
  address?: string;
  email?: string;
  phone?: string;
  dpoEmail?: string;
  lastUpdated?: string; // e.g. "2025-09-25"
  analyticsProvider?: string; // e.g. "Google Analytics 4"
};

/**
 * GDPR‑ready Privacy Policy component for EduKids / Editura EDU.
 *
 * Usage:
 * <PrivacyPolicy
 *   companyName="EduKids / Editura EDU"
 *   address="Str. Exemplu 123, București, România"
 *   email="info@edukids.com"
 *   phone="+123 456 7890"
 *   dpoEmail="dpo@edukids.com"
 *   lastUpdated="2025-09-25"
 *   analyticsProvider="Google Analytics 4"
 * />
 */
export default function PrivacyPolicy({
  companyName = "EduKids / Editura EDU",
  address = "{{Company Address}}",
  email = "info@edukids.com",
  phone = "+123 456 7890",
  dpoEmail = "{{DPO Email}}",
  lastUpdated = "{{DATE}}",
  analyticsProvider = "{{Analytics Provider}}",
}: PrivacyPolicyProps): React.ReactElement {
  return (
    <main className="container py-5">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <header className="mb-4">
            <h1 className="h2 mb-1">Privacy Policy</h1>
            <p className="text-muted mb-0">Last updated: {lastUpdated}</p>
          </header>

          <p className="lead">
            This Privacy Policy explains how <strong>{companyName}</strong>{" "}
            ("we", "us", "our") collects, uses, discloses, and protects personal
            data when you use our website, apps, and services. We process
            personal data in accordance with the EU General Data Protection
            Regulation (GDPR).
          </p>

          {/* Quick nav */}
          <nav className="mb-4">
            <ul className="list-inline small mb-0">
              {[
                ["controller", "Who we are"],
                ["data", "What data we collect"],
                ["children", "Children’s privacy"],
                ["legal", "Legal bases"],
                ["use", "How we use data"],
                ["sharing", "Sharing your data"],
                ["transfers", "International transfers"],
                ["retention", "Data retention"],
                ["rights", "Your rights"],
                ["cookies", "Cookies & analytics"],
                ["comms", "Communications"],
                ["security", "Security"],
                ["links", "Third‑party links"],
                ["changes", "Changes to this Policy"],
                ["contact", "Contact us"],
              ].map(([id, label]) => (
                <li key={id as string} className="list-inline-item me-3">
                  <a
                    href={`#${id}`}
                    className="link-primary text-decoration-none"
                  >
                    {label as string}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="controller" className="mb-4">
            <h2 className="h4">1) Who we are (Controller)</h2>
            <address className="mb-1">
              <strong>{companyName}</strong>
              <br />
              Address: {address}
              <br />
              Email: <a href={`mailto:${email}`}>{email}</a>
              <br />
              Phone: <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
            </address>
            <p>
              Data Protection Officer (if appointed):{" "}
              {dpoEmail ? (
                <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a>
              ) : (
                <em>not applicable</em>
              )}
            </p>
          </section>

          <section id="data" className="mb-4">
            <h2 className="h4">2) What data we collect</h2>
            <ul>
              <li>
                <strong>Account & profile data:</strong> name, email address,
                password, role (e.g., parent, teacher, student), school/class
                information.
              </li>
              <li>
                <strong>Contact & support:</strong> messages and attachments you
                send to support.
              </li>
              <li>
                <strong>Content you create:</strong> assignment results, quiz
                scores, uploaded files, drawings, recordings, notes.
              </li>
              <li>
                <strong>Usage & device data:</strong> pages viewed, clicks,
                session duration, IP address, browser type, device identifiers,
                approximate location (city/region), app diagnostics and crash
                logs.
              </li>
              <li>
                <strong>Payment & billing:</strong> payer name, transaction
                identifiers, partial card details (processed by our payment
                provider; we do not store full card numbers).
              </li>
              <li>
                <strong>Cookies and similar technologies</strong> (see Cookies
                section).
              </li>
            </ul>
            <p className="mb-0">
              We do not seek to collect special categories of data (e.g.,
              health, religion). Please avoid submitting such information.
            </p>
          </section>

          <section id="children" className="mb-4">
            <h2 className="h4">3) Children’s privacy</h2>
            <p>
              Our services may be used by children with the consent and
              supervision of a parent, guardian, or school. Where consent is
              required by law, we rely on verifiable parental/guardian consent
              for children under 16 (or the lower age permitted by local law,
              between 13–16). Teachers/schools are responsible for obtaining
              required permissions before creating student accounts.
            </p>
          </section>

          <section id="legal" className="mb-4">
            <h2 className="h4">4) Why we use your data (Legal bases)</h2>
            <ul>
              <li>
                <strong>Contract</strong> – to create/manage accounts, provide
                services, support.
              </li>
              <li>
                <strong>Consent</strong> – for certain communications,
                cookies/analytics (where required), and student account creation
                when applicable.
              </li>
              <li>
                <strong>Legitimate interests</strong> – to improve services,
                keep them secure, and prevent fraud (balanced against your
                rights).
              </li>
              <li>
                <strong>Legal obligation</strong> – to comply with
                accounting/tax/regulatory rules.
              </li>
            </ul>
          </section>

          <section id="use" className="mb-4">
            <h2 className="h4">5) How we use data</h2>
            <ul>
              <li>
                Provide, personalize, and maintain our website, apps, and
                content.
              </li>
              <li>
                Enable classroom features, assignments, progress tracking, and
                reports.
              </li>
              <li>Communicate about updates, security alerts, and support.</li>
              <li>Process payments/subscriptions (via payment partners).</li>
              <li>Monitor, debug, and improve performance and safety.</li>
              <li>Run analytics to improve learning outcomes and usability.</li>
            </ul>
            <p className="mb-0">
              We do not use student data for targeted advertising.
            </p>
          </section>

          <section id="sharing" className="mb-4">
            <h2 className="h4">6) Sharing your data</h2>
            <ul>
              <li>
                <strong>Service providers (processors):</strong> hosting, email
                delivery, analytics, customer support, payment processing—bound
                by contracts and confidentiality.
              </li>
              <li>
                <strong>Schools/teachers/parents:</strong> to enable educational
                oversight and safety.
              </li>
              <li>
                <strong>Legal/authorities:</strong> when required by law or to
                protect rights/safety.
              </li>
              <li>
                <strong>Business transfers:</strong> in the event of a merger,
                acquisition, or asset sale, with appropriate safeguards.
              </li>
            </ul>
            <p className="mb-0">We do not sell personal data.</p>
          </section>

          <section id="transfers" className="mb-4">
            <h2 className="h4">7) International transfers</h2>
            <p>
              If we transfer data outside the EEA/UK, we use approved safeguards
              such as Standard Contractual Clauses or transfer to countries with
              an adequacy decision.
            </p>
          </section>

          <section id="retention" className="mb-4">
            <h2 className="h4">8) Data retention</h2>
            <p>
              We keep personal data only as long as necessary to provide the
              service and meet legal obligations. If an account is inactive, we
              may delete or anonymize data after a reasonable period. You may
              request deletion at any time.
            </p>
          </section>

          <section id="rights" className="mb-4">
            <h2 className="h4">9) Your rights</h2>
            <ul>
              <li>
                <strong>Access</strong> your personal data and obtain a copy;{" "}
                <strong>rectify</strong>
                inaccuracies; <strong>erase</strong> data;{" "}
                <strong>restrict</strong> or
                <strong> object</strong> to processing in certain cases; and{" "}
                <strong>data portability</strong> for information you provided.
              </li>
              <li>
                <strong>Withdraw consent</strong> where processing is based on
                consent.
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href={`mailto:${email}`}>{email}</a>. We may verify your
              identity before responding. For student data, requests may require
              coordination with the school/teacher.
            </p>
            <p className="mb-0">
              You can also lodge a complaint with your local data protection
              authority.
            </p>
          </section>

          <section id="cookies" className="mb-4">
            <h2 className="h4">10) Cookies & analytics</h2>
            <p>
              We use cookies and similar technologies to remember preferences,
              keep you signed in, measure traffic/usage patterns, and
              troubleshoot issues. Where required, we will request your consent
              and provide a cookie banner with granular controls. You can change
              preferences any time in <strong>Cookie Settings</strong> or your
              browser.
            </p>
            <p className="mb-0">
              <strong>Third‑party analytics:</strong> We may use providers such
              as {analyticsProvider}. These partners process usage data to help
              us analyze and improve the service.
            </p>
          </section>

          <section id="comms" className="mb-4">
            <h2 className="h4">11) Communications & marketing</h2>
            <p>
              We may send service‑related messages (e.g., security or
              transactional emails). With your consent (where required), we may
              send newsletters or product updates — you can opt out at any time
              via the unsubscribe link or by contacting us.
            </p>
          </section>

          <section id="security" className="mb-4">
            <h2 className="h4">12) Security</h2>
            <p>
              We employ technical and organizational measures to protect
              personal data, including encryption in transit, access controls,
              and regular security reviews. No method of transmission or storage
              is completely secure; we continuously improve our safeguards.
            </p>
          </section>

          <section id="links" className="mb-4">
            <h2 className="h4">13) Third‑party links</h2>
            <p>
              Our services may link to external sites or content we do not
              control. We are not responsible for their privacy practices;
              please review their policies.
            </p>
          </section>

          <section id="changes" className="mb-4">
            <h2 className="h4">14) Changes to this Policy</h2>
            <p>
              We may update this Policy from time to time. Material changes will
              be notified via our website, app, or email. The Last updated date
              reflects the latest version.
            </p>
          </section>

          <section id="contact" className="mb-5">
            <h2 className="h4">15) Contact us</h2>
            <address>
              Email: <a href={`mailto:${email}`}>{email}</a>
              <br />
              Phone: <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
              <br />
              Address: {address}
            </address>
          </section>

          <section className="p-3 border rounded bg-light">
            <h3 className="h6">Quick summary (plain language)</h3>
            <ul className="mb-0">
              <li>
                We collect only what we need to run EduKids and support
                learning.
              </li>
              <li>
                Parents/guardians or schools must consent for children where
                required.
              </li>
              <li>No sale of personal data. No targeted ads to students.</li>
              <li>
                You can access, fix, or delete your data by contacting us.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
