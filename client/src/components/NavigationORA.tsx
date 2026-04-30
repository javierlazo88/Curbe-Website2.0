import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/cube_logo__1776801071825.png";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

export function NavigationORA() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" data-testid="link-home">
            <div className="flex items-center cursor-pointer" data-testid="logo">
              <img 
                src={logoUrl} 
                alt="Curbe" 
                className="h-8 w-auto"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/#comunicacion" 
              className="text-foreground/70 hover:text-foreground transition-colors" 
              data-testid="link-comunicacion"
            >
              {t('nav.communication')}
            </a>
            <a 
              href="/#features" 
              className="text-foreground/70 hover:text-foreground transition-colors" 
              data-testid="link-features"
            >
              {t('nav.features')}
            </a>
            <a 
              href="/#benefits" 
              className="text-foreground/70 hover:text-foreground transition-colors" 
              data-testid="link-benefits"
            >
              {t('nav.benefits')}
            </a>
            <a 
              href="/#pricing" 
              className="text-foreground/70 hover:text-foreground transition-colors" 
              data-testid="link-pricing"
            >
              {t('nav.plans')}
            </a>
            <a 
              href="/#calendar" 
              className="text-foreground/70 hover:text-foreground transition-colors" 
              data-testid="link-calendar"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* CTA Button and Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://app.curbe.io/"
              className="relative inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              data-testid="button-cta-nav"
            >
              {t('nav.login')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col space-y-4">
              <a
                href="/#comunicacion"
                className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-comunicacion"
              >
                {t('nav.communication')}
              </a>
              <a
                href="/#features"
                className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-features"
              >
                {t('nav.features')}
              </a>
              <a
                href="/#benefits"
                className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-benefits"
              >
                {t('nav.benefits')}
              </a>
              <a
                href="/#pricing"
                className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-pricing"
              >
                {t('nav.plans')}
              </a>
              <a
                href="/#calendar"
                className="text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-calendar"
              >
                {t('nav.contact')}
              </a>
              <div className="pt-4 px-4 flex items-center gap-3">
                <LanguageSwitcher />
                <a
                  href="https://app.curbe.io/"
                  className="flex-1 px-6 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-primary to-accent rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                  data-testid="mobile-button-cta"
                >
                  {t('nav.login')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
