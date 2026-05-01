<div align="center">

# GALLERY TOONS — React

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Live Site](https://img.shields.io/badge/🌐_Live-gallery--toons.vercel.app-ADFF2F?style=for-the-badge&labelColor=111)](https://gallery-toons.vercel.app/)

React 18 + Vite 5 conversion of the Gallery Toons static site.  
Same look. Component architecture. Zero extra deps.

</div>

---

## Project Structure

```
gallery-toons/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/                  ← drop your images folder here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── images.js            ← all image metadata
    ├── styles/
    │   └── globals.css          ← design tokens + reset
    └── components/
        ├── Header.jsx / Header.css
        ├── Hero.jsx   / Hero.css
        ├── PhotoGallery.jsx / PhotoGallery.css
        ├── RequestForm.jsx  / RequestForm.css
        └── Footer.jsx / Footer.css
```

---

## Quick Start

```bash
git clone https://github.com/amansamani/gallery-toons.git
cd gallery-toons
npm install

# Copy your images into public/
cp -r /path/to/images ./public/images

npm run dev      # localhost:5173
npm run build    # production build → dist/
```

---

## HTML → React: What Changed

| HTML/JS | React |
|---|---|
| `getElementById` + `innerHTML` | Component state + JSX |
| Inline `<script>` image data | `src/data/images.js` module |
| `addEventListener` for search | `onChange` / `onKeyDown` handlers |
| `IntersectionObserver` in loop | `useEffect` per `<PhotoItem>` |
| `<form action="formspree">` | `fetch()` in `handleSubmit` + status feedback |
| JS scroll class toggle | `useEffect` scroll listener + CSS class |
| No mobile menu JS | `useState` burger toggle + CSS slide-in |

---

## Multi-Page Routing

```bash
npm install react-router-dom
```

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portrait from './pages/Portrait';
import Landscape from './pages/Landscape';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/portrait"  element={<Portrait />} />
        <Route path="/landscape" element={<Landscape />} />
      </Routes>
    </BrowserRouter>
  );
}
```

> In `Header.jsx`, replace `<a href="...">` with `<Link to="...">` from `react-router-dom`.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | CSS Modules (per-component) |
| Fonts | Bebas Neue · DM Serif Display · Space Mono |
| Forms | Formspree |
| Scroll Animations | Native `IntersectionObserver` |
| Deploy | Vercel |

---

## Roadmap

- [x] React component architecture
- [x] Search + category filter state
- [x] Scroll animations via `IntersectionObserver`
- [x] Contact form with `fetch()` + status feedback
- [ ] React Router multi-page routing
- [ ] User favorites with `localStorage`
- [ ] Dynamic image fetch from API
- [ ] Dark/light mode toggle

---

## Developer

**Aman Samani**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-samani)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/amansamani)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:amanworkinfo@gmail.com)
