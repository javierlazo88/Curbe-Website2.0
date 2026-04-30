import { DemoForm } from "@/components/forms/DemoForm";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function CalendarSection() {
  const { t } = useTranslation();
  const [demoFormOpen, setDemoFormOpen] = useState(false);
  
  return (
    <section id="calendar" className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-calendar">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 lg:mb-6" data-testid="text-calendar-title">
            {t('calendar.title')}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('calendar.titleHighlight')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4" data-testid="text-calendar-subtitle">
            {t('calendar.subtitle')}
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                {t('calendar.noCreditCard')}
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('calendar.cardTitle')}
              </h3>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                {t('calendar.cardSubtitle')}
              </p>
              
              <Button
                asChild
                size="lg"
                className="group/btn bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                data-testid="button-register-calendar"
              >
                <a href="https://app.curbe.io/signup" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  {t('calendar.cta')}
                </a>
              </Button>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{t('calendar.trust.free')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{t('calendar.trust.noCommitment')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{t('calendar.trust.spanishSupport')}</span>
                </div>
              </div>
            </div>

            {/* Right side - Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Feature 1 */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 flex items-start gap-3" data-testid="calendar-placeholder">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{t('calendar.features.setup.title')}</h4>
                  <p className="text-xs text-muted-foreground">{t('calendar.features.setup.description')}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 flex items-start gap-3">
                <Video className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{t('calendar.features.demo.title')}</h4>
                  <p className="text-xs text-muted-foreground">{t('calendar.features.demo.description')}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm border border-accent/20 p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{t('calendar.features.allIncluded.title')}</h4>
                  <p className="text-xs text-muted-foreground">{t('calendar.features.allIncluded.description')}</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/20 p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 flex items-start gap-3">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{t('calendar.features.support.title')}</h4>
                  <p className="text-xs text-muted-foreground">{t('calendar.features.support.description')}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Decorative orbs */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute -left-12 -top-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
        </div>

        <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />

      </div>
    </section>
  );
}
