import { useParams, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const slugToI18nKey: Record<string, string> = {
  "help-center": "resourcePages.helpCenter",
  "contact-support": "resourcePages.contactSupport",
  "blog": "resourcePages.blog",
  "webinars": "resourcePages.webinars",
  "academy": "resourcePages.academy",
  "roas-calculator": "resourcePages.roasCalculator",
  "templates": "resourcePages.templates",
  "api-docs": "resourcePages.apiDocs",
  "partner-program": "resourcePages.partnerProgram",
};

export default function ResourcesTopicPage() {
  const params = useParams<{ resource: string }>();
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const i18nKey = slugToI18nKey[params.resource || ""];

  useEffect(() => {
    if (!i18nKey) {
      setLocation("/resources");
    }
  }, [i18nKey, setLocation]);

  if (!i18nKey) return null;

  const heroBadge = t(`${i18nKey}.heroBadge`);
  const heroTitle = t(`${i18nKey}.heroTitle`);
  const heroDescription = t(`${i18nKey}.heroDescription`);
  const features = t(`${i18nKey}.features`, { returnObjects: true }) as Array<{ title: string; description: string }>;
  const benefits = t(`${i18nKey}.benefits`, { returnObjects: true }) as string[];
  const ctaTitle = t(`${i18nKey}.ctaTitle`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.resource]);

  return (
    <PageWrapper>
      <section className="relative px-5 sm:px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            {heroBadge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            {heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      <section className="relative px-5 sm:px-6 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(features) && features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-light rounded-3xl p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center shrink-0 bg-blue-50 border border-blue-200">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-snug">{feature.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {Array.isArray(benefits) && benefits.length > 0 && (
        <section className="relative px-5 sm:px-6 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 border border-green-200 grid place-items-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-[15px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="relative px-5 sm:px-6 py-8 lg:py-16 mb-12">
        <div className="max-w-4xl mx-auto text-center glass-card-light rounded-3xl p-10 lg:p-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.curbe.io/signup">
              <Button size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base">
                Get started free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <span className="text-sm text-gray-500">No credit card · Cancel anytime</span>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
