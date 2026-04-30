import { CheckCircle2, FileCheck, Shield, Award, Scale } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { useTranslation } from "react-i18next";

export default function Compliance() {
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
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-700">CERTIFIED & COMPLIANT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="text-gradient-flow">
                {t('legal.compliance.title')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('legal.compliance.subtitle')}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <a href="#overview" className="text-gray-600 hover:text-blue-600 transition-colors">1. Compliance Overview</a>
              <a href="#hipaa" className="text-gray-600 hover:text-blue-600 transition-colors">2. HIPAA Compliance</a>
              <a href="#soc2" className="text-gray-600 hover:text-blue-600 transition-colors">3. SOC 2 Type II</a>
              <a href="#frameworks" className="text-gray-600 hover:text-blue-600 transition-colors">4. Security Frameworks</a>
              <a href="#privacy-laws" className="text-gray-600 hover:text-blue-600 transition-colors">5. Privacy Regulations</a>
              <a href="#insurance" className="text-gray-600 hover:text-blue-600 transition-colors">6. Insurance Regulations</a>
              <a href="#program" className="text-gray-600 hover:text-blue-600 transition-colors">7. Compliance Program</a>
              <a href="#audits" className="text-gray-600 hover:text-blue-600 transition-colors">8. Audits & Assessments</a>
              <a href="#documentation" className="text-gray-600 hover:text-blue-600 transition-colors">9. Documentation & Reporting</a>
              <a href="#training" className="text-gray-600 hover:text-blue-600 transition-colors">10. Training & Awareness</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">11. Contact Compliance Team</a>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 sm:space-y-8">
            <section id="overview" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">1. Compliance Overview</h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Our commitment to regulatory compliance and industry best practices
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <p className="text-gray-600">
                  Curbe is built on a foundation of regulatory compliance and security best practices. As a software platform serving insurance agencies that handle Protected Health Information (PHI), we maintain rigorous compliance with healthcare, privacy, and security regulations.
                </p>
                
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">Our Compliance Posture:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>HIPAA Business Associate:</strong> Full compliance with HIPAA Privacy, Security, and Breach Notification Rules</li>
                    <li><strong>SOC 2 Type II Certified:</strong> Independent attestation of security, availability, and confidentiality controls</li>
                    <li><strong>NIST Alignment:</strong> Implementation of NIST Cybersecurity Framework and NIST 800-53 controls</li>
                    <li><strong>ISO 27001 Aligned:</strong> Information security management system based on ISO 27001 standards</li>
                    <li><strong>State & Federal Laws:</strong> Compliance with GDPR, CCPA/CPRA, and state insurance regulations</li>
                    <li><strong>Industry Standards:</strong> Adherence to OWASP, CIS Controls, and other security benchmarks</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-black/5 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Business Associate Role:</strong> We act as a HIPAA Business Associate to insurance agencies (Covered Entities). Our platform enables agencies to securely manage client health insurance information while maintaining full HIPAA compliance.
                  </p>
                </div>
              </div>
            </section>

            <section id="hipaa" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">2. HIPAA Compliance</h2>
                  <p className="text-gray-600">
                    Comprehensive compliance with all HIPAA regulations
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.1 HIPAA Privacy Rule (45 CFR Part 160 and Part 164, Subparts A and E)</h3>
                  <p className="text-gray-600 mb-3">
                    The Privacy Rule establishes national standards for the protection of PHI. Our compliance includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Notice of Privacy Practices:</strong> Comprehensive privacy notice provided to all users</li>
                    <li><strong>Minimum Necessary:</strong> System designed to limit PHI access to minimum necessary</li>
                    <li><strong>Individual Rights:</strong> Support for individual rights to access, amend, and receive accounting of disclosures</li>
                    <li><strong>Use and Disclosure Limits:</strong> PHI used only for treatment, payment, and healthcare operations (TPO)</li>
                    <li><strong>Authorization Requirements:</strong> Secure handling of authorizations for non-TPO uses</li>
                    <li><strong>Marketing Restrictions:</strong> No use of PHI for marketing without authorization</li>
                    <li><strong>Sale of PHI Prohibition:</strong> Strict prohibition on selling PHI</li>
                    <li><strong>Personal Representatives:</strong> Proper recognition of personal representatives' rights</li>
                    <li><strong>De-identification Standards:</strong> HIPAA-compliant de-identification methods when used</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.2 HIPAA Security Rule (45 CFR Part 164, Subpart C)</h3>
                  <p className="text-gray-600 mb-3">
                    The Security Rule requires appropriate administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and security of ePHI:
                  </p>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Administrative Safeguards</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Security Management Process (§ 164.308(a)(1))</li>
                        <li>Assigned Security Responsibility (§ 164.308(a)(2))</li>
                        <li>Workforce Security (§ 164.308(a)(3))</li>
                        <li>Information Access Management (§ 164.308(a)(4))</li>
                        <li>Security Awareness and Training (§ 164.308(a)(5))</li>
                        <li>Security Incident Procedures (§ 164.308(a)(6))</li>
                        <li>Contingency Plan (§ 164.308(a)(7))</li>
                        <li>Evaluation (§ 164.308(a)(8))</li>
                        <li>Business Associate Contracts (§ 164.308(b)(1))</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Physical Safeguards</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Facility Access Controls (§ 164.310(a)(1))</li>
                        <li>Workstation Use (§ 164.310(b))</li>
                        <li>Workstation Security (§ 164.310(c))</li>
                        <li>Device and Media Controls (§ 164.310(d)(1))</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Safeguards</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Access Control (§ 164.312(a)(1)) - Unique user IDs, emergency access, automatic logoff, encryption</li>
                        <li>Audit Controls (§ 164.312(b)) - Comprehensive logging of ePHI access</li>
                        <li>Integrity (§ 164.312(c)(1)) - Mechanisms to ensure ePHI integrity</li>
                        <li>Person or Entity Authentication (§ 164.312(d)) - Multi-factor authentication</li>
                        <li>Transmission Security (§ 164.312(e)(1)) - TLS 1.3 encryption for all transmissions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.3 Breach Notification Rule (45 CFR §§ 164.400-414)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Breach Assessment:</strong> Risk assessment of all security incidents to determine breach status</li>
                    <li><strong>60-Day Notification:</strong> Notification to affected individuals within 60 days of breach discovery</li>
                    <li><strong>Business Associate Notification:</strong> Notification to Covered Entities within 60 days</li>
                    <li><strong>HHS Secretary Notification:</strong> Immediate notification for breaches affecting 500+ individuals</li>
                    <li><strong>Annual Reporting:</strong> Annual report to HHS for smaller breaches</li>
                    <li><strong>Media Notification:</strong> Notification to prominent media outlets for large breaches</li>
                    <li><strong>Breach Log:</strong> Documentation of all breaches maintained for 6 years</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.4 HITECH Act and Omnibus Rule</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Business Associate Liability:</strong> Direct liability for Business Associates (us) under HIPAA</li>
                    <li><strong>Increased Penalties:</strong> Civil penalties up to $1.9M per violation category per year</li>
                    <li><strong>Stricter Enforcement:</strong> Enhanced enforcement by HHS Office for Civil Rights</li>
                    <li><strong>Breach Notification Expansion:</strong> Presumption that security incidents are breaches unless proven otherwise</li>
                    <li><strong>Genetic Information:</strong> Enhanced protections for genetic information</li>
                    <li><strong>Marketing Restrictions:</strong> Stricter limits on use of PHI for marketing</li>
                    <li><strong>Sale of PHI:</strong> Prohibition on sale of PHI without authorization</li>
                    <li><strong>Individual Rights:</strong> Enhanced individual rights including right to access ePHI</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.5 Business Associate Agreements (BAAs)</h3>
                  <p className="text-gray-600 mb-3">
                    We maintain comprehensive Business Associate Agreements with all customers and subcontractors:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Customer BAAs:</strong> Executed BAA with every insurance agency customer handling PHI</li>
                    <li><strong>Subcontractor BAAs:</strong> BAAs with all vendors who access PHI on our behalf</li>
                    <li><strong>Required Provisions:</strong> All required provisions per 45 CFR § 164.314(a)(2)</li>
                    <li><strong>Use and Disclosure:</strong> Clear limitations on use and disclosure of PHI</li>
                    <li><strong>Safeguards:</strong> Contractual requirements for appropriate safeguards</li>
                    <li><strong>Subcontractor Management:</strong> Ensure subcontractors comply with same restrictions</li>
                    <li><strong>Breach Reporting:</strong> Immediate breach notification obligations</li>
                    <li><strong>Individual Rights Support:</strong> Assistance with individual rights requests</li>
                    <li><strong>Audit and Inspection:</strong> Rights to audit our HIPAA compliance</li>
                    <li><strong>Termination Provisions:</strong> PHI return or destruction upon contract termination</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="soc2" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">3. SOC 2 Type II Certification</h2>
                  <p className="text-gray-600">
                    Independent verification of security and privacy controls
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <p className="text-gray-600">
                  Our SOC 2 Type II certification demonstrates our commitment to maintaining the highest standards for security, availability, processing integrity, confidentiality, and privacy. This certification requires an independent audit by a qualified CPA firm examining our controls over a minimum 6-month period.
                </p>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.1 Trust Services Criteria (TSC)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Security (CC Section)</h4>
                      <p className="text-gray-600 mb-2">
                        The system is protected against unauthorized access (both physical and logical):
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>CC6.1: Logical and physical access controls</li>
                        <li>CC6.2: Authorization before granting access</li>
                        <li>CC6.3: Network and communication protection</li>
                        <li>CC6.6: Encryption of data at rest and in transit</li>
                        <li>CC6.7: Transmission encryption</li>
                        <li>CC6.8: Prevention and detection of malicious software</li>
                        <li>CC7.2: Detection of security incidents</li>
                        <li>CC7.3: Security incident response and remediation</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Availability (A Section)</h4>
                      <p className="text-gray-600 mb-2">
                        The system is available for operation and use as committed or agreed:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>A1.1: Performance management and capacity planning</li>
                        <li>A1.2: Environmental protections and monitoring</li>
                        <li>A1.3: Recovery and continuity processes</li>
                        <li>99.99% uptime SLA with financial penalties</li>
                        <li>Geographic redundancy across multiple regions</li>
                        <li>Automated failover and disaster recovery</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Processing Integrity (PI Section)</h4>
                      <p className="text-gray-600 mb-2">
                        System processing is complete, valid, accurate, timely, and authorized:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>PI1.1: Data processing quality controls</li>
                        <li>PI1.2: Inputs completeness and accuracy</li>
                        <li>PI1.3: Processing completeness and accuracy</li>
                        <li>PI1.4: Error detection and correction</li>
                        <li>PI1.5: Output completeness and accuracy</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Confidentiality (C Section)</h4>
                      <p className="text-gray-600 mb-2">
                        Information designated as confidential is protected:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>C1.1: Confidentiality commitments and obligations</li>
                        <li>C1.2: Disposal of confidential information</li>
                        <li>Confidentiality agreements with all personnel</li>
                        <li>Encryption of confidential data</li>
                        <li>Secure deletion procedures</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy (P Section)</h4>
                      <p className="text-gray-600 mb-2">
                        Personal information is collected, used, retained, disclosed, and disposed appropriately:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>P3.1: Notice to data subjects about privacy practices</li>
                        <li>P3.2: Purpose specification and limitation</li>
                        <li>P4.1: Collection limitation and data minimization</li>
                        <li>P5.1: Use, retention, and disposal</li>
                        <li>P6.1: Disclosure to third parties</li>
                        <li>P6.6: Disclosure notification</li>
                        <li>P7.1: Data quality and integrity</li>
                        <li>P8.1: Individual rights (access, correction, deletion)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.2 Audit Process</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Annual Audits:</strong> Complete SOC 2 Type II audit performed annually</li>
                    <li><strong>Independent Auditor:</strong> Conducted by qualified, independent CPA firm</li>
                    <li><strong>6-Month Review Period:</strong> Examination period covers minimum 6 months</li>
                    <li><strong>Control Testing:</strong> Detailed testing of security and operational controls</li>
                    <li><strong>Evidence Collection:</strong> Comprehensive documentation of control operation</li>
                    <li><strong>Management Assertion:</strong> Written assertion of system description accuracy</li>
                    <li><strong>Opinion Letter:</strong> Auditor opinion on control design and operating effectiveness</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.3 Report Availability</h3>
                  <p className="text-gray-600 mb-2">
                    Our SOC 2 Type II report is available to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Current Customers:</strong> Full report available under NDA</li>
                    <li><strong>Prospective Customers:</strong> Executive summary or bridge letter available</li>
                    <li><strong>Request Process:</strong> Contact <a href="mailto:compliance@curbe.io" className="text-blue-700 hover:underline">compliance@curbe.io</a></li>
                    <li><strong>NDA Requirement:</strong> Non-disclosure agreement required for full report access</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="frameworks" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4. Security Frameworks & Standards</h2>
                  <p className="text-gray-600">
                    Implementation of industry-leading security frameworks
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.1 NIST Cybersecurity Framework</h3>
                  <p className="text-gray-600 mb-3">
                    Implementation of the National Institute of Standards and Technology Cybersecurity Framework:
                  </p>
                  <div className="space-y-3 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Identify</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Asset Management (ID.AM): Complete inventory of systems, data, and applications</li>
                        <li>Business Environment (ID.BE): Understanding of business role and critical functions</li>
                        <li>Governance (ID.GV): Policies, procedures, and regulatory requirements</li>
                        <li>Risk Assessment (ID.RA): Annual comprehensive risk assessments</li>
                        <li>Risk Management Strategy (ID.RM): Defined risk tolerance and mitigation strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Protect</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Access Control (PR.AC): Identity management and access control</li>
                        <li>Awareness and Training (PR.AT): Security awareness program</li>
                        <li>Data Security (PR.DS): Data-at-rest and data-in-transit encryption</li>
                        <li>Information Protection (PR.IP): Security policies and procedures</li>
                        <li>Maintenance (PR.MA): System maintenance and patching</li>
                        <li>Protective Technology (PR.PT): Technical security solutions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Detect</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Anomalies and Events (DE.AE): Baseline normal operations and detect anomalies</li>
                        <li>Security Continuous Monitoring (DE.CM): 24/7 SOC monitoring</li>
                        <li>Detection Processes (DE.DP): Roles, responsibilities, and testing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Respond</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Response Planning (RS.RP): Incident response procedures</li>
                        <li>Communications (RS.CO): Internal and external communication plans</li>
                        <li>Analysis (RS.AN): Incident investigation and analysis</li>
                        <li>Mitigation (RS.MI): Containment and eradication procedures</li>
                        <li>Improvements (RS.IM): Lessons learned and process improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Recover</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Recovery Planning (RC.RP): Business continuity and disaster recovery plans</li>
                        <li>Improvements (RC.IM): Update recovery strategies based on lessons learned</li>
                        <li>Communications (RC.CO): Stakeholder communication during recovery</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.2 NIST 800-53 Controls</h3>
                  <p className="text-gray-600 mb-2">
                    Implementation of security controls from NIST SP 800-53:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Access Control (AC):</strong> 25+ controls for managing access to systems and data</li>
                    <li><strong>Audit and Accountability (AU):</strong> Comprehensive logging and monitoring</li>
                    <li><strong>Security Assessment (CA):</strong> Regular security assessments and authorizations</li>
                    <li><strong>Configuration Management (CM):</strong> Baseline configurations and change control</li>
                    <li><strong>Identification and Authentication (IA):</strong> User identification and MFA</li>
                    <li><strong>Incident Response (IR):</strong> Structured incident response procedures</li>
                    <li><strong>Risk Assessment (RA):</strong> Ongoing risk identification and analysis</li>
                    <li><strong>System and Communications Protection (SC):</strong> Boundary protection and encryption</li>
                    <li><strong>System and Information Integrity (SI):</strong> Flaw remediation and malware protection</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.3 ISO/IEC 27001 Alignment</h3>
                  <p className="text-gray-600 mb-2">
                    Information Security Management System (ISMS) aligned with ISO 27001:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Annex A Controls:</strong> Implementation of 93 security controls from ISO 27001:2022</li>
                    <li><strong>Risk-Based Approach:</strong> Systematic identification and treatment of information security risks</li>
                    <li><strong>ISMS Documentation:</strong> Comprehensive policies, procedures, and records</li>
                    <li><strong>Management Review:</strong> Regular management review of ISMS effectiveness</li>
                    <li><strong>Continual Improvement:</strong> PDCA (Plan-Do-Check-Act) cycle for ongoing improvement</li>
                    <li><strong>Internal Audits:</strong> Regular internal audits of ISMS compliance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.4 CIS Controls</h3>
                  <p className="text-gray-600 mb-2">
                    Implementation of Center for Internet Security Critical Security Controls:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>CIS Control 1:</strong> Inventory and Control of Enterprise Assets</li>
                    <li><strong>CIS Control 2:</strong> Inventory and Control of Software Assets</li>
                    <li><strong>CIS Control 3:</strong> Data Protection</li>
                    <li><strong>CIS Control 4:</strong> Secure Configuration of Enterprise Assets</li>
                    <li><strong>CIS Control 5:</strong> Account Management</li>
                    <li><strong>CIS Control 6:</strong> Access Control Management</li>
                    <li><strong>CIS Control 7:</strong> Continuous Vulnerability Management</li>
                    <li><strong>CIS Control 8:</strong> Audit Log Management</li>
                    <li><strong>CIS Control 10:</strong> Malware Defenses</li>
                    <li><strong>CIS Control 13:</strong> Network Monitoring and Defense</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.5 OWASP Standards</h3>
                  <p className="text-gray-600 mb-2">
                    Application security based on OWASP best practices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>OWASP Top 10:</strong> Protection against all OWASP Top 10 vulnerabilities</li>
                    <li><strong>OWASP ASVS:</strong> Application Security Verification Standard implementation</li>
                    <li><strong>Secure Code Review:</strong> OWASP Code Review Guide methodology</li>
                    <li><strong>Testing Guide:</strong> OWASP Testing Guide for security testing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="privacy" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">5. Privacy Regulations</h2>
                  <p className="text-gray-600">
                    Compliance with global and state privacy laws
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.1 General Data Protection Regulation (GDPR)</h3>
                  <p className="text-gray-600 mb-3">
                    Full compliance with EU GDPR for any EU data subjects:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Lawful Basis:</strong> Consent or legitimate interest for processing personal data</li>
                    <li><strong>Data Subject Rights:</strong> Right to access, rectification, erasure, restriction, portability, and objection</li>
                    <li><strong>Data Protection Officer:</strong> Designated DPO for GDPR matters</li>
                    <li><strong>Data Processing Agreements:</strong> GDPR-compliant contracts with processors</li>
                    <li><strong>Privacy by Design:</strong> Privacy considerations in all system development</li>
                    <li><strong>Data Protection Impact Assessments:</strong> DPIAs for high-risk processing</li>
                    <li><strong>Breach Notification:</strong> Notification within 72 hours to supervisory authority</li>
                    <li><strong>Data Transfers:</strong> Standard Contractual Clauses for EU-US transfers</li>
                    <li><strong>Records of Processing:</strong> Article 30 records of processing activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.2 California Consumer Privacy Act (CCPA/CPRA)</h3>
                  <p className="text-gray-600 mb-3">
                    Compliance with California privacy laws:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Right to Know:</strong> Disclosure of personal information collected and shared</li>
                    <li><strong>Right to Delete:</strong> Deletion of personal information upon request</li>
                    <li><strong>Right to Opt-Out:</strong> Opt-out of sale (note: we do not sell personal information)</li>
                    <li><strong>Right to Correct:</strong> Correction of inaccurate personal information</li>
                    <li><strong>Right to Limit:</strong> Limit use of sensitive personal information</li>
                    <li><strong>Non-Discrimination:</strong> No discrimination for exercising privacy rights</li>
                    <li><strong>Privacy Notice:</strong> Clear notice of privacy practices at collection</li>
                    <li><strong>Do Not Sell:</strong> Honored "Do Not Sell My Personal Information" requests</li>
                    <li><strong>Service Provider Status:</strong> Service provider agreements with CA businesses</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.3 Other State Privacy Laws</h3>
                  <p className="text-gray-600 mb-3">
                    Compliance with comprehensive state privacy laws:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Virginia (VCDPA):</strong> Virginia Consumer Data Protection Act compliance</li>
                    <li><strong>Colorado (CPA):</strong> Colorado Privacy Act compliance</li>
                    <li><strong>Connecticut (CTDPA):</strong> Connecticut Data Privacy Act compliance</li>
                    <li><strong>Utah (UCPA):</strong> Utah Consumer Privacy Act compliance</li>
                    <li><strong>Montana (MCDPA):</strong> Montana Consumer Data Privacy Act readiness</li>
                    <li><strong>State Breach Laws:</strong> Compliance with all state breach notification requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.4 Health-Specific Privacy Laws</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>California CMIA:</strong> Confidentiality of Medical Information Act</li>
                    <li><strong>State Medical Privacy:</strong> Compliance with state-specific health information laws</li>
                    <li><strong>Genetic Information:</strong> GINA (Genetic Information Nondiscrimination Act) compliance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="insurance" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">6. Insurance Industry Regulations</h2>
                  <p className="text-gray-600">
                    Compliance with insurance-specific regulations
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.1 Gramm-Leach-Bliley Act (GLBA)</h3>
                  <p className="text-gray-600 mb-3">
                    Financial privacy requirements for insurance information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Financial Privacy Rule:</strong> Privacy protections for consumers' personal financial information</li>
                    <li><strong>Safeguards Rule:</strong> Written information security program</li>
                    <li><strong>Pretexting Protections:</strong> Protections against pretexting (obtaining customer information under false pretenses)</li>
                    <li><strong>Privacy Notices:</strong> Annual privacy notices to consumers</li>
                    <li><strong>Opt-Out Rights:</strong> Right to opt-out of information sharing with non-affiliated third parties</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.2 State Insurance Regulations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>State Insurance Departments:</strong> Compliance with state-specific insurance regulations</li>
                    <li><strong>NAIC Model Laws:</strong> Alignment with National Association of Insurance Commissioners model laws</li>
                    <li><strong>Privacy of Consumer Information:</strong> NAIC Privacy of Consumer Financial and Health Information Model Regulation</li>
                    <li><strong>Data Security:</strong> NAIC Insurance Data Security Model Law compliance</li>
                    <li><strong>Cybersecurity:</strong> State cybersecurity regulations for insurance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.3 CMS Regulations (Medicare/Medicaid)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Medicare Advantage:</strong> Compliance with CMS regulations for MA plans</li>
                    <li><strong>Medicare Part D:</strong> Privacy and security for prescription drug plans</li>
                    <li><strong>Medicaid:</strong> State and federal Medicaid privacy requirements</li>
                    <li><strong>Marketing Guidelines:</strong> CMS marketing and communication regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.4 Payment Card Industry (PCI DSS)</h3>
                  <p className="text-gray-600 mb-3">
                    For handling premium payments:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>PCI DSS v4.0:</strong> Compliance with Payment Card Industry Data Security Standard</li>
                    <li><strong>Tokenization:</strong> Credit card tokenization (no storage of full card numbers)</li>
                    <li><strong>Secure Processing:</strong> PCI-compliant payment processing</li>
                    <li><strong>Network Segmentation:</strong> Separate card data environment</li>
                    <li><strong>Quarterly Scans:</strong> Quarterly ASV vulnerability scans</li>
                    <li><strong>Annual Assessments:</strong> Annual PCI DSS assessments</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="program" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">7. Compliance Program</h2>
                  <p className="text-gray-600">
                    Structured program for ongoing compliance management
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.1 Governance Structure</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Chief Compliance Officer:</strong> Executive-level compliance leadership</li>
                    <li><strong>Privacy Officer:</strong> HIPAA Privacy Officer responsible for privacy compliance</li>
                    <li><strong>Security Officer:</strong> HIPAA Security Officer responsible for security compliance</li>
                    <li><strong>Data Protection Officer:</strong> GDPR Data Protection Officer (when required)</li>
                    <li><strong>Compliance Committee:</strong> Cross-functional committee overseeing compliance</li>
                    <li><strong>Board Oversight:</strong> Regular compliance reports to board of directors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.2 Policies and Procedures</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Policy Framework:</strong> Comprehensive set of security and privacy policies</li>
                    <li><strong>Standard Operating Procedures:</strong> Detailed procedures for all critical processes</li>
                    <li><strong>Annual Review:</strong> Annual review and update of all policies</li>
                    <li><strong>Version Control:</strong> Documented version history of policy changes</li>
                    <li><strong>Accessibility:</strong> Policies accessible to all employees</li>
                    <li><strong>Acknowledgment:</strong> Employee acknowledgment of policy awareness</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.3 Risk Management</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Annual Risk Assessment:</strong> Comprehensive security risk assessment annually</li>
                    <li><strong>Ongoing Risk Monitoring:</strong> Continuous monitoring of emerging risks</li>
                    <li><strong>Risk Register:</strong> Documented register of identified risks and mitigations</li>
                    <li><strong>Treatment Plans:</strong> Risk treatment plans for each identified risk</li>
                    <li><strong>Residual Risk Acceptance:</strong> Documented acceptance of residual risks</li>
                    <li><strong>Executive Reporting:</strong> Quarterly risk reports to executive management</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.4 Monitoring and Measurement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Compliance Metrics:</strong> KPIs for measuring compliance effectiveness</li>
                    <li><strong>Dashboard Reporting:</strong> Real-time compliance dashboards</li>
                    <li><strong>Trend Analysis:</strong> Analysis of compliance trends over time</li>
                    <li><strong>Benchmark Comparison:</strong> Comparison to industry benchmarks</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="audits" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">8. Audits & Assessments</h2>
                  <p className="text-gray-600">
                    Regular independent verification of compliance
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.1 External Audits</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>SOC 2 Type II:</strong> Annual audit by independent CPA firm</li>
                    <li><strong>HIPAA Audits:</strong> Periodic HIPAA compliance audits</li>
                    <li><strong>Penetration Testing:</strong> Quarterly external penetration tests</li>
                    <li><strong>Vulnerability Assessments:</strong> Quarterly vulnerability assessments</li>
                    <li><strong>PCI DSS Scans:</strong> Quarterly ASV scans (when applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.2 Internal Audits</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Quarterly Reviews:</strong> Internal compliance reviews quarterly</li>
                    <li><strong>Control Testing:</strong> Regular testing of security controls</li>
                    <li><strong>Policy Compliance:</strong> Audits of policy adherence</li>
                    <li><strong>Access Reviews:</strong> Quarterly access right reviews</li>
                    <li><strong>Vendor Audits:</strong> Annual audits of critical vendors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.3 Continuous Compliance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Automated Monitoring:</strong> Continuous compliance monitoring tools</li>
                    <li><strong>Policy Violations:</strong> Automated detection of policy violations</li>
                    <li><strong>Configuration Drift:</strong> Detection of security configuration changes</li>
                    <li><strong>Compliance Dashboards:</strong> Real-time compliance status visibility</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.4 Remediation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Finding Classification:</strong> Risk-based classification of audit findings</li>
                    <li><strong>Remediation Plans:</strong> Documented plans for addressing findings</li>
                    <li><strong>Timeline Tracking:</strong> Tracking of remediation timelines</li>
                    <li><strong>Verification:</strong> Verification of remediation effectiveness</li>
                    <li><strong>Executive Reporting:</strong> Monthly reporting of open findings to executives</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="documentation" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">9. Documentation & Reporting</h2>
                  <p className="text-gray-600">
                    Comprehensive documentation for compliance demonstration
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.1 Compliance Documentation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>SOC 2 Reports:</strong> Available to customers under NDA</li>
                    <li><strong>Security Documentation:</strong> Architecture diagrams, data flow maps, security controls</li>
                    <li><strong>Policies and Procedures:</strong> Complete policy library</li>
                    <li><strong>Risk Assessments:</strong> Annual risk assessment reports</li>
                    <li><strong>Audit Reports:</strong> Internal and external audit findings</li>
                    <li><strong>Penetration Test Results:</strong> Executive summaries of penetration tests</li>
                    <li><strong>Business Associate Agreements:</strong> Template BAA available</li>
                    <li><strong>DPA Templates:</strong> Data Processing Agreement templates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.2 Transparency Reporting</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Security Page:</strong> Public security information on website</li>
                    <li><strong>Status Page:</strong> Real-time system status and incident updates</li>
                    <li><strong>Trust Center:</strong> Centralized compliance documentation portal</li>
                    <li><strong>Changelog:</strong> Security and privacy-related changes documented</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.3 Customer Compliance Support</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Security Questionnaires:</strong> Assistance completing customer security assessments</li>
                    <li><strong>BAA Execution:</strong> Rapid BAA signing process</li>
                    <li><strong>Audit Support:</strong> Support for customer audits of our services</li>
                    <li><strong>Compliance Consultation:</strong> Guidance on compliance best practices</li>
                    <li><strong>Incident Reporting:</strong> Timely incident notifications per agreements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.4 Record Retention</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Audit Logs:</strong> 6 years minimum retention</li>
                    <li><strong>BAAs:</strong> 6 years after termination</li>
                    <li><strong>Policies:</strong> 6 years for superseded versions</li>
                    <li><strong>Incident Documentation:</strong> 6 years</li>
                    <li><strong>Compliance Certifications:</strong> Permanent retention</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="training" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">10. Training & Awareness</h2>
                  <p className="text-gray-600">
                    Building a culture of compliance and security
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.1 Mandatory Training</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>HIPAA Training:</strong> Annual HIPAA privacy and security training for all staff</li>
                    <li><strong>Security Awareness:</strong> Quarterly security awareness training</li>
                    <li><strong>Privacy Training:</strong> Annual privacy and data protection training</li>
                    <li><strong>Compliance Training:</strong> Role-specific compliance training</li>
                    <li><strong>New Hire Training:</strong> Comprehensive onboarding training within first week</li>
                    <li><strong>Refresher Training:</strong> Annual refresher on all topics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.2 Specialized Training</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Developer Security:</strong> Secure coding and OWASP training for developers</li>
                    <li><strong>Incident Response:</strong> Incident response training for security team</li>
                    <li><strong>Privacy Impact Assessment:</strong> DPIA training for product managers</li>
                    <li><strong>Vendor Management:</strong> Third-party risk management training</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.3 Testing and Validation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Knowledge Tests:</strong> Post-training assessments</li>
                    <li><strong>Phishing Simulations:</strong> Monthly simulated phishing campaigns</li>
                    <li><strong>Tabletop Exercises:</strong> Quarterly incident response tabletops</li>
                    <li><strong>Compliance Quizzes:</strong> Random compliance knowledge checks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.4 Certifications</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Industry Certifications:</strong> Support for CISSP, CISM, CISA, CRISC certifications</li>
                    <li><strong>HIPAA Certification:</strong> Staff encouraged to pursue HCISPP certification</li>
                    <li><strong>Privacy Certifications:</strong> CIPP, CIPM, CIPT certifications for privacy team</li>
                    <li><strong>Conference Attendance:</strong> Regular attendance at security and compliance conferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="contact" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">11. Contact Compliance Team</h2>
              <p className="text-gray-600 mb-4">
                For compliance-related inquiries, documentation requests, or to report concerns:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Chief Compliance Officer</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Email:</strong> <a href="mailto:compliance@curbe.io" className="text-blue-700 hover:underline">compliance@curbe.io</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+18442872346" className="text-blue-700 hover:underline">(844) CURBE-IO</a></li>
                    <li><strong>Address:</strong> Miami, FL, United States</li>
                    <li><strong>Response Time:</strong> Within 2 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Documentation Requests</h3>
                  <p className="text-gray-600 mb-2">
                    We provide the following documentation to customers and prospects:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>SOC 2 Type II reports (under NDA)</li>
                    <li>Business Associate Agreement templates</li>
                    <li>Data Processing Agreements</li>
                    <li>Security architecture documentation</li>
                    <li>Penetration test executive summaries</li>
                    <li>Completed security questionnaires</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Compliance Hotline</h3>
                  <p className="text-gray-600 mb-2">
                    To report compliance concerns or potential violations:
                  </p>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Anonymous Hotline:</strong> Available 24/7</li>
                    <li><strong>Email:</strong> <a href="mailto:ethics@curbe.io" className="text-blue-600 hover:underline">ethics@curbe.io</a></li>
                    <li><strong>Non-Retaliation:</strong> Whistleblower protections in place</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-black/5">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Commitment to Compliance:</strong> We take our compliance obligations seriously. If you have questions about our compliance program or need documentation for your own compliance efforts, please don't hesitate to reach out to our compliance team.
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
