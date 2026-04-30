import { Shield } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen text-gray-900 antialiased relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #fde68a 0%, #fdba74 15%, #fca5a5 30%, #c4b5fd 50%, #93c5fd 70%, #60a5fa 85%, #3b82f6 100%)' }} />
        <div className="animate-blob-1" style={{ position:'absolute', top:'-10%', left:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)' }} />
        <div className="animate-blob-2" style={{ position:'absolute', bottom:'-10%', right:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(96,165,250,0.5) 35%, transparent 65%)' }} />
        <div className="animate-blob-3" style={{ position:'absolute', top:'40%', left:'20%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(244,114,182,0.4) 0%, rgba(232,121,249,0.25) 40%, transparent 70%)' }} />
        <div className="animate-blob-4" style={{ position:'absolute', top:'10%', right:'10%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.3) 35%, transparent 65%)' }} />
      </div>
      <MegaHeader onTalkToSales={() => {}} />

      {/* Content */}
      <main className="relative pt-24 sm:pt-32 pb-12 lg:pb-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-blue-200 mb-6">
              <Shield className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-700">HIPAA COMPLIANT PRIVACY NOTICE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="text-gradient-flow">
                {t('legal.privacy.title')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {t('legal.privacy.effectiveDate')}: January 1, 2025 | {t('legal.privacy.lastUpdated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <a href="#introduction" className="text-gray-600 hover:text-blue-600 transition-colors">1. Introduction & HIPAA Commitment</a>
              <a href="#definitions" className="text-gray-600 hover:text-blue-600 transition-colors">2. Definitions</a>
              <a href="#information-collected" className="text-gray-600 hover:text-blue-600 transition-colors">3. Information We Collect</a>
              <a href="#phi-usage" className="text-gray-600 hover:text-blue-600 transition-colors">4. Use of Protected Health Information</a>
              <a href="#phi-disclosure" className="text-gray-600 hover:text-blue-600 transition-colors">5. Disclosure of PHI</a>
              <a href="#hipaa-rights" className="text-gray-600 hover:text-blue-600 transition-colors">6. Your Rights Under HIPAA</a>
              <a href="#security" className="text-gray-600 hover:text-blue-600 transition-colors">7. Security Safeguards</a>
              <a href="#baa" className="text-gray-600 hover:text-blue-600 transition-colors">8. Business Associate Agreements</a>
              <a href="#breach-notification" className="text-gray-600 hover:text-blue-600 transition-colors">9. Breach Notification Procedures</a>
              <a href="#minors" className="text-gray-600 hover:text-blue-600 transition-colors">10. Information About Minors</a>
              <a href="#state-laws" className="text-gray-600 hover:text-blue-600 transition-colors">11. State Privacy Laws</a>
              <a href="#international" className="text-gray-600 hover:text-blue-600 transition-colors">12. International Data Transfers</a>
              <a href="#retention" className="text-gray-600 hover:text-blue-600 transition-colors">13. Data Retention & Deletion</a>
              <a href="#changes" className="text-gray-600 hover:text-blue-600 transition-colors">14. Changes to This Policy</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">15. Contact Information</a>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 sm:space-y-8">
            <section id="introduction" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">1. Introduction & HIPAA Commitment</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                WYNTON LLC, doing business as Curbe ("Curbe," "we," "us," or "our"), is firmly committed to maintaining the privacy and security of your personal information, particularly Protected Health Information (PHI) as defined under the Health Insurance Portability and Accountability Act of 1996 (HIPAA), as amended by the Health Information Technology for Economic and Clinical Health Act (HITECH Act).
              </p>
              <p className="text-gray-600 mb-4">
                This Privacy Policy and HIPAA Notice of Privacy Practices describes how we collect, use, maintain, protect, and disclose your information when you use our customer relationship management (CRM) platform designed specifically for insurance agencies and agents handling health insurance products.
              </p>
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-900">Our Commitment:</strong> We understand that as a Business Associate under HIPAA, we have legal obligations to protect the confidentiality, integrity, and availability of PHI. This document serves as our Notice of Privacy Practices as required by 45 CFR § 164.520 and incorporates our broader privacy commitments under applicable federal and state laws.
              </p>
              <p className="text-gray-600">
                By using Curbe, you acknowledge that you have read and understood this Privacy Policy. If you are a Covered Entity (such as a health insurance agency), this Notice describes how medical information about your clients may be used and disclosed and how you and your clients can get access to this information.
              </p>
            </section>

            <section id="definitions" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                For purposes of this Privacy Policy, the following terms have the meanings set forth below:
              </p>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li><strong className="text-gray-900">Protected Health Information (PHI):</strong> Any information about health status, provision of health care, or payment for health care that can be linked to a specific individual. This includes medical records, insurance policy information, billing information, and any other health-related data that contains identifiable information about an individual.</li>
                <li><strong className="text-gray-900">Covered Entity:</strong> Health plans, health care clearinghouses, and health care providers who transmit health information in electronic form in connection with HIPAA-covered transactions. Most of our customers are Covered Entities (insurance agencies).</li>
                <li><strong className="text-gray-900">Business Associate:</strong> A person or entity that performs functions or activities on behalf of, or provides services to, a Covered Entity that involve access to PHI. Curbe acts as a Business Associate to our Covered Entity customers.</li>
                <li><strong className="text-gray-900">Personally Identifiable Information (PII):</strong> Information that can be used to identify, contact, or locate a single person, including but not limited to name, address, telephone number, email address, Social Security number, date of birth, and financial information.</li>
                <li><strong className="text-gray-900">Electronic PHI (ePHI):</strong> PHI that is created, stored, transmitted, or received electronically.</li>
                <li><strong className="text-gray-900">Minimum Necessary:</strong> The HIPAA principle requiring that only the minimum amount of PHI necessary to accomplish the intended purpose should be used, disclosed, or requested.</li>
                <li><strong className="text-gray-900">Treatment, Payment, and Health Care Operations (TPO):</strong> The three primary purposes for which PHI may be used and disclosed without individual authorization under HIPAA.</li>
              </ul>
            </section>

            <section id="information-collected" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                We collect and process several categories of information to provide our CRM services:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.1 Protected Health Information (PHI)</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-2">Information subject to HIPAA protection includes:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Individual health insurance policy information (policy numbers, coverage types, effective dates)</li>
                    <li>Health plan enrollment and eligibility data</li>
                    <li>Insurance claims information and claim status</li>
                    <li>Medical underwriting information and health questionnaire responses</li>
                    <li>Prescription drug coverage and medication information</li>
                    <li>Pre-existing condition information</li>
                    <li>Provider network and referral information</li>
                    <li>Premium payment history and billing records</li>
                    <li>Explanation of Benefits (EOB) documents</li>
                    <li>Health Savings Account (HSA) and Flexible Spending Account (FSA) information</li>
                    <li>Medicare and Medicaid enrollment data</li>
                    <li>Long-term care insurance information</li>
                    <li>Disability insurance claims and medical documentation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.2 Personal Identifiable Information (PII)</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-2">Non-health personal information includes:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Full name, date of birth, age, and gender</li>
                    <li>Social Security Number (SSN) or Tax Identification Number (TIN)</li>
                    <li>Contact information (home address, email, phone numbers)</li>
                    <li>Employment information (employer name, occupation, income)</li>
                    <li>Family member information (spouse, dependents, beneficiaries)</li>
                    <li>Government-issued identification numbers (driver's license, passport)</li>
                    <li>Financial account information for premium payments</li>
                    <li>Banking information for direct deposit or ACH payments</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.3 Account and Usage Information</h3>
                  <p className="text-gray-600 mb-2">Information related to your use of our platform:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Account credentials (username, encrypted password)</li>
                    <li>User profile information and preferences</li>
                    <li>Account activity logs and access history</li>
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Login timestamps and session duration</li>
                    <li>Feature usage patterns and click-stream data</li>
                    <li>Customer support interactions and help desk tickets</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.4 Communication Data</h3>
                  <p className="text-gray-600 mb-2">Communications conducted through our platform:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Email messages and attachments</li>
                    <li>SMS/text messages sent through our platform</li>
                    <li>WhatsApp and iMessage communications (when using integrated features)</li>
                    <li>Phone call records and recordings (when call recording is enabled with consent)</li>
                    <li>Chat transcripts and messaging history</li>
                    <li>Marketing campaign content and recipient lists</li>
                    <li>Landing page form submissions</li>
                    <li>Electronic signature data and consent forms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.5 Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-2">Technical information collected automatically:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Cookies and similar tracking technologies</li>
                    <li>Web beacons and pixel tags</li>
                    <li>Analytics data (Google Analytics with IP anonymization)</li>
                    <li>Error logs and debugging information</li>
                    <li>Performance metrics and system monitoring data</li>
                    <li>API call logs and integration activity</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="phi-usage" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">4. Use of Protected Health Information</h2>
              <p className="text-gray-600 mb-4">
                As a Business Associate, we use and disclose PHI only as permitted by HIPAA regulations, our Business Associate Agreements with Covered Entities, and this Privacy Policy. We follow the principle of "minimum necessary" in all uses and disclosures.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.1 Treatment Purposes</h3>
                  <p className="text-gray-600 mb-2">
                    We facilitate the use of PHI for treatment purposes, which includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Coordinating health insurance coverage and benefits</li>
                    <li>Facilitating communication between insurance agents and policyholders</li>
                    <li>Processing enrollment in health plans</li>
                    <li>Managing insurance policy applications and underwriting</li>
                    <li>Coordinating Medicare Advantage and Medicare Supplement enrollments</li>
                    <li>Facilitating Special Enrollment Period (SEP) applications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.2 Payment Purposes</h3>
                  <p className="text-gray-600 mb-2">
                    PHI is used for payment activities, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Processing insurance premium payments and billing</li>
                    <li>Calculating and tracking agent commissions</li>
                    <li>Reconciling payment discrepancies and chargebacks</li>
                    <li>Generating invoices and payment receipts</li>
                    <li>Managing subsidy and tax credit applications (ACA subsidies)</li>
                    <li>Processing refunds and payment adjustments</li>
                    <li>Coordinating with insurance carriers for payment processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.3 Health Care Operations</h3>
                  <p className="text-gray-600 mb-2">
                    We use PHI for health care operations purposes such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Quality assessment and improvement activities</li>
                    <li>Conducting customer satisfaction surveys</li>
                    <li>Training and education of insurance agents</li>
                    <li>Underwriting and premium rating activities</li>
                    <li>Fraud detection and prevention</li>
                    <li>Business planning and development</li>
                    <li>Compliance monitoring and auditing</li>
                    <li>Customer service and support operations</li>
                    <li>General administrative activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.4 Platform Operations and Improvement</h3>
                  <p className="text-gray-600 mb-2">
                    We use information to operate and improve our platform:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Providing and maintaining CRM functionality</li>
                    <li>Developing new features and enhancements</li>
                    <li>Troubleshooting technical issues</li>
                    <li>Preventing fraud, abuse, and security incidents</li>
                    <li>Generating aggregated, de-identified analytics (with all PHI removed)</li>
                    <li>Conducting system performance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.5 Required by Law</h3>
                  <p className="text-gray-600 mb-2">
                    We may use or disclose PHI when required by federal, state, or local law, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Compliance with court orders, warrants, or subpoenas</li>
                    <li>Reporting to government oversight agencies (HHS, CMS, state insurance departments)</li>
                    <li>Responding to lawful requests from law enforcement</li>
                    <li>Reporting suspected fraud or abuse</li>
                    <li>Public health reporting requirements</li>
                    <li>Coroner or medical examiner requests</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="phi-disclosure" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">5. Disclosure of Protected Health Information</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, rent, or lease PHI to third parties. We disclose PHI only under the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.1 To Covered Entities (Our Customers)</h3>
                  <p className="text-gray-600">
                    PHI is accessible to the insurance agency or agent (Covered Entity) that you work for or that manages your client's policies, as they are the primary data controller with legitimate business need.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.2 To Subcontractors (Business Associates)</h3>
                  <p className="text-gray-600 mb-2">
                    We may disclose PHI to our subcontractors who perform services on our behalf, subject to Business Associate Agreements that require them to safeguard the information. These include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Cloud infrastructure providers (AWS, Google Cloud, Neon Database)</li>
                    <li>Email delivery services (with encryption)</li>
                    <li>SMS/messaging gateway providers</li>
                    <li>Payment processors (for premium collection)</li>
                    <li>Customer support ticketing systems</li>
                    <li>Security monitoring and penetration testing firms</li>
                    <li>Backup and disaster recovery service providers</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    All subcontractors sign Business Associate Agreements and undergo security assessments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.3 To Insurance Carriers</h3>
                  <p className="text-gray-600">
                    We facilitate the transmission of PHI to health insurance carriers for policy enrollment, claims processing, and other necessary business functions. This is done on behalf of our Covered Entity customers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.4 With Individual Authorization</h3>
                  <p className="text-gray-600">
                    For uses and disclosures not covered under TPO or otherwise permitted by HIPAA, we will obtain written authorization from the individual. Individuals may revoke authorizations at any time in writing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.5 For Public Health and Safety</h3>
                  <p className="text-gray-600 mb-2">
                    As permitted by HIPAA, we may disclose PHI without authorization:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>To public health authorities for disease prevention and control</li>
                    <li>To report suspected abuse, neglect, or domestic violence</li>
                    <li>To health oversight agencies for audits and investigations</li>
                    <li>In response to judicial or administrative proceedings</li>
                    <li>To law enforcement in limited circumstances</li>
                    <li>To avert a serious threat to health or safety</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.6 De-identified Information</h3>
                  <p className="text-gray-600">
                    We may create and use de-identified data (with all PHI removed according to HIPAA standards) for business analytics, research, and product development. De-identified data is not subject to HIPAA restrictions and may be used without authorization.
                  </p>
                </div>
              </div>
            </section>

            <section id="hipaa-rights" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">6. Your Rights Under HIPAA</h2>
              <p className="text-gray-600 mb-4">
                Individuals whose PHI we maintain have the following rights under HIPAA. To exercise these rights, please contact your insurance agency (the Covered Entity) or our Privacy Officer:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.1 Right to Access PHI</h3>
                  <p className="text-gray-600">
                    You have the right to inspect and obtain a copy of your PHI maintained in our system. We will respond to access requests within 30 days (with one 30-day extension if needed). We may charge a reasonable, cost-based fee for copying and mailing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.2 Right to Amend</h3>
                  <p className="text-gray-600">
                    You may request amendment of PHI that you believe is incorrect or incomplete. We will respond within 60 days. We may deny the request if the information was not created by us, is not part of our records, is not available for inspection, or is accurate and complete. If denied, you may submit a statement of disagreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.3 Right to an Accounting of Disclosures</h3>
                  <p className="text-gray-600">
                    You have the right to request an accounting of certain disclosures of your PHI made by us in the six years prior to your request. The accounting will not include disclosures for treatment, payment, health care operations, or disclosures made to you or with your authorization. The first accounting in any 12-month period is free; subsequent requests may incur a reasonable fee.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.4 Right to Request Restrictions</h3>
                  <p className="text-gray-600">
                    You may request restrictions on how we use or disclose your PHI. We are not required to agree to your request but will consider it. If we agree, we will comply with the restriction unless the information is needed for emergency treatment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.5 Right to Request Confidential Communications</h3>
                  <p className="text-gray-600">
                    You may request that we communicate with you about PHI in a certain way or at a certain location (e.g., via a specific email address or phone number). We will accommodate reasonable requests.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.6 Right to a Paper Copy of This Notice</h3>
                  <p className="text-gray-600">
                    You have the right to receive a paper copy of this Privacy Policy at any time, even if you have agreed to receive it electronically. Contact our Privacy Officer to request a copy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.7 Right to File a Complaint</h3>
                  <p className="text-gray-600 mb-2">
                    If you believe your privacy rights have been violated, you may file a complaint with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Our Privacy Officer at <a href="mailto:privacy@curbe.io" className="text-blue-600 hover:underline">privacy@curbe.io</a></li>
                    <li>The U.S. Department of Health and Human Services Office for Civil Rights</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    <strong className="text-gray-900">We will not retaliate against you for filing a complaint.</strong>
                  </p>
                </div>
              </div>
            </section>

            <section id="security" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">7. Security Safeguards</h2>
              <p className="text-gray-600 mb-4">
                We implement comprehensive administrative, physical, and technical safeguards to protect PHI from unauthorized access, use, or disclosure:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Administrative Safeguards:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Designated Privacy Officer and Security Officer</li>
                    <li>Annual risk assessments and security evaluations</li>
                    <li>Workforce training on HIPAA privacy and security (annual mandatory training)</li>
                    <li>Sanctions policy for workforce members who violate policies</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Business Associate Agreements with all subcontractors</li>
                    <li>Background checks for employees with PHI access</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Physical Safeguards:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>SOC 2 Type II certified data centers with 24/7 security</li>
                    <li>Multi-factor authentication for facility access</li>
                    <li>Video surveillance and access logging</li>
                    <li>Workstation security and screen privacy filters</li>
                    <li>Secure disposal procedures for hardware containing ePHI</li>
                    <li>Geographically redundant data centers in the United States</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Technical Safeguards:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>AES-256 encryption for all data at rest</li>
                    <li>TLS 1.3 encryption for all data in transit</li>
                    <li>Multi-factor authentication (MFA) required for PHI access</li>
                    <li>Role-based access controls (RBAC) with least privilege principle</li>
                    <li>Automatic session timeout after 15 minutes of inactivity</li>
                    <li>Comprehensive audit logs with tamper-evident controls</li>
                    <li>Intrusion detection and prevention systems (IDS/IPS)</li>
                    <li>Web Application Firewall (WAF) and DDoS protection</li>
                    <li>Automated backup every 4 hours with 30-day retention</li>
                    <li>Vulnerability scanning and penetration testing quarterly</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                For detailed information about our security practices, please see our <a href="/security" className="text-blue-700 hover:underline">Security Page</a>.
              </p>
            </section>

            <section id="baa" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">8. Business Associate Agreements</h2>
              <p className="text-gray-600 mb-4">
                As a Business Associate under HIPAA, we maintain executed Business Associate Agreements (BAAs) with all Covered Entities (our customers) and with all of our subcontractors who have access to PHI.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Our BAA Commitments:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Use and disclose PHI only as permitted by the BAA and HIPAA regulations</li>
                    <li>Implement appropriate safeguards to prevent unauthorized use or disclosure</li>
                    <li>Report security incidents and breaches to the Covered Entity</li>
                    <li>Ensure subcontractors agree to the same restrictions and conditions</li>
                    <li>Make PHI available to individuals upon request</li>
                    <li>Make PHI available for amendment and incorporate amendments as directed</li>
                    <li>Provide an accounting of disclosures upon request</li>
                    <li>Make internal practices, books, and records available to HHS for compliance review</li>
                    <li>Return or destroy PHI upon termination of the BAA (subject to applicable law)</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  If you are a Covered Entity customer and need a copy of our standard BAA, please contact us at <a href="mailto:compliance@curbe.io" className="text-blue-600 hover:underline">compliance@curbe.io</a>.
                </p>
              </div>
            </section>

            <section id="breach-notification" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">9. Breach Notification Procedures</h2>
              <p className="text-gray-600 mb-4">
                In accordance with the HIPAA Breach Notification Rule (45 CFR §§ 164.400-414), we have established procedures to respond to breaches of unsecured PHI:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Breach Definition:</h3>
                  <p className="text-gray-600">
                    A breach is an impermissible acquisition, access, use, or disclosure of PHI that compromises the security or privacy of the information, unless we can demonstrate a low probability that the PHI has been compromised through a risk assessment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Our Notification Process:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>To Covered Entities:</strong> We will notify the affected Covered Entity (our customer) without unreasonable delay and no later than 60 calendar days after discovery of the breach.</li>
                    <li><strong>To Affected Individuals:</strong> The Covered Entity is responsible for notifying affected individuals, but we will cooperate fully and provide necessary information.</li>
                    <li><strong>To HHS:</strong> For breaches affecting 500 or more individuals, notification to the Secretary of HHS will be made simultaneously with individual notification. For smaller breaches, annual reporting will be provided.</li>
                    <li><strong>To Media:</strong> For breaches affecting more than 500 residents of a state or jurisdiction, media notification will be provided.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Breach Content:</h3>
                  <p className="text-gray-600 mb-2">
                    Breach notifications will include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Brief description of what happened and when</li>
                    <li>Types of information involved</li>
                    <li>Steps individuals should take to protect themselves</li>
                    <li>What we are doing in response</li>
                    <li>Contact information for questions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Incident Response:</h3>
                  <p className="text-gray-600">
                    Upon discovering a potential breach, we immediately activate our incident response team to contain the incident, assess the risk, preserve evidence, and implement corrective actions. All incidents are documented in our breach log maintained for six years.
                  </p>
                </div>
              </div>
            </section>

            <section id="minors" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">10. Information About Minors</h2>
              <p className="text-gray-600 mb-4">
                Our services are not directed to individuals under 18 years of age. However, we process PHI of minors as dependents on health insurance policies in accordance with HIPAA and applicable state laws.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>We comply with parental consent requirements under applicable law</li>
                <li>We respect state laws regarding minor consent for health care services</li>
                <li>We implement appropriate safeguards for minor PHI</li>
                <li>Personal representatives (parents/guardians) may access minor PHI unless restricted by law</li>
              </ul>
            </section>

            <section id="state-laws" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">11. State Privacy Laws</h2>
              <p className="text-gray-600 mb-4">
                In addition to HIPAA, we comply with applicable state privacy and security laws, including:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">California</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>CCPA/CPRA:</strong> California Consumer Privacy Act and California Privacy Rights Act</li>
                    <li><strong>CMIA:</strong> Confidentiality of Medical Information Act</li>
                    <li><strong>Rights:</strong> Right to know, delete, correct, and opt-out of data sales (note: we do not sell data)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Other States</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Virginia (VCDPA):</strong> Virginia Consumer Data Protection Act</li>
                    <li><strong>Colorado (CPA):</strong> Colorado Privacy Act</li>
                    <li><strong>Connecticut (CTDPA):</strong> Connecticut Data Privacy Act</li>
                    <li><strong>Utah (UCPA):</strong> Utah Consumer Privacy Act</li>
                    <li><strong>State Breach Notification Laws:</strong> We comply with all state-specific breach notification requirements</li>
                  </ul>
                </div>

                <p className="text-gray-600">
                  To exercise your state privacy rights, please contact our Privacy Officer at <a href="mailto:privacy@curbe.io" className="text-blue-700 hover:underline">privacy@curbe.io</a>.
                </p>
              </div>
            </section>

            <section id="international" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">12. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Our services are provided from the United States, and all PHI is stored in U.S.-based data centers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>All data is processed and stored exclusively in the United States</li>
                <li>We do not transfer PHI outside the United States without appropriate safeguards</li>
                <li>For customers in the European Union, we comply with GDPR requirements</li>
                <li>Standard Contractual Clauses (SCCs) are available for EU data subjects</li>
                <li>We maintain compliance with the EU-U.S. Data Privacy Framework principles</li>
              </ul>
            </section>

            <section id="retention" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">13. Data Retention & Deletion</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Retention Periods:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>PHI:</strong> Minimum of 6 years from date of creation or last use, whichever is later (per HIPAA requirements)</li>
                    <li><strong>Audit Logs:</strong> 6 years for HIPAA compliance</li>
                    <li><strong>Business Associate Agreements:</strong> 6 years after termination</li>
                    <li><strong>Breach Documentation:</strong> 6 years from date of breach</li>
                    <li><strong>Account Data:</strong> Until account closure plus applicable retention period</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Secure Deletion:</h3>
                  <p className="text-gray-600 mb-2">
                    Upon expiration of retention periods or upon request (where legally permissible):
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Data is securely deleted using NIST 800-88 compliant methods</li>
                    <li>Hardware is sanitized or physically destroyed when decommissioned</li>
                    <li>Certificates of destruction are maintained</li>
                    <li>Backup copies are also deleted after retention period</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="changes" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">14. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to revise this Privacy Policy at any time. As required by HIPAA, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Post the revised Privacy Policy on our website with the effective date</li>
                <li>Make the revised Policy available to all users</li>
                <li>Apply changes to all PHI we maintain, including information created or received before the effective date</li>
                <li>Provide notice of material changes to Covered Entity customers</li>
                <li>Maintain prior versions of this Policy for 6 years</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>Effective Date of Current Version:</strong> January 1, 2025
              </p>
            </section>

            <section id="contact" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions, concerns, or requests related to this Privacy Policy or our privacy practices:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Privacy Officer</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Company:</strong> WYNTON LLC (d/b/a Curbe)</li>
                    <li><strong>Email:</strong> <a href="mailto:privacy@curbe.io" className="text-blue-700 hover:underline">privacy@curbe.io</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+18442872346" className="text-blue-700 hover:underline">(844) CURBE-IO</a></li>
                    <li><strong>Address:</strong> Miami, FL, United States</li>
                    <li><strong>Response Time:</strong> Within 5 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">For Breach Notifications</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Email:</strong> <a href="mailto:security@curbe.io" className="text-blue-600 hover:underline">security@curbe.io</a></li>
                    <li><strong>24/7 Hotline:</strong> <a href="tel:+18442872346" className="text-blue-600 hover:underline">(844) CURBE-IO</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">For Compliance Matters</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Email:</strong> <a href="mailto:compliance@curbe.io" className="text-blue-600 hover:underline">compliance@curbe.io</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">File a HIPAA Complaint With HHS</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Office for Civil Rights</strong></li>
                    <li>U.S. Department of Health and Human Services</li>
                    <li>200 Independence Avenue, S.W.</li>
                    <li>Washington, D.C. 20201</li>
                    <li>Phone: 1-877-696-6775</li>
                    <li>Website: <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.hhs.gov/ocr/privacy/hipaa/complaints/</a></li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Acknowledgment:</strong> By using Curbe, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and HIPAA Notice of Privacy Practices. If you do not agree, please discontinue use of our services.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
