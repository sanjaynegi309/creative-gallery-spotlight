const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-display text-2xl text-foreground mb-4">The Unmapped Studio</h4>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A contemporary art collective showcasing boundary-pushing work from emerging and established artists worldwide.
            </p>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Visit</h5>
            <p className="text-muted-foreground text-sm leading-relaxed">
              42 Gallery Lane<br />
              Brooklyn, NY 11201<br />
              Open Wed — Sun, 11am — 7pm
            </p>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Connect</h5>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@theunmappedstudio.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                hello@theunmappedstudio.com
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2025 The Unmapped Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
