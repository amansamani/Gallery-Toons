# Gallery Toons — React

A React conversion of the Gallery Toons static HTML/CSS/JS website, built with **Vite + React 18**.

## Project Structure

```
gallery-toons/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/          ← copy your images folder here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── images.js        ← all image metadata
    ├── styles/
    │   └── globals.css      ← design tokens + reset
    └── components/
        ├── Header.jsx / Header.css
        ├── Hero.jsx   / Hero.css
        ├── PhotoGallery.jsx / PhotoGallery.css
        ├── RequestForm.jsx  / RequestForm.css
        └── Footer.jsx / Footer.css
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy your images folder into public/
cp -r /path/to/your/images ./public/images

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## What changed from the HTML version

| HTML/JS | React |
|---|---|
| `document.getElementById` + `innerHTML` | Component state + JSX render |
| Inline `<script>` image data | `src/data/images.js` module |
| `addEventListener` for search | `onChange` / `onKeyDown` handlers |
| `IntersectionObserver` in loop | Per-item `useEffect` in `<PhotoItem>` |
| `<form action="formspree">` | `fetch()` in `handleSubmit` with status feedback |
| Scrolled header via JS | `useEffect` scroll listener + CSS class toggle |
| Mobile menu (no JS in original) | `useState` burger toggle with CSS slide-in |

## Adding portrait.html / landscape.html

For multi-page routing, install React Router:

```bash
npm install react-router-dom
```

Then wrap `App.jsx` with `<BrowserRouter>` and add routes:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portrait from './pages/Portrait';
import Landscape from './pages/Landscape';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/landscape" element={<Landscape />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Update nav links in `Header.jsx` to use `<Link to="/portrait">` instead of `<a href>`.

## Tech Stack

- React 18 + Vite 5
- CSS Modules (per-component `.css` files)
- Google Fonts: Bebas Neue, DM Serif Display, Space Mono
- Formspree for contact form
- Native `IntersectionObserver` for scroll animations
- No extra dependencies needed
