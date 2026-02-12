import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

// Import artist JSON profiles
import geethaData from "@/content/artists/geetha-narayanan.json";
import rashmiData from "@/content/artists/rashmi-ayyagari.json";
import sanjayData from "@/content/artists/sanjay-negi.json";
import sophiaData from "@/content/artists/sophia-jacob.json";
import swatiData from "@/content/artists/swati-bhatia.json";

export type Availability = "available" | "sold" | "on_hold";

export interface Painting {
  id: string;
  title: string;
  image: string;
  dimensions: string;
  medium: string;
  year: string;
  availability: Availability;
  description?: string;
}

export interface Artist {
  id: string;
  name: string;
  medium: string;
  bio: string;
  artistStatement: string;
  artwork: string;
  artworkTitle: string;
  year: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  exhibitions: string[];
  paintings: Painting[];
}

// Fallback images for artists until they upload their own
const fallbackImages: Record<string, string> = {
  "geetha-narayanan": artwork1,
  "rashmi-ayyagari": artwork2,
  "sanjay-negi": artwork3,
  "sophia-jacob": artwork4,
  "swati-bhatia": artwork5,
};

function resolveImage(imagePath: string, artistId: string): string {
  // If the image path starts with /artworks/, it's a public folder reference
  // Use it directly — but also provide a fallback if the file doesn't exist yet
  if (imagePath.startsWith("/artworks/")) {
    return imagePath;
  }
  // Fallback to bundled placeholder
  return fallbackImages[artistId] || artwork1;
}

function mapJsonToArtist(data: typeof geethaData): Artist {
  const artistId = data.id;
  const paintings: Painting[] = data.paintings.map((p) => ({
    ...p,
    availability: p.availability as Availability,
    image: resolveImage(p.image, artistId),
  }));

  return {
    id: data.id,
    name: data.name,
    medium: data.medium,
    bio: data.bio,
    artistStatement: data.artistStatement,
    artwork: paintings[0]?.image || fallbackImages[artistId] || artwork1,
    artworkTitle: data.artworkTitle,
    year: data.year,
    email: data.email,
    phone: data.phone,
    location: data.location,
    website: data.website,
    exhibitions: data.exhibitions,
    paintings,
  };
}

export const artists: Artist[] = [
  mapJsonToArtist(geethaData),
  mapJsonToArtist(rashmiData),
  mapJsonToArtist(sanjayData),
  mapJsonToArtist(sophiaData),
  mapJsonToArtist(swatiData),
];

// Helper to get all paintings across all artists
export const getAllPaintings = () =>
  artists.flatMap((artist) =>
    artist.paintings.map((p) => ({ ...p, artistId: artist.id, artistName: artist.name }))
  );

// Get unique mediums across all paintings
export const getAllMediums = () => {
  const mediums = new Set(artists.flatMap((a) => a.paintings.map((p) => p.medium)));
  return Array.from(mediums).sort();
};
