import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { productColumns, resourcesColumns, integrationCard, industryData } from "./navData";
import logoUrl from "@assets/cube_logo__1776801071825.png";
// Main industry images
import retailImage from "@assets/generated_images/elegant_retail_store_interior.png";
import educationImage from "@assets/generated_images/university_lecture_hall_students.png";
import healthcareImage from "@assets/generated_images/modern_healthcare_clinic_reception.png";
import professionalImage from "@assets/generated_images/professional_business_meeting_room.png";
import automotiveImage from "@assets/generated_images/luxury_car_dealership_showroom.png";
import travelImage from "@assets/generated_images/luxury_hotel_lobby_reception.png";
// Retail subcategories
import electronicsImage from "@assets/generated_images/electronics_store_tech_display.png";
import fashionImage from "@assets/generated_images/fashion_boutique_clothing_display.png";
import furnitureImage from "@assets/generated_images/modern_furniture_showroom_interior.png";
import jewelryImage from "@assets/generated_images/luxury_jewelry_store_display.png";
// Education subcategories
import universitiesImage from "@assets/generated_images/university_campus_students_walking.png";
import k12Image from "@assets/generated_images/k-12_classroom_students_learning.png";
import onlineCoursesImage from "@assets/generated_images/online_learning_home_setup.png";
import tutoringImage from "@assets/generated_images/private_tutoring_study_session.png";
// Healthcare subcategories
import clinicsImage from "@assets/generated_images/medical_clinic_examination_room.png";
import patientCommImage from "@assets/generated_images/doctor_patient_telehealth_consultation.png";
import appointmentsImage from "@assets/generated_images/medical_appointment_scheduling_desk.png";
import healthRemindersImage from "@assets/generated_images/health_reminder_phone_notification.png";
// Professional Services subcategories
import consultingImage from "@assets/generated_images/business_consulting_strategy_meeting.png";
import legalImage from "@assets/generated_images/law_office_legal_documents.png";
import accountingImage from "@assets/generated_images/accountant_financial_spreadsheets_work.png";
// Automotive subcategories
import dealershipsImage from "@assets/generated_images/car_dealership_sales_floor.png";
import serviceCentersImage from "@assets/generated_images/auto_service_center_garage.png";
import testDrivesImage from "@assets/generated_images/customer_test_drive_experience.png";
import followupsImage from "@assets/generated_images/automotive_sales_follow-up_call.png";
// Travel subcategories
import travelAgenciesImage from "@assets/generated_images/travel_agency_booking_consultation.png";
import hotelsImage from "@assets/generated_images/luxury_hotel_room_interior.png";
import reservationsImage from "@assets/generated_images/hotel_reservation_booking_system.png";
import guestSupportImage from "@assets/generated_images/hotel_concierge_guest_assistance.png";

const industryImages: Record<string, string> = {
  // Main industries (also used for Overview)
  retail: retailImage,
  education: educationImage,
  healthcare: healthcareImage,
  professional: professionalImage,
  automotive: automotiveImage,
  travel: travelImage,
  // Retail subcategories
  electronics: electronicsImage,
  fashion: fashionImage,
  furniture: furnitureImage,
  jewelry: jewelryImage,
  // Education subcategories
  universities: universitiesImage,
  k12: k12Image,
  onlineCourses: onlineCoursesImage,
  tutoring: tutoringImage,
  // Healthcare subcategories
  clinics: clinicsImage,
  patientComm: patientCommImage,
  appointments: appointmentsImage,
  healthReminders: healthRemindersImage,
  // Professional Services subcategories
  consulting: consultingImage,
  legal: legalImage,
  accounting: accountingImage,
  agencies: professionalImage, // Use main image for agencies
  // Automotive subcategories
  dealerships: dealershipsImage,
  serviceCenters: serviceCentersImage,
  testDrives: testDrivesImage,
  followups: followupsImage,
  // Travel subcategories
  travelAgencies: travelAgenciesImage,
  hotels: hotelsImage,
  reservations: reservationsImage,
  guestSupport: guestSupportImage,
};

type MenuType = "" | "product" | "industries" | "resources";

interface MegaHeaderProps {
  onTalkToSales: () => void;
}

