import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import microcurrentAdImg from "@assets/ChatGPT_Image_Apr_29,_2026,_11_38_06_AM_1777477100945.png";
import rizadorAdImg from "@assets/ChatGPT_Image_Apr_29,_2026,_11_37_46_AM_1777477100946.png";
import parchesAcneAdImg from "@assets/ChatGPT_Image_Apr_29,_2026,_11_37_34_AM_1777477100946.png";
import parchesOjosAdImg from "@assets/ChatGPT_Image_Apr_29,_2026,_11_37_26_AM_1777477100946.png";
import lipOilAdImg from "@assets/ChatGPT_Image_Apr_29,_2026,_11_37_18_AM_1777477100946.png";
import mascaraLedAdImg from "@assets/ChatGPT_Image_Apr_29,_2026,_11_37_11_AM_1777477100947.png";
import ceraveAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_04_47_PM_1777424703878.png";
import solDeJaneiroAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_04_43_PM_1777424703878.png";
import rareBeautyAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_04_39_PM_1777424703879.png";
import ordinaryAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_04_35_PM_1777424703879.png";
import mightyPatchAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_04_29_PM_1777424703879.png";
import ollyAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_00_56_PM_1777424703880.png";
import utensilsAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_07_14_PM_1777424859652.png";
import kasaAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_07_06_PM_1777424859652.png";
import ninjaCreamiAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_07_01_PM_1777424859653.png";
import pinkStuffAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_06_52_PM_1777424859653.png";
import stanleyAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_06_43_PM_1777424859653.png";
import crocsAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_11_13_PM_1777425076070.png";
import sonnyAngelAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_11_33_PM_1777425095611.png";
import viralPlushAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_11_40_PM_1777425103083.png";
import catLitterAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_14_37_PM_1777425280397.png";
import petRollerAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_14_45_PM_1777425289268.png";
import electrolytesAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_14_54_PM_1777425295809.png";
import gummiesAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_15_02_PM_1777425306301.png";
import sleepGummiesAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_15_11_PM_1777425313604.png";
import massageGunAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_15_20_PM_1777425323158.png";
import miniFanAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_16_01_PM_1777425362873.png";
import yaraAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_30_03_PM_1777426213300.png";
import limpiezaAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_35_59_PM_1777426582176.png";
import personalTrainerAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_35_49_PM_1777426582176.png";
import paisajismoAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_35_44_PM_1777426582177.png";
import fotoVideoAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_35_39_PM_1777426582177.png";
import remodelacionAdImg from "@assets/ChatGPT_Image_Apr_28,_2026,_09_35_32_PM_1777426582177.png";
import adsImg01 from "@assets/ChatGPT_Image_Apr_30_2026_03_39_45_PM.png";
import adsImg02 from "@assets/ChatGPT_Image_Apr_30_2026_03_41_07_PM.png";
import adsImg03 from "@assets/ChatGPT_Image_Apr_30_2026_03_41_25_PM.png";
import adsImg04 from "@assets/ChatGPT_Image_Apr_30_2026_03_42_43_PM.png";
import adsImg05 from "@assets/ChatGPT_Image_Apr_30_2026_03_43_44_PM.png";
import adsImg06 from "@assets/ChatGPT_Image_Apr_30_2026_03_43_50_PM.png";
import adsImg07 from "@assets/ChatGPT_Image_Apr_30_2026_03_44_00_PM.png";
import adsImg08 from "@assets/ChatGPT_Image_Apr_30_2026_03_44_09_PM.png";
import adsImg09 from "@assets/ChatGPT_Image_Apr_30_2026_03_46_31_PM.png";
import adsImg10 from "@assets/ChatGPT_Image_Apr_30_2026_03_52_31_PM.png";
import adsImg11 from "@assets/ChatGPT_Image_Apr_30_2026_03_52_40_PM.png";
import adsImg12 from "@assets/ChatGPT_Image_Apr_30_2026_03_52_55_PM.png";
import adsImg13 from "@assets/ChatGPT_Image_Apr_30_2026_03_53_04_PM.png";
import adsImg14 from "@assets/ChatGPT_Image_Apr_30_2026_03_55_23_PM.png";
import adsImg15 from "@assets/ChatGPT_Image_Apr_30_2026_03_55_30_PM.png";
import adsImg16 from "@assets/ChatGPT_Image_Apr_30_2026_03_55_39_PM.png";
import adsImg17 from "@assets/ChatGPT_Image_Apr_30_2026_03_55_49_PM.png";
import adsImg18 from "@assets/ChatGPT_Image_Apr_30_2026_03_56_02_PM.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Brain,
  Rocket,
  TrendingUp,
  Star,
  CheckCircle2,
  Image as ImageIcon,
  Video,
  Mic,
  RefreshCw,
  ArrowUpRight,
  Database,
  Flame,
  Heart,
  DollarSign,
  Bot,
  GraduationCap,
  Shield,
  ThumbsUp,
  MessageCircle,
  Share2,
  MessageSquare,
  PhoneCall,
  CreditCard,
  Globe,
  Users,
  Activity,
  Eye,
  RotateCw,
  ChevronRight,
  BarChart3,
  Target,
  Layers,
  Network,
  Lightbulb,
  Radio,
  ArrowRight,
  Cpu,
  Wifi,
  CircleDot,
  Hexagon,
  GitBranch,
  Workflow,
  ShoppingBag,
  Megaphone,
  Building2,
  Store,
  Clock,
  AlertTriangle,
  Facebook,
  Music,
  type LucideIcon,
} from "lucide-react";
import { DemoForm } from "@/components/forms/DemoForm";
import { Footer } from "@/components/layout/Footer";
import { MegaHeader } from "@/components/layout/MegaHeader";

/* ─── AD CARD DATA ─────────────────────────────────────── */
interface AdData {
  bg: string;
  accent: string;
  iconBg: string;
  tag: string;
  headline: string;
  body: string;
  cta: string;
  stars: number;
  social: string;
  brand: string;
  Icon: LucideIcon;
  imageUrl?: string;
  imageBg?: string;
}

const ADS_ROW_1: AdData[] = [
  { bg: '', accent: '', iconBg: '', tag: 'Skincare', headline: 'Clean skin.\nNo stripped feeling.', body: '', cta: '', stars: 5, social: '', brand: 'CeraVe', Icon: Sparkles, imageUrl: ceraveAdImg, imageBg: '#daeef5' },
  { bg: '', accent: '', iconBg: '', tag: 'Lifestyle', headline: 'Tu estilo,\ntu momento', body: '', cta: '', stars: 5, social: '', brand: 'TrendSpot', Icon: Sparkles, imageUrl: adsImg01, imageBg: '#e8e4f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Body Care', headline: 'Smells like\nsummer skin', body: '', cta: '', stars: 5, social: '', brand: 'Sol de Janeiro', Icon: Sparkles, imageUrl: solDeJaneiroAdImg, imageBg: '#c8a06a' },
  { bg: '', accent: '', iconBg: '', tag: 'Makeup', headline: 'One dot.\nInstant glow.', body: '', cta: '', stars: 5, social: '', brand: 'Rare Beauty', Icon: Sparkles, imageUrl: rareBeautyAdImg, imageBg: '#f5dde0' },
  { bg: '', accent: '', iconBg: '', tag: 'Limpieza', headline: 'Tu casa\nimpecable', body: '', cta: '', stars: 5, social: '', brand: 'Limpieza Premium', Icon: Sparkles, imageUrl: limpiezaAdImg, imageBg: '#e8eef5' },
  { bg: '', accent: '', iconBg: '', tag: 'Beauty', headline: 'Productos\nque enamoran', body: '', cta: '', stars: 5, social: '', brand: 'GlowUp', Icon: Heart, imageUrl: adsImg02, imageBg: '#f8e8f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Serum', headline: 'Deep hydration.\nZero heaviness.', body: '', cta: '', stars: 5, social: '', brand: 'The Ordinary', Icon: Sparkles, imageUrl: ordinaryAdImg, imageBg: '#f5f5f5' },
  { bg: '', accent: '', iconBg: '', tag: 'Skincare', headline: 'Wake up\nclearer', body: '', cta: '', stars: 5, social: '', brand: 'Mighty Patch', Icon: Heart, imageUrl: mightyPatchAdImg, imageBg: '#f0ece8' },
  { bg: '', accent: '', iconBg: '', tag: 'Fitness', headline: 'Energía\npura', body: '', cta: '', stars: 5, social: '', brand: 'PowerFuel', Icon: Zap, imageUrl: adsImg03, imageBg: '#f0e8d8' },
  { bg: '', accent: '', iconBg: '', tag: 'Wellness', headline: 'Tu rutina diaria,\nmás fácil', body: '', cta: '', stars: 5, social: '', brand: 'OLLY', Icon: Sparkles, imageUrl: ollyAdImg, imageBg: '#f5e8f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Fitness', headline: 'Resultados\nreales', body: '', cta: '', stars: 5, social: '', brand: 'Entrenamiento Personal', Icon: Sparkles, imageUrl: personalTrainerAdImg, imageBg: '#1e1e1e' },
  { bg: '', accent: '', iconBg: '', tag: 'Hogar', headline: 'Toque\nespecial', body: '', cta: '', stars: 5, social: '', brand: 'HomeVibe', Icon: Heart, imageUrl: adsImg04, imageBg: '#e0dcd4' },
  { bg: '', accent: '', iconBg: '', tag: 'Footwear', headline: 'Comfort\nwent viral', body: '', cta: '', stars: 5, social: '', brand: 'Crocs', Icon: Sparkles, imageUrl: crocsAdImg, imageBg: '#a8d8f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Mascotas', headline: 'No más\nlimpiar arena', body: '', cta: '', stars: 5, social: '', brand: 'Auto-limpiable', Icon: Sparkles, imageUrl: catLitterAdImg, imageBg: '#e8e0d4' },
  { bg: '', accent: '', iconBg: '', tag: 'Beauty Tech', headline: 'Define\ntu rostro', body: '', cta: '', stars: 5, social: '', brand: 'Microcurrent Device', Icon: Sparkles, imageUrl: microcurrentAdImg, imageBg: '#1a1a2a' },
  { bg: '', accent: '', iconBg: '', tag: 'Moda', headline: 'Temporada\nnueva', body: '', cta: '', stars: 5, social: '', brand: 'StyleLab', Icon: Sparkles, imageUrl: adsImg05, imageBg: '#d8e8f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Skincare', headline: 'Bye bye\ngranitos', body: '', cta: '', stars: 5, social: '', brand: 'Parches Anti-acné', Icon: Heart, imageUrl: parchesAcneAdImg, imageBg: '#f5f0ec' },
  { bg: '', accent: '', iconBg: '', tag: 'Sneakers', headline: 'Estilo\nsin límite', body: '', cta: '', stars: 5, social: '', brand: 'KickLab', Icon: TrendingUp, imageUrl: adsImg06, imageBg: '#e8e4dc' },
];

