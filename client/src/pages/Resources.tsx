import { MegaHeader } from "@/components/layout/MegaHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { HelpCircle, Headphones, BookOpen, Video, GraduationCap, Calculator, FileText, PenTool, Handshake, ArrowRight, ChevronRight, Mail, MessageCircle } from "lucide-react";

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

function SectionHeading({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-on-scroll text-center mb-14 px-6">
      <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
        {title}
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

export default function Resources() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen text-gray-900 antialiased relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #fde68a 0%, #fdba74 15%, #fca5a5 30%, #c4b5fd 50%, #93c5fd 70%, #60a5fa 85%, #3b82f6 100%)' }} />
        <div className="animate-blob-1" style={{ position:'absolute', top:'-10%', left:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)' }} />
        <div className="animate-blob-2" style={{ position:'absolute', bottom:'-10%', right:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(96,165,250,0.5) 35%, transparent 65%)' }} />
        <div className="animate-blob-3" style={{ position:'absolute', top:'40%', left:'20%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(244,114,182,0.4) 0%, rgba(232,121,249,0.25) 40%, transparent 70%)' }} />
        <div className="animate-blob-4" style={{ position:'absolute', top:'10%', right:'10%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.3) 35%, transparent 65%)' }} />
      </div>

      <MegaHeader onTalkToSales={() => setDemoFormOpen(true)} />

      {/* Hero */}
      <section className="relative px-5 sm:px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            Curbe
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-5">
            Recursos Curbe
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas para dominar Meta Ads con IA.
            Guías, herramientas, formación y soporte en un solo lugar.
          </p>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="relative py-16 lg:py-24 px-6 scroll-mt-28">
        <SectionHeading
          badge="Soporte"
          title="Soporte"
          subtitle="Estamos aquí para ayudarte en cada paso del camino."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <SupportCard
            icon={HelpCircle}
            title="Help Center"
            description="Guías paso a paso, tutoriales detallados y preguntas frecuentes para resolver tus dudas rápidamente. Encuentra respuestas sobre campañas, optimización, creatividades y más."
            cta="Explorar guías"
            href="#"
          />
          <SupportCard
            icon={Headphones}
            title="Contact Support"
            description="Habla directamente con nuestro equipo de soporte por email, chat en vivo o videollamada. Soporte prioritario 24/7 disponible para planes Business y Enterprise."
            cta="Contactar soporte"
            href="#"
          />
        </div>
      </section>

      {/* Learn */}
      <section id="learn" className="relative py-16 lg:py-24 px-6 scroll-mt-28">
        <SectionHeading
          badge="Aprende"
          title="Aprende"
          subtitle="Formación gratuita y recursos educativos para crecer en Meta Ads."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <LearnCard
            icon={BookOpen}
            title="Blog"
            description="Artículos semanales sobre Meta Ads, inteligencia artificial, growth marketing y estrategias de escalado. Escrito por expertos que gestionan millones en ad spend."
            stats="50+ artículos"
            cta="Leer blog"
          />
          <LearnCard
            icon={Video}
            title="Webinars"
            description="Sesiones en vivo y grabadas con expertos de la industria. Aprende tácticas avanzadas, estudios de caso reales y las últimas actualizaciones de Meta Ads."
            stats="2 webinars / mes"
            cta="Ver webinars"
          />
          <LearnCard
            icon={GraduationCap}
            title="Academy"
            description="Cursos gratuitos y certificaciones oficiales de Curbe. Desde fundamentos de Meta Ads hasta estrategias avanzadas de IA aplicada a la publicidad digital."
            stats="5 cursos"
            cta="Explorar cursos"
          />
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="relative py-16 lg:py-24 px-6 scroll-mt-28">
        <SectionHeading
          badge="Herramientas"
          title="Herramientas gratuitas"
          subtitle="Calculadoras, plantillas y recursos prácticos para tus campañas."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToolCard
            icon={Calculator}
            title="ROAS Calculator"
            description="Calcula tu retorno de inversión potencial con diferentes presupuestos, CPCs estimados, tasas de conversión y escenarios. Toma decisiones basadas en datos antes de invertir."
            cta="Calcular ROAS"
          />
          <ToolCard
            icon={FileText}
            title="Ad Templates"
            description="Plantillas listas para usar de copy y creatividades probadas por nuestro equipo. Formatos optimizados para Meta: imágenes, carruseles, videos y colecciones."
            cta="Ver plantillas"
          />
          <ToolCard
            icon={PenTool}
            title="API Docs"
            description="Documentación técnica completa para desarrolladores que quieren integrar Curbe en sus flujos de trabajo. REST API, webhooks, SDKs y guías de autenticación."
            cta="Ver docs"
          />
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="relative py-16 lg:py-24 px-6 scroll-mt-28">
        <SectionHeading
          badge="Partners"
          title="Ecosistema de Partners"
          subtitle="Crece con nosotros y ofrece más valor a tus clientes."
        />
        <div className="max-w-3xl mx-auto">
          <div className="glass-card-light rounded-3xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Partner Program
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Únete a nuestro ecosistema de partners y escala tu negocio. Somos el aliado
                  tecnológico que necesitan agencias, consultores y freelancers para gestionar
                  Meta Ads de forma más inteligente y rentable.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Comisiones recurrentes</p>
                      <p className="text-xs text-slate-500">Gana un % de cada cliente que refieras</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Dashboard multi-cliente</p>
                      <p className="text-xs text-slate-500">Gestiona todas tus cuentas desde un solo lugar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Soporte prioritario</p>
                      <p className="text-xs text-slate-500">Acceso directo al equipo de Curbe para partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Co-marketing</p>
                      <p className="text-xs text-slate-500">Recursos, webinars y eventos compartidos</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25">
                  Aplicar como partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card-light rounded-3xl p-8 lg:p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mb-5 mx-auto shadow-lg shadow-emerald-500/20">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
              Nuestro equipo está disponible para resolver tus dudas.
              Escríbenos y te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support@curbe.io"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:border-blue-300 hover:text-blue-700 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                support@curbe.io
              </a>
              <span className="text-slate-400 text-sm font-medium">(844) CURBE-IO</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SupportCard({
  icon: Icon,
  title,
  description,
  cta,
  href,
}: {
  icon: typeof HelpCircle;
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-on-scroll glass-card-light rounded-3xl p-7 lg:p-8 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6 flex-1">{description}</p>
      <a
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
      >
        {cta}
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}

function LearnCard({
  icon: Icon,
  title,
  description,
  stats,
  cta,
}: {
  icon: typeof BookOpen;
  title: string;
  description: string;
  stats: string;
  cta: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-on-scroll glass-card-light rounded-3xl p-7 lg:p-8 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-lg shadow-purple-500/20">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/60">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stats}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors cursor-pointer group">
          {cta}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}

function ToolCard({
  icon: Icon,
  title,
  description,
  cta,
}: {
  icon: typeof Calculator;
  title: string;
  description: string;
  cta: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-on-scroll glass-card-light rounded-3xl p-7 lg:p-8 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/20">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6 flex-1">{description}</p>
      <Button
        variant="outline"
        className="w-full border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
      >
        {cta}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
