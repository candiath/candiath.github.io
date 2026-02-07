import { Download, ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { CV_HASH } from "../generated/cv-hash";
import Flag from "react-world-flags";

export const CV = () => {
  const { t, i18n } = useTranslation('cv');
  const [showViewDropdown, setShowViewDropdown] = useState(false);
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  
  const viewDropdownRef = useRef<HTMLDivElement>(null);
  const downloadDropdownRef = useRef<HTMLDivElement>(null);

  const cvFiles = {
    es: `/cv-es.pdf?v=${CV_HASH}`,
    en: `/cv-en.pdf?v=${CV_HASH}`
  };

  const languages = [
    { code: 'en', label: 'English', countryCode: 'US' },
    { code: 'es', label: 'Español', countryCode: 'ES' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (viewDropdownRef.current && !viewDropdownRef.current.contains(event.target as Node)) {
        setShowViewDropdown(false);
      }
      if (downloadDropdownRef.current && !downloadDropdownRef.current.contains(event.target as Node)) {
        setShowDownloadDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  const handleViewCV = (langCode?: string) => {
    const lang = langCode || i18n.language;
    window.open(cvFiles[lang as keyof typeof cvFiles], '_blank');
    setShowViewDropdown(false);
    // if (langCode) i18n.changeLanguage(langCode);
  };

  const handleDownloadCV = (langCode?: string) => {
    const lang = langCode || i18n.language;
    const link = document.createElement('a');
    link.href = cvFiles[lang as keyof typeof cvFiles];
    link.download = `CV-Natan-Candia-${lang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadDropdown(false);
    // if (langCode) i18n.changeLanguage(langCode);
  };

  const toggleViewDropdown = () => {
    setShowViewDropdown(!showViewDropdown);
  };

  const toggleDownloadDropdown = () => {
    setShowDownloadDropdown(!showDownloadDropdown);
  };

  return (
    <section
      id="cv"
      data-section-aliases="curriculum,resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance section-title">
          {t("title").split(" ")[0]}{" "}
          <span className="text-primary">{t("title").split(" ")[1]}</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* View CV Split Button */}
          <div className="relative w-full sm:w-auto" ref={viewDropdownRef}>
            <div className="group w-full sm:w-auto bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center min-w-64">
              <button
                onClick={() => handleViewCV()}
                className="flex-1 px-8 py-4 flex items-center gap-3"
                aria-label={t("viewBrowser")}
              >
                <SquareArrowOutUpRight size={22} />
                <span className="flex-1 text-left">{t("viewBrowser")}</span>
                <span className="text-sm opacity-80 flex items-center gap-1">
                  (<Flag code={currentLanguage.countryCode} style={{ width: 20, height: 15,marginTop: "2px" }} />{" "}
                  {currentLanguage.code.toUpperCase()})
                </span>
              </button>
              <button
                onClick={toggleViewDropdown}
                className="px-3 py-4 border-l border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
                aria-label="Seleccionar idioma"
                aria-expanded={showViewDropdown}
                aria-haspopup="true"
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform ${showViewDropdown ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* View Dropdown */}
            {showViewDropdown && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden min-w-64">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleViewCV(lang.code)}
                    className={`w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center gap-3 ${
                      i18n.language === lang.code
                        ? "bg-primary/10 text-primary"
                        : "text-foreground"
                    }`}
                  >
                    <SquareArrowOutUpRight size={22} />

                    <Flag
                      code={lang.countryCode}
                      style={{ width: 24, height: 18 }}
                    />
                    <span className="flex-1">{lang.label}</span>
                    {i18n.language === lang.code && (
                      <span className="text-primary font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download CV Split Button */}
          <div className="relative w-full sm:w-auto" ref={downloadDropdownRef}>
            <div className="group w-full sm:w-auto border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center min-w-64">
              <button
                onClick={() => handleDownloadCV()}
                className="flex-1 px-8 py-4 flex items-center gap-3"
                aria-label={t("download")}
              >
                <Download size={22} className="group-hover:animate-bounce" />
                <span className="flex-1 text-left">{t("download")}</span>
                <span className="text-sm opacity-80 flex items-center gap-1">
                  (<Flag code={currentLanguage.countryCode} style={{ width: 20, height: 15,marginTop: "2px" }} /> {currentLanguage.code.toUpperCase()})
                </span>
              </button>
              <button
                onClick={toggleDownloadDropdown}
                className="px-3 py-4 border-l border-primary/20 hover:bg-primary/10 transition-colors"
                aria-label="Seleccionar idioma"
                aria-expanded={showDownloadDropdown}
                aria-haspopup="true"
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform ${showDownloadDropdown ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* Download Dropdown */}
            {showDownloadDropdown && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden min-w-64">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleDownloadCV(lang.code)}
                    className={`w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center gap-3 ${
                      i18n.language === lang.code
                        ? "bg-primary/10 text-primary"
                        : "text-foreground"
                    }`}
                  >
                    <Download size={18} />
                    <Flag code={lang.countryCode} style={{ width: 20, height: 15,marginTop: "2px" }} />
                    {/* <span className="text-xl">{lang.countryCode}</span> */}
                    <span className="flex-1">{lang.label}</span>
                    {i18n.language === lang.code && (
                      <span className="text-primary font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-md">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {t("lastUpdate")}
              </span>{" "}
              {t("updateDate")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
