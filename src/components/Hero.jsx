import { useRef } from 'react';
import './Hero.css';

export default function Hero({ onSearch }) {
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (inputRef.current) onSearch(inputRef.current.value);
    // scroll to gallery
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleInput = (e) => {
    onSearch(e.target.value);
  };

  return (
    <section className="hero">
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />

      <p className="hero-kicker">Royalty-free · High quality · Free forever</p>

      <h1 className="hero-title">
        GALLERY<br />TOONS
      </h1>

      <p className="hero-sub">Royalty-free images &amp; stock photography</p>

      <div className="search-wrap">
        <input
          ref={inputRef}
          className="search-bar"
          type="text"
          placeholder="Search flowers, mountains, night sky…"
          autoComplete="off"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button className="search-btn" onClick={handleSearch} aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
        </button>
      </div>

      
    </section>
  );
}
