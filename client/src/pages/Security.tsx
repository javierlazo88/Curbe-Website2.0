import { Lock, Shield, Key, Database, Eye, FileCheck, Server, Zap } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { useTranslation } from "react-i18next";

export default function Security() {
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
              <Lock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">ENTERPRISE-GRADE SECURITY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="text-gradient-flow">
                {t('legal.security.title')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {t('legal.security.subtitle')}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <a href="#overview" className="text-gray-600 hover:text-blue-600 transition-colors">1. Security Overview</a>
              <a href="#encryption" className="text-gray-600 hover:text-blue-600 transition-colors">2. Data Encryption</a>
              <a href="#access-control" className="text-gray-600 hover:text-blue-600 transition-colors">3. Access Control & Authentication</a>
              <a href="#infrastructure" className="text-gray-600 hover:text-blue-600 transition-colors">4. Infrastructure Security</a>
              <a href="#network" className="text-gray-600 hover:text-blue-600 transition-colors">5. Network Security</a>
              <a href="#monitoring" className="text-gray-600 hover:text-blue-600 transition-colors">6. Monitoring & Auditing</a>
              <a href="#backup" className="text-gray-600 hover:text-blue-600 transition-colors">7. Backup & Disaster Recovery</a>
              <a href="#vulnerability" className="text-gray-600 hover:text-blue-600 transition-colors">8. Vulnerability Management</a>
              <a href="#incident" className="text-gray-600 hover:text-blue-600 transition-colors">9. Incident Response</a>
              <a href="#training" className="text-gray-600 hover:text-blue-600 transition-colors">10. Security Training</a>
              <a href="#third-party" className="text-gray-600 hover:text-blue-600 transition-colors">11. Third-Party Security</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">12. Security Contact</a>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 sm:space-y-8">
            <section id="overview" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">1. Security Overview</h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Comprehensive security program protecting Protected Health Information (PHI)
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <p className="text-base sm:text-lg text-gray-600">
                  At Curbe, security is not an afterthought—it's the foundation of everything we build. As a software platform serving insurance agencies that handle Protected Health Information (PHI), we maintain the highest standards of data security and privacy.
                </p>
                
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">Our Security Commitment:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>HIPAA Compliance:</strong> Full compliance with HIPAA Security Rule (45 CFR Part 164 Subpart C)</li>
                    <li><strong>SOC 2 Type II Certified:</strong> Independent audit of our security controls</li>
                    <li><strong>Zero Trust Architecture:</strong> Never trust, always verify - every access request is authenticated and authorized</li>
                    <li><strong>Defense in Depth:</strong> Multiple layers of security controls to protect against threats</li>
                    <li><strong>Continuous Monitoring:</strong> 24/7/365 security operations center monitoring for threats</li>
                    <li><strong>Regular Audits:</strong> Quarterly penetration testing and annual compliance audits</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-black/5 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Business Associate Status:</strong> We act as a HIPAA Business Associate to insurance agencies (Covered Entities). We sign Business Associate Agreements (BAAs) with all customers handling PHI and ensure all subcontractors do the same.
                  </p>
                </div>
              </div>
            </section>

            <section id="encryption" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Key className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">2. Data Encryption</h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Military-grade encryption protecting data at rest, in transit, and in use
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.1 Encryption at Rest</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>AES-256 Encryption:</strong> All data stored in our databases is encrypted using Advanced Encryption Standard with 256-bit keys</li>
                    <li><strong>Database-Level Encryption:</strong> Full database encryption using transparent data encryption (TDE)</li>
                    <li><strong>File Storage Encryption:</strong> All uploaded files and attachments encrypted before storage</li>
                    <li><strong>Backup Encryption:</strong> All backup files are encrypted with the same AES-256 standard</li>
                    <li><strong>Encrypted Volumes:</strong> Server volumes and attached storage use encrypted file systems</li>
                    <li><strong>Field-Level Encryption:</strong> Sensitive fields (SSN, payment information) have additional encryption layer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.2 Encryption in Transit</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>TLS 1.3:</strong> All data transmitted between clients and servers uses Transport Layer Security 1.3</li>
                    <li><strong>Perfect Forward Secrecy:</strong> Each session uses unique encryption keys</li>
                    <li><strong>HTTPS Only:</strong> All web traffic is encrypted; HTTP requests are automatically redirected to HTTPS</li>
                    <li><strong>API Encryption:</strong> All API endpoints require TLS 1.3 with strong cipher suites</li>
                    <li><strong>Email Encryption:</strong> Emails containing PHI use S/MIME or TLS encryption</li>
                    <li><strong>VPN for Admin Access:</strong> Administrative access requires encrypted VPN tunnel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.3 Key Management</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Hardware Security Modules (HSM):</strong> Cryptographic keys stored in FIPS 140-2 Level 3 certified HSMs</li>
                    <li><strong>Key Rotation:</strong> Automatic encryption key rotation every 90 days</li>
                    <li><strong>Key Separation:</strong> Separate keys for different data types and environments</li>
                    <li><strong>Access Control:</strong> Encryption keys accessible only to authorized systems and personnel</li>
                    <li><strong>Key Backup:</strong> Encrypted backup of keys in geographically separate location</li>
                    <li><strong>Key Destruction:</strong> Secure destruction of deprecated keys using NIST SP 800-88 guidelines</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">2.4 Password Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>bcrypt Hashing:</strong> All passwords hashed using bcrypt with work factor of 12+</li>
                    <li><strong>Salt Generation:</strong> Unique salt generated for each password</li>
                    <li><strong>No Plain Text Storage:</strong> Passwords never stored in plain text or reversible encryption</li>
                    <li><strong>Password Policies:</strong> Minimum 12 characters, complexity requirements enforced</li>
                    <li><strong>Breach Detection:</strong> Passwords checked against known breach databases</li>
                    <li><strong>Account Lockout:</strong> Temporary lockout after 5 failed login attempts</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="access-control" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">3. Access Control & Authentication</h2>
                  <p className="text-gray-600">
                    Rigorous access controls ensuring only authorized users access PHI
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.1 Multi-Factor Authentication (MFA)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Mandatory MFA:</strong> Required for all users accessing PHI</li>
                    <li><strong>Multiple Methods:</strong> Support for authenticator apps (TOTP), SMS, email, and biometric</li>
                    <li><strong>Device Trust:</strong> Option to remember trusted devices for 30 days</li>
                    <li><strong>Backup Codes:</strong> One-time recovery codes for account access</li>
                    <li><strong>Hardware Tokens:</strong> Support for FIDO2/WebAuthn security keys</li>
                    <li><strong>Admin MFA:</strong> More stringent MFA requirements for administrative accounts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.2 Single Sign-On (SSO)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>SAML 2.0:</strong> Full support for enterprise SSO providers</li>
                    <li><strong>Identity Providers:</strong> Integration with Okta, Azure AD, Google Workspace, OneLogin</li>
                    <li><strong>Just-in-Time Provisioning:</strong> Automatic user creation on first SSO login</li>
                    <li><strong>Attribute Mapping:</strong> Automatic role assignment based on SSO attributes</li>
                    <li><strong>Session Management:</strong> Centralized session control through IdP</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.3 Role-Based Access Control (RBAC)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Principle of Least Privilege:</strong> Users granted minimum access required for their job function</li>
                    <li><strong>Granular Permissions:</strong> Detailed permission system (view, create, edit, delete, export)</li>
                    <li><strong>Custom Roles:</strong> Ability to create organization-specific roles</li>
                    <li><strong>Role Hierarchy:</strong> Inheritance of permissions for administrative efficiency</li>
                    <li><strong>Temporary Access:</strong> Time-limited elevated permissions for specific tasks</li>
                    <li><strong>Access Reviews:</strong> Quarterly review of user access rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.4 Session Management</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Automatic Timeout:</strong> Sessions expire after 15 minutes of inactivity</li>
                    <li><strong>Concurrent Session Limits:</strong> Maximum number of simultaneous sessions per user</li>
                    <li><strong>Session Encryption:</strong> Session tokens encrypted and rotated regularly</li>
                    <li><strong>Logout Everywhere:</strong> Users can terminate all active sessions remotely</li>
                    <li><strong>Session Monitoring:</strong> Real-time visibility of active sessions</li>
                    <li><strong>Secure Cookies:</strong> HTTPOnly, Secure, SameSite flags on all cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">3.5 Biometric Authentication</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Touch ID / Face ID:</strong> Support for biometric authentication on mobile devices</li>
                    <li><strong>Windows Hello:</strong> Integration with Windows biometric authentication</li>
                    <li><strong>Local Processing:</strong> Biometric data processed locally on device, never transmitted</li>
                    <li><strong>Fallback Methods:</strong> Alternative authentication if biometric fails</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="infrastructure" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4. Infrastructure Security</h2>
                  <p className="text-gray-600">
                    Enterprise-grade cloud infrastructure with multiple layers of protection
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.1 Data Center Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>SOC 2 Type II Facilities:</strong> All data hosted in SOC 2 Type II certified data centers</li>
                    <li><strong>US-Only Hosting:</strong> All data stored exclusively in United States-based facilities</li>
                    <li><strong>Physical Security:</strong> 24/7 security guards, biometric access control, mantrap entry</li>
                    <li><strong>Video Surveillance:</strong> Comprehensive CCTV coverage with 90-day retention</li>
                    <li><strong>Environmental Controls:</strong> Redundant HVAC, fire suppression, power systems</li>
                    <li><strong>Access Logging:</strong> All physical access logged and audited</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.2 Cloud Infrastructure</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Multi-Cloud Strategy:</strong> Services distributed across AWS and Google Cloud</li>
                    <li><strong>Geographic Redundancy:</strong> Data replicated across multiple US regions</li>
                    <li><strong>Availability Zones:</strong> Services deployed across multiple availability zones</li>
                    <li><strong>Auto-Scaling:</strong> Automatic resource scaling to handle load spikes</li>
                    <li><strong>Load Balancing:</strong> Distributed load balancers for high availability</li>
                    <li><strong>99.99% SLA:</strong> Contractual uptime guarantee with financial penalties</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.3 Network Segmentation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Virtual Private Cloud (VPC):</strong> Isolated network environment for our infrastructure</li>
                    <li><strong>DMZ Architecture:</strong> Demilitarized zone separating public and internal networks</li>
                    <li><strong>Private Subnets:</strong> Database servers in private subnets without internet access</li>
                    <li><strong>Bastion Hosts:</strong> Secure jump servers for administrative access</li>
                    <li><strong>Environment Isolation:</strong> Separate networks for production, staging, development</li>
                    <li><strong>Micro-Segmentation:</strong> Granular network policies between services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">4.4 Container Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Image Scanning:</strong> All container images scanned for vulnerabilities before deployment</li>
                    <li><strong>Minimal Base Images:</strong> Use of minimal, hardened base images</li>
                    <li><strong>Read-Only Filesystems:</strong> Containers run with read-only root filesystems</li>
                    <li><strong>Resource Limits:</strong> CPU and memory limits prevent resource exhaustion</li>
                    <li><strong>Security Contexts:</strong> Non-root users, dropped capabilities, seccomp profiles</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="network" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">5. Network Security</h2>
                  <p className="text-gray-600">
                    Advanced network protection against external and internal threats
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.1 Firewall Protection</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Next-Generation Firewalls:</strong> Layer 7 application-aware firewalls</li>
                    <li><strong>Stateful Inspection:</strong> Deep packet inspection on all traffic</li>
                    <li><strong>Default Deny:</strong> Whitelist-based firewall rules (deny all, allow specific)</li>
                    <li><strong>Egress Filtering:</strong> Outbound traffic filtering to prevent data exfiltration</li>
                    <li><strong>Geographic Restrictions:</strong> IP-based geographic blocking of high-risk countries</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.2 Web Application Firewall (WAF)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>OWASP Protection:</strong> Protection against OWASP Top 10 vulnerabilities</li>
                    <li><strong>SQL Injection Prevention:</strong> Automated blocking of SQL injection attempts</li>
                    <li><strong>XSS Protection:</strong> Cross-site scripting attack prevention</li>
                    <li><strong>Rate Limiting:</strong> API and endpoint rate limiting to prevent abuse</li>
                    <li><strong>Bot Detection:</strong> AI-powered bot and scraper detection</li>
                    <li><strong>Virtual Patching:</strong> Immediate protection for newly discovered vulnerabilities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.3 DDoS Protection</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Volumetric Attack Mitigation:</strong> Protection against large-scale bandwidth attacks</li>
                    <li><strong>Layer 7 DDoS Protection:</strong> Application-layer attack detection and mitigation</li>
                    <li><strong>Always-On Protection:</strong> Continuous DDoS monitoring and automatic mitigation</li>
                    <li><strong>CDN Integration:</strong> Content delivery network with DDoS protection</li>
                    <li><strong>Traffic Analysis:</strong> Real-time analysis of traffic patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.4 Intrusion Detection & Prevention (IDS/IPS)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Network IDS:</strong> Signature-based and anomaly-based intrusion detection</li>
                    <li><strong>Host-Based IPS:</strong> Server-level intrusion prevention</li>
                    <li><strong>Threat Intelligence:</strong> Integration with global threat intelligence feeds</li>
                    <li><strong>Automatic Blocking:</strong> Immediate blocking of known malicious IPs</li>
                    <li><strong>Alert Correlation:</strong> AI-powered correlation of security events</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">5.5 VPN & Remote Access</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>IPSec VPN:</strong> Encrypted tunnels for remote administrative access</li>
                    <li><strong>Certificate-Based Authentication:</strong> Mutual TLS certificate authentication</li>
                    <li><strong>Split Tunneling Disabled:</strong> All traffic routed through VPN when connected</li>
                    <li><strong>Connection Logging:</strong> All VPN connections logged and monitored</li>
                    <li><strong>Geo-Fencing:</strong> VPN access restricted to approved geographic locations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="monitoring" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">6. Monitoring & Auditing</h2>
                  <p className="text-gray-600">
                    Comprehensive logging and 24/7 security monitoring
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.1 Audit Logging</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Comprehensive Logging:</strong> All access to PHI logged with user, timestamp, action</li>
                    <li><strong>Immutable Logs:</strong> Write-once, read-many log storage with cryptographic integrity</li>
                    <li><strong>6-Year Retention:</strong> Audit logs retained for minimum 6 years per HIPAA requirements</li>
                    <li><strong>Centralized Logging:</strong> All systems forward logs to centralized SIEM</li>
                    <li><strong>Log Analysis:</strong> Automated analysis to detect suspicious patterns</li>
                    <li><strong>Tamper Detection:</strong> Cryptographic verification of log integrity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.2 Security Information and Event Management (SIEM)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Real-Time Monitoring:</strong> 24/7/365 monitoring by dedicated Security Operations Center (SOC)</li>
                    <li><strong>Correlation Engine:</strong> AI/ML-powered event correlation and threat detection</li>
                    <li><strong>Automated Alerts:</strong> Immediate notification of security incidents</li>
                    <li><strong>Playbook Automation:</strong> Automated response to common security events</li>
                    <li><strong>Threat Hunting:</strong> Proactive searching for indicators of compromise</li>
                    <li><strong>Incident Timeline:</strong> Detailed timelines for security investigations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.3 User Behavior Analytics (UBA)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Baseline Behavior:</strong> Machine learning establishes normal user behavior patterns</li>
                    <li><strong>Anomaly Detection:</strong> Automatic detection of unusual access patterns</li>
                    <li><strong>Insider Threat Detection:</strong> Identification of potential malicious insiders</li>
                    <li><strong>Account Compromise Detection:</strong> Detection of compromised user accounts</li>
                    <li><strong>Risk Scoring:</strong> Risk scores assigned to users based on behavior</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">6.4 Application Performance Monitoring (APM)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Real-Time Monitoring:</strong> Continuous monitoring of application performance</li>
                    <li><strong>Error Tracking:</strong> Automatic capture and analysis of errors and exceptions</li>
                    <li><strong>Transaction Tracing:</strong> Detailed tracing of user requests through the system</li>
                    <li><strong>Performance Baselines:</strong> Established performance baselines for anomaly detection</li>
                    <li><strong>Uptime Monitoring:</strong> External monitoring of service availability</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="backup" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">7. Backup & Disaster Recovery</h2>
                  <p className="text-gray-600">
                    Robust backup strategy ensuring business continuity and data recovery
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.1 Backup Strategy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Automated Backups:</strong> Full backups every 24 hours, incremental backups every 4 hours</li>
                    <li><strong>30-Day Retention:</strong> Backups retained for 30 days for point-in-time recovery</li>
                    <li><strong>Encrypted Backups:</strong> All backups encrypted with AES-256</li>
                    <li><strong>Geographic Distribution:</strong> Backups replicated to geographically separate regions</li>
                    <li><strong>Immutable Backups:</strong> Backups protected from deletion or modification</li>
                    <li><strong>Backup Testing:</strong> Quarterly restore testing to verify backup integrity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.2 Disaster Recovery</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Recovery Time Objective (RTO):</strong> System restored within 4 hours</li>
                    <li><strong>Recovery Point Objective (RPO):</strong> Maximum data loss of 15 minutes</li>
                    <li><strong>Failover Capabilities:</strong> Automatic failover to backup systems</li>
                    <li><strong>DR Site:</strong> Fully operational disaster recovery site in separate geographic region</li>
                    <li><strong>DR Testing:</strong> Annual full disaster recovery drill</li>
                    <li><strong>Documented Procedures:</strong> Detailed runbooks for various disaster scenarios</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">7.3 Business Continuity</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>High Availability:</strong> 99.99% uptime SLA with redundant components</li>
                    <li><strong>Load Balancing:</strong> Traffic distributed across multiple servers</li>
                    <li><strong>Auto-Healing:</strong> Automatic replacement of failed components</li>
                    <li><strong>Incident Response Plan:</strong> Documented procedures for various incident types</li>
                    <li><strong>Communication Plan:</strong> Customer notification procedures for outages</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="vulnerability" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">8. Vulnerability Management</h2>
                  <p className="text-gray-600">
                    Proactive identification and remediation of security vulnerabilities
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.1 Vulnerability Scanning</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Weekly Automated Scans:</strong> Comprehensive vulnerability scans of all infrastructure</li>
                    <li><strong>Continuous Scanning:</strong> Real-time scanning of internet-facing assets</li>
                    <li><strong>Authenticated Scans:</strong> Deep scans with system credentials for thorough assessment</li>
                    <li><strong>Container Scanning:</strong> All container images scanned before deployment</li>
                    <li><strong>Dependency Scanning:</strong> Automated scanning of third-party libraries for CVEs</li>
                    <li><strong>Risk Prioritization:</strong> CVSS scoring and business context for remediation priority</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.2 Penetration Testing</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Quarterly External Pentests:</strong> Independent third-party penetration testing every quarter</li>
                    <li><strong>Annual Internal Pentests:</strong> Internal network and application testing annually</li>
                    <li><strong>Black Box Testing:</strong> Testing without insider knowledge to simulate real attacks</li>
                    <li><strong>Gray Box Testing:</strong> Testing with limited knowledge for thorough assessment</li>
                    <li><strong>Red Team Exercises:</strong> Annual adversarial testing by security experts</li>
                    <li><strong>Remediation Verification:</strong> Re-testing to verify vulnerability fixes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.3 Patch Management</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Critical Patches:</strong> Applied within 48 hours of release</li>
                    <li><strong>High Priority Patches:</strong> Applied within 7 days</li>
                    <li><strong>Regular Patches:</strong> Applied within 30 days during maintenance windows</li>
                    <li><strong>Automated Patching:</strong> Automated patch deployment for infrastructure</li>
                    <li><strong>Rollback Procedures:</strong> Documented rollback process for problematic patches</li>
                    <li><strong>Patch Testing:</strong> Testing in staging environment before production deployment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.4 Bug Bounty Program</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Responsible Disclosure:</strong> Program for security researchers to report vulnerabilities</li>
                    <li><strong>Financial Rewards:</strong> Bounties paid for valid security findings</li>
                    <li><strong>90-Day Disclosure:</strong> Public disclosure after 90-day remediation period</li>
                    <li><strong>Hall of Fame:</strong> Recognition for security researchers who help us</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">8.5 Code Security</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Static Application Security Testing (SAST):</strong> Automated code analysis on every commit</li>
                    <li><strong>Dynamic Application Security Testing (DAST):</strong> Runtime security testing</li>
                    <li><strong>Software Composition Analysis (SCA):</strong> Analysis of open-source dependencies</li>
                    <li><strong>Code Review:</strong> Mandatory security review for all code changes</li>
                    <li><strong>Secure Coding Standards:</strong> OWASP secure coding guidelines enforced</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="incident" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">9. Incident Response</h2>
                  <p className="text-gray-600">
                    Structured approach to handling and recovering from security incidents
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.1 Incident Response Team</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>24/7 Availability:</strong> Security team on-call for immediate response</li>
                    <li><strong>Defined Roles:</strong> Clear roles and responsibilities (Incident Commander, Scribe, etc.)</li>
                    <li><strong>Escalation Path:</strong> Clear escalation procedures for different severity levels</li>
                    <li><strong>External Resources:</strong> Relationships with forensic experts and legal counsel</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.2 Incident Response Process</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Detection & Analysis:</strong> Identify and assess security incidents</li>
                    <li><strong>Containment:</strong> Isolate affected systems to prevent spread</li>
                    <li><strong>Eradication:</strong> Remove threat actors and malware from environment</li>
                    <li><strong>Recovery:</strong> Restore systems to normal operation</li>
                    <li><strong>Lessons Learned:</strong> Post-incident review and documentation</li>
                    <li><strong>Improvement:</strong> Update controls based on findings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.3 Forensic Investigation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Evidence Preservation:</strong> Proper chain of custody for digital evidence</li>
                    <li><strong>Forensic Imaging:</strong> Bit-for-bit copies of affected systems</li>
                    <li><strong>Log Analysis:</strong> Detailed analysis of audit logs and system events</li>
                    <li><strong>Timeline Construction:</strong> Detailed timeline of attacker activities</li>
                    <li><strong>Root Cause Analysis:</strong> Identification of initial compromise vector</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">9.4 Communication & Notification</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Customer Notification:</strong> Timely notification to affected customers</li>
                    <li><strong>Breach Notification:</strong> HIPAA-compliant breach notification within 60 days</li>
                    <li><strong>Regulatory Reporting:</strong> Notification to HHS, FTC, state attorneys general as required</li>
                    <li><strong>Public Relations:</strong> Coordinated public communication strategy</li>
                    <li><strong>Status Updates:</strong> Regular updates to stakeholders during incidents</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="training" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">10. Security Training & Awareness</h2>
                  <p className="text-gray-600">
                    Continuous education to maintain security-first culture
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.1 Employee Training</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Annual HIPAA Training:</strong> Mandatory training for all employees annually</li>
                    <li><strong>Security Awareness:</strong> Quarterly security awareness training</li>
                    <li><strong>Phishing Simulations:</strong> Monthly simulated phishing emails to test awareness</li>
                    <li><strong>Role-Based Training:</strong> Specialized training for developers, admins, support</li>
                    <li><strong>New Hire Training:</strong> Security and privacy training within first week</li>
                    <li><strong>Continuing Education:</strong> Access to security certifications and conferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.2 Security Policies</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Information Security Policy:</strong> Comprehensive security policy framework</li>
                    <li><strong>Acceptable Use Policy:</strong> Rules for appropriate system and data use</li>
                    <li><strong>Clean Desk Policy:</strong> Physical security requirements for workspaces</li>
                    <li><strong>BYOD Policy:</strong> Security requirements for personal devices</li>
                    <li><strong>Sanctions Policy:</strong> Consequences for policy violations</li>
                    <li><strong>Annual Review:</strong> Policies reviewed and updated annually</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.3 Background Checks</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Pre-Employment Screening:</strong> Background checks for all hires</li>
                    <li><strong>Criminal History:</strong> Verification of criminal history</li>
                    <li><strong>Employment Verification:</strong> Confirmation of past employment</li>
                    <li><strong>Reference Checks:</strong> Professional reference verification</li>
                    <li><strong>Ongoing Monitoring:</strong> Periodic re-screening of employees</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">10.4 Confidentiality Agreements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>NDAs:</strong> Non-disclosure agreements signed by all employees and contractors</li>
                    <li><strong>HIPAA Agreements:</strong> Specific HIPAA confidentiality agreements</li>
                    <li><strong>Exit Procedures:</strong> Return of credentials and equipment upon termination</li>
                    <li><strong>Post-Employment Obligations:</strong> Continuing confidentiality after employment ends</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="third-party" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">11. Third-Party Security</h2>
                  <p className="text-gray-600">
                    Rigorous vetting and monitoring of all vendors and subcontractors
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.1 Vendor Assessment</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Security Questionnaires:</strong> Comprehensive security assessment before engagement</li>
                    <li><strong>SOC 2 Verification:</strong> Requirement for SOC 2 Type II certification</li>
                    <li><strong>Penetration Test Results:</strong> Review of recent pentest reports</li>
                    <li><strong>Compliance Verification:</strong> Verification of HIPAA, GDPR, and other compliance</li>
                    <li><strong>Insurance Verification:</strong> Cyber liability insurance requirements</li>
                    <li><strong>Financial Stability:</strong> Assessment of vendor financial health</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.2 Business Associate Agreements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Mandatory BAAs:</strong> All vendors with PHI access must sign BAAs</li>
                    <li><strong>Contractual Safeguards:</strong> Security and privacy requirements in contracts</li>
                    <li><strong>Audit Rights:</strong> Right to audit vendor security controls</li>
                    <li><strong>Breach Notification:</strong> Vendor obligation to report breaches within 24 hours</li>
                    <li><strong>Subcontractor Requirements:</strong> Vendors must obtain BAAs from their subcontractors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.3 Ongoing Monitoring</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Annual Reviews:</strong> Annual reassessment of vendor security posture</li>
                    <li><strong>Continuous Monitoring:</strong> Monitoring of vendor security news and breaches</li>
                    <li><strong>SLA Monitoring:</strong> Tracking of vendor performance against SLAs</li>
                    <li><strong>Quarterly Business Reviews:</strong> Regular meetings to discuss security and compliance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">11.4 Data Minimization</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Need-to-Know Basis:</strong> Vendors only receive data necessary for their service</li>
                    <li><strong>Data Anonymization:</strong> PHI anonymized when possible before sharing</li>
                    <li><strong>Data Flow Mapping:</strong> Documented data flows to all third parties</li>
                    <li><strong>Vendor Termination:</strong> Secure data return/destruction upon contract termination</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="contact" className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">12. Security Contact</h2>
              <p className="text-gray-600 mb-4">
                For security-related inquiries, vulnerability reports, or incident notifications:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Security Team</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Email:</strong> <a href="mailto:security@curbe.io" className="text-blue-600 hover:underline">security@curbe.io</a></li>
                    <li><strong>24/7 Hotline:</strong> <a href="tel:+18442872346" className="text-blue-600 hover:underline">(844) CURBE-IO</a></li>
                    <li><strong>PGP Key:</strong> Available upon request for encrypted communications</li>
                    <li><strong>Response Time:</strong> Within 24 hours for all security reports</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">Vulnerability Disclosure</h3>
                  <ul className="list-none space-y-2 text-gray-600 ml-4">
                    <li><strong>Responsible Disclosure:</strong> Please report vulnerabilities directly to our security team</li>
                    <li><strong>Acknowledgment:</strong> We acknowledge receipt within 24 hours</li>
                    <li><strong>Resolution Timeline:</strong> We aim to resolve critical issues within 48-72 hours</li>
                    <li><strong>Public Disclosure:</strong> 90-day coordinated disclosure period</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-black/5">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Security is a shared responsibility.</strong> We encourage our customers to follow security best practices, enable MFA, use strong passwords, and report any suspicious activity immediately.
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