const ADS_ROW_2: AdData[] = [
  { bg: '', accent: '', iconBg: '', tag: 'Mascotas', headline: 'Adiós\npelos', body: '', cta: '', stars: 5, social: '', brand: 'Pet Roller', Icon: Sparkles, imageUrl: petRollerAdImg, imageBg: '#2a2a2a' },
  { bg: '', accent: '', iconBg: '', tag: 'Tech', headline: 'Innovación\nconstante', body: '', cta: '', stars: 5, social: '', brand: 'NovaTech', Icon: Zap, imageUrl: adsImg07, imageBg: '#d8e0f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Creativos', headline: 'Tu marca\nse ve pro', body: '', cta: '', stars: 5, social: '', brand: 'Foto + Video', Icon: Sparkles, imageUrl: fotoVideoAdImg, imageBg: '#1a1510' },
  { bg: '', accent: '', iconBg: '', tag: 'Salud', headline: 'Hidratación\nrápida', body: '', cta: '', stars: 5, social: '', brand: 'Electrolitos', Icon: Sparkles, imageUrl: electrolytesAdImg, imageBg: '#f5f0ec' },
  { bg: '', accent: '', iconBg: '', tag: 'Wellness', headline: 'Tu rutina\ndiaria', body: '', cta: '', stars: 5, social: '', brand: 'Vitaminas', Icon: Sparkles, imageUrl: gummiesAdImg, imageBg: '#ede8f5' },
  { bg: '', accent: '', iconBg: '', tag: 'Accesorios', headline: 'Detalles\nque brillan', body: '', cta: '', stars: 5, social: '', brand: 'LuxeTouch', Icon: Heart, imageUrl: adsImg08, imageBg: '#f0e4d8' },
  { bg: '', accent: '', iconBg: '', tag: 'Lifestyle', headline: 'Calor?\nNo gracias', body: '', cta: '', stars: 5, social: '', brand: 'Mini Fan', Icon: Sparkles, imageUrl: miniFanAdImg, imageBg: '#b8d8f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Cocina', headline: 'No se derriten.\nNo rayan.', body: '', cta: '', stars: 5, social: '', brand: 'Utensilios', Icon: Sparkles, imageUrl: utensilsAdImg, imageBg: '#e8e0d5' },
  { bg: '', accent: '', iconBg: '', tag: 'Smart Home', headline: 'Controla tu casa\ndesde el móvil', body: '', cta: '', stars: 5, social: '', brand: 'Kasa', Icon: Zap, imageUrl: kasaAdImg, imageBg: '#c8c4be' },
  { bg: '', accent: '', iconBg: '', tag: 'Cocina', headline: 'Helado casero\nen minutos', body: '', cta: '', stars: 5, social: '', brand: 'Ninja Creami', Icon: Sparkles, imageUrl: ninjaCreamiAdImg, imageBg: '#f0ece6' },
  { bg: '', accent: '', iconBg: '', tag: 'Juguetes', headline: 'Diversión\nsin fin', body: '', cta: '', stars: 5, social: '', brand: 'FunBox', Icon: Sparkles, imageUrl: adsImg09, imageBg: '#e8f0d8' },
  { bg: '', accent: '', iconBg: '', tag: 'Limpieza', headline: 'Manchas difíciles,\nfuera', body: '', cta: '', stars: 5, social: '', brand: 'The Pink Stuff', Icon: Sparkles, imageUrl: pinkStuffAdImg, imageBg: '#e8e0dc' },
  { bg: '', accent: '', iconBg: '', tag: 'Beauty', headline: 'Pestañas\nen segundos', body: '', cta: '', stars: 5, social: '', brand: 'Rizador Térmico', Icon: Sparkles, imageUrl: rizadorAdImg, imageBg: '#1a0f08' },
  { bg: '', accent: '', iconBg: '', tag: 'Viajes', headline: 'Aventura\nte espera', body: '', cta: '', stars: 5, social: '', brand: 'WanderLab', Icon: Globe, imageUrl: adsImg10, imageBg: '#d8e8f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Skincare', headline: 'Mirada\ndescansada', body: '', cta: '', stars: 5, social: '', brand: 'Parches de Ojos', Icon: Heart, imageUrl: parchesOjosAdImg, imageBg: '#f0e8e4' },
  { bg: '', accent: '', iconBg: '', tag: 'Self-care', headline: 'Mereces\nlo mejor', body: '', cta: '', stars: 5, social: '', brand: 'PureJoy', Icon: Heart, imageUrl: adsImg11, imageBg: '#f0e0e8' },
  { bg: '', accent: '', iconBg: '', tag: 'Kids', headline: 'Pequeños\ngigantes', body: '', cta: '', stars: 5, social: '', brand: 'MiniWorld', Icon: Sparkles, imageUrl: adsImg12, imageBg: '#e8f0e0' },
];

const ADS_ROW_3: AdData[] = [
  { bg: '', accent: '', iconBg: '', tag: 'Lifestyle', headline: 'El vaso que\nlo empezó todo', body: '', cta: '', stars: 5, social: '', brand: 'Stanley', Icon: Sparkles, imageUrl: stanleyAdImg, imageBg: '#e0dcd4' },
  { bg: '', accent: '', iconBg: '', tag: 'Exterior', headline: 'Renueva\ntu patio', body: '', cta: '', stars: 5, social: '', brand: 'Paisajismo', Icon: Sparkles, imageUrl: paisajismoAdImg, imageBg: '#3a5a30' },
  { bg: '', accent: '', iconBg: '', tag: 'Gaming', headline: 'Next\nlevel', body: '', cta: '', stars: 5, social: '', brand: 'ApexGear', Icon: Zap, imageUrl: adsImg13, imageBg: '#1a1a2a' },
  { bg: '', accent: '', iconBg: '', tag: 'Collectible', headline: 'Open the\nsurprise', body: '', cta: '', stars: 5, social: '', brand: 'Sonny Angel', Icon: Sparkles, imageUrl: sonnyAngelAdImg, imageBg: '#f5e0d8' },
  { bg: '', accent: '', iconBg: '', tag: 'Collectible', headline: 'The viral\nplush', body: '', cta: '', stars: 5, social: '', brand: 'Mystery Friends', Icon: Sparkles, imageUrl: viralPlushAdImg, imageBg: '#f0dcd8' },
  { bg: '', accent: '', iconBg: '', tag: 'Wellness', headline: 'Duerme\nmejor', body: '', cta: '', stars: 5, social: '', brand: 'Sleep Gummies', Icon: Sparkles, imageUrl: sleepGummiesAdImg, imageBg: '#1a1a3a' },
  { bg: '', accent: '', iconBg: '', tag: 'Deporte', headline: 'Rinde\nal máximo', body: '', cta: '', stars: 5, social: '', brand: 'PeakPro', Icon: TrendingUp, imageUrl: adsImg14, imageBg: '#d8e0e8' },
  { bg: '', accent: '', iconBg: '', tag: 'Hogar', headline: 'Transforma\ntu espacio', body: '', cta: '', stars: 5, social: '', brand: 'Remodelación', Icon: Sparkles, imageUrl: remodelacionAdImg, imageBg: '#2a2010' },
  { bg: '', accent: '', iconBg: '', tag: 'Fitness', headline: 'Alivio en\nminutos', body: '', cta: '', stars: 5, social: '', brand: 'Massage Gun', Icon: Sparkles, imageUrl: massageGunAdImg, imageBg: '#1a1a2a' },
  { bg: '', accent: '', iconBg: '', tag: 'Outdoor', headline: 'Naturaleza\nviva', body: '', cta: '', stars: 5, social: '', brand: 'WildPath', Icon: Heart, imageUrl: adsImg15, imageBg: '#d8e8d0' },
  { bg: '', accent: '', iconBg: '', tag: 'Perfume', headline: 'Huele a\nobsesión', body: '', cta: '', stars: 5, social: '', brand: 'Yara by Lattafa', Icon: Sparkles, imageUrl: yaraAdImg, imageBg: '#f0c8d0' },
  { bg: '', accent: '', iconBg: '', tag: 'Beauty', headline: 'Brillo\nque vende', body: '', cta: '', stars: 5, social: '', brand: 'Lip Oil', Icon: Sparkles, imageUrl: lipOilAdImg, imageBg: '#f5c8d0' },
  { bg: '', accent: '', iconBg: '', tag: 'Decoración', headline: 'Espacios\ncon alma', body: '', cta: '', stars: 5, social: '', brand: 'NestDesign', Icon: Heart, imageUrl: adsImg16, imageBg: '#e8e0d8' },
  { bg: '', accent: '', iconBg: '', tag: 'Beauty Tech', headline: 'Piel de\notro nivel', body: '', cta: '', stars: 5, social: '', brand: 'Máscara LED', Icon: Sparkles, imageUrl: mascaraLedAdImg, imageBg: '#1a0808' },
  { bg: '', accent: '', iconBg: '', tag: 'Fotografía', headline: 'Captura\nel momento', body: '', cta: '', stars: 5, social: '', brand: 'SnapGenius', Icon: Sparkles, imageUrl: adsImg17, imageBg: '#e8e0f0' },
  { bg: '', accent: '', iconBg: '', tag: 'Coleccionables', headline: 'Edición\nlimitada', body: '', cta: '', stars: 5, social: '', brand: 'RareFind', Icon: Sparkles, imageUrl: adsImg18, imageBg: '#f0e8e0' },
];

