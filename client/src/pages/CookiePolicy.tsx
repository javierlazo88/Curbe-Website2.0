import { Cookie } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { useTranslation } from "react-i18next";

export default function CookiePolicy() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen text-gray-900 antialiased relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #fde68a 0%, #fdba74 15%, #fca5a5 30%, #c4b5fd 50%, #93c5fd 70%, #60a5fa 85%, #3b82f6 100%)' }} />
        <div className="animate-blob-1" style={{ position:'absolute', top:'-10%', left:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)' }} />
        <div className="animate-blob-2" style={{ position:'absolute', bottom:'-10%', right:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(96,165,250,0.5) 35%, transparent 65%)' }} />
        <div className="animate-blob-3" style={{ position:'absolute', top:'40%', left:'20%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(244,114,182,0.4) 0%, rgba(232,121,249,0.25) 40%, transparent 70%)' }} />
        <div className="animate-blob-4" style={{ position:'absolute', top:'10%', right:'10%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.3) 35%, transparent 65%)' }} />
      </div>
      <MegaHeader onTalkToSales={() => {}} />
      <main className="relative pt-24 sm:pt-32 pb-12 lg:pb-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/5 mb-6">
              <Cookie className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">LEGAL</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="text-gradient-flow">
                {t('legal.cookies.title')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {t('legal.cookies.lastUpdated')}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-6 sm:space-y-8">
            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">¿Qué son las Cookies?</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a mejorar su experiencia, recordar sus preferencias y analizar cómo se utiliza nuestro servicio.
              </p>
            </section>

            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">1. Cookies Esenciales</h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    Necesarias para el funcionamiento básico del sitio web. Permiten la navegación y el uso de funciones esenciales como el acceso a áreas seguras.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">2. Cookies de Rendimiento</h3>
                  <p className="text-gray-600">
                    Recopilan información sobre cómo los visitantes utilizan nuestro sitio web, como qué páginas visitan con más frecuencia. Esto nos ayuda a mejorar el funcionamiento del sitio.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">3. Cookies de Funcionalidad</h3>
                  <p className="text-gray-600">
                    Permiten que el sitio web recuerde sus elecciones (como su idioma preferido) y proporcione características mejoradas y más personales.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">4. Cookies de Publicidad</h3>
                  <p className="text-gray-600">
                    Se utilizan para mostrar anuncios relevantes para usted. También limitan el número de veces que ve un anuncio y ayudan a medir la efectividad de las campañas publicitarias.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cookies de Terceros</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos servicios de terceros que también pueden establecer cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
                <li><strong>Google Tag Manager:</strong> Para gestionar etiquetas de seguimiento</li>
                <li><strong>Facebook Pixel:</strong> Para medir la efectividad de la publicidad</li>
              </ul>
            </section>

            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Gestión de Cookies</h2>
              <p className="text-gray-600 mb-4">
                Puede controlar y/o eliminar las cookies según desee. Para más información, visite{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  aboutcookies.org
                </a>
              </p>
              <p className="text-gray-600 mb-4">
                Puede eliminar todas las cookies que ya están en su dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio.
              </p>
            </section>

            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Cómo Deshabilitar Cookies por Navegador</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
              </ul>
            </section>

            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Consentimiento</h2>
              <p className="text-gray-600">
                Al continuar utilizando nuestro sitio web, usted acepta el uso de cookies según se describe en esta política. Puede retirar su consentimiento en cualquier momento cambiando la configuración de su navegador.
              </p>
            </section>

            <section className="rounded-3xl bg-white/60 backdrop-blur-xl border border-black/5 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-600">
                Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos en:{" "}
                <a href="mailto:hello@curbe.io" className="text-blue-600 hover:underline">
                  hello@curbe.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
