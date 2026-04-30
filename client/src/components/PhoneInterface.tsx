import { Phone, PhoneOff, Volume2 } from "lucide-react";
import { SiWhatsapp, SiSlack, SiNotion, SiGoogle, SiZapier } from "react-icons/si";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import audioFile from "@assets/ElevenLabs_2025-11-13T01_20_18_Carolina G- SSL 2_ AKG P220_pvc_sp110_s16_sb9_v3_1762996967130.mp3";
import logoUrl from "@assets/scial media logo _1762997341275.png";
import verifiedBadge from "@assets/verified-badge.png";

interface PhoneInterfaceProps {
  autoPlay?: boolean;
  onCallEnded?: () => void;
}

export function PhoneInterface({ autoPlay = false, onCallEnded }: PhoneInterfaceProps) {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [clockTime, setClockTime] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (onCallEnded) {
        onCallEnded();
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onCallEnded]);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [autoPlay]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 horas = 12 AM
      setClockTime(`${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
      if (onCallEnded) {
        onCallEnded();
      }
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full max-w-[375px] mx-auto lg:ml-auto lg:mr-0">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioFile} preload="metadata" />

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
            <div className="text-xs font-semibold text-foreground">{clockTime}</div>
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
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`text-sm font-medium tracking-wide ${isPlaying ? 'text-green-500' : 'text-muted-foreground'}`}>
              {isPlaying ? t('phoneInterface.inCall') : t('phoneInterface.paused')}
            </div>

            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center p-4 shadow-2xl border-4 border-card">
                <img 
                  src={logoUrl} 
                  alt="Curbe" 
                  className="w-full h-full object-contain"
                />
              </div>
              {isPlaying && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-gray-50">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
              )}
            </div>

            {/* Caller name */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="text-4xl font-light text-foreground" data-testid="caller-name">
                  Curbe
                </div>
                <img src={verifiedBadge} alt="Verified" className="w-8 h-8" />
              </div>
              <div className="text-xl text-muted-foreground font-light">
                (844) CURBE-IO
              </div>
            </div>

            {/* Call duration */}
            <div className="text-2xl text-muted-foreground font-light tabular-nums">
              {isPlaying ? formatTime(currentTime) : formatTime(duration || 0)}
            </div>

            {/* Audio wave visualization */}
            {isPlaying && (
              <div className="h-16 w-48 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#007AFF" />
                      <stop offset="50%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#007AFF" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <line
                      key={i}
                      x1={i * 20 + 10}
                      y1="30"
                      x2={i * 20 + 10}
                      y2="30"
                      stroke="url(#waveGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="y1"
                        values="30;10;30"
                        dur="0.8s"
                        begin={`${i * 0.1}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y2"
                        values="30;50;30"
                        dur="0.8s"
                        begin={`${i * 0.1}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  ))}
                </svg>
              </div>
            )}
          </div>

          {/* Bottom section - Action buttons */}
          <div className="space-y-6">
            {/* Control buttons grid */}
            <div className="grid grid-cols-3 gap-6 px-4">
              {/* Mute */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur flex items-center justify-center border border-border">
                  <svg className="w-7 h-7 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </div>
                <div className="text-xs text-foreground">{t('phoneInterface.mute')}</div>
              </div>

              {/* Keypad */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur flex items-center justify-center border border-border">
                  <svg className="w-7 h-7 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div className="text-xs text-foreground">{t('phoneInterface.keypad')}</div>
              </div>

              {/* Speaker */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-card/80 backdrop-blur flex items-center justify-center border border-border">
                  <Volume2 className="w-7 h-7 text-foreground" />
                </div>
                <div className="text-xs text-foreground">{t('phoneInterface.speaker')}</div>
              </div>
            </div>

            {/* End call button */}
            <div className="flex justify-center">
              <button
                onClick={togglePlayPause}
                className="group flex flex-col items-center gap-3"
                data-testid="button-call"
              >
                <div className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all active:scale-95 shadow-lg">
                  <PhoneOff className="w-9 h-9 text-white" />
                </div>
                <div className="text-sm text-foreground font-light">
                  {t('phoneInterface.endCall')}
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
