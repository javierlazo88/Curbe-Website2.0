import { MessageSquare, Clock, Shield, TrendingUp, Headphones, Zap, BarChart3, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function BenefitsSection() {
  const { t } = useTranslation();

  return (
    <section id="comunicacion" className="relative py-20 lg:py-32 overflow-hidden" data-testid="benefits-section">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Side Description */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 lg:mb-6" data-testid="benefits-title">
              {t('benefits.title')}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('benefits.titleHighlight')}
              </span>
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" data-testid="benefits-subtitle">
              {t('benefits.subtitle')}
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-auto">
          
          {/* Feature 1 - Large Highlight */}
          <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4" data-testid="benefit-title-0">
                      {t('benefits.unified.title')}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" data-testid="benefit-description-0">
                      {t('benefits.unified.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.policies')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.quotes')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.leads')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.contacts')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.tasks')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.reminders')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.calendar')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.referrals')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.campaigns')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.imessage.title')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.whatsapp.title')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.sms.title')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.email.title')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.landingPages.title')}</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{t('benefits.signatures.title')}</span>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>

          {/* Feature 2 - Security 24/7 */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="benefit-title-1">
                  {t('benefits.security.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="benefit-description-1">
                  {t('benefits.security.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Support */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="benefit-title-2">
                  {t('benefits.support.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="benefit-description-2">
                  {t('benefits.support.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 - Automation */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-primary/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="benefit-title-3">
                  {t('benefits.automation.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="benefit-description-3">
                  {t('benefits.automation.description')}
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          </div>

          {/* Feature 5 - Time Optimization */}
          <div className="md:col-span-7 md:row-span-1 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="benefit-title-4">
                  {t('benefits.time.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="benefit-description-4">
                  {t('benefits.time.description')}
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          {/* Feature 6 - Team Management */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="benefit-title-5">
                  {t('benefits.teams.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="benefit-description-5">
                  {t('benefits.teams.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Feature 7 - Analytics */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2" data-testid="benefit-title-6">
                  {t('benefits.analytics.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="benefit-description-6">
                  {t('benefits.analytics.description')}
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
