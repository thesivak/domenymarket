# DomenyMarket.cz

Prémiový marketplace pro české .cz domény.

## 🚀 Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- Deployed on GitHub Pages / Cloudflare Pages

## 📦 Setup

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## 📁 Structure

```
src/
├── data/
│   └── domains.json    # Domain listings
├── layouts/
│   └── Layout.astro    # Base layout
├── pages/
│   └── index.astro     # Homepage
└── styles/
    └── global.css      # Tailwind + custom styles
```

## ✏️ Adding Domains

Edit `src/data/domains.json`:

```json
{
  "domain": "example.cz",
  "category": "Category Name",
  "description": "Domain description",
  "highlights": ["Feature 1", "Feature 2"],
  "premium": true
}
```

## 📧 Contact

domeny@domenymarket.cz
