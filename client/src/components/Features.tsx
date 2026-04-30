import { FileText, DollarSign, Users, RefreshCw, Plug, BarChart2, Calendar, Bell } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-features">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 lg:mb-6" data-testid="text-features-title">
            {t('features.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4" data-testid="text-features-subtitle">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-auto">
          
          {/* Feature 1 - Policy Management (Large) */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-feature-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-feature-title-0">
                      {t('features.policies.title')}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6" data-testid="text-feature-description-0">
                      {t('features.policies.description')}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.health')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.life')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.medicare')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.medicaid')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.dental')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.vision')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.supplementary')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.finalExpense')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.annuities')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.private')}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('features.policies.types.travel')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          {/* Feature 2 - Sales Pipeline */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500" data-testid="card-feature-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <BarChart2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-1">
                  {t('features.pipeline.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-1">
                  {t('features.pipeline.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Commissions */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-feature-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-2">
                  {t('features.commissions.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-2">
                  {t('features.commissions.description')}
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          </div>

          {/* Feature 4 - Client Management */}
          <div className="md:col-span-8 md:row-span-1 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-primary/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500" data-testid="card-feature-3">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-3">
                  {t('features.clients.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-3">
                  {t('features.clients.description')}
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

          {/* Feature 5 - Renewals */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-feature-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-4">
                  {t('features.renewals.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-4">
                  {t('features.renewals.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 6 - Integrations */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500" data-testid="card-feature-5">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Plug className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-5">
                  {t('features.integrations.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-5">
                  {t('features.integrations.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 7 - Calendar */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-feature-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-6">
                  {t('features.calendarFeature.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-6">
                  {t('features.calendarFeature.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 8 - Smart Alerts */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-primary/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500" data-testid="card-feature-7">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="text-feature-title-7">
                  {t('features.alerts.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-7">
                  {t('features.alerts.description')}
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
