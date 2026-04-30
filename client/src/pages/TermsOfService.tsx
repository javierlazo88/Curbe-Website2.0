import { FileText } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
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
      <main className="relative pt-24 sm:pt-32 pb-12 lg:pb-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-blue-200 mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">LEGAL AGREEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="text-gradient-flow">
                {t('legal.terms.title')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {t('legal.terms.effectiveDate')}: January 1, 2025 | {t('legal.terms.lastUpdated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <a href="#acceptance" className="text-gray-600 hover:text-blue-600 transition-colors">1. Acceptance of Terms</a>
              <a href="#definitions" className="text-gray-600 hover:text-blue-600 transition-colors">2. Definitions</a>
              <a href="#service" className="text-gray-600 hover:text-blue-600 transition-colors">3. Service Description</a>
              <a href="#account" className="text-gray-600 hover:text-blue-600 transition-colors">4. Account Registration</a>
              <a href="#subscription" className="text-gray-600 hover:text-blue-600 transition-colors">5. Subscription & Billing</a>
              <a href="#acceptable-use" className="text-gray-600 hover:text-blue-600 transition-colors">6. Acceptable Use Policy</a>
              <a href="#data" className="text-gray-600 hover:text-blue-600 transition-colors">7. Data Rights & Ownership</a>
              <a href="#hipaa" className="text-gray-600 hover:text-blue-600 transition-colors">8. HIPAA & Compliance</a>
              <a href="#warranties" className="text-gray-600 hover:text-blue-600 transition-colors">9. Warranties & Disclaimers</a>
              <a href="#liability" className="text-gray-600 hover:text-blue-600 transition-colors">10. Limitation of Liability</a>
              <a href="#indemnification" className="text-gray-600 hover:text-blue-600 transition-colors">11. Indemnification</a>
              <a href="#termination" className="text-gray-600 hover:text-blue-600 transition-colors">12. Termination</a>
              <a href="#changes" className="text-gray-600 hover:text-blue-600 transition-colors">13. Changes to Terms</a>
              <a href="#governing-law" className="text-gray-600 hover:text-blue-600 transition-colors">14. Governing Law</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">15. Contact Information</a>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 sm:space-y-8">
            <section id="acceptance" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                These Terms of Service ("Terms," "Agreement") constitute a legally binding agreement between you ("Customer," "you," or "your") and WYNTON LLC, a Florida limited liability company doing business as Curbe ("Curbe," "we," "us," or "our"), governing your access to and use of the Curbe software platform and related services (collectively, the "Service").
              </p>
              <p className="text-gray-600 mb-4">
                By creating an account, accessing the Service, or clicking "I Agree" to these Terms, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms, in which case "you" or "Customer" shall refer to such entity.
              </p>
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-900">IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</strong>
              </p>
              <p className="text-gray-600">
                These Terms incorporate by reference our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>, <a href="/security" className="text-blue-600 hover:underline">Security Documentation</a>, and <a href="/compliance" className="text-blue-600 hover:underline">Compliance Information</a>. Additional terms may apply to specific features or services, which will be presented to you at the time you access such features.
              </p>
            </section>

            <section id="definitions" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                For purposes of these Terms, the following definitions apply:
              </p>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li><strong className="text-gray-900">"Authorized Users"</strong> means your employees, contractors, and agents who you authorize to access and use the Service on your behalf, subject to these Terms.</li>
                <li><strong className="text-gray-900">"Customer Data"</strong> means all electronic data, information, and content that you or your Authorized Users submit, upload, transmit, or otherwise provide to the Service, including all Protected Health Information (PHI).</li>
                <li><strong className="text-gray-900">"Business Associate Agreement" or "BAA"</strong> means the HIPAA Business Associate Agreement executed between you and Curbe, which is required for Customers who are HIPAA Covered Entities or Business Associates handling PHI.</li>
                <li><strong className="text-gray-900">"Documentation"</strong> means our user guides, help documentation, API documentation, and other technical materials made available by Curbe related to the Service.</li>
                <li><strong className="text-gray-900">"Subscription"</strong> means your subscription to the Service pursuant to a selected subscription plan (Shared, Dedicated, or Unlimited).</li>
                <li><strong className="text-gray-900">"Subscription Term"</strong> means the period during which you have an active paid Subscription to the Service.</li>
                <li><strong className="text-gray-900">"Service Level Agreement" or "SLA"</strong> means our service level commitments for uptime and availability, as specified in your subscription plan.</li>
              </ul>
            </section>

            <section id="service" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">3. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Curbe is a cloud-based customer relationship management (CRM) platform specifically designed for insurance agencies and agents who manage health insurance products and policies.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.1 Core Features</h3>
                  <p className="text-gray-600 mb-2">
                    The Service provides the following core functionality:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Policy Management:</strong> Track and manage health insurance policies across multiple types (ACA, Medicare, Medicaid, Life, Dental, Vision, etc.)</li>
                    <li><strong>Client Database:</strong> Centralized database for managing client contact information, policy details, and interaction history</li>
                    <li><strong>Lead & Quote Management:</strong> Track leads, generate quotes, and manage the sales pipeline</li>
                    <li><strong>Commission Tracking:</strong> Monitor commissions earned across different carriers and policies</li>
                    <li><strong>Unified Communications:</strong> Integrated messaging across iMessage, WhatsApp, SMS, and Email</li>
                    <li><strong>Task & Calendar Management:</strong> Schedule appointments, set reminders, and manage tasks</li>
                    <li><strong>Marketing Automation:</strong> Create and manage marketing campaigns, landing pages, and lead generation</li>
                    <li><strong>Referral System:</strong> Track and manage client referrals</li>
                    <li><strong>Electronic Signatures:</strong> Digital consent forms and document signing</li>
                    <li><strong>Reporting & Analytics:</strong> Business intelligence and performance analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.2 Subscription Plans</h3>
                  <p className="text-gray-600 mb-2">
                    We offer three subscription tiers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Shared Plan ($97/month):</strong> Shared infrastructure, standard features, community support</li>
                    <li><strong>Dedicated Plan ($297/month):</strong> Dedicated database instance, priority support, advanced automation, API access</li>
                    <li><strong>Unlimited Plan ($497/month):</strong> Unlimited users, white-label options, dedicated account manager, custom integrations, SLA guarantee</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    Specific features and limitations for each plan are detailed on our pricing page. Plans may be changed or updated with 30 days' notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.3 Service Availability</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Uptime SLA:</strong> We target 99.99% uptime for production services (Dedicated and Unlimited plans)</li>
                    <li><strong>Planned Maintenance:</strong> Scheduled maintenance will be announced at least 48 hours in advance</li>
                    <li><strong>Emergency Maintenance:</strong> May be performed with minimal notice to address security or critical issues</li>
                    <li><strong>Status Page:</strong> Real-time service status available at status.curbe.io</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.4 Service Modifications</h3>
                  <p className="text-gray-600">
                    We reserve the right to modify, update, or discontinue any features or aspects of the Service at any time. We will provide reasonable notice of material changes that negatively impact functionality. Continued use of the Service after such modifications constitutes acceptance of the changes.
                  </p>
                </div>
              </div>
            </section>

            <section id="account" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">4. Account Registration & Security</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.1 Account Registration</h3>
                  <p className="text-gray-600 mb-2">
                    To use the Service, you must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                    <li>Be legally authorized to enter into binding contracts</li>
                    <li>Represent a legitimate business entity (sole proprietorship, LLC, corporation, etc.)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.2 Account Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Credentials:</strong> You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li><strong>Multi-Factor Authentication:</strong> MFA is required for all accounts accessing PHI</li>
                    <li><strong>Unauthorized Access:</strong> You must immediately notify us of any unauthorized access or security breach</li>
                    <li><strong>Account Activity:</strong> You are responsible for all activity occurring under your account</li>
                    <li><strong>Password Requirements:</strong> Passwords must meet our minimum security requirements (12+ characters, complexity)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.3 Authorized Users</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>You may grant access to Authorized Users within your subscription limits</li>
                    <li>You are responsible for all actions of your Authorized Users</li>
                    <li>You must ensure Authorized Users comply with these Terms</li>
                    <li>You must promptly revoke access for terminated employees or contractors</li>
                    <li>User licenses are non-transferable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.4 Account Suspension</h3>
                  <p className="text-gray-600 mb-2">
                    We may suspend or terminate your account if:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>You violate these Terms or applicable law</li>
                    <li>Your account is subject to suspected fraud or abuse</li>
                    <li>Your payment is past due for more than 30 days</li>
                    <li>We are required to do so by law or court order</li>
                    <li>You engage in activity that threatens the security or integrity of our Service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="subscription" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">5. Subscription, Billing & Payment</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.1 Subscription Plans</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Plan Selection:</strong> You select a subscription plan during registration</li>
                    <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly in advance</li>
                    <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled</li>
                    <li><strong>Plan Changes:</strong> You may upgrade or downgrade plans at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.2 Pricing & Fees</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Current Pricing:</strong> Pricing is as displayed on our website or as agreed in writing</li>
                    <li><strong>Price Changes:</strong> We may change pricing with 30 days' notice</li>
                    <li><strong>Grandfathering:</strong> Existing customers maintain current pricing for 12 months after price increases</li>
                    <li><strong>Taxes:</strong> Fees exclude applicable sales, use, or similar taxes, which you are responsible for</li>
                    <li><strong>Currency:</strong> All fees are in United States Dollars (USD)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.3 Payment</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Payment Methods:</strong> We accept credit cards, debit cards, and ACH transfers</li>
                    <li><strong>Automatic Billing:</strong> You authorize us to charge your payment method automatically</li>
                    <li><strong>Payment Information:</strong> You must provide current, complete, and accurate billing information</li>
                    <li><strong>Declined Payments:</strong> If payment is declined, we will attempt to re-charge up to 3 times</li>
                    <li><strong>Late Fees:</strong> Accounts past due more than 15 days incur a 5% late fee</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.4 Refunds & Cancellation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>No Refunds:</strong> Fees are non-refundable except as required by law or as expressly stated</li>
                    <li><strong>30-Day Money-Back Guarantee:</strong> Full refund available if cancelled within 30 days of initial subscription</li>
                    <li><strong>Cancellation Process:</strong> Cancellations effective at the end of the current billing period</li>
                    <li><strong>Pro-Rata Credits:</strong> No pro-rata credits for partial months or unused features</li>
                    <li><strong>Downgrade:</strong> Downgrades take effect at the next renewal date</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.5 Free Trials</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Trial Period:</strong> We may offer free trial periods (typically 14 days)</li>
                    <li><strong>Payment Required:</strong> Credit card required to start trial (not charged during trial)</li>
                    <li><strong>Auto-Conversion:</strong> Trial converts to paid subscription unless cancelled before trial end</li>
                    <li><strong>One Per Customer:</strong> Only one free trial per customer/organization</li>
                    <li><strong>Feature Access:</strong> Trial may have limited features compared to paid plans</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.6 Overages & Usage Limits</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Plan Limits:</strong> Each plan has defined limits (users, storage, API calls, etc.)</li>
                    <li><strong>Soft Limits:</strong> We notify you when approaching limits</li>
                    <li><strong>Overage Fees:</strong> Excess usage billed at published overage rates</li>
                    <li><strong>Plan Upgrade:</strong> We may recommend plan upgrade when consistently exceeding limits</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="acceptable-use" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">6. Acceptable Use Policy</h2>
              <p className="text-gray-600 mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.1 Prohibited Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Illegal Use:</strong> Use the Service for any unlawful purpose or in violation of any laws</li>
                    <li><strong>Fraud:</strong> Engage in fraudulent activities, insurance fraud, or misrepresentation</li>
                    <li><strong>Spam:</strong> Send unsolicited communications, spam, or marketing messages without consent</li>
                    <li><strong>Malware:</strong> Upload or transmit viruses, malware, or other malicious code</li>
                    <li><strong>Unauthorized Access:</strong> Attempt to gain unauthorized access to any part of the Service</li>
                    <li><strong>Reverse Engineering:</strong> Reverse engineer, decompile, or disassemble any part of the Service</li>
                    <li><strong>Scraping:</strong> Use automated means to access the Service without permission</li>
                    <li><strong>Interference:</strong> Interfere with or disrupt the Service or servers</li>
                    <li><strong>Impersonation:</strong> Impersonate another person or entity</li>
                    <li><strong>IP Infringement:</strong> Violate intellectual property rights of others</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.2 Content Restrictions</h3>
                  <p className="text-gray-600 mb-2">
                    You may not upload or transmit Customer Data that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Is illegal, harmful, threatening, abusive, harassing, or defamatory</li>
                    <li>Violates any third-party rights (privacy, publicity, intellectual property)</li>
                    <li>Contains discriminatory content based on race, religion, gender, age, disability, etc.</li>
                    <li>Contains false or misleading health information</li>
                    <li>Violates HIPAA, TCPA, CAN-SPAM, or other applicable regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.3 Communication Compliance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>TCPA Compliance:</strong> Obtain proper consent before sending text messages</li>
                    <li><strong>CAN-SPAM:</strong> Include opt-out mechanisms in marketing emails</li>
                    <li><strong>Do Not Call:</strong> Respect do-not-call registry requirements</li>
                    <li><strong>Consent Management:</strong> Maintain records of communication consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.4 Enforcement</h3>
                  <p className="text-gray-600 mb-2">
                    Violation of this Acceptable Use Policy may result in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Warning and request to cease prohibited activity</li>
                    <li>Temporary suspension of account access</li>
                    <li>Termination of account and Service access</li>
                    <li>Legal action and cooperation with law enforcement</li>
                    <li>Liability for damages caused by your violations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="data" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">7. Data Rights & Ownership</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.1 Customer Data Ownership</h3>
                  <p className="text-gray-600 mb-2">
                    <strong className="text-gray-900">You retain all rights, title, and interest in and to your Customer Data.</strong> We claim no ownership rights over Customer Data. Subject to these Terms, we will:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Store and process Customer Data only as necessary to provide the Service</li>
                    <li>Not access Customer Data except as necessary for Service provision, support, or as required by law</li>
                    <li>Not use Customer Data for our own purposes or share with third parties (except as permitted by these Terms)</li>
                    <li>Maintain appropriate security measures to protect Customer Data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.2 License to Customer Data</h3>
                  <p className="text-gray-600">
                    You grant us a limited, non-exclusive, worldwide license to access, use, process, copy, distribute, perform, and display Customer Data only as necessary to: (a) provide and maintain the Service, (b) prevent or address technical or security issues, (c) comply with legal obligations, and (d) enforce these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.3 Data Export</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Export Features:</strong> You can export your Customer Data at any time through the Service</li>
                    <li><strong>Export Formats:</strong> Data available in CSV, JSON, or other standard formats</li>
                    <li><strong>No Export Fees:</strong> No additional fees for data export</li>
                    <li><strong>Bulk Export:</strong> Full database export available upon request</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.4 Data Portability</h3>
                  <p className="text-gray-600">
                    We support data portability and will assist with data migration to other platforms upon termination, subject to reasonable notice and cooperation requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.5 Data Deletion</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Account Deletion:</strong> You may request deletion of your account and Customer Data at any time</li>
                    <li><strong>Deletion Timeline:</strong> Data deleted within 30 days of request (subject to legal retention requirements)</li>
                    <li><strong>Backup Retention:</strong> Data in backups deleted per our backup retention policy (30 days)</li>
                    <li><strong>Legal Holds:</strong> Data subject to legal hold or required retention may not be immediately deleted</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.6 Aggregated Data</h3>
                  <p className="text-gray-600">
                    We may create anonymized, aggregated data from Customer Data (with all personally identifiable information removed). We own all rights to such anonymized data and may use it for analytics, product improvement, benchmarking, and other business purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.7 Intellectual Property</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Our IP:</strong> We retain all rights to the Service, Documentation, and our proprietary technology</li>
                    <li><strong>Trademarks:</strong> "Curbe" and associated marks are our trademarks</li>
                    <li><strong>Feedback:</strong> Any feedback you provide becomes our property without compensation</li>
                    <li><strong>No License:</strong> These Terms do not grant you any IP rights except the limited right to use the Service</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="hipaa" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">8. HIPAA & Compliance Obligations</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.1 Business Associate Relationship</h3>
                  <p className="text-gray-600 mb-2">
                    If you are a HIPAA Covered Entity or Business Associate, you must execute a Business Associate Agreement (BAA) with us before using the Service to store or process Protected Health Information (PHI).
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>BAA Required:</strong> Use of Service with PHI requires signed BAA</li>
                    <li><strong>BAA Request:</strong> Contact <a href="mailto:compliance@curbe.io" className="text-blue-600 hover:underline">compliance@curbe.io</a> to request BAA</li>
                    <li><strong>BAA Incorporation:</strong> BAA terms are incorporated into and supplement these Terms</li>
                    <li><strong>Conflict:</strong> In case of conflict between BAA and Terms, BAA controls for PHI matters</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.2 Your HIPAA Obligations</h3>
                  <p className="text-gray-600 mb-2">
                    As the Covered Entity or Business Associate, you are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Obtaining all necessary authorizations and consents to use PHI</li>
                    <li>Ensuring your use of PHI complies with HIPAA Privacy and Security Rules</li>
                    <li>Implementing appropriate workforce training on HIPAA compliance</li>
                    <li>Providing us with necessary cooperation for HIPAA compliance</li>
                    <li>Notifying us immediately of any security incidents involving PHI</li>
                    <li>Maintaining your own HIPAA compliance program</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.3 Our HIPAA Commitments</h3>
                  <p className="text-gray-600 mb-2">
                    As your Business Associate, we commit to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Use and disclose PHI only as permitted by the BAA and applicable law</li>
                    <li>Implement and maintain appropriate administrative, physical, and technical safeguards</li>
                    <li>Report security incidents and breaches as required by HIPAA</li>
                    <li>Ensure our subcontractors who access PHI sign Business Associate Agreements</li>
                    <li>Make PHI available for access, amendment, and accounting as required</li>
                    <li>Maintain audit logs of PHI access for 6 years</li>
                    <li>Cooperate with HHS compliance reviews and investigations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.4 Non-HIPAA Customers</h3>
                  <p className="text-gray-600">
                    If you are not a HIPAA Covered Entity or Business Associate, or you do not intend to store PHI in the Service, you are not required to execute a BAA. However, you must not upload or process PHI without a signed BAA in place.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.5 Other Compliance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>GDPR:</strong> We comply with GDPR for EU personal data (see Privacy Policy)</li>
                    <li><strong>CCPA:</strong> We comply with California Consumer Privacy Act (see Privacy Policy)</li>
                    <li><strong>SOC 2:</strong> We maintain SOC 2 Type II certification (report available under NDA)</li>
                    <li><strong>State Laws:</strong> We comply with applicable state privacy and insurance regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="warranties" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">9. Warranties & Disclaimers</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.1 Our Warranties</h3>
                  <p className="text-gray-600 mb-2">
                    We warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>We have the right and authority to provide the Service</li>
                    <li>The Service will perform materially in accordance with the Documentation</li>
                    <li>We will maintain appropriate security measures as described in our Security documentation</li>
                    <li>We will not knowingly introduce viruses or malicious code into the Service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.2 Your Warranties</h3>
                  <p className="text-gray-600 mb-2">
                    You warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>You have all necessary rights to provide Customer Data to the Service</li>
                    <li>Your use of the Service complies with all applicable laws and regulations</li>
                    <li>Customer Data does not infringe third-party intellectual property rights</li>
                    <li>You have obtained all necessary consents to process personal data in the Service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.3 DISCLAIMER OF WARRANTIES</h3>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-gray-900 uppercase">EXCEPT AS EXPRESSLY SET FORTH IN SECTION 9.1, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-gray-900 uppercase">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</strong>
                  </p>
                  <p className="text-gray-600">
                    We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We do not warrant that defects will be corrected or that the Service will meet your requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.4 Third-Party Services</h3>
                  <p className="text-gray-600">
                    The Service may integrate with third-party services (email providers, SMS gateways, etc.). We are not responsible for any third-party services, their availability, security, or compliance. Your use of third-party services is subject to their terms and conditions.
                  </p>
                </div>
              </div>
            </section>

            <section id="liability" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.1 EXCLUSION OF DAMAGES</h3>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-gray-900 uppercase">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CURBE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 uppercase">
                    <li><strong>Loss of profits, revenue, or business opportunities</strong></li>
                    <li><strong>Loss of data or cost of data recovery</strong></li>
                    <li><strong>Loss of goodwill or reputation</strong></li>
                    <li><strong>Business interruption</strong></li>
                    <li><strong>Cost of substitute products or services</strong></li>
                  </ul>
                  <p className="text-gray-600 mt-4 uppercase">
                    <strong className="text-gray-900">Even if Curbe has been advised of the possibility of such damages, whether arising under contract, tort (including negligence), strict liability, or otherwise.</strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.2 LIABILITY CAP</h3>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-gray-900 uppercase">CURBE'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID TO CURBE IN THE 12 MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY.</strong>
                  </p>
                  <p className="text-gray-600">
                    This limitation applies regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise) and applies even if any limited remedy fails of its essential purpose.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.3 Exceptions</h3>
                  <p className="text-gray-600 mb-2">
                    The limitations in this Section do not apply to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Your breach of Section 7 (Data Rights & Ownership)</li>
                    <li>Your violation of our intellectual property rights</li>
                    <li>Your indemnification obligations under Section 11</li>
                    <li>Liability that cannot be limited by applicable law</li>
                    <li>Gross negligence, fraud, or willful misconduct</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.4 Basis of the Bargain</h3>
                  <p className="text-gray-600">
                    You acknowledge that the fees charged reflect the allocation of risk set forth in these Terms and that we would not enter into these Terms without these limitations on liability.
                  </p>
                </div>
              </div>
            </section>

            <section id="indemnification" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.1 Your Indemnification</h3>
                  <p className="text-gray-600 mb-4">
                    You agree to indemnify, defend, and hold harmless Curbe and our officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Your use or misuse of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any applicable law or regulation</li>
                    <li>Your Customer Data, including any claims that it infringes third-party rights</li>
                    <li>Your violation of third-party rights (privacy, publicity, intellectual property)</li>
                    <li>Access or use of the Service by your Authorized Users</li>
                    <li>Your breach of any HIPAA obligations or BAA provisions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.2 Our Indemnification</h3>
                  <p className="text-gray-600 mb-2">
                    We will indemnify, defend, and hold you harmless from third-party claims that the Service infringes such third party's intellectual property rights, provided that you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Promptly notify us in writing of the claim</li>
                    <li>Grant us sole control of the defense and settlement</li>
                    <li>Provide reasonable cooperation in the defense</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    This indemnification does not apply if the claim arises from: (a) your modification of the Service, (b) your combination of the Service with other products or services, or (c) your use of the Service in violation of these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.3 Exclusive Remedy</h3>
                  <p className="text-gray-600">
                    This Section states our entire liability and your exclusive remedy for intellectual property infringement claims.
                  </p>
                </div>
              </div>
            </section>

            <section id="termination" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">12. Termination</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">12.1 Termination by You</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Convenience:</strong> You may terminate your Subscription at any time from your account settings</li>
                    <li><strong>Effective Date:</strong> Termination effective at end of current billing period</li>
                    <li><strong>No Refunds:</strong> No refunds for unused portion of subscription (except 30-day guarantee)</li>
                    <li><strong>Data Access:</strong> You may export your data before or within 30 days after termination</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">12.2 Termination by Us</h3>
                  <p className="text-gray-600 mb-2">
                    We may terminate your access to the Service:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>For Cause:</strong> Immediately if you breach these Terms</li>
                    <li><strong>Non-Payment:</strong> After 30 days past due payment</li>
                    <li><strong>Illegal Activity:</strong> Immediately upon reasonable belief of illegal use</li>
                    <li><strong>Service Discontinuation:</strong> With 90 days' notice if we discontinue the Service</li>
                    <li><strong>Legal Requirement:</strong> As required by law or government order</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">12.3 Effect of Termination</h3>
                  <p className="text-gray-600 mb-2">
                    Upon termination:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Access Termination:</strong> Your access to the Service immediately terminates</li>
                    <li><strong>Data Deletion:</strong> We will delete your Customer Data within 30 days (subject to legal retention)</li>
                    <li><strong>Payment Obligation:</strong> You remain liable for all fees incurred prior to termination</li>
                    <li><strong>Surviving Provisions:</strong> Sections 7, 9-11, 14, and 15 survive termination</li>
                    <li><strong>BAA Termination:</strong> BAA terminates concurrently with Service termination</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">12.4 Data Retrieval</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>30-Day Window:</strong> You have 30 days after termination to export your data</li>
                    <li><strong>Export Assistance:</strong> We will reasonably assist with data export upon request</li>
                    <li><strong>Data Deletion:</strong> After 30 days, data is permanently deleted and cannot be recovered</li>
                    <li><strong>Backup Deletion:</strong> Backups deleted per our backup retention policy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="changes" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">13.1 Modification Rights</h3>
                  <p className="text-gray-600">
                    We reserve the right to modify these Terms at any time. We will provide notice of material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Posting the updated Terms on our website with the effective date</li>
                    <li>Sending email notification to your account email address</li>
                    <li>Displaying a notice within the Service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">13.2 Notice Period</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Material Changes:</strong> 30 days' notice before effective date</li>
                    <li><strong>Non-Material Changes:</strong> Effective immediately upon posting</li>
                    <li><strong>Legal Changes:</strong> Changes required by law may be effective immediately</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">13.3 Acceptance</h3>
                  <p className="text-gray-600">
                    Your continued use of the Service after the effective date of modified Terms constitutes your acceptance. If you do not agree to modified Terms, your sole remedy is to terminate your Subscription before the effective date.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">13.4 Current Version</h3>
                  <p className="text-gray-600">
                    The current version of these Terms is always available at curbe.io/terms. We recommend reviewing the Terms periodically.
                  </p>
                </div>
              </div>
            </section>

            <section id="governing-law" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">14. Governing Law & Dispute Resolution</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.1 Governing Law</h3>
                  <p className="text-gray-600">
                    These Terms are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.2 Jurisdiction & Venue</h3>
                  <p className="text-gray-600">
                    Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Miami-Dade County, Florida, and you consent to personal jurisdiction and venue therein.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.3 Arbitration</h3>
                  <p className="text-gray-600 mb-2">
                    For disputes over $25,000, either party may elect binding arbitration:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Arbitration conducted by JAMS under its Comprehensive Arbitration Rules</li>
                    <li>Arbitration location: Miami, Florida</li>
                    <li>One arbitrator selected by mutual agreement or JAMS</li>
                    <li>Each party bears its own attorneys' fees unless otherwise awarded</li>
                    <li>No class or collective arbitration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.4 Equitable Relief</h3>
                  <p className="text-gray-600">
                    Either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent infringement of intellectual property rights or breach of confidentiality obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.5 Class Action Waiver</h3>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">YOU AND CURBE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.6 Time Limitation</h3>
                  <p className="text-gray-600">
                    Any claim or cause of action arising out of these Terms must be filed within one (1) year after the claim or cause of action arose or be forever barred.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">14.7 Additional Provisions</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Severability:</strong> If any provision is unenforceable, the remaining provisions continue in effect</li>
                    <li><strong>Waiver:</strong> Failure to enforce any provision is not a waiver of future enforcement</li>
                    <li><strong>Assignment:</strong> You may not assign these Terms; we may assign to affiliates or acquirers</li>
                    <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between parties</li>
                    <li><strong>No Third-Party Beneficiaries:</strong> These Terms create no third-party beneficiary rights</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="contact" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">WYNTON LLC (d/b/a Curbe)</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>General Inquiries:</strong> <a href="mailto:hello@curbe.io" className="text-blue-600 hover:underline">hello@curbe.io</a></li>
                    <li><strong>Legal:</strong> <a href="mailto:legal@curbe.io" className="text-blue-600 hover:underline">legal@curbe.io</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+18442872346" className="text-blue-600 hover:underline">(844) CURBE-IO</a></li>
                    <li><strong>Address:</strong> Miami, FL, United States</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Department-Specific Contacts</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Privacy:</strong> <a href="mailto:privacy@curbe.io" className="text-blue-700 hover:underline">privacy@curbe.io</a></li>
                    <li><strong>Security:</strong> <a href="mailto:security@curbe.io" className="text-blue-700 hover:underline">security@curbe.io</a></li>
                    <li><strong>Compliance/BAA:</strong> <a href="mailto:compliance@curbe.io" className="text-blue-700 hover:underline">compliance@curbe.io</a></li>
                    <li><strong>Support:</strong> <a href="mailto:support@curbe.io" className="text-blue-700 hover:underline">support@curbe.io</a></li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-black/5">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Effective Date:</strong> These Terms of Service are effective as of January 1, 2025. By using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
