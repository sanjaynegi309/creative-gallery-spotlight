# The Unmapped Studio — Website

A collaborative art studio website for 5 artists. Built with React, Vite, Tailwind CSS, and TypeScript.

---

## 🎨 For Artists: How to Update Your Profile & Artworks

This website is powered by simple JSON files that any artist can edit — no coding knowledge required. Each artist has their own profile file and artwork image folder.

### Your Files

| Artist | Profile File | Artwork Folder |
|--------|-------------|----------------|
| Geetha Narayanan | `src/content/artists/geetha-narayanan.json` | `public/artworks/geetha-narayanan/` |
| Rashmi Ayyagari | `src/content/artists/rashmi-ayyagari.json` | `public/artworks/rashmi-ayyagari/` |
| Sanjay Negi | `src/content/artists/sanjay-negi.json` | `public/artworks/sanjay-negi/` |
| Sophia Jacob | `src/content/artists/sophia-jacob.json` | `public/artworks/sophia-jacob/` |
| Swati Bhatia | `src/content/artists/swati-bhatia.json` | `public/artworks/swati-bhatia/` |

---

### Step 1: Edit Your Profile (JSON File)

1. Go to your profile file on GitHub (e.g., `src/content/artists/geetha-narayanan.json`)
2. Click the **pencil icon** (✏️) at the top right to edit
3. Update any of the following fields:

```json
{
  "name": "Your Full Name",
  "medium": "Your primary medium (e.g., Oil on Canvas, Photography)",
  "bio": "A short paragraph about you and your practice (2-3 sentences).",
  "artistStatement": "Your artist statement in your own words. This appears as a quote on your profile page.",
  "artworkTitle": "Title of your featured/hero artwork",
  "year": "2025",
  "email": "your.email@unmappedstudio.com",
  "phone": "+91 98765 43210",
  "location": "Your City, Country",
  "website": "yourwebsite.com",
  "exhibitions": [
    "Solo — 'Exhibition Name', Venue, City, Year",
    "Group — 'Exhibition Name', Venue, City, Year"
  ]
}
```

4. Click **"Commit changes"** at the bottom when done

> **Important:** Do not change the `"id"` field — it links your profile to the website URLs.

---

### Step 2: Add or Update Artworks

Each artwork entry in your JSON file looks like this:

```json
{
  "id": "gn-1",
  "title": "Artwork Title",
  "image": "/artworks/geetha-narayanan/artwork-1.jpg",
  "dimensions": "120 × 180 cm",
  "medium": "Acrylic on canvas",
  "year": "2024",
  "availability": "available",
  "description": "Optional — a sentence or two about the piece."
}
```

#### Artwork Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ | Unique ID for the artwork (use your initials + number) | `"gn-4"` |
| `title` | ✅ | Title of the artwork | `"Sunset Fragment"` |
| `image` | ✅ | Path to image in your artwork folder | `"/artworks/geetha-narayanan/sunset.jpg"` |
| `dimensions` | ✅ | Size of the work | `"100 × 140 cm"` |
| `medium` | ✅ | Materials used | `"Oil on canvas"` |
| `year` | ✅ | Year created | `"2025"` |
| `availability` | ✅ | One of: `"available"`, `"sold"`, `"on_hold"` | `"available"` |
| `description` | ❌ | Short description (appears on detail page) | `"Inspired by..."` |

#### To add a new artwork:

1. **Upload the image** to your folder (`public/artworks/your-name/`) on GitHub
   - Click the folder → Click **"Add file"** → **"Upload files"**
   - Use JPG format, ideally 1200–2000px wide
2. **Add the entry** to the `"paintings"` array in your JSON file
3. **Commit changes**

#### To remove an artwork:

Delete its entry from the `"paintings"` array in your JSON file.

---

### Step 3: Update Your Artist Statement

Your artist statement is the `"artistStatement"` field in your JSON file. It appears as an italicized quote on your profile page.

Simply edit the text and commit — no other changes needed.

---

### Step 4: Update Exhibitions

Add new exhibitions to the `"exhibitions"` array in your JSON file. Use this format:

```
"Solo — 'Exhibition Name', Venue Name, City, Year"
"Group — 'Exhibition Name', Venue Name, City, Year"
```

The most recent exhibition should be listed first.

---

## 📸 Image Guidelines

- **Format:** JPG (preferred) or PNG
- **Size:** 1200–2000 pixels on the longest side
- **File size:** Under 2MB per image
- **Naming:** Use descriptive names like `sunset-fragment.jpg` or simple ones like `artwork-4.jpg`
- **Location:** Upload to `public/artworks/your-name/`

---

## 🔧 Quick Reference: Editing on GitHub

1. Navigate to the file you want to edit
2. Click the **pencil icon** (✏️) at the top right
3. Make your changes
4. Scroll down and click **"Commit changes"**
5. The website will automatically rebuild with your updates

> **Tip:** If you're unsure about JSON formatting, copy an existing entry and modify it. Make sure every `"` quote and `,` comma is in the right place.

---

## ⚠️ Common Mistakes to Avoid

- **Missing commas** between entries in a list — every item except the last needs a comma after it
- **Changing the `id` field** — this will break your profile URL
- **Wrong image path** — make sure the path matches the actual filename in your artwork folder
- **Availability typo** — must be exactly `"available"`, `"sold"`, or `"on_hold"`

---

## 🏗 Technical Information

### Tech Stack
- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

### Project Structure

```
src/
  content/
    artists/                  ← Artist JSON profiles (editable by artists)
      geetha-narayanan.json
      rashmi-ayyagari.json
      sanjay-negi.json
      sophia-jacob.json
      swati-bhatia.json

public/
  artworks/                 ← Artwork images (uploadable by artists)
    geetha-narayanan/
    rashmi-ayyagari/
    sanjay-negi/
    sophia-jacob/
    swati-bhatia/

src/
  data/artists.ts           ← Reads JSON profiles and exports data
  pages/                    ← Page components
  components/               ← Reusable UI components
```

### Development

```sh
npm install
npm run dev
```

### Deployment

Open [Lovable](https://lovable.dev) and click Share → Publish.
