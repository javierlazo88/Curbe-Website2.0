import { Star, Menu, X, ChevronDown, Megaphone, Users, MessageSquare, Bot, Inbox, UserCheck, GitBranch, CalendarCheck, Headphones, Mail, Bell, ClipboardCheck, Award, Phone, Layers, Building2, UserCog, Heart, Shield, Wallet, HelpCircle, Video, BookOpen, Code, Calculator, Link2, QrCode, Handshake, ArrowRight } from "lucide-react";
import { PhoneInterface } from "./PhoneInterface";
import { IncomingCallNotification } from "./IncomingCallNotification";
import { DemoForm } from "@/components/forms/DemoForm";
import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import logoUrl from "@assets/cube_logo__1776801071825.png";

// Import insurance company logos (static)
import cobertisLogo from "@assets/cobertis_1763003147175.png";
import cuidadoSaludLogo from "@assets/cuidadodesalud_1763003324454.png";
import logo1 from "@assets/1_1763002912532.png";
import logo2 from "@assets/2_1763002912534.png";
import logo3 from "@assets/3_1763002912534.png";
import logo4 from "@assets/4_1763002912535.png";
import logo5 from "@assets/5_1763002912535.png";
import logo6 from "@assets/6_1763002912535.png";
import logo7 from "@assets/7_1763002912536.png";
import logo8 from "@assets/8_1763002912536.png";

