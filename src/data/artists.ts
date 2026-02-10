import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

export interface Painting {
  id: string;
  title: string;
  image: string;
  dimensions: string;
  medium: string;
  year: string;
}

export interface Artist {
  id: string;
  name: string;
  medium: string;
  bio: string;
  artwork: string;
  artworkTitle: string;
  year: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  paintings: Painting[];
}

export const artists: Artist[] = [
  {
    id: "ren-vasquez",
    name: "Ren Vasquez",
    medium: "Abstract Expressionism",
    bio: "Working with bold gestural marks and raw pigments, Vasquez channels emotional intensity into canvases that pulse with kinetic energy. Based in Mexico City.",
    artwork: artwork1,
    artworkTitle: "Fracture Line IV",
    year: "2024",
    email: "ren@unmappedstudio.com",
    phone: "+52 55 1234 5678",
    location: "Mexico City, Mexico",
    website: "renvasquez.art",
    paintings: [
      { id: "rv-1", title: "Fracture Line IV", image: artwork1, dimensions: "120 × 180 cm", medium: "Acrylic on canvas", year: "2024" },
      { id: "rv-2", title: "Eruption Study", image: artwork2, dimensions: "90 × 120 cm", medium: "Oil and pigment on linen", year: "2023" },
      { id: "rv-3", title: "Red Drift", image: artwork3, dimensions: "150 × 200 cm", medium: "Mixed media on canvas", year: "2024" },
    ],
  },
  {
    id: "lena-mori",
    name: "Lena Mori",
    medium: "Sculpture & Installation",
    bio: "Mori's minimalist marble forms explore the tension between emptiness and presence. Her work has been exhibited at the Venice Biennale and Tate Modern.",
    artwork: artwork2,
    artworkTitle: "Threshold",
    year: "2023",
    email: "lena@unmappedstudio.com",
    phone: "+81 3 9876 5432",
    location: "Tokyo, Japan",
    website: "lenamori.studio",
    paintings: [
      { id: "lm-1", title: "Threshold", image: artwork2, dimensions: "60 × 45 × 30 cm", medium: "Carrara marble", year: "2023" },
      { id: "lm-2", title: "Vessel No.7", image: artwork4, dimensions: "40 × 40 × 55 cm", medium: "Bronze and glass", year: "2024" },
      { id: "lm-3", title: "Silence Archive", image: artwork1, dimensions: "200 × 100 × 80 cm", medium: "Steel and resin", year: "2023" },
    ],
  },
  {
    id: "ayo-okafor",
    name: "Ayo Okafor",
    medium: "Digital Collage & Mixed Media",
    bio: "Okafor constructs surreal dreamscapes from found imagery, blending botanical elements with vast landscapes to question the boundary between nature and fantasy.",
    artwork: artwork3,
    artworkTitle: "Bloom Meridian",
    year: "2025",
    email: "ayo@unmappedstudio.com",
    phone: "+234 802 345 6789",
    location: "Lagos, Nigeria",
    website: "ayookafor.com",
    paintings: [
      { id: "ao-1", title: "Bloom Meridian", image: artwork3, dimensions: "100 × 140 cm", medium: "Digital print on aluminium", year: "2025" },
      { id: "ao-2", title: "Canopy Dreaming", image: artwork5, dimensions: "80 × 110 cm", medium: "Collage and acrylic", year: "2024" },
      { id: "ao-3", title: "Root System", image: artwork2, dimensions: "120 × 160 cm", medium: "Digital collage", year: "2025" },
    ],
  },
  {
    id: "sable-noir",
    name: "Sable Noir",
    medium: "Fine Art Photography",
    bio: "Through dramatic chiaroscuro lighting, Noir captures the raw vulnerability of the human form. Their portraits reveal what words conceal.",
    artwork: artwork4,
    artworkTitle: "The Witness",
    year: "2024",
    email: "sable@unmappedstudio.com",
    phone: "+33 6 1234 5678",
    location: "Paris, France",
    website: "sablenoir.photo",
    paintings: [
      { id: "sn-1", title: "The Witness", image: artwork4, dimensions: "90 × 60 cm", medium: "Archival pigment print", year: "2024" },
      { id: "sn-2", title: "Veil", image: artwork1, dimensions: "120 × 80 cm", medium: "Silver gelatin print", year: "2023" },
      { id: "sn-3", title: "Between Shadows", image: artwork3, dimensions: "100 × 70 cm", medium: "C-type print", year: "2024" },
    ],
  },
  {
    id: "eli-strand",
    name: "Eli Strand",
    medium: "Oil on Canvas",
    bio: "Strand's thick impasto landscapes reimagine terrain as emotional geography — where deep blues meet burnt sienna in collisions of color and texture.",
    artwork: artwork5,
    artworkTitle: "Horizon Breach",
    year: "2025",
    email: "eli@unmappedstudio.com",
    phone: "+47 912 34 567",
    location: "Oslo, Norway",
    website: "elistrand.no",
    paintings: [
      { id: "es-1", title: "Horizon Breach", image: artwork5, dimensions: "140 × 200 cm", medium: "Oil on canvas", year: "2025" },
      { id: "es-2", title: "Glacier Hymn", image: artwork4, dimensions: "100 × 150 cm", medium: "Oil on linen", year: "2024" },
      { id: "es-3", title: "Burnt Terrain", image: artwork2, dimensions: "120 × 180 cm", medium: "Oil and wax on canvas", year: "2025" },
    ],
  },
];
