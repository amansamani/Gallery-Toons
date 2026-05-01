<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,30&height=160&section=header&text=Gallery%20Toons%20%E2%80%94%20React&fontSize=42&fontColor=ADFF2F&fontAlignY=45&desc=React%2018%20%2B%20Vite%205%20%7C%20Same%20look.%20Component%20architecture.%20Zero%20extra%20deps.&descSize=15&descAlignY=68&descColor=ffffff&animation=fadeIn" />

<br/>

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://gallery-toons.vercel.app/)
[![Live](https://img.shields.io/badge/🌐_Live_Site-ADFF2F?style=for-the-badge&labelColor=111&logoColor=black)](https://gallery-toons.vercel.app/)

</div>

---

## 📸 Preview

<div align="center">

### 🏠 Hero — Search & Landing
<img width="90%" src="public/screenshots/hero.png" alt="Gallery Toons Hero" />

<br/><br/>

### 🖼️ Collection Grid
<img width="90%" src="public/screenshots/collection.png" alt="Gallery Toons Collection" />

<br/><br/>

### 📬 Photo Request & Footer
<img width="90%" src="public/screenshots/request.png" alt="Gallery Toons Request" />

</div>

---

## 📁 Project Structure

```
gallery-toons/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── images/                  ← drop your images folder here
│   └── screenshots/             ← preview images
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── images.js            ← all image metadata
    ├── styles/
    │   └── globals.css          ← design tokens + reset
    └── components/
        ├── Header.jsx  /  Header.css
        ├── Hero.jsx    /  Hero.css
        ├── PhotoGallery.jsx  /  PhotoGallery.css
        ├── RequestForm.jsx   /  RequestForm.css
        └── Footer.jsx  /  Footer.css
```

---

## ⚡ Quick Start

```bash
# Clone & install
git clone https://github.com/amansamani/gallery-toons.git
cd gallery-toons
npm install

# Drop your images into public/
cp -r /path/to/images ./public/images

# Run
npm run dev        # → localhost:5173
npm run build      # → production build in dist/
```

---

## 🔄 HTML → React: What Changed

| HTML / JS | React |
|---|---|
| `getElementById` + `innerHTML` | Component state + JSX render |
| Inline `<script>` image data | `src/data/images.js` module |
| `addEventListener` for search | `onChange` / `onKeyDown` handlers |
| `IntersectionObserver` in loop | `useEffect` per `<PhotoItem>` |
| `<form action="formspree">` | `fetch()` in `handleSubmit` + status feedback |
| JS scroll class toggle | `useEffect` scroll listener + CSS class |
| No mobile menu | `useState` burger toggle + CSS slide-in |

---

## 🗺️ Multi-Page Routing

```bash
npm install react-router-dom
```

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home      from './pages/Home';
import Portrait  from './pages/Portrait';
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

> In `Header.jsx`, swap `<a href="...">` → `<Link to="...">` from `react-router-dom`.

---

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | CSS Modules (per-component) |
| Fonts | Bebas Neue · DM Serif Display · Space Mono |
| Forms | Formspree |
| Scroll Animations | Native `IntersectionObserver` |
| Deployment | Vercel |

---

## 🔮 Roadmap

- [x] React component architecture
- [x] Search + category filter state
- [x] Scroll animations via `IntersectionObserver`
- [x] Contact form with `fetch()` + status feedback
- [ ] React Router multi-page routing
- [ ] User favorites with `localStorage`
- [ ] Dynamic image fetch from API
- [ ] Dark / light mode toggle

---

## 👨‍💻 Developer

<div align="center">

**Aman Samani** — Full-Stack Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-samani)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/amansamani)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:amanworkinfo@gmail.com)

</div>

---

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,30&height=80&section=footer&animation=fadeIn" />

<div align="center">
  <sub>© 2025 Gallery Toons · Built with 🖤 by <b>Aman Samani</b></sub>
</div>
