"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"
import { GetSectionElement } from "../helpers/GetSectionElement.helper";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('navigation');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // menú móvil
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (id?: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      window.history.replaceState(null, "", `/`);
      return;
    }
    
    const element = GetSectionElement(id)
    if ( element ) element.scrollIntoView({ behavior: "smooth" });
    
    // Limpiar cualquier pathname y usar solo hash
    window.history.replaceState(null, "", `/${id}`);
    setIsOpen(false);
  };

  const navLinks = [
    { label: t('projects'), id: "projects" },
    { label: t('miniApps'), id: "mini-apps" },
    { label: t('experience'), id: "experience" },
    { label: t('courses'), id: "courses" },
    { label: t('cv'), id: "cv" },
    { label: t('contact'), id: "contact" },
    { label: t('about'), id: "about" },
  ]

  return (
    <nav className={"fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="shrink-0">
            <button
              onClick={() => scrollToSection()}
              className="text-xl font-bold text-primary hover:text-accent transition-colors"
            >
              &lt; Natán Candia /&gt;
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <ThemeSwitch />
            <LanguageSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)} 
              className="text-foreground hover:text-primary transition-colors"
              aria-label={isOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            ref={mobileMenuRef} 
            className="md:hidden mt-4 pb-4 border-t border-border"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-card transition-colors rounded"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 px-4">
              <ThemeSwitch />
              <LanguageSwitch onLanguageChange={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
