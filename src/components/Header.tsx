const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-lg tracking-widest uppercase text-foreground">
          The Unmapped Studio
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#artists" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            Artists
          </a>
          <a href="#about" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#contact" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
