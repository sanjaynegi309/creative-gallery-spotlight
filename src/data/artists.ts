import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

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

export const artists: Artist[] = [
  {
    id: "ren-vasquez",
    name: "Ren Vasquez",
    medium: "Abstract Expressionism",
    bio: "Working with bold gestural marks and raw pigments, Vasquez channels emotional intensity into canvases that pulse with kinetic energy. Based in Mexico City.",
    artistStatement: "I paint to excavate what language cannot reach. Each mark is an act of confrontation — with the surface, the self, and the silence between them. My work is not about beauty; it is about truth rendered in pigment.",
    artwork: artwork1,
    artworkTitle: "Fracture Line IV",
    year: "2024",
    email: "ren@unmappedstudio.com",
    phone: "+52 55 1234 5678",
    location: "Mexico City, Mexico",
    website: "renvasquez.art",
    exhibitions: [
      "Solo — 'Fault Lines', Museo Tamayo, Mexico City, 2024",
      "Group — 'New Expressionists', Gagosian, New York, 2023",
      "Group — 'Pulse', Art Basel Miami Beach, 2023",
    ],
    paintings: [
      { id: "rv-1", title: "Fracture Line IV", image: artwork1, dimensions: "120 × 180 cm", medium: "Acrylic on canvas", year: "2024", availability: "available", description: "A large-scale gestural work exploring tension between control and chaos." },
      { id: "rv-2", title: "Eruption Study", image: artwork2, dimensions: "90 × 120 cm", medium: "Oil and pigment on linen", year: "2023", availability: "sold" },
      { id: "rv-3", title: "Red Drift", image: artwork3, dimensions: "150 × 200 cm", medium: "Mixed media on canvas", year: "2024", availability: "available", description: "Layers of red and burnt sienna build a landscape of emotional turbulence." },
    ],
  },
  {
    id: "lena-mori",
    name: "Lena Mori",
    medium: "Sculpture & Installation",
    bio: "Mori's minimalist marble forms explore the tension between emptiness and presence. Her work has been exhibited at the Venice Biennale and Tate Modern.",
    artistStatement: "Sculpture, for me, is the practice of making absence visible. I carve into stone not to reveal form, but to expose the space it was hiding. The void is the subject.",
    artwork: artwork2,
    artworkTitle: "Threshold",
    year: "2023",
    email: "lena@unmappedstudio.com",
    phone: "+81 3 9876 5432",
    location: "Tokyo, Japan",
    website: "lenamori.studio",
    exhibitions: [
      "Solo — 'Negative Space', Tate Modern, London, 2024",
      "Venice Biennale, Japanese Pavilion, 2023",
      "Group — 'Material Futures', Museum of Contemporary Art Tokyo, 2023",
    ],
    paintings: [
      { id: "lm-1", title: "Threshold", image: artwork2, dimensions: "60 × 45 × 30 cm", medium: "Carrara marble", year: "2023", availability: "sold" },
      { id: "lm-2", title: "Vessel No.7", image: artwork4, dimensions: "40 × 40 × 55 cm", medium: "Bronze and glass", year: "2024", availability: "available", description: "A hollow bronze form encasing a glass orb — fragility protected by permanence." },
      { id: "lm-3", title: "Silence Archive", image: artwork1, dimensions: "200 × 100 × 80 cm", medium: "Steel and resin", year: "2023", availability: "on_hold" },
    ],
  },
  {
    id: "ayo-okafor",
    name: "Ayo Okafor",
    medium: "Digital Collage & Mixed Media",
    bio: "Okafor constructs surreal dreamscapes from found imagery, blending botanical elements with vast landscapes to question the boundary between nature and fantasy.",
    artistStatement: "I assemble worlds that don't exist yet. By layering fragments of the familiar — a leaf, a cloud, a forgotten photograph — I build doorways into futures we haven't imagined. Collage is prophecy.",
    artwork: artwork3,
    artworkTitle: "Bloom Meridian",
    year: "2025",
    email: "ayo@unmappedstudio.com",
    phone: "+234 802 345 6789",
    location: "Lagos, Nigeria",
    website: "ayookafor.com",
    exhibitions: [
      "Solo — 'Botanical Futures', Zeitz MOCAA, Cape Town, 2025",
      "Group — 'Digital Dreamers', Serpentine Gallery, London, 2024",
      "Lagos Biennial, Featured Artist, 2024",
    ],
    paintings: [
      { id: "ao-1", title: "Bloom Meridian", image: artwork3, dimensions: "100 × 140 cm", medium: "Digital print on aluminium", year: "2025", availability: "available", description: "A lush collision of tropical flora and celestial geometry." },
      { id: "ao-2", title: "Canopy Dreaming", image: artwork5, dimensions: "80 × 110 cm", medium: "Collage and acrylic", year: "2024", availability: "available" },
      { id: "ao-3", title: "Root System", image: artwork2, dimensions: "120 × 160 cm", medium: "Digital collage", year: "2025", availability: "sold" },
    ],
  },
  {
    id: "sable-noir",
    name: "Sable Noir",
    medium: "Fine Art Photography",
    bio: "Through dramatic chiaroscuro lighting, Noir captures the raw vulnerability of the human form. Their portraits reveal what words conceal.",
    artistStatement: "The camera is a confessional. I don't take photographs — I receive them. My subjects offer something invisible, and the light catches it for a fraction of a second. That fraction is everything.",
    artwork: artwork4,
    artworkTitle: "The Witness",
    year: "2024",
    email: "sable@unmappedstudio.com",
    phone: "+33 6 1234 5678",
    location: "Paris, France",
    website: "sablenoir.photo",
    exhibitions: [
      "Solo — 'Confessions', Centre Pompidou, Paris, 2024",
      "Group — 'Light & Shadow', MoMA PS1, New York, 2023",
      "Paris Photo Fair, Featured Artist, 2023",
    ],
    paintings: [
      { id: "sn-1", title: "The Witness", image: artwork4, dimensions: "90 × 60 cm", medium: "Archival pigment print", year: "2024", availability: "available", description: "A solitary figure emerges from absolute darkness — vulnerability made luminous." },
      { id: "sn-2", title: "Veil", image: artwork1, dimensions: "120 × 80 cm", medium: "Silver gelatin print", year: "2023", availability: "sold" },
      { id: "sn-3", title: "Between Shadows", image: artwork3, dimensions: "100 × 70 cm", medium: "C-type print", year: "2024", availability: "available" },
    ],
  },
  {
    id: "eli-strand",
    name: "Eli Strand",
    medium: "Oil on Canvas",
    bio: "Strand's thick impasto landscapes reimagine terrain as emotional geography — where deep blues meet burnt sienna in collisions of color and texture.",
    artistStatement: "I paint the earth as it feels, not as it appears. Mountains become grief. Rivers become memory. Every landscape is a self-portrait in disguise. The paint must be thick enough to hold the weight.",
    artwork: artwork5,
    artworkTitle: "Horizon Breach",
    year: "2025",
    email: "eli@unmappedstudio.com",
    phone: "+47 912 34 567",
    location: "Oslo, Norway",
    website: "elistrand.no",
    exhibitions: [
      "Solo — 'Emotional Cartography', Astrup Fearnley Museum, Oslo, 2025",
      "Group — 'Nordic Landscapes', Louisiana Museum, Copenhagen, 2024",
      "Group — 'Impasto', Whitechapel Gallery, London, 2024",
    ],
    paintings: [
      { id: "es-1", title: "Horizon Breach", image: artwork5, dimensions: "140 × 200 cm", medium: "Oil on canvas", year: "2025", availability: "available", description: "A monumental landscape where horizon line dissolves into pure chromatic sensation." },
      { id: "es-2", title: "Glacier Hymn", image: artwork4, dimensions: "100 × 150 cm", medium: "Oil on linen", year: "2024", availability: "on_hold" },
      { id: "es-3", title: "Burnt Terrain", image: artwork2, dimensions: "120 × 180 cm", medium: "Oil and wax on canvas", year: "2025", availability: "available" },
    ],
  },
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
