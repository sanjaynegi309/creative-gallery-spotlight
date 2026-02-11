import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistSection from "@/components/ArtistSection";
import Footer from "@/components/Footer";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import { artists, getAllPaintings } from "@/data/artists";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const featured = getAllPaintings().filter((p) => p.availability === "available").slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Artist Carousel */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body">The Collective</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4">Our Artists</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {artists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[3/4]"
            >
              <img
                src={artist.artwork}
                alt={artist.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300">{artist.name}</h3>
                <p className="text-xs text-muted-foreground font-body mt-0.5">{artist.medium}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Full artist sections */}
      <section id="artists">
        {artists.map((artist, index) => (
          <ArtistSection key={artist.id} artist={artist} index={index} />
        ))}
      </section>

      {/* Selected Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-body">Featured</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4">Selected Works</h2>
          </div>
          <Link to="/works" className="text-sm tracking-wider uppercase text-primary hover:text-foreground transition-colors duration-300 font-body hidden md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((painting) => (
            <Link key={painting.id} to={`/works/${painting.id}`} className="group">
              <div className="relative overflow-hidden rounded-sm mb-3">
                <img
                  src={painting.image}
                  alt={`${painting.title} by ${painting.artistName}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-500" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors duration-300">{painting.title}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">{painting.artistName}</p>
                </div>
                <AvailabilityBadge status={painting.availability} />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/works" className="text-sm tracking-wider uppercase text-primary font-body">View All Works →</Link>
        </div>
      </section>

      {/* Creative Statement */}
      <section className="relative py-24 border-y border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="font-display text-2xl md:text-4xl text-foreground leading-snug italic font-normal">
            "We believe the most powerful art emerges from territories that haven't been charted yet — where convention dissolves and raw creativity takes form."
          </p>
          <span className="text-xs tracking-[0.3em] uppercase text-primary mt-8 block font-body">— The Unmapped Studio</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-primary">About</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-8">Beyond the Map</h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-body">
            The Unmapped Studio exists at the intersection of disciplines, geographies, and ideas.
            We believe the most powerful art emerges from territories that haven't been charted yet —
            where convention dissolves and raw creativity takes form.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-20 text-center max-w-lg">
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-body">Stay Connected</span>
          <h2 className="font-display text-3xl text-foreground mt-4 mb-3">Stay in the unmapped territory</h2>
          <p className="text-sm text-muted-foreground font-body mb-8">New works, exhibitions, and studio news — delivered thoughtfully.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="flex gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-secondary/50 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-body"
            />
            <button type="submit" className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body rounded-sm hover:bg-primary/90 transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
