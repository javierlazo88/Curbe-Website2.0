import { useState, useRef, useEffect } from "react";
import { Check, X, ChevronDown, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

/* ─── CREDIT OPTIONS ─────────────────────────────────────── */

interface CreditOption {
  label: string;
  monthly: number;
  annual: number;
}

/* ─── PLANS ──────────────────────────────────────────────── */

const PLANS = [
  {
    key: "hobby" as const,
    nameEs: "Starter",
    nameEn: "Starter",
    descEs: "Para marcas que empiezan a lanzar ads con IA",
    descEn: "For brands just getting started with AI ads",
    baseMonthly: 49,
    baseAnnual: 39,
    creditOptions: null as CreditOption[] | null,
    popular: false,
  },
  {
    key: "pro" as const,
    nameEs: "Growth",
    nameEn: "Growth",
    descEs: "Para marcas que escalan sus campañas activamente",
    descEn: "For brands actively scaling their campaigns",
    baseMonthly: 129,
    baseAnnual: 103,
    creditOptions: [
      { label: "500 AI credits",    monthly: 129,  annual: 103  },
      { label: "1,000 AI credits",  monthly: 249,  annual: 199  },
      { label: "2,000 AI credits",  monthly: 399,  annual: 319  },
      { label: "5,000 AI credits",  monthly: 499,  annual: 399  },
      { label: "10,000 AI credits", monthly: 999,  annual: 799  },
    ] as CreditOption[],
    popular: true,
  },
  {
    key: "ultra" as const,
    nameEs: "Agency",
    nameEn: "Agency",
    descEs: "Para agencias que gestionan múltiples clientes",
    descEn: "For agencies managing multiple clients",
    baseMonthly: 499,
    baseAnnual: 399,
    creditOptions: [
      { label: "2,000 AI credits",  monthly: 499,  annual: 399  },
      { label: "5,000 AI credits",  monthly: 699,  annual: 559  },
      { label: "10,000 AI credits", monthly: 999,  annual: 799  },
      { label: "20,000 AI credits", monthly: 1899, annual: 1519 },
      { label: "30,000 AI credits", monthly: 2699, annual: 2159 },
    ] as CreditOption[],
    popular: false,
  },
];

/* ─── CARD FEATURES ──────────────────────────────────────── */

interface CardFeature {
  labelEn: string;
  labelEs: string;
  hobby: boolean | string;
  pro: boolean | string;
  ultra: boolean | string;
}

const CARD_FEATURES: CardFeature[] = [
  { labelEn: "AI Video Ads",              labelEs: "AI Video Ads",                    hobby: true,       pro: true,         ultra: true         },
  { labelEn: "AI Image Ads",              labelEs: "AI Image Ads",                    hobby: true,       pro: true,         ultra: true         },
  { labelEn: "AI UGC Avatars",            labelEs: "AI UGC Avatars",                  hobby: true,       pro: true,         ultra: true         },
  { labelEn: "Team Members",              labelEs: "Miembros de equipo",              hobby: "1",        pro: "2",          ultra: "10"         },
  { labelEn: "Ad Accounts",               labelEs: "Cuentas publicitarias",           hobby: "1",        pro: "2",          ultra: "15"         },
  { labelEn: "Unlimited Imports",         labelEs: "Importaciones ilimitadas",        hobby: true,       pro: true,         ultra: true         },
  { labelEn: "Unlimited Launches",        labelEs: "Lanzamientos ilimitados",         hobby: true,       pro: true,         ultra: true         },
  { labelEn: "Data Sync",                 labelEs: "Sincronización de datos",         hobby: "Every 6h", pro: "Every 3h",   ultra: "Every 30m"  },
  { labelEn: "AI Insights",               labelEs: "AI Insights",                     hobby: "Basic",    pro: "Full (14+)", ultra: "Full (14+)" },
  { labelEn: "Custom AI Avatars",         labelEs: "Avatares de IA personalizados",   hobby: false,      pro: true,         ultra: true         },
  { labelEn: "Ad Clone",                  labelEs: "Ad Clone",                        hobby: false,      pro: true,         ultra: true         },
  { labelEn: "Competitor Ad Clone",       labelEs: "Competitor Ad Clone",             hobby: false,      pro: true,         ultra: true         },
  { labelEn: "Text to Video",             labelEs: "Text to Video",                   hobby: false,      pro: true,         ultra: true         },
  { labelEn: "AI Video Editor",           labelEs: "AI Video Editor",                 hobby: false,      pro: true,         ultra: true         },
  { labelEn: "AI Actor + Product",        labelEs: "AI Actor + Product",              hobby: false,      pro: true,         ultra: true         },
  { labelEn: "Top Ads",                   labelEs: "Top Ads",                         hobby: false,      pro: true,         ultra: true         },
  { labelEn: "AI Combos",                 labelEs: "AI Combos",                       hobby: false,      pro: true,         ultra: true         },
  { labelEn: "Bulk Ad Launch",            labelEs: "Lanzamiento masivo de Ads",       hobby: false,      pro: false,        ultra: true         },
  { labelEn: "Multi-brand Management",    labelEs: "Gestión multi-marca",             hobby: false,      pro: false,        ultra: true         },
  { labelEn: "White-label Reports",       labelEs: "Reportes con marca blanca",       hobby: false,      pro: false,        ultra: true         },
  { labelEn: "API Access",                labelEs: "Acceso a API",                    hobby: false,      pro: false,        ultra: true         },
  { labelEn: "Dedicated Account Manager", labelEs: "Account Manager dedicado",        hobby: false,      pro: false,        ultra: true         },
  { labelEn: "Priority Support",          labelEs: "Soporte prioritario",             hobby: false,      pro: false,        ultra: true         },
];

/* ─── COMPARE TABLE ──────────────────────────────────────── */

interface CompareRow {
  label: string;
  labelEs?: string;
  hobby: boolean | string;
  pro: boolean | string;
  ultra: boolean | string;
}
interface CompareCategory { titleEn: string; titleEs: string; rows: CompareRow[] }

const COMPARE_CATEGORIES: CompareCategory[] = [
  {
    titleEn: "Creative & Ads", titleEs: "Creativos y Anuncios",
    rows: [
      { label: "AI Video Ads",        hobby: true,  pro: true,  ultra: true  },
      { label: "AI Image Ads",        hobby: true,  pro: true,  ultra: true  },
      { label: "AI UGC Avatars",      hobby: true,  pro: true,  ultra: true  },
      { label: "Custom AI Avatars",   hobby: false, pro: true,  ultra: true  },
      { label: "Ad Clone",            hobby: false, pro: true,  ultra: true  },
      { label: "Competitor Ad Clone", hobby: false, pro: true,  ultra: true  },
      { label: "Text to Video",       hobby: false, pro: true,  ultra: true  },
      { label: "AI Video Editor",     hobby: false, pro: true,  ultra: true  },
      { label: "AI Actor + Product",  hobby: false, pro: true,  ultra: true  },
      { label: "Bulk Ad Launch", labelEs: "Lanzamiento masivo", hobby: false, pro: false, ultra: true },
    ],
  },
  {
    titleEn: "Team & Platform", titleEs: "Equipo y Plataforma",
    rows: [
      { label: "Team Members",        labelEs: "Miembros",              hobby: "1",         pro: "2",          ultra: "10"        },
      { label: "Ad Accounts",         labelEs: "Cuentas de Ads",        hobby: "1",         pro: "2",          ultra: "15"        },
      { label: "Imports",             labelEs: "Importaciones",          hobby: "Unlimited", pro: "Unlimited",  ultra: "Unlimited" },
      { label: "Launches",            labelEs: "Lanzamientos",           hobby: "Unlimited", pro: "Unlimited",  ultra: "Unlimited" },
      { label: "Data Sync",           labelEs: "Sincronización",         hobby: "Every 6h",  pro: "Every 3h",   ultra: "Every 30m" },
      { label: "Multi-brand Mgmt",    labelEs: "Gestión multi-marca",    hobby: false,       pro: false,        ultra: true        },
      { label: "White-label Reports", labelEs: "Reportes marca blanca",  hobby: false,       pro: false,        ultra: true        },
      { label: "API Access",          labelEs: "Acceso a API",           hobby: false,       pro: false,        ultra: true        },
    ],
  },
  {
    titleEn: "AI & Analytics", titleEs: "IA y Analítica",
    rows: [
      { label: "AI Insights",  hobby: "Basic (3)",  pro: "Full (14+)", ultra: "Full (14+)" },
      { label: "Top Ads",      hobby: false,        pro: true,         ultra: true         },
      { label: "AI Combos",    hobby: false,        pro: true,         ultra: true         },
    ],
  },
  {
    titleEn: "Support", titleEs: "Soporte",
    rows: [
      { label: "Support",           labelEs: "Soporte",              hobby: "Email", pro: "Email",   ultra: "Priority" },
      { label: "Account Manager",   labelEs: "Account Manager",      hobby: false,   pro: false,     ultra: true       },
      { label: "Onboarding Session",labelEs: "Sesión de onboarding", hobby: false,   pro: false,     ultra: true       },
    ],
  },
];

/* ─── FAQ ────────────────────────────────────────────────── */

interface FaqItem { qEn: string; qEs: string; aEn: string; aEs: string }

const FAQ_ITEMS: FaqItem[] = [
  {
    qEn: "What's included in the free trial?",
    qEs: "¿Qué incluye la prueba gratuita?",
    aEn: "All plans start with a free trial that includes 200 AI credits. You get full access to all plan features so you can see how Curbe.io works for your business. Trial credits convert to plan credits when you subscribe.",
    aEs: "Todos los planes empiezan con una prueba gratuita que incluye 200 créditos de IA. Tienes acceso completo a todas las funciones del plan para ver cómo funciona Curbe.io. Los créditos de prueba se convierten en créditos del plan al suscribirte.",
  },
  {
    qEn: "What are AI Credits used for?",
    qEs: "¿Para qué sirven los créditos de IA?",
    aEn: "AI Credits power all creative generation and campaign actions, including image ads, video ads, lip-sync renders, and AI campaign launches. Credit costs vary by action.",
    aEs: "Los créditos de IA impulsan toda la generación de creatividades y acciones de campaña, incluyendo anuncios de imagen, video, renders de lip-sync y lanzamientos de campañas. El costo por acción varía.",
  },
  {
    qEn: "Can I buy more AI Credits?",
    qEs: "¿Puedo comprar más créditos de IA?",
    aEn: "Yes! Growth and Agency plans let you select a higher credit tier directly from the pricing card. Your price updates automatically based on the credits you choose.",
    aEs: "¡Sí! Los planes Growth y Agency te permiten seleccionar un nivel de créditos superior directamente en la tarjeta de precio. El precio se actualiza automáticamente según los créditos que elijas.",
  },
  {
    qEn: "Do unused credits expire?",
    qEs: "¿Los créditos no utilizados caducan?",
    aEn: "Credits expire 60 days after they're granted. Bonus credits from referrals or promotions never expire. Oldest expiring credits are always used first.",
    aEs: "Los créditos caducan 60 días después de ser otorgados. Los créditos bonus de referidos o promociones nunca caducan. Siempre se usan primero los créditos más próximos a vencer.",
  },
  {
    qEn: "Can I connect multiple ad accounts?",
    qEs: "¿Puedo conectar varias cuentas publicitarias?",
    aEn: "Yes! Starter includes 1 ad account, Growth includes 2, and Agency includes 15. You can add more accounts at any time.",
    aEs: "¡Sí! Starter incluye 1 cuenta, Growth incluye 2 y Agency incluye 15. Puedes añadir más cuentas en cualquier momento.",
  },
  {
    qEn: "Can I upgrade or downgrade anytime?",
    qEs: "¿Puedo cambiar de plan en cualquier momento?",
    aEn: "Yes! Upgrades take effect immediately with prorated billing. Downgrades are scheduled for the end of your billing period so you keep full access until then.",
    aEs: "¡Sí! Las mejoras de plan tienen efecto inmediato con facturación prorrateada. Las reducciones se programan para el final del período para mantener acceso completo.",
  },
];

/* ─── SUB-COMPONENTS ─────────────────────────────────────── */

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === false) return <X className="w-4 h-4 text-gray-300 flex-shrink-0" strokeWidth={2} />;
  return <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />;
}

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)  return <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={2.5} />;
  if (value === false) return <Minus className="w-4 h-4 text-gray-300 mx-auto" />;
  return <span className="text-sm font-medium text-gray-700">{value}</span>;
}

