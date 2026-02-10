import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistSection from "@/components/ArtistSection";
import Footer from "@/components/Footer";
import { artists } from "@/data/artists";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="artists">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.4em] uppercase text-primary">The Collective</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4">
              Our Artists
            </h2>
          </div>
        </div>
        {artists.map((artist, index) => (
          <ArtistSection key={artist.id} artist={artist} index={index} />
        ))}
      </section>
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-primary">About</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-8">
            Beyond the Map
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The Unmapped Studio exists at the intersection of disciplines, geographies, and ideas.
            We believe the most powerful art emerges from territories that haven't been charted yet —
            where convention dissolves and raw creativity takes form.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
