import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Image, Video, Mic, Film, Brain, Rocket, ShieldCheck, FileText, Zap, Target, Users, Database, Layers, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const productFeatures = [
  { slug: "ai-copy", icon: Sparkles, i18nKey: "nav.productMenu.aiCopy", description: "Genera copies persuasivos con IA. 50+ variantes en segundos." },
  { slug: "ai-images", icon: Image, i18nKey: "nav.productMenu.aiImages", description: "Imágenes profesionales sin diseñador ni stock photos." },
  { slug: "ai-videos", icon: Video, i18nKey: "nav.productMenu.aiVideos", description: "Videos publicitarios generados por IA multi-modal." },
  { slug: "ai-audio", icon: Mic, i18nKey: "nav.productMenu.aiAudio", description: "Audio profesional con ElevenLabs integrado." },
  { slug: "video-editor", icon: Film, i18nKey: "nav.productMenu.videoEditor", description: "Editor de video estilo CapCut integrado." },
  { slug: "brand-dna", icon: Brain, i18nKey: "nav.productMenu.brandDNA", description: "Codifica la voz y estilo de tu marca en IA." },
  { slug: "smart-launch", icon: Rocket, i18nKey: "nav.productMenu.smartLaunch", description: "Lanza campañas en 5 minutos con asistente guiado." },
  { slug: "special-categories", icon: ShieldCheck, i18nKey: "nav.productMenu.specialCategories", description: "Compliance automático para Categorías Especiales." },
  { slug: "instant-forms", icon: FileText, i18nKey: "nav.productMenu.instantForms", description: "Meta Instant Forms optimizados con IA." },
  { slug: "neural-optimizer", icon: Zap, i18nKey: "nav.productMenu.neuralOptimizer", description: "Optimización 24/7 de presupuesto y ROAS." },
  { slug: "campaign-manager", icon: Target, i18nKey: "nav.productMenu.campaignManager", description: "Gestión jerárquica de campañas en tiempo real." },
  { slug: "auto-fix", icon: ShieldCheck, i18nKey: "nav.productMenu.autoFix", description: "Recupera el 95% de anuncios rechazados." },
  { slug: "lead-manager", icon: Users, i18nKey: "nav.productMenu.leadManager", description: "CRM integrado para leads de Meta Ads." },
  { slug: "conversions-api", icon: Database, i18nKey: "nav.productMenu.conversionsAPI", description: "Conversions API sin desarrolladores." },
  { slug: "audiences", icon: Layers, i18nKey: "nav.productMenu.audiences", description: "Audiencias Lookalike y retargeting inteligente." },
  { slug: "analytics", icon: BarChart3, i18nKey: "nav.productMenu.analytics", description: "Analytics avanzado en tiempo real." },
];

export default function ProductLanding() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <section className="relative px-5 sm:px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            PLATAFORMA
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            La plataforma completa de IA para Meta Ads
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde la creación de creatividades hasta la optimización 24/7, Curbe automatiza cada paso de tus campañas publicitarias.
          </p>
        </div>
      </section>

      <section className="relative px-5 sm:px-6 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <a
                key={feature.slug}
                href={`/product/${feature.slug}`}
                className="glass-card-light rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl grid place-items-center shrink-0 bg-blue-50 border border-blue-200">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t(feature.i18nKey)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                <span className="text-xs font-medium text-blue-600 flex items-center gap-1 mt-auto">
                  Explorar <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="relative px-5 sm:px-6 py-8 lg:py-16 mb-12">
        <div className="max-w-4xl mx-auto text-center glass-card-light rounded-3xl p-10 lg:p-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Empieza a usar Curbe hoy
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.curbe.io/signup">
              <Button size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base">
                Empezar gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <span className="text-sm text-gray-500">Sin tarjeta de crédito · Cancela cuando quieras</span>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
