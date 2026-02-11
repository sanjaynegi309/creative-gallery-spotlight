import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import { artists, getAllPaintings, getAllMediums, Availability } from "@/data/artists";

const WorksPage = () => {
  const [artistFilter, setArtistFilter] = useState("all");
  const [mediumFilter, setMediumFilter] = useState("all");
  const [availFilter, setAvailFilter] = useState<"all" | Availability>("all");

  const allPaintings = useMemo(() => getAllPaintings(), []);
  const allMediums = useMemo(() => getAllMediums(), []);

  const filtered = useMemo(() => {
    return allPaintings.filter((p) => {
      if (artistFilter !== "all" && p.artistId !== artistFilter) return false;
      if (mediumFilter !== "all" && p.medium !== mediumFilter) return false;
      if (availFilter !== "all" && p.availability !== availFilter) return false;
      return true;
    });
  }, [allPaintings, artistFilter, mediumFilter, availFilter]);

  const selectClass =
    "bg-secondary/50 border border-border rounded-sm px-3 py-2 text-sm text-foreground font-body focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-body">Browse</span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
              All Works
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-border">
            <select value={artistFilter} onChange={(e) => setArtistFilter(e.target.value)} className={selectClass}>
              <option value="all">All Artists</option>
              {artists.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            <select value={mediumFilter} onChange={(e) => setMediumFilter(e.target.value)} className={selectClass}>
              <option value="all">All Mediums</option>
              {allMediums.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select value={availFilter} onChange={(e) => setAvailFilter(e.target.value as any)} className={selectClass}>
              <option value="all">All Availability</option>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
              <option value="on_hold">On Hold</option>
            </select>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground font-body mb-6">{filtered.length} work{filtered.length !== 1 ? "s" : ""}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((painting) => (
              <Link
                key={painting.id}
                to={`/works/${painting.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-4">
                  <img
                    src={painting.image}
                    alt={`${painting.title} by ${painting.artistName}`}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-500" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {painting.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mt-0.5">{painting.artistName}</p>
                    <p className="text-xs text-muted-foreground/70 font-body mt-0.5">
                      {painting.medium} · {painting.dimensions}
                    </p>
                  </div>
                  <AvailabilityBadge status={painting.availability} />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">No works match the current filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorksPage;
