import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoUrl from "@assets/cube_logo__1776801071825.png";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/8 bg-white/40 backdrop-blur-sm">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <a href="/" className="inline-block group">
              <img 
                src={logoUrl} 
                alt="Curbe" 
                className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 flex-nowrap">
              <a
                href="https://twitter.com/curbe_io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 border border-black/8 flex items-center justify-center hover:bg-black/10 transition-all duration-300"
                data-testid="link-twitter"
              >
                <Twitter className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="https://linkedin.com/company/curbe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 border border-black/8 flex items-center justify-center hover:bg-black/10 transition-all duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="https://facebook.com/curbe.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 border border-black/8 flex items-center justify-center hover:bg-black/10 transition-all duration-300"
                data-testid="link-facebook"
              >
                <Facebook className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="https://instagram.com/curbe.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 border border-black/8 flex items-center justify-center hover:bg-black/10 transition-all duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="https://tiktok.com/@curbe.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 border border-black/8 flex items-center justify-center hover:bg-black/10 transition-all duration-300"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-4 h-4 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6" data-testid="text-footer-products">{t('footer.platform')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/product" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-features">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="/resources/api-docs" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-integrations">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.integrations')}
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-pricing">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.pricing')}
                </a>
              </li>
              <li>
                <a href="/resources/api-docs" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-api">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.api')}
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6" data-testid="text-footer-resources">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/resources/blog" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-blog">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a href="/resources/help-center" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-docs">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.helpCenter')}
                </a>
              </li>
              <li>
                <a href="/resources/contact-support" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-support">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.support')}
                </a>
              </li>
              <li>
                <a href="/resources/help-center" className="text-sm text-gray-600 hover:text-[#2563eb] transition-colors group flex items-center gap-2" data-testid="footer-link-status">
                  <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-[#2563eb] transition-colors"></span>
                  {t('footer.status')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6" data-testid="text-footer-contact">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@curbe.io" 
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-[#2563eb] transition-colors group" 
                  data-testid="footer-link-email"
                >
                  <div className="w-8 h-8 rounded-lg bg-black/5 border border-black/8 flex items-center justify-center group-hover:bg-[#2563eb]/10 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="pt-1">hello@curbe.io</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+18442872346" 
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-[#2563eb] transition-colors group" 
                  data-testid="footer-link-phone"
                >
                  <div className="w-8 h-8 rounded-lg bg-black/5 border border-black/8 flex items-center justify-center group-hover:bg-[#2563eb]/10 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="pt-1">(844) CURBE-IO</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-black/5 border border-black/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#2563eb]" />
                </div>
                <span className="pt-1">{t('footer.location')}<br />{t('footer.country')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-500" data-testid="text-copyright">
                {t('footer.copyright', { year: currentYear })}
              </p>
              <a href="/compliance" className="px-3 py-1 rounded-md bg-[#2563eb]/10 border border-[#2563eb]/20 text-xs font-semibold text-[#2563eb] hover:bg-[#2563eb]/20 transition-colors" data-testid="badge-hipaa">
                {t('footer.hipaaCompliant')}
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-[#2563eb] transition-colors" data-testid="link-privacy-bottom">
                {t('footer.privacyPolicy')}
              </a>
              <span className="text-gray-300">|</span>
              <a href="/security" className="hover:text-[#2563eb] transition-colors" data-testid="link-security-bottom">
                {t('footer.security')}
              </a>
              <span className="text-gray-300">|</span>
              <a href="/compliance" className="hover:text-[#2563eb] transition-colors" data-testid="link-compliance-bottom">
                {t('footer.compliance')}
              </a>
              <span className="text-gray-300">|</span>
              <a href="/terms" className="hover:text-[#2563eb] transition-colors" data-testid="link-terms-bottom">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