export function MegaHeader({ onTalkToSales }: MegaHeaderProps) {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const [openMenu, setOpenMenu] = useState<MenuType>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Logo click: if already on home, scroll to top; otherwise navigate to home.
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (location === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setOpenMenu("");
  }, [location]);
  const [mobileAccordion, setMobileAccordion] = useState<string>("");
  const [hoveredIndustry, setHoveredIndustry] = useState<string>("retail");
  const [hoveredUseCase, setHoveredUseCase] = useState<string>("retail");
  const closeTimeoutRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu("");
    }, 160);
  }, [cancelClose]);

  const handleMouseEnter = useCallback((menu: MenuType) => {
    cancelClose();
    setOpenMenu(menu);
  }, [cancelClose]);

  const handleMouseLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleTriggerClick = useCallback((menu: MenuType) => {
    setOpenMenu(prev => prev === menu ? "" : menu);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const inHeader = headerRef.current && headerRef.current.contains(e.target as Node);
      const inPanel = panelRef.current && panelRef.current.contains(e.target as Node);
      if (!inHeader && !inPanel) {
        setOpenMenu("");
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu("");
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const productLinkMap: Record<string, string> = {
    "nav.productMenu.aiCopy": "/product/ai-copy",
    "nav.productMenu.aiImages": "/product/ai-images",
    "nav.productMenu.aiVideos": "/product/ai-videos",
    "nav.productMenu.aiAudio": "/product/ai-audio",
    "nav.productMenu.videoEditor": "/product/video-editor",
    "nav.productMenu.brandDNA": "/product/brand-dna",
    "nav.productMenu.smartLaunch": "/product/smart-launch",
    "nav.productMenu.specialCategories": "/product/special-categories",
    "nav.productMenu.instantForms": "/product/instant-forms",
    "nav.productMenu.neuralOptimizer": "/product/neural-optimizer",
    "nav.productMenu.campaignManager": "/product/campaign-manager",
    "nav.productMenu.autoFix": "/product/auto-fix",
    "nav.productMenu.leadManager": "/product/lead-manager",
    "nav.productMenu.conversionsAPI": "/product/conversions-api",
    "nav.productMenu.audiences": "/product/audiences",
    "nav.productMenu.analytics": "/product/analytics",
  };

  const renderProductPanel = () => (
    <div className="grid grid-cols-4 gap-6">
      {productColumns.map((col, colIndex) => (
        <div key={colIndex}>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {t(col.headingKey)}
          </h3>
          <div className="flex flex-col gap-1">
            {col.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={productLinkMap[item.titleKey] || "/product"}
                className="inline-flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-black/5 focus:bg-black/5 focus:outline-none transition-colors w-fit"
                data-testid={`nav-product-${colIndex}-${itemIndex}`}
              >
                <item.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>{t(item.titleKey)}</span>
              </a>
            ))}
          </div>
          {colIndex === 3 && (
            <div className="mt-4 p-3 rounded-xl bg-gray-50 border border-black/8">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1e40af] border-2 border-white" 
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">{integrationCard.count}</span>
              </div>
              <p className="text-xs text-gray-600">{t(integrationCard.titleKey)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const resourcesLinkMap: Record<string, string> = {
    "nav.resourcesMenu.helpCenter": "/resources/help-center",
    "nav.resourcesMenu.contactSupport": "/resources/contact-support",
    "nav.resourcesMenu.blog": "/resources/blog",
    "nav.resourcesMenu.webinars": "/resources/webinars",
    "nav.resourcesMenu.academy": "/resources/academy",
    "nav.resourcesMenu.roiCalculator": "/resources/roas-calculator",
    "nav.resourcesMenu.templates": "/resources/templates",
    "nav.resourcesMenu.apiDocs": "/resources/api-docs",
    "nav.resourcesMenu.partnerProgram": "/resources/partner-program",
  };

  const renderResourcesPanel = () => (
    <div className="grid grid-cols-4 gap-6">
      {resourcesColumns.map((col, colIndex) => (
        <div key={colIndex}>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {t(col.headingKey)}
          </h3>
          <div className="flex flex-col gap-2">
            {col.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={resourcesLinkMap[item.titleKey] || "/resources"}
                className="inline-flex flex-col px-2 py-2 rounded-md hover:bg-black/5 focus:bg-black/5 focus:outline-none transition-colors w-fit"
                data-testid={`nav-resources-${colIndex}-${itemIndex}`}
              >
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <item.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span>{t(item.titleKey)}</span>
                </div>
                {item.descKey && (
                  <p className="text-xs text-gray-500 mt-0.5 ml-6">{t(item.descKey)}</p>
                )}
              </a>
            ))}
          </div>
          {colIndex === 3 && (
            <div className="mt-4 p-4 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20">
              <p className="text-sm text-gray-700 mb-3">{t('nav.resourcesMenu.partnersDesc')}</p>
              <a href="/resources/partner-program">
                <Button 
                  size="sm" 
                  className="bg-[#2563eb] text-white w-full"
                  data-testid="nav-become-partner"
                >
                  {t('nav.resourcesMenu.becomePartner')}
                </Button>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const handleIndustryHover = (industryId: string) => {
    setHoveredIndustry(industryId);
    setHoveredUseCase(industryId); // Reset to industry main image
  };

  const renderIndustriesPanel = () => {
    const activeIndustry = industryData.find(ind => ind.id === hoveredIndustry) || industryData[0];
    const activeImage = industryImages[hoveredUseCase] || industryImages[activeIndustry.id] || retailImage;
    
    return (
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="flex flex-col">
            {industryData.map((industry) => (
              <a
                key={industry.id}
                href={`/industries/${industry.id}`}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors group ${
                  hoveredIndustry === industry.id 
                    ? "bg-black/5 text-gray-900" 
                    : "text-gray-700 hover:bg-black/5"
                }`}
                onMouseEnter={() => handleIndustryHover(industry.id)}
                data-testid={`nav-industry-${industry.id}`}
              >
                <span>{t(industry.titleKey)}</span>
                <ChevronRight className={`w-4 h-4 transition-colors ${
                  hoveredIndustry === industry.id ? "text-gray-600" : "text-gray-400 group-hover:text-gray-600"
                }`} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            {activeIndustry.useCases.map((item, index) => (
              <a
                key={index}
                href={`/industries/${activeIndustry.id}`}
                className={`inline-flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors w-fit ${
                  hoveredUseCase === item.imageKey
                    ? "bg-black/5 text-gray-900"
                    : "text-gray-700 hover:bg-black/5"
                }`}
                onMouseEnter={() => setHoveredUseCase(item.imageKey)}
                data-testid={`nav-industry-usecase-${index}`}
              >
                <item.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>{t(item.titleKey)}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src={activeImage} 
              alt="Case Study" 
              className="w-full h-32 object-cover transition-opacity duration-200"
            />
          </div>
          <h4 className="text-sm font-medium text-gray-900 mt-3 leading-snug">
            {t(activeIndustry.caseStudy.titleKey)}
          </h4>
          <a 
            href={`/industries/${activeIndustry.id}`}
            className="inline-flex items-center gap-1 text-sm text-[#2563eb] hover:text-[#3b82f6] mt-2 transition-colors"
            data-testid="nav-case-study-link"
          >
            {t(activeIndustry.caseStudy.linkKey)}
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/15 z-40 transition-opacity duration-150 ${openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpenMenu("")}
        data-testid="mega-scrim"
      />

      <div className="sticky top-0 z-50 pt-4 px-4">
        <div 
          ref={headerRef}
          className={`relative max-w-7xl mx-auto unified-nav-card${openMenu ? " menu-open" : ""}`}
          onMouseLeave={handleMouseLeave}
          data-testid="mega-header"
        >
          {/* ── Nav bar ── */}
          <header>
            <div className="flex items-center justify-between h-16 px-6">
              <Link href="/" data-testid="link-home" onClick={handleLogoClick}>
                <div className="flex items-center cursor-pointer">
                  <img src={logoUrl} alt="Curbe" className="h-10 w-auto" />
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-1">
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("product")}
                >
                  <button
                    className={`nav-pill flex items-center gap-1 text-sm font-medium transition-colors ${openMenu === "product" ? "bg-black/5 text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
                    onClick={() => handleTriggerClick("product")}
                    data-testid="nav-product-trigger"
                  >
                    {t('nav.product')}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "product" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("industries")}
                >
                  <button
                    className={`nav-pill flex items-center gap-1 text-sm font-medium transition-colors ${openMenu === "industries" ? "bg-black/5 text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
                    onClick={() => handleTriggerClick("industries")}
                    data-testid="nav-industries-trigger"
                  >
                    {t('nav.industries')}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "industries" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("resources")}
                >
                  <button
                    className={`nav-pill flex items-center gap-1 text-sm font-medium transition-colors ${openMenu === "resources" ? "bg-black/5 text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
                    onClick={() => handleTriggerClick("resources")}
                    data-testid="nav-resources-trigger"
                  >
                    {t('nav.resources')}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "resources" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <Link
                  to="/pricing"
                  className="nav-pill flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  data-testid="nav-pricing"
                >
                  {t('nav.pricing')}
                </Link>

                <Link
                  to="/"
                  className="nav-pill flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" 
                  data-testid="nav-why-us"
                  onClick={() => { setTimeout(() => { const el = document.getElementById('why-us'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                >
                  {t('nav.whyUs')}
                </Link>
              </nav>

              <div className="hidden lg:flex items-center gap-4">
                <a 
                  href="https://app.curbe.io/" 
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors" 
                  data-testid="link-login"
                >
                  {t('nav.login')}
                </a>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-300 text-gray-700"
                  onClick={onTalkToSales}
                  data-testid="button-talk-sales"
                >
                  {t('nav.talkToSales')}
                </Button>
                <a href="https://app.curbe.io/signup">
                  <Button 
                    size="sm" 
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white" 
                    data-testid="button-start-free"
                  >
                    {t('nav.startFreeTrial')}
                  </Button>
                </a>
                <div className="h-5 w-px bg-gray-300" />
                <LanguageSwitcher />
              </div>

              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-12 h-12 text-gray-700 active:opacity-60 cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                }}
                data-testid="button-mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen
                  ? <X className="w-6 h-6 pointer-events-none" />
                  : <Menu className="w-6 h-6 pointer-events-none" />}
              </button>
            </div>
          </header>

          {/* ── Mega panel — absolutely positioned so it overlays content ── */}
          {openMenu && (
            <div
              ref={panelRef}
              className="absolute left-0 right-0 px-6 pb-7 pt-2 rounded-b-[18px]"
              style={{
                top: '100%',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                outline: '1px solid rgba(0,0,0,0.08)',
                outlineOffset: '-1px',
                animation: 'megaIn 160ms ease-out',
                zIndex: 50,
              }}
              onMouseEnter={cancelClose}
              onMouseLeave={handleMouseLeave}
              data-testid={`mega-panel-${openMenu}`}
            >
              {openMenu === "product" && renderProductPanel()}
              {openMenu === "industries" && renderIndustriesPanel()}
              {openMenu === "resources" && renderResourcesPanel()}
            </div>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] overflow-y-auto bg-white"
          data-testid="mobile-menu-overlay"
        >
          <div className="relative min-h-full">
            <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 border-b border-black/8 bg-white">
              <Link href="/" data-testid="mobile-link-home" onClick={handleLogoClick}>
                <div className="relative flex items-center cursor-pointer">
                  <img src={logoUrl} alt="Curbe" className="h-10 w-auto" />
                </div>
              </Link>
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 text-gray-700 active:opacity-60 cursor-pointer"
                style={{
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                }}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-close"
                aria-label="Close mobile menu"
              >
                <X className="w-7 h-7 pointer-events-none" />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="border-b border-black/8 pb-2">
                <button 
                  className="flex items-center justify-between w-full py-3 text-gray-800"
                  onClick={() => setMobileAccordion(prev => prev === "product" ? "" : "product")}
                  data-testid="mobile-accordion-product"
                >
                  <span className="font-medium">{t('nav.product')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === "product" ? "rotate-180" : ""}`} />
                </button>
                {mobileAccordion === "product" && (
                  <div className="pb-3 space-y-4" data-testid="mobile-product-content">
                    {productColumns.map((col, colIndex) => (
                      <div key={colIndex}>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">{t(col.headingKey)}</h4>
                        <div className="space-y-1">
                          {col.items.map((item, itemIndex) => (
                            <a 
                              key={itemIndex} 
                              href={productLinkMap[item.titleKey] || "/product"}
                              className="flex items-center gap-2 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                              data-testid={`mobile-product-${colIndex}-${itemIndex}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <item.icon className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{t(item.titleKey)}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="#industries" 
                className="block py-3 text-gray-800 font-medium border-b border-black/8 hover:text-gray-900 transition-colors"
                data-testid="mobile-nav-industries"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.industries')}
              </a>

              <div className="border-b border-black/8">
                <button 
                  className="flex items-center justify-between w-full py-3 text-gray-800"
                  onClick={() => setMobileAccordion(prev => prev === "resources" ? "" : "resources")}
                  data-testid="mobile-accordion-resources"
                >
                  <span className="font-medium">{t('nav.resources')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === "resources" ? "rotate-180" : ""}`} />
                </button>
                {mobileAccordion === "resources" && (
                  <div className="pb-3 space-y-4" data-testid="mobile-resources-content">
                    {resourcesColumns.map((col, colIndex) => (
                      <div key={colIndex}>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">{t(col.headingKey)}</h4>
                        <div className="space-y-1">
                          {col.items.map((item, itemIndex) => (
                            <a 
                              key={itemIndex} 
                              href={resourcesLinkMap[item.titleKey] || "/resources"}
                              className="flex items-center gap-2 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                              data-testid={`mobile-resources-${colIndex}-${itemIndex}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <item.icon className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{t(item.titleKey)}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="block py-3 text-gray-800 font-medium border-b border-black/8 hover:text-gray-900 transition-colors"
                data-testid="mobile-nav-pricing"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.pricing')}
              </Link>

              <a 
                href="#why-us" 
                className="block py-3 text-gray-800 font-medium border-b border-black/8 hover:text-gray-900 transition-colors"
                data-testid="mobile-nav-why-us"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.whyUs')}
              </a>

              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-2 pb-3">
                  <LanguageSwitcher />
                  <span className="text-sm text-gray-500">Language</span>
                </div>
                
                <a 
                  href="https://app.curbe.io/" 
                  className="block"
                  data-testid="mobile-link-login"
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700"
                  >
                    {t('nav.login')}
                  </Button>
                </a>
                
                <a 
                  href="https://app.curbe.io/signup" 
                  className="block"
                  data-testid="mobile-link-start-free"
                >
                  <Button className="w-full bg-[#2563eb] text-white">
                    {t('nav.startFreeTrial')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
