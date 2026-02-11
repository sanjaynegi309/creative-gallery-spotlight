import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { artists } from "@/data/artists";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileArtistsOpen, setMobileArtistsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileArtistsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="font-display text-lg tracking-widest uppercase text-foreground">
            The Unmapped Studio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <Link
                to="/#artists"
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Artists
              </Link>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-card border border-border rounded-md shadow-xl min-w-[220px] py-2 px-1">
                  {artists.map((artist) => (
                    <Link
                      key={artist.id}
                      to={`/artist/${artist.id}`}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded transition-colors duration-200 font-body"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {artist.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/works"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Works
            </Link>
            <a
              href="/#about"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      {/* Mobile Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[201] w-72 bg-card border-l border-border transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display text-sm tracking-widest uppercase text-foreground">Menu</span>
          <button onClick={closeMobile} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-1">
          {/* Artists expandable */}
          <button
            onClick={() => setMobileArtistsOpen(!mobileArtistsOpen)}
            className="flex items-center justify-between py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Artists
            <span className={`text-xs transition-transform duration-200 ${mobileArtistsOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileArtistsOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 flex flex-col gap-1 pb-2">
              {artists.map((artist) => (
                <Link
                  key={artist.id}
                  to={`/artist/${artist.id}`}
                  onClick={closeMobile}
                  className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                >
                  {artist.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/works" onClick={closeMobile} className="py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200">
            Works
          </Link>
          <a href="/#about" onClick={closeMobile} className="py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200">
            About
          </a>
          <a href="/#contact" onClick={closeMobile} className="py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
