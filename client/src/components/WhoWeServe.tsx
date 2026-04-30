import { Building2, User, CheckCircle2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhoWeServe() {
  const { t } = useTranslation();

  const agenciesFeatures = [
    t('whoWeServe.agencies.features.permissions'),
    t('whoWeServe.agencies.features.collaboration'),
    t('whoWeServe.agencies.features.commissions'),
    t('whoWeServe.agencies.features.search')
  ];

  const agentsFeatures = [
    t('whoWeServe.agents.features.organize'),
    t('whoWeServe.agents.features.tracking'),
    t('whoWeServe.agents.features.birthday'),
    t('whoWeServe.agents.features.consent')
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-who-we-serve">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('whoWeServe.sectionTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 lg:mb-6" data-testid="text-who-we-serve-title">
            {t('whoWeServe.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('whoWeServe.titleHighlight')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4" data-testid="text-who-we-serve-subtitle">
            {t('whoWeServe.subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card 1 - Agencies */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-agencies">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3" data-testid="text-agencies-title">
                    {t('whoWeServe.agencies.title')}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid="text-agencies-description">
                    {t('whoWeServe.agencies.description')}
                  </p>
                </div>
              </div>

              {/* Feature list */}
              <ul className="space-y-3">
                {agenciesFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          {/* Card 2 - Independent Agents */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500" data-testid="card-agents">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3" data-testid="text-agents-title">
                    {t('whoWeServe.agents.title')}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid="text-agents-description">
                    {t('whoWeServe.agents.description')}
                  </p>
                </div>
              </div>

              {/* Feature list */}
              <ul className="space-y-3">
                {agentsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
