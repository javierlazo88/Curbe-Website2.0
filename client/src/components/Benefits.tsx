import { Rocket, Target, Zap, TrendingUp, Sparkles, Award, Shield, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Benefits() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Why Choose Curbe Section */}
      <section id="benefits" className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-benefits">
        
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6" data-testid="text-benefits-title">
              {t('whyChoose.title')}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('whyChoose.titleHighlight')}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
              {t('whyChoose.subtitle')}
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
            
            {/* Benefit 1 - Fast Growth */}
            <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-benefit-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4" data-testid="text-benefit-title-0">
                        {t('whyChoose.benefit1.title')}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-benefit-description-0">
                        {t('whyChoose.benefit1.description')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-4xl font-bold text-primary">{t('whyChoose.benefit1.stat')}</div>
                  <div className="text-sm text-muted-foreground">{t('whyChoose.benefit1.statLabel')}</div>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            {/* Benefit 2 - Better Results */}
            <div className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 hover:border-accent/40 transition-all duration-500" data-testid="card-benefit-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-benefit-title-1">
                    {t('whyChoose.benefit2.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-benefit-description-1">
                    {t('whyChoose.benefit2.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 - Zero Learning Curve */}
            <div className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 hover:border-primary/40 transition-all duration-500" data-testid="card-benefit-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-benefit-title-2">
                    {t('whyChoose.benefit3.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-benefit-description-2">
                    {t('whyChoose.benefit3.description')}
                  </p>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </div>

            {/* Benefit 4 - ROI Visible */}
            <div className="md:col-span-7 md:row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 via-primary/5 to-transparent backdrop-blur-xl border border-accent/20 p-6 hover:border-accent/40 transition-all duration-500" data-testid="card-benefit-3">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-benefit-title-3">
                    {t('whyChoose.benefit4.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-benefit-description-3">
                    {t('whyChoose.benefit4.description')}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            {/* Benefit 5 - Trusted */}
            <div className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 hover:border-primary/40 transition-all duration-500" data-testid="card-benefit-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-benefit-title-4">
                    {t('whyChoose.benefit5.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-benefit-description-4">
                    {t('whyChoose.benefit5.description')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-how-it-works">
        
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6" data-testid="text-how-it-works-title">
              {t('howItWorks.title')}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('howItWorks.titleHighlight')}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-subtitle">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-step-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  01
                </div>
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-step-title-0">
                  {t('howItWorks.step1.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-step-description-0">
                  {t('howItWorks.step1.description')}
                </p>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </div>

            {/* Step 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent backdrop-blur-xl border border-accent/20 p-8 hover:border-accent/40 transition-all duration-500" data-testid="card-step-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  02
                </div>
                <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-step-title-1">
                  {t('howItWorks.step2.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-step-description-1">
                  {t('howItWorks.step2.description')}
                </p>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            </div>

            {/* Step 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500" data-testid="card-step-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  03
                </div>
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-step-title-2">
                  {t('howItWorks.step3.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-step-description-2">
                  {t('howItWorks.step3.description')}
                </p>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="https://app.curbe.io/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25"
              data-testid="button-cta-start"
            >
              <Sparkles className="w-5 h-5" />
              {t('howItWorks.cta')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
