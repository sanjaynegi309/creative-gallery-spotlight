import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { artists } from "@/data/artists";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="font-display text-lg tracking-widest uppercase text-foreground">
          The Unmapped Studio
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <a
              href="/#artists"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Artists
            </a>
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
      </div>
    </header>
  );
};

export default Header;