function AdCard({ ad, seed = 0 }: { ad: AdData; seed?: number }) {
  const { Icon } = ad;

  const CARD_W = 270;
  const CARD_H = Math.round(CARD_W * 16 / 9); // true 9:16 = 480px

  /* ── Image-based card (real ad creative) ── */
  if (ad.imageUrl) {
    return (
      <div
        className="ad-card relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
        style={{ width: CARD_W, height: CARD_H, background: ad.imageBg ?? '#000' }}
      >
        <img
          src={ad.imageUrl}
          alt={ad.headline}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          draggable={false}
        />
        {/* <FloatingReactions seed={seed} /> */}
      </div>
    );
  }

  /* ── Icon-based card (placeholder) ── */
  return (
    <div
      className={`ad-card relative flex-shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br ${ad.bg} shadow-xl flex flex-col`}
      style={{ width: CARD_W, height: CARD_H }}
    >
      <div className="flex-1 relative flex items-center justify-center">
        <div className={`w-28 h-28 rounded-3xl ${ad.iconBg} flex items-center justify-center`}>
          <Icon className="w-12 h-12 text-white/90" />
        </div>
        <span className="absolute top-3 left-3 text-[10px] font-semibold text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
          Sponsored
        </span>
        <span className={`absolute top-3 right-3 text-[10px] font-bold text-white px-2.5 py-0.5 rounded-full ${ad.accent}`}>
          {ad.tag}
        </span>
      </div>
      <div className="px-5 pb-6 pt-4">
        <p className="text-white font-bold text-[15px] leading-snug mb-2 whitespace-pre-line">
          {ad.headline}
        </p>
        <p className="text-white/60 text-[11px] leading-relaxed mb-3 whitespace-pre-line line-clamp-2">
          {ad.body}
        </p>
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex">
            {Array.from({ length: ad.stars }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white/50 text-[10px]">{ad.social}</span>
        </div>
        <div className={`w-full py-2.5 rounded-xl ${ad.accent} text-white text-[12px] font-bold text-center`}>
          {ad.cta}
        </div>
        <p className="text-white/25 text-[9px] font-medium uppercase tracking-wider text-right mt-2">
          {ad.brand}
        </p>
      </div>
    </div>
  );
}

/* ─── REVEAL ON SCROLL HOOK ─────────────────────────────── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ─── SPOTLIGHT MOUSE TRACKING ──────────────────────────── */
function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--spot-x', `${x}%`);
      el.style.setProperty('--spot-y', `${y}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);
  return ref;
}

/* ─── ANIMATED COUNTER ──────────────────────────────────── */
function AnimatedCounter({
  to,
  duration = 1600,
  prefix = '',
  suffix = '',
  decimals = 0,
}: { to: number; duration?: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(eased * to);
            if (t < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}

/* ─── PARTICLES OVERLAY ─────────────────────────────────── */
function Particles({ count = 22 }: { count?: number }) {
  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      bottom: -10 - Math.random() * 30,
      dur: 14 + Math.random() * 18,
      delay: -Math.random() * 22,
      size: 2 + Math.random() * 3,
      key: i,
    }));
  }, [count]);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map(p => (
        <span
          key={p.key}
          className="particle-dot"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: p.size,
            height: p.size,
            ['--p-dur' as any]: `${p.dur}s`,
            ['--p-delay' as any]: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── AD SHOWCASE HERO (creative agency wall) ──────────────────── */
/* Animated cycling deck of real ad creatives generated by Curbe.
   Editorial / fashion-magazine vibe. Cards swap in/out continuously. */
// FULL gallery — all 33 ad creatives imported at the top of the file.
const SHOWCASE_AD_POOL = [
  ceraveAdImg, adsImg01, rareBeautyAdImg, stanleyAdImg, adsImg02, crocsAdImg, mightyPatchAdImg,
  sonnyAngelAdImg, adsImg03, lipOilAdImg, ordinaryAdImg, adsImg04, ollyAdImg, rizadorAdImg,
  microcurrentAdImg, adsImg05, parchesOjosAdImg, pinkStuffAdImg, adsImg06, mascaraLedAdImg,
  ninjaCreamiAdImg, adsImg07, kasaAdImg, parchesAcneAdImg, adsImg08, solDeJaneiroAdImg,
  utensilsAdImg, adsImg09, viralPlushAdImg, catLitterAdImg, adsImg10, petRollerAdImg,
  electrolytesAdImg, adsImg11, gummiesAdImg, sleepGummiesAdImg, adsImg12, massageGunAdImg,
  miniFanAdImg, adsImg13, yaraAdImg, limpiezaAdImg, adsImg14, personalTrainerAdImg,
  paisajismoAdImg, adsImg15, fotoVideoAdImg, adsImg16, remodelacionAdImg, adsImg17, adsImg18,
];

// Conveyor: cards flow left → through front-center → right, then exit.
// Phase 0 = entry (off-screen left, invisible)
// Phase 3 = FRONT CENTER (largest, sharp, highlighted)
// Phase 6 = exit (off-screen right, invisible)
const TRACK_POSITIONS = [
  { x: -440, y:  56, z: -340, rot: -18, scale: 0.62, blur: 4, opacity: 0 },  // 0: entry
  { x: -290, y:  36, z: -220, rot: -13, scale: 0.78, blur: 2, opacity: 1 },  // 1: far left
  { x: -150, y:  16, z: -100, rot:  -7, scale: 0.90, blur: 1, opacity: 1 },  // 2: mid left
  { x:    0, y:   0, z:   30, rot:   0, scale: 1.05, blur: 0, opacity: 1 },  // 3: FRONT CENTER
  { x:  150, y:  16, z: -100, rot:   7, scale: 0.90, blur: 1, opacity: 1 },  // 4: mid right
  { x:  290, y:  36, z: -220, rot:  13, scale: 0.78, blur: 2, opacity: 1 },  // 5: far right
  { x:  440, y:  56, z: -340, rot:  18, scale: 0.62, blur: 4, opacity: 0 },  // 6: exit
];

const TICK_MS = 1500;

type ConveyorCard = { id: number; imageIdx: number; phase: number };

/* Container query–style scaling: the conveyor scales smoothly with the
   container's measured width so cards stay readable on phones, tablets and
   desktops without changing the animation logic. */
function useConveyorScale(ref: React.RefObject<HTMLDivElement>) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      const w = ref.current?.clientWidth || window.innerWidth;
      // Reference width = 560px (where TRACK_POSITIONS' 220 card + ±290 spread fit).
      // Below that, scale linearly down to 0.55 at 320px.
      if (w >= 560) setScale(1);
      else if (w <= 320) setScale(0.55);
      else setScale(0.55 + ((w - 320) / (560 - 320)) * 0.45);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [ref]);
  return scale;
}

function AdShowcaseHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useConveyorScale(containerRef);

  // Pre-fill phases 0..5 so EVERY phase is always occupied — no gaps in the conveyor.
  const [cards, setCards] = useState<ConveyorCard[]>(() => [
    { id: 0, imageIdx: 0, phase: 0 },
    { id: 1, imageIdx: 1, phase: 1 },
    { id: 2, imageIdx: 2, phase: 2 },
    { id: 3, imageIdx: 3, phase: 3 },
    { id: 4, imageIdx: 4, phase: 4 },
    { id: 5, imageIdx: 5, phase: 5 },
  ]);
  const nextIdRef = useRef(6);
  const nextImgRef = useRef(6);

  useEffect(() => {
    const tick = () => {
      setCards(prev => {
        const advanced = prev
          .map(c => ({ ...c, phase: c.phase + 1 }))
          .filter(c => c.phase <= TRACK_POSITIONS.length - 1);
        const newCard: ConveyorCard = {
          id: nextIdRef.current++,
          imageIdx: nextImgRef.current % SHOWCASE_AD_POOL.length,
          phase: 0,
        };
        nextImgRef.current += 1;
        return [...advanced, newCard];
      });
    };
    const id = setInterval(tick, TICK_MS);
    return () => clearInterval(id);
  }, []);

  const cardWidth = 220 * scale;

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full" style={{ perspective: 1600 * scale }}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {cards.map(card => {
            const safePhase = Math.min(Math.max(card.phase, 0), TRACK_POSITIONS.length - 1);
            const pos = TRACK_POSITIONS[safePhase];
            const isFront = card.phase === 3;
            const x = pos.x * scale;
            const y = pos.y * scale;
            const z = pos.z * scale;
            return (
              <div
                key={card.id}
                className="absolute"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotate(${pos.rot}deg) scale(${pos.scale})`,
                  transformStyle: 'preserve-3d',
                  filter: pos.blur ? `blur(${pos.blur * scale}px)` : undefined,
                  opacity: pos.opacity,
                  zIndex: 100 - Math.abs(card.phase - 3) * 10,
                  transition:
                    'transform 1.45s cubic-bezier(0.32, 0.72, 0.26, 1), opacity 1.45s ease, filter 1.45s ease',
                  willChange: 'transform, opacity, filter',
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    width: cardWidth,
                    aspectRatio: '9 / 16',
                    background: '#fff',
                    boxShadow: isFront
                      ? '0 18px 40px -16px rgba(15,23,42,0.18)'
                      : '0 10px 24px -16px rgba(15,23,42,0.10)',
                  }}
                >
                  <img
                    src={SHOWCASE_AD_POOL[card.imageIdx]}
                    alt=""
                    draggable={false}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── REASONING STREAM (AgentTheater) ───────────────────── */
const REASONING_STREAM_KEYS: Array<{ kind: string; color: string; ts: string; tKey: string }> = [
  { kind: 'OBSERVE', color: '#3b82f6', ts: '02:34:01', tKey: 'momentObserveText' },
  { kind: 'REASON',  color: '#a855f7', ts: '02:34:02', tKey: 'momentReasonText' },
  { kind: 'ACT',     color: '#10b981', ts: '02:34:14', tKey: 'momentActedText' },
];

const REASONING_STREAM_EXTRA: Array<{ kind: string; color: string; ts: string; text: string }> = [
  { kind: 'CALL',    color: '#06b6d4', ts: '02:34:15', text: 'meta_ads_api · 3 requests · 200 OK' },
  { kind: 'PERSIST', color: '#a855f7', ts: '02:34:18', text: 'memory.write · pattern=audience_saturation_v3' },
  { kind: 'REFLECT', color: '#f59e0b', ts: '02:34:19', text: 'reward = +0.84 · pattern reinforced' },
];

/* ════════════════════════════════════════════════════════
   TYPING SALES TEXT COMPONENT
   ════════════════════════════════════════════════════════ */
function TypingSalesText() {
  const words = ['daily', 'while you sleep', '24/7', 'without hiring', 'with AI'];
  const longestWord = words.reduce((a, b) => a.length >= b.length ? a : b, '');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(typeTimeout);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(deleteTimeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayedText, isDeleting, isPaused, currentWordIndex, words]);

  return (
       <span className="relative inline-flex items-center pb-3 whitespace-nowrap">
         <span className="invisible leading-tight">{longestWord}</span>
         <span className="text-gradient-flow absolute inset-0 flex items-end pb-3 leading-tight">
          {displayedText}
          <span className="animate-pulse ml-0.5 border-r-2 border-current h-[0.9em] inline-block" />
        </span>
      </span>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */

export function RespondStyleHomepage() {
  const { t } = useTranslation();
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen text-gray-900 antialiased relative" data-testid="respond-homepage">
      {/* Animated colorful background — light pastel gradient with floating blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #fde68a 0%, #fdba74 15%, #fca5a5 30%, #c4b5fd 50%, #93c5fd 70%, #60a5fa 85%, #3b82f6 100%)'
        }} />
        <div className="animate-blob-1" style={{ position:'absolute', top:'-10%', left:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(251,191,36,0.7) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)' }} />
        <div className="animate-blob-2" style={{ position:'absolute', bottom:'-10%', right:'-10%', width:600, height:600, borderRadius:'50%', filter:'blur(120px)', background:'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(96,165,250,0.5) 35%, transparent 65%)' }} />
        <div className="animate-blob-3" style={{ position:'absolute', top:'40%', left:'20%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(244,114,182,0.4) 0%, rgba(232,121,249,0.25) 40%, transparent 70%)' }} />
        <div className="animate-blob-4" style={{ position:'absolute', top:'10%', right:'10%', width:500, height:500, borderRadius:'50%', filter:'blur(110px)', background:'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.3) 35%, transparent 65%)' }} />
      </div>

      <MegaHeader onTalkToSales={() => setDemoFormOpen(true)} />

      {/* ══════════════════════════════════════════════════
          1 · HERO AURORA
          ══════════════════════════════════════════════════ */}
      <HeroAurora onOpenDemo={() => setDemoFormOpen(true)} t={t} />

      {/* ══════════════════════════════════════════════════
          1.5 · PAIN POINT SECTION (NEW)
          ══════════════════════════════════════════════════ */}
      <PainPointSection t={t} />

      {/* ══════════════════════════════════════════════════
          1.6 · WHY CURBE (NEW)
          ══════════════════════════════════════════════════ */}
      <WhyCurbeSection t={t} />

      {/* ══════════════════════════════════════════════════
          2 · AGENT THEATER
          ══════════════════════════════════════════════════ */}
      <AgentTheater t={t} />

      {/* ══════════════════════════════════════════════════
          3 · CAPABILITIES BENTO (LIGHT)
          ══════════════════════════════════════════════════ */}
      <CapabilitiesBento t={t} />

      {/* ══════════════════════════════════════════════════
          3.5 · PLATFORMS (NEW)
          ══════════════════════════════════════════════════ */}
      <PlatformsSection t={t} />

      {/* ══════════════════════════════════════════════════
          4 · ADS GALLERY (PRESERVED)
          ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-16 lg:py-24"
        data-testid="ads-gallery-section"
      >
        <div className="absolute inset-0 pointer-events-none opacity-60"
             style={{
               background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.06), transparent 70%)',
             }} />
        <div className="text-center mb-14 px-6 relative">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.adsGalleryBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
            {t('respondHome.adsGalleryTitle1')}
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient-flow">{t('respondHome.adsGalleryTitle2')}</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('respondHome.adsGallerySubtitle')}
          </p>
        </div>

        <div className="relative mb-3" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="flex gap-3 ads-scroll-left" style={{ width: 'max-content' }}>
            {[...ADS_ROW_1, ...ADS_ROW_1].map((ad, i) => (
              <AdCard key={i} ad={ad} seed={i % 8} />
            ))}
          </div>
        </div>

        <div className="relative mb-3" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="flex gap-3 ads-scroll-right" style={{ width: 'max-content' }}>
            {[...ADS_ROW_2, ...ADS_ROW_2].map((ad, i) => (
              <AdCard key={i} ad={ad} seed={(i + 3) % 8} />
            ))}
          </div>
        </div>

        <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="flex gap-3 ads-scroll-left" style={{ width: 'max-content', animationDuration: '220s' }}>
            {[...ADS_ROW_3, ...ADS_ROW_3].map((ad, i) => (
              <AdCard key={i} ad={ad} seed={(i + 5) % 8} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4.5 · TRANSFORMATION (NEW)
          ══════════════════════════════════════════════════ */}
      <TransformationSection t={t} />

      {/* ══════════════════════════════════════════════════
          5 · AGENT LOOP ARCHITECTURE (DARK)
          ══════════════════════════════════════════════════ */}
      <AgentLoopArchitecture t={t} />

      {/* ══════════════════════════════════════════════════
          6 · AUTONOMY MODES (LIGHT)
          ══════════════════════════════════════════════════ */}
      <AutonomyModes t={t} />

      {/* ══════════════════════════════════════════════════
          7 · MEMORY MOAT (DARK)
          ══════════════════════════════════════════════════ */}
      <MemoryMoat t={t} />

      {/* ══════════════════════════════════════════════════
          8 · MULTI-CHANNEL TIMELINE (LIGHT)
          ══════════════════════════════════════════════════ */}
      <MultiChannelTimeline t={t} />

      {/* ══════════════════════════════════════════════════
          9 · STATS BAR (DARK)
          ══════════════════════════════════════════════════ */}
      <StatsBar t={t} />

      {/* ══════════════════════════════════════════════════
          10 · FOR WHOM (LIGHT)
          ══════════════════════════════════════════════════ */}
      <ForWhom t={t} />

      {/* ══════════════════════════════════════════════════
          11 · TESTIMONIALS (LIGHT-TINT)
          ══════════════════════════════════════════════════ */}
      <Testimonials t={t} />

      {/* ══════════════════════════════════════════════════
          12 · HOW TO START (LIGHT)
          ══════════════════════════════════════════════════ */}
      <HowToStart t={t} />

      {/* ══════════════════════════════════════════════════
          13 · FINAL CTA (DARK MESH)
          ══════════════════════════════════════════════════ */}
      <FinalCTA t={t} onOpenDemo={() => setDemoFormOpen(true)} />

      <Footer />

      <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   1 · HERO AURORA
   ════════════════════════════════════════════════════════ */
function HeroAurora({ onOpenDemo, t }: { onOpenDemo: () => void; t: any }) {
  return (
    <section
      className="relative px-5 sm:px-6 flex flex-col pt-20 sm:pt-24 lg:pt-8 lg:py-0 overflow-visible"
      style={{ minHeight: 'calc(100vh - 72px)' }}
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex items-center pt-4 lg:pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-8 items-center w-full">
          {/* ── LEFT · Editorial copy + CTAs ── */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-5">
            {/* Light glass pill — single-line at every viewport, smaller on mobile */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 mb-5 rounded-full transition-all hover:scale-[1.02] max-w-full"
              data-testid="announcement-pill"
            >
              <div className="flex items-center gap-1.5 sm:gap-3 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm whitespace-nowrap">
                <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-blue-700">
                  {t('respondHome.pillBadge')}
                </span>
                <span className="w-px h-3 bg-gray-300" />
                <span className="text-[10px] sm:text-[13px] text-gray-700">{t('respondHome.pillText')}</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            </a>

             {/* Headline — sized to fit each line on a single row at every breakpoint */}
             <h1
                className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[4rem] 2xl:text-[5rem] font-bold leading-tight tracking-tight mb-5 sm:mb-6"
               data-testid="hero-headline"
             >
               <span className="text-gray-900">{t('respondHome.heroLine1')}</span>
               <br />
               <TypingSalesText />
             </h1>

            <p
               className="text-base lg:text-lg text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
              data-testid="hero-description"
            >
              {t('respondHome.heroDesc')}
            </p>

            {/* Primary CTA only — secondary "Watch the agent work" removed */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <button
                onClick={() => (window.location.href = 'https://app.curbe.io/signup')}
                data-testid="button-hero-trial"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[15px] transition-all hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 60%, #a855f7 100%)',
                  boxShadow:
                    '0 12px 36px -10px rgba(124,58,237,0.6), inset 0 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                <span>{t('respondHome.heroCta')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Trust badges — single row at every viewport */}
            <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-x-3 sm:gap-x-5 lg:gap-x-6 text-[11px] sm:text-sm text-gray-700">
              {[
                t('respondHome.heroTrust1'),
                t('respondHome.heroTrust2'),
                t('respondHome.heroTrust3'),
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
             </div>
            </div>

           {/* ── RIGHT · 3D Ad Conveyor (scales with viewport) ── */}
           <div className="relative w-full min-w-0 max-w-full mt-6 lg:mt-0">
             <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] xl:h-[580px] overflow-hidden">
               <AdShowcaseHero />
             </div>
           </div>
        </div>
      </div>

    </section>
  );
}

const Play = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

/* ════════════════════════════════════════════════════════
   2 · AGENT THEATER
   ════════════════════════════════════════════════════════ */
function AgentTheater({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const stream = [
    ...REASONING_STREAM_KEYS.map(s => ({ kind: s.kind, color: s.color, ts: s.ts, text: t(`respondHome.${s.tKey}`) })),
    ...REASONING_STREAM_EXTRA,
  ];

  return (
    <section
      className="relative py-16 lg:py-24 px-6 overflow-hidden"
      data-testid="agent-theater"
    >
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            {t('respondHome.momentBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gray-900">{t('respondHome.momentTitle1New')}</span>
            <br />
            <span className="text-gray-900">{t('respondHome.momentTitle2New')}</span>
            {' '}
            <span className="text-gradient-flow">{t('respondHome.momentTitle3New')}</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {t('respondHome.momentDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
          {/* Left: Reasoning Stream */}
          <div className="glass-card-light rounded-2xl p-6 lg:p-8 relative">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <CircleDot className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-600">Agent Reasoning Stream · sat 02:34 AM</span>
              </div>
              <span className="text-[10px] font-mono text-gray-500">ts · UTC</span>
            </div>

            <div className="relative">
              <div className="absolute top-1 bottom-1 left-[7px] w-px bg-gradient-to-b from-blue-500/40 via-violet-500/40 to-emerald-500/40" />
              <div className="space-y-5">
                {stream.map((s, i) => (
                  <StreamItem key={i} index={i} kind={s.kind} color={s.color} ts={s.ts} text={s.text} />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500">elapsed: 19s · errors: 0</span>
              <span className="text-[10px] font-mono text-emerald-600 tracking-widest">✓ MISSION COMPLETE</span>
            </div>
          </div>

          {/* Right: Result the next morning */}
          <div className="space-y-4">
            <span className="block text-[11px] font-mono uppercase tracking-[0.22em] text-emerald-700 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-emerald-200 w-fit">
              {t('respondHome.momentResultBadge')}
            </span>
            <ResultStat label={t('respondHome.momentStat1Label')} value={40} suffix="%" prefix="+" gradient="from-emerald-500 to-cyan-500" />
            <ResultStat label={t('respondHome.momentStat2Label')} value={3200} prefix="$" gradient="from-blue-500 to-violet-500" />
            <ResultStat label={t('respondHome.momentStat3Label')} value={11} prefix="$" gradient="from-violet-500 to-fuchsia-500" />

            {/* Reallocation chart */}
            <div className="glass-card-light rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-600">Budget reallocation</span>
                <span className="text-[10px] font-mono text-gray-500">last 12h</span>
              </div>
              <ReallocationChart />
            </div>

            <div className="glass-card-light rounded-2xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 grid place-items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm text-gray-900 font-semibold">{t('respondHome.momentResult3')}</div>
                <div className="text-[11px] text-gray-600">{t('respondHome.momentContrast')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StreamItem({ index, kind, color, ts, text }: { index: number; kind: string; color: string; ts: string; text: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal-on-scroll relative pl-8"
      style={{ transitionDelay: `${index * 80}ms`, borderLeft: `2px solid transparent` }}
    >
      <span
        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 0 4px ${color}22, 0 0 18px ${color}66`,
        }}
      />
      <div className="flex items-baseline gap-2 mb-1">
        <span className="font-mono text-[10px] text-gray-500">{ts}</span>
        <span
          className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded"
          style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
        >
          {kind}
        </span>
      </div>
      <p className="text-gray-800 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ResultStat({ label, value, prefix = '', suffix = '', gradient }: { label: string; value: number; prefix?: string; suffix?: string; gradient: string }) {
  return (
    <div className="glass-card-light rounded-2xl p-5 relative overflow-hidden">
      <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-600 mb-2">{label}</div>
      <div className={`text-4xl lg:text-5xl font-bold tabular-nums bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        <AnimatedCounter to={value} prefix={prefix} suffix={suffix} />
      </div>
    </div>
  );
}

function ReallocationChart() {
  return (
    <svg viewBox="0 0 320 80" className="w-full h-20">
      <defs>
        <linearGradient id="rcA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="rcB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,55 Q40,50 60,52 T120,48 Q150,44 170,32 T240,18 Q280,14 320,10 L320,80 L0,80 Z"
        fill="url(#rcB)"
      />
      <path
        d="M0,55 Q40,50 60,52 T120,48 Q150,44 170,32 T240,18 Q280,14 320,10"
        fill="none"
        stroke="url(#rcA)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="320" cy="10" r="3.5" fill="#a855f7">
        <animate attributeName="r" values="3.5;5.5;3.5" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   3 · CAPABILITIES BENTO (LIGHT)
   ════════════════════════════════════════════════════════ */
function CapabilitiesBento({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="capabilities-section">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.capBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            {t('respondHome.capTitle1')}
            <br />
            <span className="text-gradient-flow">{t('respondHome.capTitle2')}</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-5">
            {t('respondHome.capSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* Creative Director - large */}
          <CapabilityCard
            className="md:col-span-3"
            badge={t('respondHome.creativeAgentBadge')}
            title={t('respondHome.cap1Title')}
            desc={t('respondHome.cap1Desc')}
            Icon={Sparkles}
            color="#7c3aed"
            tone="violet"
          >
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: 'image', Icon: ImageIcon, c: '#3b82f6' },
                { label: 'video', Icon: Video, c: '#a855f7' },
                { label: 'copy',  Icon: MessageSquare, c: '#06b6d4' },
                { label: 'audio', Icon: Mic, c: '#f59e0b' },
              ].map((m, i) => (
                <div key={i} className="aspect-square rounded-xl bg-white border border-slate-200 grid place-items-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 50% 0%, ${m.c}, transparent 70%)` }} />
                  <m.Icon className="w-5 h-5 mb-1" style={{ color: m.c }} />
                  <span className="absolute bottom-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['AI Copy', 'AI Images', 'AI Video', 'AI Audio'].map(p => (
                <span key={p} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">{p}</span>
              ))}
            </div>
          </CapabilityCard>

          {/* Conversational - large */}
          <CapabilityCard
            className="md:col-span-3"
            badge={t('respondHome.conversationalAgentBadge')}
            title={t('respondHome.cap2Title')}
            desc={t('respondHome.cap2Desc')}
            Icon={MessageSquare}
            color="#10b981"
            tone="emerald"
          >
            <div className="space-y-2">
              <div className="self-start max-w-[80%] bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2 text-[13px] text-slate-700 shadow-sm">
                {t('respondHome.cap2ChatLead')}
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm px-3.5 py-2 text-[13px] text-white"
                   style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                {t('respondHome.cap2ChatBot')}
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[11px] text-emerald-600 font-semibold">{t('respondHome.cap2ChatTime')}</span>
              </div>
            </div>
          </CapabilityCard>

          {/* Optimizer */}
          <CapabilityCard
            className="md:col-span-2"
            badge={t('respondHome.optimizerAgentBadge')}
            title={t('respondHome.cap3Title')}
            desc={t('respondHome.cap3Desc')}
            Icon={TrendingUp}
            color="#2563eb"
            tone="blue"
          >
            <BudgetBars
              rows={[
                { label: t('respondHome.cap3Row1Label'), pct: 84, color: '#10b981' },
                { label: t('respondHome.cap3Row2Label'), pct: 60, color: '#3b82f6' },
                { label: t('respondHome.cap3Row3Label'), pct: 12, color: '#94a3b8', state: t('respondHome.cap3Row3Budget') },
              ]}
            />
          </CapabilityCard>

          {/* Compliance */}
          <CapabilityCard
            className="md:col-span-2"
            badge={t('respondHome.complianceAgentBadge')}
            title={t('respondHome.cap4Title')}
            desc={t('respondHome.cap4Desc')}
            Icon={ShieldCheck}
            color="#dc2626"
            tone="rose"
          >
            <div className="font-mono text-[11px] space-y-1.5 bg-slate-900 text-slate-300 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <span className="text-rose-400">⚠</span>
                <span className="text-rose-300">{t('respondHome.cap4Alert1')}</span>
              </div>
              <div className="text-slate-500 pl-5 leading-snug">{t('respondHome.cap4Alert1Desc')}</div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">↻</span>
                <span className="text-amber-300">{t('respondHome.cap4Alert2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-emerald-300">{t('respondHome.cap4Alert3')}</span>
              </div>
            </div>
          </CapabilityCard>

          {/* Stat strip */}
          <CapabilityCard
            className="md:col-span-2"
            badge={t('respondHome.autoFixBadge')}
            title={t('respondHome.autoFixTitle')}
            desc={t('respondHome.autoFixDesc')}
            Icon={Shield}
            color="#0891b2"
            tone="cyan"
          >
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: '95%',  l: t('respondHome.autoFixStat1') },
                { v: '<4s',  l: t('respondHome.autoFixStat2') },
                { v: '24/7', l: t('respondHome.autoFixStat3') },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                  <div className="text-xl font-bold text-slate-900 tabular-nums">{s.v}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </CapabilityCard>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  className = '',
  badge,
  title,
  desc,
  Icon,
  color,
  tone,
  children,
}: {
  className?: string;
  badge: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  tone: 'violet' | 'emerald' | 'blue' | 'rose' | 'cyan';
  children?: React.ReactNode;
}) {
  const spotRef = useSpotlight<HTMLDivElement>();
  const toneBg: Record<string, string> = {
    violet:  'linear-gradient(180deg, #faf5ff 0%, #ffffff 100%)',
    emerald: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
    blue:    'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
    rose:    'linear-gradient(180deg, #fff1f2 0%, #ffffff 100%)',
    cyan:    'linear-gradient(180deg, #ecfeff 0%, #ffffff 100%)',
  };

  return (
    <div
      ref={spotRef}
      className={`spotlight-card relative rounded-3xl p-7 border border-slate-200 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)] ${className}`}
      style={{ background: toneBg[tone] }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl grid place-items-center"
          style={{ background: `${color}15`, color, border: `1px solid ${color}33` }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold font-mono uppercase tracking-[0.22em]" style={{ color }}>
          {badge}
        </span>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">{desc}</p>
      {children}
    </div>
  );
}

function BudgetBars({ rows }: { rows: Array<{ label: string; pct: number; color: string; state?: string }> }) {
  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <div key={i}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[12px] font-medium text-slate-700">{r.label}</span>
            <span className="text-[10px] font-mono" style={{ color: r.state ? '#94a3b8' : r.color }}>
              {r.state ?? `${r.pct}%`}
            </span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{ width: `${r.pct}%`, background: r.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   5 · AGENT LOOP ARCHITECTURE (DARK)
   ════════════════════════════════════════════════════════ */
function AgentLoopArchitecture({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    { Icon: Eye,        labelKey: 'loopStep1Label', descKey: 'loopStep1Desc', color: '#3b82f6' },
    { Icon: Database,   labelKey: 'loopStep2Label', descKey: 'loopStep2Desc', color: '#06b6d4' },
    { Icon: Brain,      labelKey: 'loopStep3Label', descKey: 'loopStep3Desc', color: '#a855f7' },
    { Icon: Zap,        labelKey: 'loopStep4Label', descKey: 'loopStep4Desc', color: '#10b981' },
    { Icon: Target,     labelKey: 'loopStep5Label', descKey: 'loopStep5Desc', color: '#f59e0b' },
    { Icon: GitBranch,  labelKey: 'loopStep6Label', descKey: 'loopStep6Desc', color: '#ec4899' },
    { Icon: RotateCw,   labelKey: 'loopStep7Label', descKey: 'loopStep7Desc', color: '#64748b' },
  ];
  const radius = 180;

  return (
    <section className="relative py-16 lg:py-24 px-6 overflow-hidden" data-testid="agent-loop-section">
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-violet-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-violet-200">
            {t('respondHome.loopBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gray-900">{t('respondHome.loopTitle1')}</span>
            <br />
            <span className="text-gradient-flow">{t('respondHome.loopTitle2')}</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {t('respondHome.loopDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Orbital visualization */}
          <div className="relative mx-auto" style={{ width: 480, height: 480, maxWidth: '100%' }}>
            {/* outer orbit ring */}
            <div
              className="absolute inset-6 rounded-full border border-gray-300/60"
              style={{ animation: 'orbitSpin 60s linear infinite' }}
            >
              {[...Array(7)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/60"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${(360 / 7) * i}deg) translate(216px) rotate(-${(360 / 7) * i}deg)`,
                  }}
                />
              ))}
            </div>

            {/* SVG connectors */}
            <svg viewBox="-240 -240 480 480" className="absolute inset-0 w-full h-full">
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"  stopColor="#a855f7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="0" cy="0" r="120" fill="url(#centerGlow)" />
              {steps.map((_, i) => {
                const angle = (Math.PI * 2 * i) / steps.length - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <line
                    key={i}
                    x1="0" y1="0" x2={x} y2={y}
                    stroke={steps[i].color}
                    strokeWidth="1"
                    strokeOpacity="0.35"
                    className="edge-flow"
                  />
                );
              })}
            </svg>

            {/* Center node */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center border border-violet-200"
              style={{
                background: 'radial-gradient(circle at 30% 25%, rgba(168,85,247,0.25), rgba(255,255,255,0.95) 65%)',
                boxShadow: '0 20px 60px -20px rgba(168,85,247,0.5)',
              }}
            >
              <div className="absolute inset-0 rounded-full glow-pulse" />
              <div className="text-center">
                <Brain className="w-7 h-7 text-violet-600 mx-auto mb-1" />
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-800">Agent</div>
                <div className="text-[9px] font-mono text-gray-500 mt-0.5">cycle 60s</div>
              </div>
            </div>

            {/* Step nodes */}
            {steps.map((s, i) => {
              const angle = (Math.PI * 2 * i) / steps.length - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: '50%', left: '50%',
                    transform: `translate(${x - 28}px, ${y - 28}px)`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl border flex flex-col items-center justify-center backdrop-blur-md bg-white/80"
                    style={{
                      borderColor: `${s.color}66`,
                      boxShadow: `0 8px 24px ${s.color}33`,
                    }}
                  >
                    <s.Icon className="w-4 h-4" style={{ color: s.color }} />
                    <span className="text-[8px] font-mono uppercase mt-0.5 text-gray-800">
                      {t(`respondHome.${s.labelKey}`)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Supporting points */}
          <div className="space-y-4">
            {[
              { Icon: Brain,    color: '#a855f7', label: t('respondHome.loopPoint1Label'), desc: t('respondHome.loopPoint1Desc') },
              { Icon: BarChart3, color: '#3b82f6', label: t('respondHome.loopPoint2Label'), desc: t('respondHome.loopPoint2Desc') },
              { Icon: Database, color: '#06b6d4', label: t('respondHome.loopPoint3Label'), desc: t('respondHome.loopPoint3Desc') },
            ].map((p, i) => (
              <div key={i} className="glass-card-light rounded-2xl p-5 flex gap-4">
                <div
                  className="w-10 h-10 rounded-xl shrink-0 grid place-items-center"
                  style={{ background: `${p.color}1a`, border: `1px solid ${p.color}55` }}
                >
                  <p.Icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold mb-1">{p.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   6 · AUTONOMY MODES (LIGHT)
   ════════════════════════════════════════════════════════ */
function AutonomyModes({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const modes = [
    {
      Icon: Lightbulb,
      mode: t('respondHome.copilotMode'),
      headline: t('respondHome.copilotHeadline'),
      desc: t('respondHome.copilotDesc'),
      tags: [t('respondHome.copilotTag1'), t('respondHome.copilotTag2'), t('respondHome.copilotTag3')],
      color: '#7c3aed',
      ring: 'ring-violet-200',
      featured: false,
    },
    {
      Icon: Radio,
      mode: t('respondHome.pilotMode'),
      headline: t('respondHome.pilotHeadline'),
      desc: t('respondHome.pilotDesc'),
      tags: [t('respondHome.pilotTag1'), t('respondHome.pilotTag2'), t('respondHome.pilotTag3')],
      color: '#2563eb',
      ring: 'ring-blue-200',
      featured: true,
    },
    {
      Icon: Rocket,
      mode: t('respondHome.autopilotMode'),
      headline: t('respondHome.autopilotHeadline'),
      desc: t('respondHome.autopilotDesc'),
      tags: [t('respondHome.autopilotTag1'), t('respondHome.autopilotTag2'), t('respondHome.autopilotTag3')],
      color: '#10b981',
      ring: 'ring-emerald-200',
      featured: false,
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="autonomy-section">
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.autonomyBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            {t('respondHome.autonomyTitle1')}
            <br />
            <span className="text-gradient-flow">{t('respondHome.autonomyTitle2')}</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {t('respondHome.autonomySubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {modes.map((m, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-7 bg-white border ${m.featured ? 'md:scale-[1.04] md:-mt-3 ring-2 ring-blue-400/40 border-blue-200 shadow-[0_30px_70px_-25px_rgba(37,99,235,0.5)]' : 'border-slate-200 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.12)]'}`}
              style={m.featured ? { animation: 'glowPulse 3.4s ease-in-out infinite' } : {}}
            >
              {m.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white"
                      style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                  {t('respondHome.autonomyPopular')}
                </span>
              )}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-2xl mb-4 grid place-items-center"
                     style={{ background: `${m.color}15`, border: `1px solid ${m.color}40` }}>
                  <m.Icon className="w-7 h-7" style={{ color: m.color }} />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.22em] mb-1" style={{ color: m.color }}>
                  {m.mode}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">{m.headline}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-center mb-5">{m.desc}</p>
              <ul className="space-y-2">
                {m.tags.map((tag, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: m.color }} />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   7 · MEMORY MOAT (DARK)
   ════════════════════════════════════════════════════════ */
function MemoryMoat({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-16 lg:py-24 px-6 overflow-hidden" data-testid="memory-section">
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-cyan-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-cyan-200">
            {t('respondHome.memBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gray-900">{t('respondHome.memTitle1')}</span>
            <br />
            <span className="text-gradient-flow">{t('respondHome.memTitle2')}</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mt-5 leading-relaxed">
            {t('respondHome.memDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          {/* Layers */}
          <div className="space-y-4">
            {[
              { Icon: Hexagon,  label: t('respondHome.mem1Label'), desc: t('respondHome.mem1Desc'), color: '#3b82f6' },
              { Icon: Network,  label: t('respondHome.mem2Label'), desc: t('respondHome.mem2Desc'), color: '#a855f7' },
              { Icon: ImageIcon, label: t('respondHome.mem3Label'), desc: t('respondHome.mem3Desc'), color: '#06b6d4' },
            ].map((m, i) => (
              <div key={i} className="glass-card-light rounded-2xl p-5 flex gap-4">
                <div
                  className="w-12 h-12 rounded-xl shrink-0 grid place-items-center"
                  style={{ background: `${m.color}1a`, border: `1px solid ${m.color}55` }}
                >
                  <m.Icon className="w-5 h-5" style={{ color: m.color }} />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold mb-1">{m.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Knowledge graph */}
          <div className="relative glass-card-light rounded-3xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-600">memory.graph</span>
              <span className="text-[10px] font-mono text-emerald-600">14,892 nodes · 38,210 edges</span>
            </div>
            <KnowledgeGraph />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: '+18%',  label: t('respondHome.memStat1Label'), desc: t('respondHome.memStat1Desc') },
            { v: '999+',  label: t('respondHome.memStat2Label'), desc: t('respondHome.memStat2Desc') },
            { v: '24/7',  label: t('respondHome.memStat3Label'), desc: t('respondHome.memStat3Desc') },
            { v: '100%',  label: t('respondHome.memStat4Label'), desc: t('respondHome.memStat4Desc') },
          ].map((s, i) => (
            <div key={i} className="glass-card-light rounded-2xl p-5 text-left">
              <div className="text-3xl font-bold text-gray-900 tabular-nums mb-1">{s.v}</div>
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-gray-600 mb-1">{s.label}</div>
              <div className="text-[12px] text-gray-500">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowledgeGraph() {
  const nodes = useMemo(() => {
    const arr: Array<{ x: number; y: number; r: number; color: string; pulse: boolean }> = [
      { x: 180, y: 110, r: 12, color: '#a855f7', pulse: true },
      { x:  70, y:  60, r:  6, color: '#3b82f6', pulse: false },
      { x: 110, y: 170, r:  7, color: '#06b6d4', pulse: false },
      { x: 280, y:  60, r:  6, color: '#10b981', pulse: false },
      { x: 290, y: 170, r:  7, color: '#3b82f6', pulse: false },
      { x:  40, y: 130, r:  4, color: '#a855f7', pulse: false },
      { x: 200, y:  30, r:  4, color: '#06b6d4', pulse: false },
      { x: 230, y: 200, r:  5, color: '#10b981', pulse: false },
      { x: 340, y: 110, r:  4, color: '#a855f7', pulse: false },
    ];
    return arr;
  }, []);

  const edges = useMemo(() => {
    return [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [1, 6], [3, 6], [4, 7], [4, 8], [3, 8],
      [2, 5], [2, 7],
    ] as Array<[number, number]>;
  }, []);

  return (
    <svg viewBox="0 0 380 230" className="w-full h-72">
      <defs>
        <linearGradient id="kgEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="kgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="180" cy="110" r="80" fill="url(#kgGlow)" />
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#kgEdge)"
          strokeWidth="1"
          strokeOpacity="0.5"
          className="edge-flow"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity="0.9">
            {n.pulse && (
              <animate attributeName="r" values={`${n.r};${n.r + 3};${n.r}`} dur="2.4s" repeatCount="indefinite" />
            )}
          </circle>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none" stroke={n.color} strokeOpacity="0.25" />
        </g>
      ))}
      {/* Edge dots traveling */}
      {edges.slice(0, 6).map(([a, b], i) => (
        <circle key={`d${i}`} r="2" fill="#ffffff">
          <animateMotion
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
            path={`M${nodes[a].x},${nodes[a].y} L${nodes[b].x},${nodes[b].y}`}
          />
        </circle>
      ))}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════
   8 · MULTI CHANNEL TIMELINE (LIGHT)
   ════════════════════════════════════════════════════════ */
function MultiChannelTimeline({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const channels = [
    { Icon: Globe,        labelKey: 'multiCh1Label', descKey: 'multiCh1Desc', color: '#2563eb' },
    { Icon: MessageSquare, labelKey: 'multiCh2Label', descKey: 'multiCh2Desc', color: '#10b981' },
    { Icon: MessageCircle, labelKey: 'multiCh3Label', descKey: 'multiCh3Desc', color: '#7c3aed' },
    { Icon: PhoneCall,    labelKey: 'multiCh4Label', descKey: 'multiCh4Desc', color: '#ea580c' },
    { Icon: CreditCard,   labelKey: 'multiCh5Label', descKey: 'multiCh5Desc', color: '#0891b2' },
  ];
  const journey = [
    { stepKey: 'journeyStep1', ch: 'Meta Ads',  time: '00:00', color: '#2563eb' },
    { stepKey: 'journeyStep2', ch: 'WhatsApp',  time: '00:04', color: '#10b981' },
    { stepKey: 'journeyStep3', ch: 'WhatsApp',  time: '00:08', color: '#10b981' },
    { stepKey: 'journeyStep4', ch: 'AI Voice',  time: '24:00', color: '#ea580c' },
    { stepKey: 'journeyStep5', ch: 'Stripe',    time: '24:12', color: '#0891b2' },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="multichannel-section">
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.multiBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            {t('respondHome.multiTitle1')}
            <br />
            <span className="text-gradient-flow">{t('respondHome.multiTitle2')}</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {t('respondHome.multiDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Channels list */}
          <div className="space-y-3">
            {channels.map((c, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white border border-slate-200 flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl shrink-0 grid place-items-center"
                     style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                  <c.Icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t(`respondHome.${c.labelKey}`)}</div>
                  <div className="text-sm text-slate-600">{t(`respondHome.${c.descKey}`)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey timeline */}
          <div className="relative bg-white rounded-3xl border border-slate-200 p-6 shadow-[0_20px_60px_-30px_rgba(37,99,235,0.2)]">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-500">Lead journey · automatic</span>
              <span className="text-[10px] font-mono text-emerald-600">live</span>
            </div>
            <div className="relative pl-7">
              <div className="absolute top-0 bottom-0 left-2.5 w-px"
                   style={{
                     background: 'linear-gradient(180deg, #2563eb 0%, #10b981 35%, #ea580c 75%, #0891b2 100%)',
                   }} />
              <div className="absolute top-0 left-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100" />

              <div className="space-y-5">
                {journey.map((j, i) => (
                  <div key={i} className="relative">
                    <span
                      className="absolute -left-[26px] top-1 w-3 h-3 rounded-full ring-4"
                      style={{ background: j.color, boxShadow: `0 0 0 4px ${j.color}22` }}
                    />
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[10px] font-mono text-slate-500">{j.time}</span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: j.color }}>
                        {j.ch}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{t(`respondHome.${j.stepKey}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700">{t('respondHome.journeyResult')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   9 · STATS BAR (DARK)
   ════════════════════════════════════════════════════════ */
function StatsBar({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      className="relative py-20 lg:py-24 px-6 overflow-hidden"
      data-testid="stats-bar"
    >
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto relative grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Stat label={t('respondHome.stat1')} value={4.8} suffix="×" decimals={1} />
        <Stat label={t('respondHome.stat2')} value={95}  suffix="%" />
        <Stat label={t('respondHome.stat3')} value={4}   prefix="<" suffix="s" />
        <Stat label={t('respondHome.stat4')} value={0} />
      </div>
    </section>
  );
}

function Stat({ label, value, prefix = '', suffix = '', decimals = 0 }: { label: string; value: number; prefix?: string; suffix?: string; decimals?: number }) {
  return (
    <div className="text-center">
      <div className="text-5xl lg:text-6xl xl:text-7xl font-bold tabular-nums mb-3">
        <span className="text-gradient-flow">
          <AnimatedCounter to={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        </span>
      </div>
      <div className="text-sm text-gray-700 leading-tight max-w-[200px] mx-auto">{label}</div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   10 · FOR WHOM (LIGHT)
   ════════════════════════════════════════════════════════ */
function ForWhom({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const segs = [
    { Icon: Megaphone, key: 1, color: '#2563eb' },
    { Icon: ShoppingBag, key: 2, color: '#10b981' },
    { Icon: Users, key: 3, color: '#a855f7' },
    { Icon: Target, key: 4, color: '#ea580c' },
    { Icon: GraduationCap, key: 5, color: '#0891b2' },
    { Icon: Store, key: 6, color: '#dc2626' },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="for-whom-section">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.forWhomBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            {t('respondHome.forWhomTitle1')}
            <br />
            <span className="text-gradient-flow">{t('respondHome.forWhomTitle2')}</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-5">
            {t('respondHome.forWhomSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {segs.map((s) => (
            <SegmentCard
              key={s.key}
              Icon={s.Icon}
              color={s.color}
              title={t(`respondHome.fw${s.key}Title`)}
              desc={t(`respondHome.fw${s.key}Desc`)}
              tags={[
                t(`respondHome.fw${s.key}Tag1`),
                t(`respondHome.fw${s.key}Tag2`),
                t(`respondHome.fw${s.key}Tag3`),
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentCard({ Icon, color, title, desc, tags }: { Icon: LucideIcon; color: string; title: string; desc: string; tags: string[] }) {
  const spotRef = useSpotlight<HTMLDivElement>();
  return (
    <div
      ref={spotRef}
      className="spotlight-card relative rounded-3xl p-7 bg-white border border-slate-200 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.12)]"
    >
      <div className="w-12 h-12 rounded-2xl mb-4 grid place-items-center"
           style={{ background: `${color}12`, border: `1px solid ${color}33` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   11 · TESTIMONIALS (LIGHT-TINT)
   ════════════════════════════════════════════════════════ */
function Testimonials({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      className="relative py-16 lg:py-24 px-6"
      data-testid="testimonials-section"
    >
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.testimBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            {t('respondHome.testimTitle1')}
            <br />
            <span className="text-gradient-flow">{t('respondHome.testimTitle2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-3xl p-7 bg-white border border-slate-200 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.12)] flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-[15px] leading-relaxed mb-6 flex-1">
                "{t(`respondHome.testim${n}Quote`)}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                >
                  {String(t(`respondHome.testim${n}Author`)).charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t(`respondHome.testim${n}Author`)}</div>
                  <div className="text-xs text-slate-500">{t(`respondHome.testim${n}Title`)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured */}
        <div className="relative rounded-3xl p-8 lg:p-12 overflow-hidden border border-blue-200 shadow-[0_30px_70px_-25px_rgba(37,99,235,0.4)]"
             style={{ background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #f5f3ff 100%)' }}>
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl"
               style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed font-medium mb-7">
              "{t('respondHome.featuredQuote')}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
              >
                {String(t('respondHome.featuredAuthor')).charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">{t('respondHome.featuredAuthor')}</div>
                <div className="text-sm text-slate-600">{t('respondHome.featuredAuthorTitle')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   12 · HOW TO START (LIGHT)
   ════════════════════════════════════════════════════════ */
function HowToStart({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const steps = [
    { Icon: Wifi,    n: 1, color: '#2563eb' },
    { Icon: Brain,   n: 2, color: '#7c3aed' },
    { Icon: Rocket,  n: 3, color: '#10b981' },
    { Icon: RefreshCw, n: 4, color: '#0891b2' },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="how-it-works-section">
      <div ref={ref} className="reveal-on-scroll max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            {t('respondHome.howBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            {t('respondHome.howTitle1')}
            <br />
            <span className="text-gradient-flow">{t('respondHome.howTitle2')}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px"
               style={{ background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 33%, #10b981 66%, #0891b2 100%)' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-5">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="relative inline-block mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 grid place-items-center shadow-[0_10px_30px_-10px_rgba(15,23,42,0.2)]"
                       style={{ borderColor: `${s.color}40` }}>
                    <s.Icon className="w-7 h-7" style={{ color: s.color }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                       style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, boxShadow: `0 6px 18px ${s.color}55` }}>
                    {s.n}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`respondHome.how${s.n}Title`)}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t(`respondHome.how${s.n}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   13 · FINAL CTA (DARK MESH)
   ════════════════════════════════════════════════════════ */
function FinalCTA({ t, onOpenDemo }: { t: any; onOpenDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      className="relative py-32 lg:py-40 px-6 overflow-hidden"
      data-testid="final-cta-section"
    >
      <div ref={ref} className="reveal-on-scroll relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-emerald-300">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-emerald-700">{t('respondHome.ctaActiveBadge')}</span>
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
          <span className="text-gray-900">{t('respondHome.ctaTitle1')}</span>
          <br />
          <span className="text-gradient-flow">{t('respondHome.ctaTitle2')}</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('respondHome.ctaDesc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-gray-800 font-medium border border-gray-200 bg-white/70 backdrop-blur-md hover:bg-white/90 transition-all"
            data-testid="button-cta-sales"
          >
            {t('respondHome.ctaSalesBtn')}
          </button>
          <button
            onClick={() => (window.location.href = 'https://app.curbe.io/signup')}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 60%, #a855f7 100%)',
              boxShadow: '0 18px 50px -10px rgba(124,58,237,0.7), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
            data-testid="button-cta-trial"
          >
            <span>{t('respondHome.ctaFreeBtn')}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-700">
          {[t('respondHome.ctaTrust1'), t('respondHome.ctaTrust2'), t('respondHome.ctaTrust3')].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PAIN POINT SECTION (NEW)
   ════════════════════════════════════════════════════════ */
function PainPointSection({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const stats: Array<{
    Icon: LucideIcon;
    value: string;
    tag: string;
    title: string;
    desc: string;
    gradient: string;
    iconColor: string;
  }> = [
    {
      Icon: Clock,
      value: t('respondHome.pain1Value'),
      tag: t('respondHome.pain1Tag'),
      title: t('respondHome.pain1Title'),
      desc: t('respondHome.pain1Desc'),
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
      iconColor: '#f59e0b',
    },
    {
      Icon: DollarSign,
      value: t('respondHome.pain2Value'),
      tag: t('respondHome.pain2Tag'),
      title: t('respondHome.pain2Title'),
      desc: t('respondHome.pain2Desc'),
      gradient: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
      iconColor: '#ec4899',
    },
    {
      Icon: AlertTriangle,
      value: t('respondHome.pain3Value'),
      tag: t('respondHome.pain3Tag'),
      title: t('respondHome.pain3Title'),
      desc: t('respondHome.pain3Desc'),
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
      iconColor: '#3b82f6',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="pain-point-section">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-rose-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-rose-200">
            {t('respondHome.painKicker')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
            {t('respondHome.painTitle')}
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('respondHome.painSubtitle1')}{' '}
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('respondHome.painSubtitle2')}
            </span>{' '}
            {t('respondHome.painSubtitle3')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card-light rounded-3xl p-7 lg:p-8 flex flex-col"
              style={{ minHeight: 320 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-xl grid place-items-center"
                  style={{ background: `${s.iconColor}15`, color: s.iconColor, border: `1px solid ${s.iconColor}33` }}
                >
                  <s.Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold font-mono uppercase tracking-[0.22em] text-gray-500">
                  {s.tag}
                </span>
              </div>
              <div
                className="text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-4"
                style={{
                  background: s.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   WHY CURBE SECTION (NEW)
   ════════════════════════════════════════════════════════ */
function WhyCurbeSection({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const cards = [
    { title: t('respondHome.why1Title'), desc: t('respondHome.why1Desc'), Icon: Database, color: '#7c3aed' },
    { title: t('respondHome.why2Title'), desc: t('respondHome.why2Desc'), Icon: Workflow, color: '#ec4899' },
    { title: t('respondHome.why3Title'), desc: t('respondHome.why3Desc'), Icon: Target, color: '#2563eb' },
  ];

  return (
    <section id="why-us" className="relative py-16 lg:py-24 px-6" data-testid="why-curbe-section">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-violet-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-violet-200">
            {t('respondHome.whyKicker')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
            <span className="text-gradient-flow">{t('respondHome.whyTitle')}</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('respondHome.whySubtitle1')}{' '}
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('respondHome.whySubtitle2')}
            </span>{' '}
            {t('respondHome.whySubtitle3')}
          </p>
        </div>

        <div className="text-center mb-14">
          <div
            className="text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-3"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('respondHome.whyStatValue')}
          </div>
          <div className="text-[11px] font-bold font-mono uppercase tracking-[0.24em] text-gray-600">
            {t('respondHome.whyStatLabel')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="glass-card-light rounded-3xl p-7">
              <div
                className="w-11 h-11 rounded-xl grid place-items-center mb-4"
                style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}33` }}
              >
                <c.Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-snug mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PLATFORMS SECTION (NEW)
   ════════════════════════════════════════════════════════ */
function PlatformsSection({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();
  const platforms = [
    { name: t('respondHome.platform1Name'), desc: t('respondHome.platform1Desc'), Icon: Facebook, color: '#1877f2' },
    { name: t('respondHome.platform2Name'), desc: t('respondHome.platform2Desc'), Icon: Globe, color: '#4285f4' },
    { name: t('respondHome.platform3Name'), desc: t('respondHome.platform3Desc'), Icon: Music, color: '#ec4899' },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="platforms-section">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-blue-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-blue-200">
            {t('respondHome.platformsKicker')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
            <span className="text-gradient-flow">{t('respondHome.platformsTitle')}</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('respondHome.platformsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <div key={i} className="glass-card-light rounded-3xl p-7 lg:p-8 flex flex-col">
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center mb-5"
                style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}33` }}
              >
                <p.Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-3">{p.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   TRANSFORMATION SECTION (NEW)
   ════════════════════════════════════════════════════════ */
function TransformationSection({ t }: { t: any }) {
  const ref = useReveal<HTMLDivElement>();

  const StatBlock = ({ value, label, gradient }: { value: string; label: string; gradient: string }) => (
    <div className="glass-card-light rounded-3xl p-8 lg:p-10 text-center flex flex-col items-center justify-center">
      <div
        className="text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-3"
        style={{
          background: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </div>
      <div className="text-[11px] font-bold font-mono uppercase tracking-[0.24em] text-gray-600">
        {label}
      </div>
    </div>
  );

  const QuoteBlock = ({
    italic,
    bold,
    author,
    role,
  }: {
    italic: string;
    bold: string;
    author: string;
    role: string;
  }) => (
    <div className="glass-card-light rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
      <p className="text-gray-500 italic text-base mb-3 leading-relaxed">{italic}</p>
      <p className="text-gray-900 font-semibold text-lg lg:text-xl leading-snug mb-5">{bold}</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 grid place-items-center text-white font-bold text-sm">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{author}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 lg:py-24 px-6" data-testid="transformation-section">
      <div ref={ref} className="reveal-on-scroll max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-amber-700 mb-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-amber-200">
            {t('respondHome.transformKicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-5 max-w-4xl mx-auto">
            {t('respondHome.transformTitle')}
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('respondHome.transformSubtitle1')}{' '}
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('respondHome.transformSubtitle2')}
            </span>{' '}
            {t('respondHome.transformSubtitle3')}{' '}
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('respondHome.transformSubtitle4')}
            </span>
          </p>
        </div>

        <div className="space-y-6">
          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatBlock
              value={t('respondHome.transform1StatValue')}
              label={t('respondHome.transform1StatLabel')}
              gradient="linear-gradient(135deg, #f59e0b 0%, #f97316 100%)"
            />
            <QuoteBlock
              italic={t('respondHome.transform1Italic')}
              bold={t('respondHome.transform1Bold')}
              author={t('respondHome.transform1Author')}
              role={t('respondHome.transform1Role')}
            />
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuoteBlock
              italic={t('respondHome.transform2Italic')}
              bold={t('respondHome.transform2Bold')}
              author={t('respondHome.transform2Author')}
              role={t('respondHome.transform2Role')}
            />
            <StatBlock
              value={t('respondHome.transform2StatValue')}
              label={t('respondHome.transform2StatLabel')}
              gradient="linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
            />
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatBlock
              value={t('respondHome.transform3StatValue')}
              label={t('respondHome.transform3StatLabel')}
              gradient="linear-gradient(135deg, #ec4899 0%, #f472b6 100%)"
            />
            <QuoteBlock
              italic={t('respondHome.transform3Italic')}
              bold={t('respondHome.transform3Bold')}
              author={t('respondHome.transform3Author')}
              role={t('respondHome.transform3Role')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
