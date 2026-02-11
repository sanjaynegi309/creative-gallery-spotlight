import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { artists, getAllPaintings } from "@/data/artists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import InquiryPanel from "@/components/InquiryPanel";
import { ArrowLeft } from "lucide-react";

const ArtworkDetailPage = () => {
  const { id } = useParams();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const allPaintings = getAllPaintings();
  const painting = allPaintings.find((p) => p.id === id);
  const artist = painting ? artists.find((a) => a.id === painting.artistId) : null;

  // Related works by same artist, excluding current
  const relatedWorks = artist
    ? artist.paintings.filter((p) => p.id !== id).slice(0, 3)
    : [];

  if (!painting || !artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Artwork Not Found</h1>
          <Link to="/works" className="text-primary hover:underline font-body">← Browse all works</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back */}
          <Link
            to={`/artist/${artist.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {artist.name}
          </Link>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
            {/* Image — 3 cols */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={painting.image}
                  alt={`${painting.title} by ${artist.name}, ${painting.medium}, ${painting.year}`}
                  className="w-full max-h-[75vh] object-contain bg-secondary/20"
                />
              </div>
            </div>

            {/* Details — 2 cols */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <AvailabilityBadge status={painting.availability} />
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-2">
                {painting.title}
              </h1>
              <Link to={`/artist/${artist.id}`} className="text-primary hover:underline text-sm font-body mb-6">
                {artist.name}
              </Link>

              <div className="space-y-3 border-t border-border pt-6 mb-8">
                <Detail label="Medium" value={painting.medium} />
                <Detail label="Dimensions" value={painting.dimensions} />
                <Detail label="Year" value={painting.year} />
              </div>

              {painting.description && (
                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-8">
                  {painting.description}
                </p>
              )}

              {painting.availability === "available" && (
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="w-full py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body hover:bg-primary/90 transition-colors duration-300 rounded-sm"
                >
                  Inquire About This Work
                </button>
              )}
              {painting.availability === "on_hold" && (
                <p className="text-sm text-muted-foreground font-body italic">This work is currently on hold. Contact us for updates.</p>
              )}
              {painting.availability === "sold" && (
                <p className="text-sm text-muted-foreground font-body italic">This work has been sold. Similar works may be available.</p>
              )}
            </div>
          </div>

          {/* Related Works */}
          {relatedWorks.length > 0 && (
            <section>
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-body">More by</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-2">
                  {artist.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedWorks.map((rw) => (
                  <Link key={rw.id} to={`/works/${rw.id}`} className="group">
                    <div className="relative overflow-hidden rounded-sm mb-3">
                      <img
                        src={rw.image}
                        alt={rw.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-display text-base text-foreground group-hover:text-primary transition-colors duration-300">{rw.title}</h4>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{rw.medium} · {rw.dimensions}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <InquiryPanel
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        painting={painting}
        artistName={artist.name}
      />

      <Footer />
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm font-body">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-foreground">{value}</span>
  </div>
);

export default ArtworkDetailPage;
