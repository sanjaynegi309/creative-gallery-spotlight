import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

export interface Artist {
  id: string;
  name: string;
  medium: string;
  bio: string;
  artwork: string;
  artworkTitle: string;
  year: string;
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
  },
  {
    id: "lena-mori",
    name: "Lena Mori",
    medium: "Sculpture & Installation",
    bio: "Mori's minimalist marble forms explore the tension between emptiness and presence. Her work has been exhibited at the Venice Biennale and Tate Modern.",
    artwork: artwork2,
    artworkTitle: "Threshold",
    year: "2023",
  },
  {
    id: "ayo-okafor",
    name: "Ayo Okafor",
    medium: "Digital Collage & Mixed Media",
    bio: "Okafor constructs surreal dreamscapes from found imagery, blending botanical elements with vast landscapes to question the boundary between nature and fantasy.",
    artwork: artwork3,
    artworkTitle: "Bloom Meridian",
    year: "2025",
  },
  {
    id: "sable-noir",
    name: "Sable Noir",
    medium: "Fine Art Photography",
    bio: "Through dramatic chiaroscuro lighting, Noir captures the raw vulnerability of the human form. Their portraits reveal what words conceal.",
    artwork: artwork4,
    artworkTitle: "The Witness",
    year: "2024",
  },
  {
    id: "eli-strand",
    name: "Eli Strand",
    medium: "Oil on Canvas",
    bio: "Strand's thick impasto landscapes reimagine terrain as emotional geography — where deep blues meet burnt sienna in collisions of color and texture.",
    artwork: artwork5,
    artworkTitle: "Horizon Breach",
    year: "2025",
  },
];
