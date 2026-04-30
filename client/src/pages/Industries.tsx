import { MegaHeader } from "@/components/layout/MegaHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Store,
  ShoppingCart,
  Building2,
  TrendingUp,
  Users,
  Sparkles,
  BarChart3,
  Zap,
  Layers,
  Target,
  Database,
  FileText,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

interface IndustryCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  accent: string;
}

function IndustryCard({ card }: { card: IndustryCard }) {
  const Icon = card.icon;
  return (
    <div className="glass-card-light p-6 flex flex-col items-start gap-4 group transition-all duration-300 hover:scale-[1.02]">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `${card.accent}18`,
          border: `1px solid ${card.accent}33`,
          color: card.accent,
        }}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}

interface CaseStudy {
  metric: string;
  title: string;
  description: string;
  accent: string;
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="glass-card-light p-6 flex flex-col gap-3 group transition-all duration-300 hover:scale-[1.02]">
      <div
        className="text-3xl font-extrabold tracking-tight"
        style={{ color: study.accent }}
      >
        {study.metric}
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-1">{study.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{study.description}</p>
      </div>
    </div>
  );
}

export default function Industries() {
  const { t } = useTranslation();
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  const heroRef = useReveal<HTMLDivElement>();

  const agencyCards: IndustryCard[] = [
    {
      icon: Building2,
      title: "Gestión Multi-Cuenta",
      description:
        "Administra decenas de cuentas publicitarias desde un solo dashboard. Curbe organiza campañas por cliente, vertical y objetivo para que tu equipo nunca pierda el control del portafolio, sin importar cuántas cuentas manejen simultáneamente.",
      accent: "#7c3aed",
    },
    {
      icon: Sparkles,
      title: "Producción Creativa Acelerada",
      description:
        "Genera variaciones de anuncios, copys y headlines en minutos con IA generativa. Curbe analiza las guías de marca de cada cliente y produce creatividades on-brand que puedes revisar, editar y lanzar sin depender de equipos de diseño saturados.",
      accent: "#a855f7",
    },
    {
      icon: BarChart3,
      title: "Reportes de Cliente Automatizados",
      description:
        "Crea dashboards personalizados y reportes en PDF con la identidad de tu agencia. Cada cliente recibe métricas claras sobre ROAS, CPA, alcance y conversiones, programados para enviarse automáticamente cada semana o mes.",
      accent: "#2563eb",
    },
    {
      icon: Zap,
      title: "Workflows y Automatizaciones",
      description:
        "Define reglas inteligentes para pausar campañas de bajo rendimiento, escalar las ganadoras y redistribuir presupuesto automáticamente. Curbe ejecuta cientos de micro-decisiones diarias para que tu equipo se enfoque en estrategia.",
      accent: "#f59e0b",
    },
  ];

  const ecommerceCards: IndustryCard[] = [
    {
      icon: Target,
      title: "Testing de Creatividades a Escala",
      description:
        "Lanza experimentos A/B y multivariantes con cientos de combinaciones de imagen, copy, headline y CTA. Curbe identifica las creatividades ganadoras con significancia estadística y escala automáticamente el presupuesto hacia las de mejor rendimiento.",
      accent: "#dc2626",
    },
    {
      icon: TrendingUp,
      title: "Maximización de ROAS",
      description:
        "El optimizador neuronal de Curbe ajusta pujas, audiencias y placements en tiempo real para maximizar el retorno sobre inversión publicitaria. El algoritmo aprende del comportamiento de compra y afina la segmentación campaña tras campaña.",
      accent: "#10b981",
    },
    {
      icon: ShoppingCart,
      title: "Retargeting Dinámico",
      description:
        "Segmenta automáticamente a usuarios según su comportamiento: visitaron producto, abandonaron carrito, compraron por primera vez o son recurrentes. Curbe sirve el anuncio correcto en el momento exacto del customer journey.",
      accent: "#0891b2",
    },
    {
      icon: Database,
      title: "Catálogos de Producto Inteligentes",
      description:
        "Sincroniza tu catálogo de Shopify, WooCommerce o Magento y deja que Curbe genere automáticamente anuncios dinámicos con los productos más relevantes para cada audiencia, incluyendo precios, disponibilidad y ofertas en tiempo real.",
      accent: "#8b5cf6",
    },
  ];

  const leadGenCards: IndustryCard[] = [
    {
      icon: FileText,
      title: "Lead Forms Nativos Optimizados",
      description:
        "Crea y optimiza formularios de captación integrados directamente en Meta, LinkedIn y Google Ads. Curbe testea campos, preguntas y flujos para maximizar la tasa de conversión y minimizar el costo por lead calificado.",
      accent: "#2563eb",
    },
    {
      icon: Layers,
      title: "CRM Integrado y Automatizado",
      description:
        "Conecta Salesforce, HubSpot o cualquier CRM vía API y automatiza la asignación, calificación y seguimiento de leads. Curbe dispara secuencias de nurturing personalizadas basadas en la puntuación y el comportamiento de cada prospecto.",
      accent: "#ec4899",
    },
    {
      icon: ShieldCheck,
      title: "Cumplimiento de Categorías Especiales",
      description:
        "Para industrias reguladas como finanzas, salud, seguros o empleo, Curbe monitorea automáticamente que cada anuncio cumpla con las políticas de categorías especiales de Meta y Google, evitando rechazos y bloqueos de cuenta.",
      accent: "#f59e0b",
    },
    {
      icon: Users,
      title: "Tracking y Atribución de Leads",
      description:
        "Rastrea cada lead desde el clic hasta la conversión final con píxeles de primera parte y eventos server-side. Atribuye correctamente el valor de cada campaña y canal, incluso con ciclos de venta largos y múltiples touchpoints.",
      accent: "#14b8a6",
    },
  ];

  const mediaBuyerCards: IndustryCard[] = [
    {
      icon: Zap,
      title: "Neural Optimizer",
      description:
        "El motor de optimización con aprendizaje reforzado ajusta presupuestos, pujas, audiencias y horarios de publicación en tiempo real. Curbe toma miles de micro-decisiones por minuto que ningún equipo humano podría ejecutar manualmente.",
      accent: "#7c3aed",
    },
    {
      icon: ShieldCheck,
      title: "Auto-Fix de Políticas y Rechazos",
      description:
        "Detecta anuncios rechazados por políticas de Meta, Google o TikTok antes de que afecten el rendimiento de tu cuenta. Curbe sugiere correcciones, reenvía automáticamente y mantiene un historial de cumplimiento para cada cuenta.",
      accent: "#dc2626",
    },
    {
      icon: Users,
      title: "Audiencias Lookalike y Seed",
      description:
        "Genera audiencias similares a partir de tus mejores clientes, compradores frecuentes o leads calificados. Curbe refina continuamente las seeds audiences y encuentra los segmentos con mayor propensión de conversión.",
      accent: "#3b82f6",
    },
    {
      icon: TrendingUp,
      title: "Analytics Avanzado y Forecasting",
      description:
        "Visualiza tendencias, estacionalidad y proyecciones de rendimiento con modelos predictivos. Curbe anticipa la fatiga de audiencia, sugiere cuándo rotar creatividades y proyecta el gasto óptimo por canal para el próximo trimestre.",
      accent: "#10b981",
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      metric: "+145%",
      title: "Incremento de ROAS en E-commerce",
      description:
        "Una tienda de moda online escaló de $50k a $340k mensuales en Meta Ads en 4 meses usando Neural Optimizer y testing de creatividades automatizado.",
      accent: "#10b981",
    },
    {
      metric: "12x",
      title: "Más Creatividades para Agencia",
      description:
        "Una agencia de marketing digital pasó de producir 15 a 180 variaciones de anuncios por semana por cliente con el generador de creatividades con IA de Curbe.",
      accent: "#7c3aed",
    },
    {
      metric: "-62%",
      title: "Reducción de Costo por Lead",
      description:
        "Una empresa de servicios financieros redujo su CPA de $38 a $14.50 optimizando formularios nativos, segmentación y secuencias de nurturing automatizadas.",
      accent: "#2563eb",
    },
    {
      metric: "99.8%",
      title: "Tasa de Aprobación de Anuncios",
      description:
        "Un media buyer independiente pasó de tener 3 de cada 10 anuncios rechazados a una tasa de aprobación casi perfecta usando Auto-Fix de políticas de Curbe.",
      accent: "#f59e0b",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 antialiased relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #fde68a 0%, #fdba74 15%, #fca5a5 30%, #c4b5fd 50%, #93c5fd 70%, #60a5fa 85%, #3b82f6 100%)",
          }}
        />
        <div
          className="animate-blob-1"
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            filter: "blur(120px)",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)",
          }}
        />
        <div
          className="animate-blob-2"
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            filter: "blur(120px)",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(96,165,250,0.5) 35%, transparent 65%)",
          }}
        />
        <div
          className="animate-blob-3"
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            filter: "blur(110px)",
            background:
              "radial-gradient(circle, rgba(244,114,182,0.4) 0%, rgba(232,121,249,0.25) 40%, transparent 70%)",
          }}
        />
        <div
          className="animate-blob-4"
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            filter: "blur(110px)",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.3) 35%, transparent 65%)",
          }}
        />
      </div>

      <MegaHeader onTalkToSales={() => setDemoFormOpen(true)} />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative px-5 sm:px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div
          ref={heroRef}
          className="reveal-on-scroll max-w-4xl mx-auto text-center"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-700 mb-5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            Curbe para Industrias
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
            Curbe se adapta a
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              tu industria
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cada vertical tiene desafíos únicos en marketing digital. Curbe ofrece capacidades
            especializadas para agencias, e-commerce, generación de leads y media buyers
            independientes, potenciadas por inteligencia artificial que entiende el contexto de
            tu negocio.
          </p>
        </div>
      </section>

      {/* ════════════════ AGENCIAS ════════════════ */}
      <section id="agencies" className="relative py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-violet-700 mb-4 px-3 py-1 rounded-full bg-violet-50 border border-violet-100">
              Para Agencias
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Escala tu agencia
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sin escalar tu equipo
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Maneja más clientes, produce más creatividades y entrega mejores resultados sin
              contratar más personal. Curbe automatiza la operación diaria para que tu equipo
              se concentre en la estrategia y la relación con el cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agencyCards.map((card, i) => (
              <IndustryCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ E-COMMERCE ════════════════ */}
      <section id="ecommerce" className="relative py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-rose-700 mb-4 px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              E-commerce y DTC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Vende más
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                con menos inversión
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Del testing de creatividades al retargeting dinámico, Curbe optimiza cada etapa
              del funnel de venta. Conecta tu tienda, sincroniza tu catálogo y deja que la IA
              encuentre a tus clientes ideales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecommerceCards.map((card, i) => (
              <IndustryCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ LEAD GEN ════════════════ */}
      <section id="leadgen" className="relative py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-700 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              Generación de Leads
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Convierte clicks
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                en oportunidades reales
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Para negocios cuyo objetivo es capturar leads calificados: seguros, bienes raíces,
              educación, servicios profesionales y más. Curbe optimiza formularios, integra tu
              CRM y asegura cumplimiento regulatorio en cada campaña.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadGenCards.map((card, i) => (
              <IndustryCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ MEDIA BUYERS ════════════════ */}
      <section id="mediabuyers" className="relative py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-700 mb-4 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              Media Buyers Independientes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Multiplica tu capacidad
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sin multiplicar las horas
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Como media buyer independiente, tu tiempo es tu activo más valioso. Curbe
              automatiza la optimización, las auditorías de políticas y la generación de
              audiencias para que puedas manejar más cuentas sin sacrificar rendimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaBuyerCards.map((card, i) => (
              <IndustryCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA BANNER ════════════════ */}
      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card-light p-10 md:p-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
              ¿Listo para transformar
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                tu operación publicitaria?
              </span>
            </h2>
            <p className="text-slate-600 text-base lg:text-lg mb-8 max-w-xl mx-auto">
              Sin importar tu industria, Curbe tiene las herramientas y la inteligencia
              artificial que necesitas para escalar resultados con menos esfuerzo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.curbe.io/signup">
                <Button
                  size="lg"
                  className="rounded-full text-white font-semibold px-8 py-6 text-base"
                  style={{
                    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 60%, #a855f7 100%)",
                    boxShadow: "0 12px 36px -10px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                >
                  Comenzar prueba gratuita
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="https://app.curbe.io/signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-slate-300 text-slate-700 font-semibold px-8 py-6 text-base"
                >
                  Hablar con ventas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ CASE STUDIES ════════════════ */}
      <section className="relative py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-amber-700 mb-4 px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
              Casos de Éxito
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Resultados reales
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 60%, #dc2626 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                en todas las industrias
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Clientes de distintos verticales ya están escalando sus resultados con Curbe.
              Estos son algunos de los resultados que han conseguido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
