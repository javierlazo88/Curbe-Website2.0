import { useTranslation } from 'react-i18next';

function SpainFlag() {
  return (
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <mask id="spainCircle">
        <circle cx="256" cy="256" r="256" fill="white"/>
      </mask>
      <g mask="url(#spainCircle)">
        <rect y="0" width="512" height="128" fill="#c60b1e"/>
        <rect y="128" width="512" height="256" fill="#ffc400"/>
        <rect y="384" width="512" height="128" fill="#c60b1e"/>
      </g>
    </svg>
  );
}

function USAFlag() {
  return (
    <svg viewBox="0 0 512 512" className="w-full h-full">
      <mask id="usaCircle">
        <circle cx="256" cy="256" r="256" fill="white"/>
      </mask>
      <g mask="url(#usaCircle)">
        <rect width="512" height="512" fill="#fff"/>
        <g fill="#bf0a30">
          <rect width="512" height="39" y="0"/>
          <rect width="512" height="39" y="78"/>
          <rect width="512" height="39" y="156"/>
          <rect width="512" height="39" y="234"/>
          <rect width="512" height="39" y="312"/>
          <rect width="512" height="39" y="390"/>
          <rect width="512" height="39" y="468"/>
        </g>
        <rect width="205" height="273" fill="#002868"/>
      </g>
    </svg>
  );
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-white/40 transition-all hover:scale-110 active:scale-95"
      data-testid="button-language"
      title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {currentLang === 'es' ? <SpainFlag /> : <USAFlag />}
    </button>
  );
}
