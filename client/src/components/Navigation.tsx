import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { GlowingButton } from "@/components/common/GlowingButton";
import { DemoForm } from "@/components/forms/DemoForm";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2 cursor-pointer" data-testid="logo">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#239DFF] to-[#4A3DFF] text-transparent bg-clip-text">
                ORA IA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-features">
              Características
            </a>
            <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-benefits">
              Beneficios
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-pricing">
              Precios
            </a>
            <a href="#calendar" className="text-foreground/80 hover:text-foreground transition-colors" data-testid="link-calendar">
              Agendar Demo
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <GlowingButton onClick={() => setDemoFormOpen(true)} data-testid="button-cta-nav">
              Solicitar Demo
            </GlowingButton>
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-link-features"
            >
              Características
            </a>
            <a
              href="#benefits"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-link-benefits"
            >
              Beneficios
            </a>
            <a
              href="#pricing"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-link-pricing"
            >
              Precios
            </a>
            <a
              href="#calendar"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-link-calendar"
            >
              Agendar Demo
            </a>
            <div className="pt-4">
              <GlowingButton 
                className="w-full" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoFormOpen(true);
                }}
                data-testid="mobile-button-cta"
              >
                Solicitar Demo
              </GlowingButton>
            </div>
          </div>
        </div>
      )}
      
      <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />
    </nav>
  );
}
