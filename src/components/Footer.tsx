
export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} FullStack Developer. Todos los derechos reservados.</p>
          <p>Creado con <span className="text-accent">♥</span> por {" "}
            <span className="text-foreground font-semibold">Natán Candia</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