function FaqAccordion({ item, isEs }: { item: FaqItem; isEs: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button className="w-full flex items-center justify-between py-5 text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="text-base font-semibold text-gray-900">{isEs ? item.qEs : item.qEn}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-sm text-gray-500 leading-relaxed">{isEs ? item.aEs : item.aEn}</p>}
    </div>
  );
}

/* ─── LIGHTNING ICON ─────────────────────────────────────── */
const Lightning = () => (
  <div className="w-6 h-6 rounded-md bg-yellow-400 flex items-center justify-center flex-shrink-0">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  </div>
);

/* ─── MAIN ───────────────────────────────────────────────── */

export default function PricingSection() {
  const { i18n } = useTranslation();
  const [annual, setAnnual] = useState(false);
  const isEs = i18n.language === "es";

  const [selectedIdx, setSelectedIdx] = useState<Record<string, number>>({ pro: 0, ultra: 0 });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      {/* ── Hero ── */}
      <div className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
          {isEs
            ? <><span>Precios simples para</span><br /><span>marketers de resultados</span></>
            : <><span>Simple Pricing for</span><br /><span>Performance Marketers</span></>}
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          {isEs
            ? "Genera más creativos, prueba más variaciones y encuentra los anuncios ganadores más rápido."
            : "Generate more creatives, test more variations, and find winning ads faster."}
        </p>
        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? "bg-gray-900 text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
            data-testid="toggle-monthly"
          >
            {isEs ? "Mensual" : "Monthly"}
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${annual ? "bg-gray-900 text-white shadow" : "text-gray-500 hover:text-gray-700"}`}
            data-testid="toggle-annual"
          >
            {isEs ? "Anual" : "Annual"}
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full transition-colors ${annual ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}>
              {isEs ? "Ahorra 20%" : "Save 20%"}
            </span>
          </button>
        </div>
      </div>

      {/* ── Pricing Cards ── */}
      <div className="max-w-5xl mx-auto px-6 pb-20" ref={containerRef}>
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan) => {
            const hasOptions = !!plan.creditOptions;
            const idx = selectedIdx[plan.key] ?? 0;
            const selected = hasOptions ? plan.creditOptions![idx] : null;
            const monthlyRate = selected
              ? (annual ? selected.annual : selected.monthly)
              : (annual ? plan.baseAnnual : plan.baseMonthly);
            const displayPrice = annual ? monthlyRate * 12 : monthlyRate;
            const creditLabel = selected ? selected.label : "200 AI credits";
            const isOpen = openDropdown === plan.key;

            return (
              <div key={plan.key} className="relative flex" data-testid={`pricing-card-${plan.key}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gray-900 text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                      {isEs ? "Más Popular" : "Most Popular"}
                    </div>
                  </div>
                )}
                <div className={`bg-white rounded-2xl p-7 flex flex-col gap-5 w-full ${plan.popular ? "border-2 border-gray-900 shadow-xl" : "border border-gray-200 shadow-sm"}`}>

                  {/* Name + desc */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{isEs ? plan.nameEs : plan.nameEn}</h2>
                    <p className="text-sm text-gray-400">{isEs ? plan.descEs : plan.descEn}</p>
                  </div>

                  {/* Price — updates with credit selection */}
                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black text-gray-900">${displayPrice.toLocaleString()}</span>
                      <span className="text-gray-400 text-base mb-1.5">{annual ? (isEs ? "/año" : "/yr") : "/mo"}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {annual
                        ? (isEs ? `$${monthlyRate}/mes · facturado anualmente` : `$${monthlyRate}/mo · billed annually`)
                        : (isEs ? "Facturado mensualmente" : "Billed monthly")}
                    </p>
                  </div>

                  {/* Credits — static chip for Starter, dropdown for Growth/Agency */}
                  <div className="relative">
                    {hasOptions ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(isOpen ? null : plan.key)}
                          className={`w-full flex items-center gap-2.5 border rounded-lg px-3.5 py-2.5 transition-colors ${isOpen ? "border-gray-900 ring-1 ring-gray-900" : "border-gray-200 hover:border-gray-300"}`}
                          data-testid={`credits-dropdown-${plan.key}`}
                        >
                          <Lightning />
                          <span className="text-sm font-medium text-gray-700 flex-1 text-left">{creditLabel}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isOpen && (
                          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                            {plan.creditOptions!.map((opt, oi) => (
                              <button
                                key={oi}
                                onClick={() => { setSelectedIdx(prev => ({ ...prev, [plan.key]: oi })); setOpenDropdown(null); }}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                data-testid={`credit-option-${plan.key}-${oi}`}
                              >
                                <Lightning />
                                <span className="text-sm text-gray-700 flex-1 text-left">{opt.label}</span>
                                {oi === idx && <Check className="w-4 h-4 text-blue-600" strokeWidth={2.5} />}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2.5 border border-gray-200 rounded-lg px-3.5 py-2.5">
                        <Lightning />
                        <span className="text-sm font-medium text-gray-700">{creditLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://app.curbe.io/signup"
                    data-testid={`cta-${plan.key}`}
                    className="block w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold py-3 rounded-lg text-center transition-colors"
                  >
                    {isEs ? "Empezar Prueba Gratis" : "Start Free Trial"}
                  </a>

                  <div className="border-t border-gray-100" />

                  {/* Feature list */}
                  <div className="flex flex-col gap-3 flex-1">
                    {CARD_FEATURES.map((feat, fi) => {
                      const val = feat[plan.key];
                      const isString = typeof val === "string";
                      const included = val !== false;
                      return (
                        <div key={fi} className="flex items-center gap-2.5">
                          <FeatureValue value={val} />
                          <span className={`text-sm flex-1 ${included ? "text-gray-700" : "text-gray-300"}`}>
                            {isEs ? feat.labelEs : feat.labelEn}
                          </span>
                          {isString && (
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md whitespace-nowrap">
                              {val}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Compare Plans Table ── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
          {isEs ? "Compara los Planes" : "Compare Plans"}
        </h2>
        <p className="text-center text-gray-400 text-sm mb-10">
          {isEs ? "Elige el plan perfecto para tus necesidades creativas" : "Choose the perfect plan for your ad creative needs"}
        </p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 border-b border-gray-100">
            <div className="p-5" />
            {PLANS.map((plan) => {
              const idx = selectedIdx[plan.key] ?? 0;
              const selected = plan.creditOptions ? plan.creditOptions[idx] : null;
              const mRate = selected ? (annual ? selected.annual : selected.monthly) : (annual ? plan.baseAnnual : plan.baseMonthly);
              const dPrice = annual ? mRate * 12 : mRate;
              return (
                <div key={plan.key} className={`p-5 text-center border-l border-gray-100 ${plan.popular ? "bg-gray-50" : ""}`}>
                  <p className="font-bold text-gray-900 text-lg">{isEs ? plan.nameEs : plan.nameEn}</p>
                  <p className="text-2xl font-black text-gray-900 mt-1">${dPrice.toLocaleString()}<span className="text-sm font-normal text-gray-400">{annual ? (isEs ? "/año" : "/yr") : "/mo"}</span></p>
                  <a href="https://app.curbe.io/signup" className="mt-3 inline-block w-full bg-gray-900 hover:bg-gray-700 text-white text-xs font-bold py-2 rounded-lg text-center transition-colors">
                    {isEs ? "Empezar Gratis" : "Start Free Trial"}
                  </a>
                </div>
              );
            })}
          </div>
          {COMPARE_CATEGORIES.map((cat) => (
            <div key={cat.titleEn}>
              <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
                <div className="col-span-4 px-5 py-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {isEs ? cat.titleEs : cat.titleEn}
                  </span>
                </div>
              </div>
              {cat.rows.map((row, ri) => (
                <div key={ri} className={`grid grid-cols-4 border-b border-gray-100 last:border-0 ${ri % 2 !== 0 ? "bg-gray-50/40" : ""}`}>
                  <div className="p-4 px-5 flex items-center">
                    <span className="text-sm text-gray-700 font-medium">{row.labelEs && isEs ? row.labelEs : row.label}</span>
                  </div>
                  {(["hobby", "pro", "ultra"] as const).map((pk) => (
                    <div key={pk} className={`p-4 flex items-center justify-center border-l border-gray-100 ${pk === "pro" ? "bg-gray-50/60" : ""}`}>
                      <CellValue value={row[pk]} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8">
          {FAQ_ITEMS.map((item, i) => <FaqAccordion key={i} item={item} isEs={isEs} />)}
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 pb-16">
        {isEs ? "¿Preguntas? Escríbenos a " : "Questions? Email us at "}
        <a href="mailto:hola@curbe.io" className="text-[#2563eb] hover:underline">hola@curbe.io</a>
      </p>

    </div>
  );
}
