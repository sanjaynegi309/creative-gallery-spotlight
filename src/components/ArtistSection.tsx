import { Artist } from "@/data/artists";

interface ArtistSectionProps {
  artist: Artist;
  index: number;
}

const ArtistSection = ({ artist, index }: ArtistSectionProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] border-b border-border">
      <div
        className={`relative overflow-hidden group ${isReversed ? "lg:order-2" : ""}`}
      >
        <img
          src={artist.artwork}
          alt={artist.artworkTitle}
          className="w-full h-full object-cover min-h-[50vh] lg:min-h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-500" />
      </div>
      <div
        className={`flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 ${isReversed ? "lg:order-1" : ""}`}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-body">
          {artist.medium}
        </span>
        <h3 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
          {artist.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md font-body">
          {artist.bio}
        </p>
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground font-body">
            <span className="text-foreground font-medium">{artist.artworkTitle}</span>
            <span className="mx-2">·</span>
            {artist.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistSection;
