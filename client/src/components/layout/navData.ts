import {
  Sparkles,
  Image,
  Video,
  Mic,
  Film,
  Brain,
  Rocket,
  Target,
  Zap,
  ShieldCheck,
  Users,
  Database,
  BarChart3,
  Layers,
  Store,
  ShoppingCart,
  Building2,
  TrendingUp,
  HelpCircle,
  Headphones,
  BookOpen,
  GraduationCap,
  Calculator,
  FileText,
  PenTool,
  Handshake,
  type LucideIcon
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  title: string;
  titleKey: string;
  desc?: string;
  descKey?: string;
}

export interface NavColumn {
  heading: string;
  headingKey: string;
  items: NavItem[];
}

export interface IntegrationCard {
  title: string;
  titleKey: string;
  count: string;
}

export const productColumns: NavColumn[] = [
  {
    heading: "Crea con IA",
    headingKey: "nav.productMenu.createHeading",
    items: [
      { icon: Sparkles, title: "Copy con IA", titleKey: "nav.productMenu.aiCopy" },
      { icon: Image, title: "Imágenes con IA", titleKey: "nav.productMenu.aiImages" },
      { icon: Video, title: "Videos con IA", titleKey: "nav.productMenu.aiVideos" },
      { icon: Mic, title: "Audio con ElevenLabs", titleKey: "nav.productMenu.aiAudio" },
      { icon: Film, title: "Editor de Video", titleKey: "nav.productMenu.videoEditor" },
      { icon: Brain, title: "Brand DNA", titleKey: "nav.productMenu.brandDNA" },
    ]
  },
  {
    heading: "Lanza",
    headingKey: "nav.productMenu.launchHeading",
    items: [
      { icon: Rocket, title: "Smart Launch", titleKey: "nav.productMenu.smartLaunch" },
      { icon: ShieldCheck, title: "Categorías Especiales", titleKey: "nav.productMenu.specialCategories" },
      { icon: FileText, title: "Meta Instant Forms", titleKey: "nav.productMenu.instantForms" },
    ]
  },
  {
    heading: "Optimiza",
    headingKey: "nav.productMenu.optimizeHeading",
    items: [
      { icon: Zap, title: "Neural Optimizer", titleKey: "nav.productMenu.neuralOptimizer" },
      { icon: Target, title: "Gestor de Campañas", titleKey: "nav.productMenu.campaignManager" },
      { icon: ShieldCheck, title: "Auto-Fix de Rechazos", titleKey: "nav.productMenu.autoFix" },
    ]
  },
  {
    heading: "Datos y Leads",
    headingKey: "nav.productMenu.dataHeading",
    items: [
      { icon: Users, title: "Gestor de Leads", titleKey: "nav.productMenu.leadManager" },
      { icon: Database, title: "Conversions API", titleKey: "nav.productMenu.conversionsAPI" },
      { icon: Layers, title: "Audiencias", titleKey: "nav.productMenu.audiences" },
      { icon: BarChart3, title: "Analytics", titleKey: "nav.productMenu.analytics" },
    ]
  }
];

export const resourcesColumns: NavColumn[] = [
  {
    heading: "Support",
    headingKey: "nav.resourcesMenu.supportHeading",
    items: [
      { icon: HelpCircle, title: "Help Center", titleKey: "nav.resourcesMenu.helpCenter", desc: "Get answers to common questions", descKey: "nav.resourcesMenu.helpCenterDesc" },
      { icon: Headphones, title: "Contact Support", titleKey: "nav.resourcesMenu.contactSupport", desc: "Talk to our support team", descKey: "nav.resourcesMenu.contactSupportDesc" },
    ]
  },
  {
    heading: "Learn",
    headingKey: "nav.resourcesMenu.learnHeading",
    items: [
      { icon: BookOpen, title: "Blog", titleKey: "nav.resourcesMenu.blog", desc: "Tips, guides, and Meta Ads news", descKey: "nav.resourcesMenu.blogDesc" },
      { icon: Video, title: "Webinars", titleKey: "nav.resourcesMenu.webinars", desc: "Live and on-demand sessions", descKey: "nav.resourcesMenu.webinarsDesc" },
      { icon: GraduationCap, title: "Academy", titleKey: "nav.resourcesMenu.academy", desc: "Free courses and certifications", descKey: "nav.resourcesMenu.academyDesc" },
    ]
  },
  {
    heading: "Tools",
    headingKey: "nav.resourcesMenu.toolsHeading",
    items: [
      { icon: Calculator, title: "ROAS Calculator", titleKey: "nav.resourcesMenu.roiCalculator", desc: "Calculate your potential return", descKey: "nav.resourcesMenu.roiCalculatorDesc" },
      { icon: FileText, title: "Ad Templates", titleKey: "nav.resourcesMenu.templates", desc: "Ready-to-use ad copy templates", descKey: "nav.resourcesMenu.templatesDesc" },
      { icon: PenTool, title: "API Docs", titleKey: "nav.resourcesMenu.apiDocs", desc: "Developer documentation", descKey: "nav.resourcesMenu.apiDocsDesc" },
    ]
  },
  {
    heading: "Partners",
    headingKey: "nav.resourcesMenu.partnersHeading",
    items: [
      { icon: Handshake, title: "Partner Program", titleKey: "nav.resourcesMenu.partnerProgram", desc: "Join our partner ecosystem", descKey: "nav.resourcesMenu.partnerProgramDesc" },
    ]
  }
];

