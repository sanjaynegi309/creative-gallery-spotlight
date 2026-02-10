import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6 animate-fade-up">
          A Collective of Visionaries
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8 animate-fade-up stagger-1">
          <span className="text-gradient-gold">The Unmapped</span>
          <br />
          <span className="text-foreground italic font-normal">Studio</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-up stagger-2">
          Five artists. Uncharted territories. Where the unseen becomes unforgettable.
        </p>
        <a
          href="#artists"
          className="inline-block mt-10 px-8 py-3 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 animate-fade-up stagger-3"
        >
          Explore Works
        </a>
      </div>
    </section>
  );
};

export default Hero;
