import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { artists, Painting } from "@/data/artists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe, ArrowLeft, X } from "lucide-react";

const ArtistPage = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Artist Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Back link */}
        <div className="container mx-auto px-6 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </Link>
        </div>

        {/* Artist Hero */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Artist Photo */}
            <div className="relative overflow-hidden rounded-sm animate-fade-up">
              <img
                src={artist.artwork}
                alt={artist.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Artist Info */}
            <div className="flex flex-col justify-center animate-fade-up stagger-2">
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
                {artist.medium}
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
                {artist.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-md font-body">
                {artist.bio}
              </p>

              {/* Contact Details */}
              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">Contact</h3>
                <a href={`mailto:${artist.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-body">{artist.email}</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-body">{artist.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-body">{artist.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-body">{artist.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Works Section */}
        <section className="container mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">Selected Works</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3">
              Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artist.paintings.map((painting, i) => (
              <button
                key={painting.id}
                onClick={() => setSelectedPainting(painting)}
                className={`group text-left animate-fade-up stagger-${i + 1} focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm`}
              >
                <div className="relative overflow-hidden rounded-sm mb-4">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-400" />
                </div>
                <h4 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {painting.title}
                </h4>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {painting.medium} · {painting.dimensions}
                </p>
                <p className="text-xs text-muted-foreground/70 font-body mt-0.5">{painting.year}</p>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedPainting && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setSelectedPainting(null)}
        >
          <div
            className="relative max-w-5xl w-full mx-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scaleIn 0.3s ease-out forwards" }}
          >
            <button
              onClick={() => setSelectedPainting(null)}
              className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPainting.image}
              alt={selectedPainting.title}
              className="w-full max-h-[75vh] object-contain rounded-sm"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-2xl text-foreground">{selectedPainting.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">
                {selectedPainting.medium} · {selectedPainting.dimensions} · {selectedPainting.year}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ArtistPage;