export const integrationCard: IntegrationCard = {
  title: "Meta Graph API",
  titleKey: "nav.productMenu.integrations",
  count: "API"
};

export interface IndustryItem {
  icon: LucideIcon;
  title: string;
  titleKey: string;
  imageKey: string;
}

export interface CaseStudy {
  titleKey: string;
  linkKey: string;
  imageKey: string;
}

export interface IndustryData {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  useCases: IndustryItem[];
  caseStudy: CaseStudy;
}

export const industryData: IndustryData[] = [
  {
    id: "agencies",
    icon: Store,
    titleKey: "nav.industriesMenu.agencies",
    useCases: [
      { icon: Users, title: "Gestión multi-cuenta", titleKey: "nav.industriesMenu.agenciesMultiaccount", imageKey: "agencies" },
      { icon: Sparkles, title: "Creatividades rápidas", titleKey: "nav.industriesMenu.agenciesCreative", imageKey: "agencies" },
      { icon: BarChart3, title: "Reportes de clientes", titleKey: "nav.industriesMenu.agenciesReports", imageKey: "agencies" },
      { icon: Zap, title: "Automatización de flujos", titleKey: "nav.industriesMenu.agenciesAutomation", imageKey: "agencies" },
    ],
    caseStudy: {
      titleKey: "nav.industriesMenu.agenciesCaseTitle",
      linkKey: "nav.industriesMenu.caseStudyLink",
      imageKey: "agencies",
    }
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    titleKey: "nav.industriesMenu.ecommerce",
    useCases: [
      { icon: Layers, title: "Test de creatividades", titleKey: "nav.industriesMenu.ecommerceCreativeTest", imageKey: "ecommerce" },
      { icon: TrendingUp, title: "Maximizar ROAS", titleKey: "nav.industriesMenu.ecommerceROAS", imageKey: "ecommerce" },
      { icon: Target, title: "Retargeting dinámico", titleKey: "nav.industriesMenu.ecommerceRetargeting", imageKey: "ecommerce" },
      { icon: Database, title: "Catálogo de productos", titleKey: "nav.industriesMenu.ecommerceCatalog", imageKey: "ecommerce" },
    ],
    caseStudy: {
      titleKey: "nav.industriesMenu.ecommerceCaseTitle",
      linkKey: "nav.industriesMenu.caseStudyLink",
      imageKey: "ecommerce",
    }
  },
  {
    id: "leadgen",
    icon: Building2,
    titleKey: "nav.industriesMenu.leadGen",
    useCases: [
      { icon: FileText, title: "Meta Lead Forms", titleKey: "nav.industriesMenu.leadGenForms", imageKey: "leadgen" },
      { icon: Users, title: "CRM integrado", titleKey: "nav.industriesMenu.leadGenCRM", imageKey: "leadgen" },
      { icon: ShieldCheck, title: "Categorías especiales", titleKey: "nav.industriesMenu.leadGenSpecial", imageKey: "leadgen" },
      { icon: BarChart3, title: "Seguimiento de leads", titleKey: "nav.industriesMenu.leadGenTracking", imageKey: "leadgen" },
    ],
    caseStudy: {
      titleKey: "nav.industriesMenu.leadGenCaseTitle",
      linkKey: "nav.industriesMenu.caseStudyLink",
      imageKey: "leadgen",
    }
  },
  {
    id: "mediabuyers",
    icon: TrendingUp,
    titleKey: "nav.industriesMenu.mediaBuyers",
    useCases: [
      { icon: Zap, title: "Neural Optimizer", titleKey: "nav.industriesMenu.mediaBuyersOptimizer", imageKey: "mediabuyers" },
      { icon: ShieldCheck, title: "Auto-Fix políticas", titleKey: "nav.industriesMenu.mediaBuyersAutoFix", imageKey: "mediabuyers" },
      { icon: Layers, title: "Audiencias Lookalike", titleKey: "nav.industriesMenu.mediaBuyersAudiences", imageKey: "mediabuyers" },
      { icon: BarChart3, title: "Analytics avanzado", titleKey: "nav.industriesMenu.mediaBuyersAnalytics", imageKey: "mediabuyers" },
    ],
    caseStudy: {
      titleKey: "nav.industriesMenu.mediaBuyersCaseTitle",
      linkKey: "nav.industriesMenu.caseStudyLink",
      imageKey: "mediabuyers",
    }
  },
];
