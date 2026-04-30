import { Play } from "lucide-react";
import { GlowingButton } from "@/components/common/GlowingButton";
import { DemoForm } from "@/components/forms/DemoForm";
import { useState } from "react";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#239DFF]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4A3DFF]/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
              <span className="bg-gradient-to-r from-[#239DFF] to-[#4A3DFF] text-transparent bg-clip-text">
                Agente de IA
              </span>
              <br />
              <span className="text-foreground">
                Telefónico para
              </span>
              <br />
              <span className="text-foreground">
                Ventas y Atención
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-hero-subtitle">
              Automatiza tus llamadas de ventas y atención al cliente con inteligencia artificial avanzada. 
              Disponible 24/7, responde en segundos y cierra más ventas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GlowingButton size="lg" onClick={() => setDemoFormOpen(true)} data-testid="button-start-free">
                Comenzar Gratis
              </GlowingButton>
              <GlowingButton variant="outline" size="lg" onClick={() => setDemoFormOpen(true)} data-testid="button-schedule-demo">
                Agendar Demo
              </GlowingButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8" data-testid="stats-container">
              <div>
                <div className="text-3xl font-bold text-[#239DFF]" data-testid="stat-calls">10M+</div>
                <div className="text-sm text-muted-foreground">Llamadas procesadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#239DFF]" data-testid="stat-satisfaction">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#239DFF]" data-testid="stat-response">2s</div>
                <div className="text-sm text-muted-foreground">Tiempo de respuesta</div>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative" data-testid="video-container">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border shadow-2xl">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative group"
                    data-testid="button-play-video"
                  >
                    <div className="glowing-box-active relative">
                      <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#239DFF] to-[#4A3DFF] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                      </div>
                      <div className="glowing-box pointer-events-none">
                        <div className="glowing-box-animations">
                          <div className="glowing-box-glow"></div>
                        </div>
                        <div className="glowing-box-borders-masker">
                          <div className="glowing-box-borders"></div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <p className="text-white">Video Demo</p>
                </div>
              )}
              
              {/* Placeholder image/gradient when video not playing */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 -z-10">
                  <div className="w-full h-full bg-gradient-to-br from-[#239DFF]/20 to-[#4A3DFF]/20"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />
    </section>
  );
}
