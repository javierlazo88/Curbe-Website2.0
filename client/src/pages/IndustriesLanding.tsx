import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, ShoppingCart, Building2, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const industries = [
  { slug: "agencies", icon: Store, i18nKey: "nav.industriesMenu.agencies", description: "Gestiona 10 cuentas en el tiempo de 3. Creatividades IA, reportes y optimización 24/7." },
  { slug: "ecommerce", icon: ShoppingCart, i18nKey: "nav.industriesMenu.ecommerce", description: "Test masivo de creativos, catálogo dinámico y ROAS duplicado con IA." },
  { slug: "leadgen", icon: Building2, i18nKey: "nav.industriesMenu.leadGen", description: "Captura, califica y convierte leads con nurturing automático 24/7." },
  { slug: "mediabuyers", icon: TrendingUp, i18nKey: "nav.industriesMenu.mediaBuyers", description: "Co-piloto IA que monitorea, optimiza y recupera anuncios rechazados." },
];

export default function IndustriesLanding() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <section className="relative px-5 sm:px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            INDUSTRIAS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            Soluciones de IA para cada industria
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Curbe se adapta a las necesidades específicas de tu sector. Descubre cómo la IA potencia los resultados en tu industria.
          </p>
        </div>
      </section>

      <section className="relative px-5 sm:px-6 py-8 lg:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <a
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="glass-card-light rounded-3xl p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl grid place-items-center shrink-0 bg-blue-50 border border-blue-200">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {t(industry.i18nKey)}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{industry.description}</p>
                </div>
                <span className="text-sm font-medium text-blue-600 flex items-center gap-1 mt-auto">
                  Ver solución <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="relative px-5 sm:px-6 py-8 lg:py-16 mb-12">
        <div className="max-w-4xl mx-auto text-center glass-card-light rounded-3xl p-10 lg:p-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Encuentra la solución para tu industria
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
