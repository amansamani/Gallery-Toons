import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';

import { images as ALL_IMAGES } from './data/images';
import './styles/globals.css';


// 🔍 search filter
function filterImages(query) {
  const q = query.trim().toLowerCase();
  if (!q) return ALL_IMAGES;

  return ALL_IMAGES.filter(
    img =>
      img.tags.toLowerCase().includes(q) ||
      img.alt.toLowerCase().includes(q) ||
      img.label.toLowerCase().includes(q)
  );
}


// 🏠 HOME PAGE
function Home() {
  const [filteredImages, setFilteredImages] = useState(ALL_IMAGES);

  const handleSearch = useCallback((query) => {
    setFilteredImages(filterImages(query));
  }, []);

  return (
    <>
      <Hero onSearch={handleSearch} />
      <PhotoGallery images={filteredImages} />
      <RequestForm />
    </>
  );
}


// 📸 PORTRAIT PAGE
function Portrait() {
  return <PhotoGallery category="portrait" />;
}


// 🌄 LANDSCAPE PAGE
function Landscape() {
  return <PhotoGallery category="landscape" />;
}


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/landscape" element={<Landscape />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}