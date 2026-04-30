import { Phone, PhoneOff } from "lucide-react";
import logoUrl from "@assets/scial media logo _1762997341275.png";
import verifiedBadge from "@assets/verified-badge.png";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IncomingCallNotificationProps {
  onAnswer: () => void;
  onReject: () => void;
}

export function IncomingCallNotification({ onAnswer, onReject }: IncomingCallNotificationProps) {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 horas = 12 AM
      setCurrentTime(`${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[375px] mx-auto lg:ml-auto lg:mr-0">
      {/* iPhone frame */}
      <div className="relative bg-black rounded-[3.5rem] p-3 shadow-2xl w-full max-w-[375px] h-[750px]">
        {/* iPhone screen */}
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-[3rem] overflow-hidden h-full">
          {/* Dynamic Island / Notch */}
          <div className="relative h-8 bg-black mx-auto" style={{ width: '35%', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
            {/* Camera and sensors */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 pt-2">
            <div className="text-xs font-semibold text-foreground">{currentTime}</div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

        {/* Main content area */}
        <div className="px-8 pt-12 pb-8 h-[680px] flex flex-col justify-between">
          {/* Top section - Caller info */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Avatar with breathing ring */}
            <div className="relative">
              {/* Breathing ring animation */}
              <div className="absolute inset-0 -m-2">
                <div 
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  style={{
                    animation: 'breathing 3s ease-in-out infinite'
                  }}
                ></div>
              </div>
              
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center p-4 shadow-xl border-4 border-card relative">
                <img 
                  src={logoUrl} 
                  alt="Curbe" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Caller name */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="text-4xl font-light text-foreground" data-testid="incoming-caller-name">
                  Curbe
                </div>
                <img src={verifiedBadge} alt="Verified" className="w-8 h-8" />
              </div>
              <div className="text-xl text-muted-foreground font-light">
                (844) CURBE-IO
              </div>
            </div>

            {/* Preview teaser */}
            <div className="bg-card/50 backdrop-blur border border-border rounded-2xl px-6 py-4 max-w-xs mx-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="w-1 h-4 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-4 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-xs text-muted-foreground font-medium">{t('phoneInterface.preview')}</span>
              </div>
              <p className="text-sm text-foreground/80">
                "{t('phoneInterface.aiAgent')}" 
                <span className="text-foreground/30">•••</span>
              </p>
              <p className="text-xs text-primary mt-2 font-medium">
                {t('phoneInterface.answerToListen')}
              </p>
            </div>
          </div>

          {/* Bottom section - Action buttons */}
          <div className="space-y-8">
            {/* Main action buttons */}
            <div className="flex justify-center items-center gap-20 px-4">
              {/* Reject button */}
              <button
                onClick={onReject}
                className="group flex flex-col items-center gap-3"
                data-testid="button-reject-call"
              >
                <div className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all active:scale-95 shadow-lg">
                  <PhoneOff className="w-9 h-9 text-white" />
                </div>
                <div className="text-sm text-foreground font-light">
                  {t('phoneInterface.decline')}
                </div>
              </button>

              {/* Answer button */}
              <button
                onClick={onAnswer}
                className="group flex flex-col items-center gap-3 relative"
                data-testid="button-answer-call"
              >
                {/* Pulse ring behind button */}
                <div className="absolute top-0 w-20 h-20 rounded-full bg-green-400/20 animate-ping"></div>
                
                <div className="relative w-20 h-20 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all active:scale-95 shadow-lg hover:shadow-green-500/50">
                  <Phone className="w-9 h-9 text-white" fill="white" />
                </div>
                <div className="text-sm text-foreground font-medium">
                  {t('phoneInterface.answer')}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="pb-3 flex justify-center">
          <div className="w-32 h-1 bg-gray-800 rounded-full"></div>
        </div>
        </div>
      </div>
    </div>
  );
}
