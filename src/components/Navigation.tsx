"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { GetSectionElement } from "../helpers/GetSectionElement.helper";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id?: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      window.history.replaceState(null, "", `/`);
      return;
    }
    
    let element = GetSectionElement(id)
    if ( element ) element.scrollIntoView({ behavior: "smooth" });
    
    // Limpiar cualquier pathname y usar solo hash
    window.history.replaceState(null, "", `/${id}`);
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Proyectos", id: "projects" },
    { label: "Experiencia y Formación", id: "experience" },
    { label: "Cursos y Certificados", id: "courses" },
    { label: "CV", id: "cv" },
    { label: "Contacto", id: "contact" },
    { label: "Sobre mí", id: "about" },
  ]

  return (
    <nav className={"fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-card transition-colors rounded"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
