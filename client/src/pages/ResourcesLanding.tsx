import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Headphones, BookOpen, Video, GraduationCap, Calculator, FileText, PenTool, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

const resources = [
  { slug: "help-center", icon: HelpCircle, i18nKey: "nav.resourcesMenu.helpCenter", description: "Guías paso a paso, tutoriales y preguntas frecuentes." },
  { slug: "contact-support", icon: Headphones, i18nKey: "nav.resourcesMenu.contactSupport", description: "Soporte en vivo por chat, email y videollamada." },
  { slug: "blog", icon: BookOpen, i18nKey: "nav.resourcesMenu.blog", description: "Tips, guías y noticias de Meta Ads e IA." },
  { slug: "webinars", icon: Video, i18nKey: "nav.resourcesMenu.webinars", description: "Sesiones en vivo y bajo demanda con expertos." },
  { slug: "academy", icon: GraduationCap, i18nKey: "nav.resourcesMenu.academy", description: "Cursos gratuitos y certificaciones oficiales." },
  { slug: "roas-calculator", icon: Calculator, i18nKey: "nav.resourcesMenu.roiCalculator", description: "Calcula el retorno potencial de tus campañas." },
  { slug: "templates", icon: FileText, i18nKey: "nav.resourcesMenu.templates", description: "Plantillas de copy, imágenes y videos listas para usar." },
  { slug: "api-docs", icon: PenTool, i18nKey: "nav.resourcesMenu.apiDocs", description: "Documentación REST API, webhooks y SDKs." },
  { slug: "partner-program", icon: Handshake, i18nKey: "nav.resourcesMenu.partnerProgram", description: "Comisiones recurrentes por referidos y co-marketing." },
];

export default function ResourcesLanding() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <section className="relative px-5 sm:px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            RECURSOS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Todo lo que necesitas para dominar Meta Ads
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guías, herramientas, formación y soporte en un solo lugar para que saques el máximo provecho de Curbe.
          </p>
        </div>
      </section>

      <section className="relative px-5 sm:px-6 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="glass-card-light rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl grid place-items-center shrink-0 bg-blue-50 border border-blue-200">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t(resource.i18nKey)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{resource.description}</p>
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
            ¿Listo para empezar?
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
