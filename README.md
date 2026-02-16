# bhuvan.me

Personal website built with Next.js, styled as a Bloomberg Terminal.

## Tech Stack

- **Next.js 16** with App Router
- **Tailwind CSS v4** (theme tokens in `globals.css`)
- **Framer Motion** for animations
- **Markdown** content with gray-matter + unified pipeline

## Development

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # Run linter
```

---

## Content Guide

All content lives in the `content/` directory as markdown files. The filename becomes the URL slug.

```
content/
├── letters/              → /letters/{slug}
├── markets/              → /markets/{slug}
├── movies/               → /movies/{slug}
├── readings/             → /readings/{slug}
├── projects/             → /projects
└── bd-sterling/
    └── investor-letters/ → /bd-sterling/investor-letters/{slug}
```

### Adding a Letter

Create `content/letters/your-title.md`:

```markdown
---
title: "Your Title"
date: "2026-02-16"
excerpt: "One-line summary shown on listing cards."
tags: ["philosophy", "life"]
featured: true
---

Your essay content in markdown...
```

### Adding a Market Post

Create `content/markets/your-title.md`:

```markdown
---
title: "Market Commentary Title"
date: "2026-02-16"
excerpt: "Short summary of the analysis."
tags: ["macro", "outlook"]
featured: false
---

Your market commentary...
```

### Adding a Movie Review

Create `content/movies/movie-name.md`:

```markdown
---
title: "Movie Name"
date: "2026-02-16"
excerpt: "Short review summary."
rating: 8
director: "Director Name"
year: 2024
tags: ["drama"]
featured: false
---

Your review...
```

**Extra fields:** `rating` (1-10), `director`, `year`

### Adding a Reading Note

Create `content/readings/book-name.md`:

```markdown
---
title: "Book Title"
date: "2026-02-16"
excerpt: "What the book is about and why it matters."
tags: ["philosophy", "investing"]
featured: true
---

Your book notes...
```

### Adding a Project

Create `content/projects/project-name.md`:

```markdown
---
title: "Project Name"
date: "2026-02-16"
excerpt: "What it does."
status: "Active"
tags: ["web", "next.js"]
featured: true
---

Project description...
```

**Extra fields:** `status` (shown as a badge — "Active" gets colored, others are dimmed)

### Frontmatter Reference

| Field | Required | Used By | Description |
|-------|----------|---------|-------------|
| `title` | Yes | All | Display title |
| `date` | Yes | All | ISO date string, used for sorting (newest first) |
| `excerpt` | Yes | All | One-line summary for cards |
| `tags` | No | All | Array of strings, displayed as `[tag]` labels |
| `featured` | No | All | Boolean, used by `getFeaturedPosts()` |
| `rating` | No | Movies | Number 1-10 |
| `director` | No | Movies | Director name |
| `year` | No | Movies | Release year |
| `status` | No | Projects | Badge text (e.g. "Active", "Archived") |

---

## Dashboard Widgets

### Now Reading

Edit `src/config/now-reading.ts` to update the books shown on the homepage:

```typescript
export const nowReading: NowReadingItem[] = [
  {
    title: "Book Title",
    author: "Author Name",
    progress: 72, // 0-100 percentage
  },
];
```

### Quotes

Edit `src/config/quotes.ts` to add/remove rotating quotes on the homepage:

```typescript
export const quotes: Quote[] = [
  {
    text: "Your quote here.",
    author: "Author Name",
  },
];
```

### Market Ticker

Edit the `tickerItems` array in `src/components/dashboard/MarketTicker.tsx` to update the scrolling ticker data.

---

## Color System

Each section has its own accent color:

| Section | Color | Hex | Token |
|---------|-------|-----|-------|
| Letters | Red | `#dd3737` | `letters-red` |
| Markets | Green | `#00d26a` | `bloomberg-green` |
| BD Sterling | Amber | `#f0a500` | `sterling-amber` |
| Movies | Blue | `#4a9eff` | `movies-blue` |
| Readings | Purple | `#a78bfa` | `readings-purple` |
| Projects | Pink | `#e44190` | `projects-pink` |
| System/Home | Cyan | `#22d3ee` | `system-cyan` |

Color tokens are defined in `src/app/globals.css` under `@theme inline`.

---

## Project Structure

```
src/
├── app/                  # Pages (Next.js App Router)
├── components/
│   ├── content/          # PostCard, PostList, MarkdownRenderer
│   ├── dashboard/        # Homepage widgets
│   ├── layout/           # Navbar, Footer, MobileMenu
│   ├── sterling/         # BD Sterling-specific components
│   ├── terminal/         # Boot sequence, cursor
│   └── ui/               # Panel, Badge, GlowText, etc.
├── config/               # Navigation, quotes, now-reading, sterling-empire
├── lib/                  # Content loading, markdown processing, utilities
└── types/                # TypeScript types
```
