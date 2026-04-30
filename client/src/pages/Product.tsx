import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { DemoForm } from "@/components/forms/DemoForm";
import {
  Sparkles,
  Image,
  Video,
  Mic,
  Film,
  Brain,
  Rocket,
  ShieldCheck,
  FileText,
  Zap,
  Target,
  Users,
  Database,
  Layers,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
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

interface FeatureCardProps {
  id?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ id, icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <div
      id={id}
      className="glass-card-light rounded-3xl p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div
        className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}40`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 leading-snug">{title}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed">{description}</p>
    </div>
  );
}

function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
}: {
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
}) {
  return (
    <div className="text-center mb-14">
      <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
        {title}
        <br />
        <span className="text-gradient-flow">{titleAccent}</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Product() {
  const { t } = useTranslation();
  const [demoFormOpen, setDemoFormOpen] = useState(false);

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

      {/* ═══════════════════ HERO ═══════════════════ */}
      <HeroSection />

      {/* ═══════════════════ CREA CON IA ════════════ */}
      <CreaSection />

      {/* ═══════════════════ LANZA ══════════════════ */}
      <LanzaSection />

      {/* ═══════════════════ OPTIMIZA ═══════════════ */}
      <OptimizaSection />

      {/* ═══════════════════ DATOS Y LEADS ══════════ */}
      <DatosSection />

      {/* ═══════════════════ CTA FINAL ══════════════ */}
      <FinalCTASection onOpenDemo={() => setDemoFormOpen(true)} />

      <Footer />

      <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />
    </div>
  );
}

/* ═══════════════════ HERO ═══════════════════ */
function HeroSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative px-5 sm:px-6 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div ref={ref} className="reveal-on-scroll max-w-4xl mx-auto text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-700 mb-5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
          PLATAFORMA COMPLETA
        </span>
        <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-gray-900">Todo lo que necesitas para crear, lanzar</span>
          <br />
          <span className="text-gradient-flow">y optimizar tus Meta Ads con IA</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10">
          Curbe integra inteligencia artificial en cada etapa de tu estrategia publicitaria.
          Desde la generación de creatividades hasta la optimización automática de campañas,
          pasando por la gestión de leads y el análisis de datos en tiempo real. Una plataforma
          diseñada para que las marcas escalen sus resultados en Meta sin equipos gigantes ni
          presupuestos infinitos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => (window.location.href = "https://app.curbe.io/signup")}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[15px] transition-all hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #7c3aed 60%, #a855f7 100%)",
              boxShadow:
                "0 12px 36px -10px rgba(124,58,237,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <span>Comenzar gratis</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("crea");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-gray-800 font-medium border border-gray-200 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all"
          >
            Explorar funcionalidades
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CREA CON IA ════════════ */
function CreaSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="crea" className="relative py-16 lg:py-24 px-6 scroll-mt-24">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <SectionHeader
          badge="CREA CON IA"
          title="Genera creatividades que convierten"
          titleAccent="en minutos, no en días"
          description="Curbe utiliza modelos de inteligencia artificial de última generación para producir anuncios completos — copy, imágenes, videos y audio — manteniendo la identidad visual de tu marca en cada pieza."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            id="ai-copy"
            icon={Sparkles}
            title="Copy con IA"
            description="Genera copies persuasivos para tus anuncios de Meta en segundos. Nuestra IA escribe headlines, primary texts y descriptions optimizados para conversión, adaptando el tono a tu audiencia y probando múltiples variantes simultáneamente. Compatible con todos los formatos: feed, stories, reels y carrusel."
            color="#7c3aed"
          />
          <FeatureCard
            id="ai-images"
            icon={Image}
            title="Imágenes con IA"
            description="Crea imágenes publicitarias profesionales sin necesidad de un diseñador. Desde fotos de producto con fondos generados hasta composiciones lifestyle que reflejan tu marca, el motor de generación de imágenes de Curbe produce variaciones ilimitadas listas para publicar con las dimensiones exactas de Meta."
            color="#3b82f6"
          />
          <FeatureCard
            id="ai-videos"
            icon={Video}
            title="Videos con IA"
            description="Produce videos cortos optimizados para Meta Ads usando IA generativa. Convierte imágenes estáticas en clips animados, genera secuencias narrativas completas y añade transiciones dinámicas. Cada video se adapta automáticamente a formatos verticales, cuadrados y horizontales para máxima cobertura."
            color="#ec4899"
          />
          <FeatureCard
            id="ai-audio"
            icon={Mic}
            title="Audio con ElevenLabs"
            description="Añade locuciones profesionales y voces sintéticas ultrarrealistas a tus anuncios gracias a la integración nativa con ElevenLabs. Selecciona entre más de 50 voces en español con acentos neutros, latinoamericanos o ibéricos, y genera voiceovers perfectamente sincronizados con tus videos publicitarios."
            color="#f59e0b"
          />
          <FeatureCard
            id="video-editor"
            icon={Film}
            title="Editor de Video"
            description="Edita tus creatividades de video directamente en Curbe con un editor visual completo. Recorta clips, añade subtítulos automáticos, superpone texto animado y ajusta la velocidad de reproducción. Todo el editor está optimizado para crear anuncios que cumplen con las especificaciones de Meta sin salir de la plataforma."
            color="#06b6d4"
          />
          <FeatureCard
            id="brand-dna"
            icon={Brain}
            title="Brand DNA"
            description="Define la identidad de tu marca una sola vez y deja que la IA la aplique consistentemente en cada creatividad. Colores primarios y secundarios, tipografías, tono de voz, guía de estilo visual, restricciones de contenido y palabras prohibidas. Brand DNA asegura que cada anuncio generado sea inconfundiblemente tuyo."
            color="#a855f7"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ LANZA ══════════════════ */
function LanzaSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="lanza" className="relative py-16 lg:py-24 px-6 scroll-mt-24">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <SectionHeader
          badge="LANZA"
          title="Publica tus campañas con"
          titleAccent="inteligencia estratégica"
          description="Curbe automatiza la configuración y publicación de campañas en Meta, aplicando las mejores prácticas de segmentación, presupuesto y programación para que cada lanzamiento tenga el máximo impacto desde el primer día."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            id="smart-launch"
            icon={Rocket}
            title="Smart Launch"
            description="Lanza campañas completas con un solo clic. La IA de Curbe configura automáticamente los conjuntos de anuncios, la segmentación por intereses y comportamientos, las ubicaciones óptimas y la distribución del presupuesto. Smart Launch analiza tu industria y competencia para determinar la estrategia de lanzamiento más efectiva en cada caso."
            color="#10b981"
          />
          <FeatureCard
            id="special-categories"
            icon={ShieldCheck}
            title="Categorías Especiales"
            description="Gestiona campañas en las categorías restringidas de Meta (crédito, empleo, vivienda, temas sociales) con total cumplimiento normativo. Curbe aplica automáticamente las restricciones de segmentación requeridas, genera las declaraciones necesarias y monitoriza continuamente el estado de aprobación de tus anuncios."
            color="#dc2626"
          />
          <FeatureCard
            id="instant-forms"
            icon={FileText}
            title="Meta Instant Forms"
            description="Crea formularios de generación de leads nativos de Meta con arrastrar y soltar, optimizados para móvil y precargados con los datos del perfil del usuario. La IA sugiere las preguntas que maximizan la tasa de conversión y califica automáticamente los leads entrantes según su probabilidad de cierre."
            color="#ea580c"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ OPTIMIZA ═══════════════ */
function OptimizaSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="optimiza" className="relative py-16 lg:py-24 px-6 scroll-mt-24">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <SectionHeader
          badge="OPTIMIZA"
          title="Mejora el rendimiento de tus anuncios"
          titleAccent="las 24 horas del día"
          description="El motor de optimización de Curbe monitorea, ajusta y escala tus campañas de forma continua usando aprendizaje por refuerzo. Cada dólar se redistribuye automáticamente hacia donde genera mayor retorno."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            id="neural-optimizer"
            icon={Zap}
            title="Neural Optimizer"
            description="Un motor de optimización basado en redes neuronales que ajusta pujas, presupuestos y audiencias en tiempo real. Analiza cientos de señales por segundo — CTR, CPM, frecuencia, fatiga de audiencia, hora del día — y toma decisiones de reasignación de presupuesto 24/7 sin intervención manual. Resultado: ROAS consistentemente más alto."
            color="#f59e0b"
          />
          <FeatureCard
            id="campaign-manager"
            icon={Target}
            title="Gestor de Campañas"
            description="Administra todas tus campañas de Meta desde un panel unificado con vistas por objetivo, por producto y por funnel. Pausa, duplica, escala o ajusta campañas con gestos simples. El gestor incluye alertas inteligentes que te avisan cuando una campaña se desvía de su rendimiento esperado antes de que queme presupuesto."
            color="#2563eb"
          />
          <FeatureCard
            id="auto-fix"
            icon={ShieldCheck}
            title="Auto-Fix de Rechazos"
            description="Cuando Meta rechaza un anuncio por violación de políticas, Auto-Fix analiza el motivo exacto del rechazo, modifica automáticamente el copy o la imagen para cumplir con las normas y reenvía el anuncio en menos de 60 segundos. Reduce el tiempo de inactividad de tus campañas a prácticamente cero y mantiene tu cuenta con buena reputación."
            color="#0891b2"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ DATOS Y LEADS ══════════ */
function DatosSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="datos" className="relative py-16 lg:py-24 px-6 scroll-mt-24">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <SectionHeader
          badge="DATOS Y LEADS"
          title="Convierte datos en decisiones"
          titleAccent="y leads en clientes"
          description="Curbe centraliza toda la información de tus campañas, audiencias y leads en una plataforma que te permite actuar con precisión quirúrgica sobre cada oportunidad de conversión."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard
            id="lead-manager"
            icon={Users}
            title="Gestor de Leads"
            description="Un CRM integrado que captura, organiza y califica automáticamente cada lead generado por tus campañas de Meta. Asigna puntuaciones de calidad basadas en comportamiento, segmenta por nivel de interés y envía notificaciones en tiempo real para que tu equipo de ventas haga seguimiento inmediato. Integración nativa con WhatsApp, email y SMS."
            color="#4f46e5"
          />
          <FeatureCard
            id="conversions-api"
            icon={Database}
            title="Conversions API"
            description="Implementación completa del Conversions API de Meta con un solo clic, sin desarrolladores ni código. Rastrea eventos del servidor (purchases, leads, add to cart, page views) con latencia inferior a 200ms, mejorando la precisión del pixel entre un 20% y un 30% y reduciendo la pérdida de datos por bloqueadores de anuncios y restricciones del navegador."
            color="#0d9488"
          />
          <FeatureCard
            id="audiences"
            icon={Layers}
            title="Audiencias Inteligentes"
            description="Crea audiencias personalizadas, similares (lookalike) y de retargeting con segmentación avanzada. La IA analiza el comportamiento de tus mejores clientes para generar audiencias lookalike de alta precisión, y actualiza automáticamente las listas de exclusión para evitar mostrar anuncios a quienes ya compraron. Soporte completo para Custom Audiences y Advantage+."
            color="#7c3aed"
          />
          <FeatureCard
            id="analytics"
            icon={BarChart3}
            title="Analytics en Tiempo Real"
            description="Dashboards interactivos con KPIs clave: ROAS, CPA, CTR, frecuencia, alcance, conversiones atribuidas y valor de vida del cliente. Compara períodos, cruza datos de campañas orgánicas vs pagadas, y recibe reportes automatizados por email con insights accionables. Toda la data se actualiza cada 15 minutos para que nunca tomes decisiones con información desactualizada."
            color="#3b82f6"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CTA FINAL ══════════════ */
function FinalCTASection({ onOpenDemo }: { onOpenDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-32 lg:py-40 px-6 overflow-hidden">
      <div ref={ref} className="reveal-on-scroll relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-emerald-300">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-emerald-700">
            EMPIEZA HOY
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
          <span className="text-gray-900">Lleva tus Meta Ads</span>
          <br />
          <span className="text-gradient-flow">al siguiente nivel</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Únete a las marcas que ya usan Curbe para crear, lanzar y optimizar sus
          campañas de Meta con inteligencia artificial. Comienza hoy sin costo y
          descubre lo que la IA puede hacer por tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-gray-800 font-medium border border-gray-200 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all"
          >
            Hablar con ventas
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://app.curbe.io/signup")
            }
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #7c3aed 60%, #a855f7 100%)",
              boxShadow:
                "0 18px 50px -10px rgba(124,58,237,0.7), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <span>Comenzar prueba gratuita</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-700">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Sin tarjeta de crédito
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Configuración en 5 minutos
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Cancelas cuando quieras
          </span>
        </div>
      </div>
    </section>
  );
}