export function HeroSectionORA() {
  const { t } = useTranslation();
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callAnswered, setCallAnswered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  // Insurance company logos array (10 logos)
  const insuranceLogos = [
    { src: cobertisLogo, alt: "Cobertis Insurance", testId: "logo-cobertis" },
    { src: cuidadoSaludLogo, alt: "Cuidado de Salud Florida", testId: "logo-cuidadosalud" },
    { src: logo1, alt: "VidaSana Seguros", testId: "logo-1" },
    { src: logo2, alt: "SaludTotal Plus", testId: "logo-2" },
    { src: logo3, alt: "BienestarMed", testId: "logo-3" },
    { src: logo4, alt: "ProtecSalud", testId: "logo-4" },
    { src: logo5, alt: "CuidaMed Seguros", testId: "logo-5" },
    { src: logo6, alt: "SaludPrima", testId: "logo-6" },
    { src: logo7, alt: "SegurosVitalis", testId: "logo-7" },
    { src: logo8, alt: "SaludFuerte", testId: "logo-8" },
  ];

  const handleAnswerCall = () => {
    setCallAnswered(true);
  };

  const handleRejectCall = () => {
    // Could add some feedback here
    console.log("Call rejected");
  };

  const handleCallEnded = () => {
    // Volver a mostrar la notificación de llamada entrante
    setCallAnswered(false);
  };

  return (
    <section className="relative flex flex-col overflow-hidden bg-gradient-to-br from-background via-background to-muted/30" data-testid="hero-section">
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary rounded-lg rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-primary/50 rounded-lg -rotate-6"></div>
      </div>

      {/* Integrated Navigation - Respond.io Style */}
      <nav className="relative z-50 w-full bg-[#0f1419]" onMouseLeave={() => setActiveMenu(null)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" data-testid="link-home">
              <div className="flex items-center cursor-pointer" data-testid="logo">
                <img 
                  src={logoUrl} 
                  alt="Curbe" 
                  className="h-7 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-0">
              {/* Product Dropdown - Blue pill when active like respond.io */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('product')}
              >
                <button 
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${activeMenu === 'product' ? 'text-white bg-[#6366f1]' : 'text-gray-300 hover:text-white'}`}
                  data-testid="nav-product"
                >
                  {t('nav.product')}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'product' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Industries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('industries')}
              >
                <button 
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${activeMenu === 'industries' ? 'text-white bg-[#6366f1]' : 'text-gray-300 hover:text-white'}`}
                  data-testid="nav-industries"
                >
                  {t('nav.industries')}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('resources')}
              >
                <button 
                  className={`flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${activeMenu === 'resources' ? 'text-white bg-[#6366f1]' : 'text-gray-300 hover:text-white'}`}
                  data-testid="nav-resources"
                >
                  {t('nav.resources')}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Pricing Link */}
              <a 
                href="#pricing" 
                className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-testid="nav-pricing"
                onMouseEnter={() => setActiveMenu(null)}
              >
                {t('nav.pricing')}
              </a>

              {/* Why Us Link */}
              <a 
                href="#benefits" 
                className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-testid="nav-why-us"
                onMouseEnter={() => setActiveMenu(null)}
              >
                {t('nav.whyUs')}
              </a>
            </div>

            {/* Right side - CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <a
                href="https://app.curbe.io/"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-testid="nav-login"
              >
                <Users className="w-4 h-4" />
                {t('nav.login')}
              </a>
              <a
                href="#calendar"
                className="px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
                data-testid="nav-talk-to-sales"
              >
                {t('nav.talkToSales')}
              </a>
              <a
                href="https://app.curbe.io/signup"
                className="px-4 py-2 text-sm font-semibold text-white bg-[#6366f1] rounded-lg hover:bg-[#5558e3] transition-colors"
                data-testid="nav-start-free-trial"
              >
                {t('nav.startFreeTrial')}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdowns - White background like respond.io */}
        {activeMenu && (
          <div className="hidden lg:block absolute left-0 right-0 bg-white shadow-2xl shadow-black/10 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              
              {/* Product Menu - White background like respond.io */}
              {activeMenu === 'product' && (
                <div className="grid grid-cols-4 gap-10">
                  {/* Column 1 - Capture Leads */}
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 mb-5">{t('nav.productMenu.captureLeads')}</h3>
                    <div className="space-y-4">
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Megaphone className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.captureAds')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                          <Users className="w-5 h-5 text-pink-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.captureSocial')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <MessageSquare className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.captureWebsite')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                          <Layers className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.captureLanding')}</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 2 - Convert Leads */}
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 mb-5">{t('nav.productMenu.convertLeads')}</h3>
                    <div className="space-y-4">
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                          <Bot className="w-5 h-5 text-violet-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.aiAgents')} <span className="text-yellow-500">✨</span></span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                          <Inbox className="w-5 h-5 text-sky-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.teamInbox')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                          <UserCheck className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.qualifyLeads')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                          <GitBranch className="w-5 h-5 text-teal-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.routeLeads')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                          <CalendarCheck className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.bookAppointments')}</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 3 - Retain Clients */}
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 mb-5">{t('nav.productMenu.retainClients')}</h3>
                    <div className="space-y-4">
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                          <Headphones className="w-5 h-5 text-cyan-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.support')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                          <Mail className="w-5 h-5 text-rose-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.promotions')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                          <Bell className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.renewals')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-lime-50 flex items-center justify-center group-hover:bg-lime-100 transition-colors">
                          <ClipboardCheck className="w-5 h-5 text-lime-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.surveys')}</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 4 - Scale with Curbe */}
                  <div>
                    <h3 className="text-xs font-medium text-gray-400 mb-5">{t('nav.productMenu.scaleWith')}</h3>
                    <div className="space-y-4">
                      <a href="#who-we-serve" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                          <Award className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.successStories')}</span>
                      </a>
                      <a href="#comunicacion" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <Phone className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.whatsappApi')}</span>
                      </a>
                      <a href="#comunicacion" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Layers className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.productMenu.channels')}</span>
                      </a>
                      {/* Channel Icons - Colorful circles like respond.io */}
                      <div className="flex items-center gap-1.5 pt-2">
                        <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                          <MessageSquare className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                          <Mail className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center">
                          <Users className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
                          <Phone className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center">
                          <MessageSquare className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                          <Bell className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-xs text-gray-400 font-medium ml-1">40+</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Industries Menu - White background like respond.io */}
              {activeMenu === 'industries' && (
                <div className="grid grid-cols-12 gap-6">
                  {/* Column 1 - Business Types (left sidebar) */}
                  <div className="col-span-3 border-r border-gray-100 pr-6">
                    <div className="space-y-0">
                      <a href="#who-we-serve" className="flex items-center justify-between py-3 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <span className="text-sm font-medium">{t('nav.industriesMenu.agencies')}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </a>
                      <a href="#who-we-serve" className="flex items-center justify-between py-3 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <span className="text-sm font-medium">{t('nav.industriesMenu.callCenters')}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </a>
                      <a href="#who-we-serve" className="flex items-center justify-between py-3 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <span className="text-sm font-medium">{t('nav.industriesMenu.imoFmo')}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </a>
                      <a href="#who-we-serve" className="flex items-center justify-between py-3 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <span className="text-sm font-medium">{t('nav.industriesMenu.independent')}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Column 2 - Insurance Types with icons */}
                  <div className="col-span-4">
                    <div className="space-y-1">
                      <a href="#features" className="flex items-center gap-3 py-2.5 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100">
                          <Layers className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.industriesMenu.overview')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 py-2.5 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100">
                          <Heart className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.industriesMenu.health')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 py-2.5 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100">
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.industriesMenu.life')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 py-2.5 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100">
                          <UserCog className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.industriesMenu.medicare')}</span>
                      </a>
                      <a href="#features" className="flex items-center gap-3 py-2.5 px-3 -mx-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group">
                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100">
                          <Wallet className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">{t('nav.industriesMenu.finalExpense')}</span>
                      </a>
                    </div>
                  </div>

                  {/* Column 3 - Featured Case Study */}
                  <div className="col-span-5">
                    <div className="h-full flex flex-col">
                      <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center border border-gray-100">
                        <div className="text-center">
                          <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                          <span className="text-xs text-gray-400">Case Study Image</span>
                        </div>
                      </div>
                      <h4 className="text-gray-900 font-semibold text-sm mb-2 leading-snug">Cómo Agencia XYZ aumentó sus ventas 50% con Curbe</h4>
                      <a href="#who-we-serve" className="inline-flex items-center gap-1.5 text-[#6366f1] text-sm hover:text-[#4f46e5] transition-colors mt-auto font-medium">
                        Leer Caso de Éxito <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Resources Menu - White background like respond.io */}
              {activeMenu === 'resources' && (
                <div className="grid grid-cols-12 gap-6">
                  {/* Column 1 - Support */}
                  <div className="col-span-3">
                    <h3 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-4">{t('nav.resourcesMenu.supportTitle')}</h3>
                    <div className="space-y-1">
                      <a href="#calendar" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 flex-shrink-0">
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.contactUs')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.contactUsDesc')}</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.helpCenter')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.helpCenterDesc')}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 2 - Learn */}
                  <div className="col-span-3">
                    <h3 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-4">{t('nav.resourcesMenu.learnTitle')}</h3>
                    <div className="space-y-1">
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 flex-shrink-0">
                            <Video className="w-5 h-5 text-red-500" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.videoGuides')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.videoGuidesDesc')}</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.blog')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.blogDesc')}</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 flex-shrink-0">
                            <Code className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.developerHub')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.developerHubDesc')}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 3 - Tools */}
                  <div className="col-span-3">
                    <h3 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-4">{t('nav.resourcesMenu.toolsTitle')}</h3>
                    <div className="space-y-1">
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 flex-shrink-0">
                            <Calculator className="w-5 h-5 text-cyan-600" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.calculator')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.calculatorDesc')}</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 flex-shrink-0">
                            <Link2 className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.linkGenerator')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.linkGeneratorDesc')}</span>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all group">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 flex-shrink-0">
                            <QrCode className="w-5 h-5 text-violet-600" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 block font-medium">{t('nav.resourcesMenu.qrGenerator')}</span>
                            <span className="text-xs text-gray-400 leading-tight block mt-0.5">{t('nav.resourcesMenu.qrGeneratorDesc')}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 4 - Partners Featured Box */}
                  <div className="col-span-3">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 h-full">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                        <Handshake className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h4 className="text-gray-900 font-semibold text-sm mb-2">{t('nav.resourcesMenu.partnersTitle')}</h4>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed">{t('nav.resourcesMenu.partnersDesc')}</p>
                      <a href="#" className="inline-flex items-center gap-1.5 text-[#6366f1] text-sm hover:text-[#4f46e5] transition-colors font-medium">
                        {t('nav.resourcesMenu.explorePartners')} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0f1419] border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {/* Product Accordion */}
              <div>
                <button 
                  onClick={() => setActiveMobileMenu(activeMobileMenu === 'product' ? null : 'product')}
                  className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-white"
                >
                  <span className="font-medium">{t('nav.product')}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileMenu === 'product' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileMenu === 'product' && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.productMenu.captureLeads')}</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.productMenu.convertLeads')}</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.productMenu.retainClients')}</a>
                    <a href="#comunicacion" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.productMenu.channels')}</a>
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div>
                <button 
                  onClick={() => setActiveMobileMenu(activeMobileMenu === 'industries' ? null : 'industries')}
                  className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-white"
                >
                  <span className="font-medium">{t('nav.industries')}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileMenu === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileMenu === 'industries' && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="#who-we-serve" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.industriesMenu.agencies')}</a>
                    <a href="#who-we-serve" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.industriesMenu.independent')}</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.industriesMenu.medicare')}</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.industriesMenu.health')}</a>
                  </div>
                )}
              </div>

              {/* Resources Accordion */}
              <div>
                <button 
                  onClick={() => setActiveMobileMenu(activeMobileMenu === 'resources' ? null : 'resources')}
                  className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-white"
                >
                  <span className="font-medium">{t('nav.resources')}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileMenu === 'resources' && (
                  <div className="pl-4 pb-3 space-y-2">
                    <a href="#calendar" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.resourcesMenu.contactUs')}</a>
                    <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.resourcesMenu.helpCenter')}</a>
                    <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-400 hover:text-white">{t('nav.resourcesMenu.blog')}</a>
                  </div>
                )}
              </div>

              {/* Simple Links */}
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-gray-300 hover:text-white font-medium">{t('nav.pricing')}</a>
              <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-gray-300 hover:text-white font-medium">{t('nav.whyUs')}</a>
              
              {/* CTA Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <LanguageSwitcher />
                  <a href="https://app.curbe.io/" className="text-gray-300 hover:text-white">{t('nav.login')}</a>
                </div>
                <a
                  href="#calendar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {t('nav.talkToSales')}
                </a>
                <a
                  href="https://app.curbe.io/signup"
                  className="block w-full text-center py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  {t('nav.startFreeTrial')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8" data-testid="badge-hero">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">
                {t('hero.badge')}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 lg:mb-8 leading-tight" data-testid="hero-title">
              {t('hero.title')}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-10 max-w-full sm:max-w-2xl mx-auto lg:mx-0" data-testid="hero-subtitle">
              {t('hero.subtitle')}
            </p>

            {/* CTA Button */}
            <div className="mb-8 flex justify-center lg:justify-start max-w-full">
              <a
                href="https://app.curbe.io/signup"
                className="group relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 text-center max-w-full"
                data-testid="button-cta-hero"
              >
                <span className="relative z-10 px-2">{t('hero.cta')}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-4" data-testid="rating-section">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    data-testid={`star-${star}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9</span> {t('hero.rating')}{" "}
                <span className="font-semibold text-foreground">100+</span> {t('hero.customers')}
              </div>
            </div>

            {/* Insurance company logos - Infinite Marquee */}
            <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border/30 w-full">
              <div className="text-sm text-muted-foreground mb-4 text-center lg:text-left">{t('hero.trustedBy')}</div>
              <div className="relative overflow-hidden w-full mx-auto lg:mx-0 lg:max-w-2xl" data-testid="client-logos">
                <div 
                  className="flex gap-6 sm:gap-8 items-center"
                  style={{
                    animation: 'marquee 30s linear infinite',
                    willChange: 'transform'
                  }}
                >
                  {/* First set of logos */}
                  {insuranceLogos.map((logo, index) => (
                    <div 
                      key={`logo-1-${index}`}
                      className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                      data-testid={logo.testId}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="h-8 sm:h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                  {/* Duplicate set of logos for seamless loop */}
                  {insuranceLogos.map((logo, index) => (
                    <div 
                      key={`logo-2-${index}`}
                      className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                      data-testid={`${logo.testId}-duplicate`}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="h-8 sm:h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Phone interface or incoming call */}
          <div className="w-full flex items-center justify-center lg:justify-end lg:pr-8">
            {!callAnswered ? (
              <IncomingCallNotification 
                onAnswer={handleAnswerCall}
                onReject={handleRejectCall}
              />
            ) : (
              <PhoneInterface 
                autoPlay={true}
                onCallEnded={handleCallEnded}
              />
            )}
          </div>
        </div>
        </div>
      </div>

      <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />
    </section>
  );
}
