import { useEffect, useRef } from 'react';
import './PhotoGallery.css';
import { images as allImages } from '../data/images';

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function PhotoItem({ img, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="photo-item"
      style={{ transitionDelay: `${(index % 12) * 40}ms` }}
    >
      <img src={img.src} loading="lazy" alt={img.alt} />

      <div className="photo-overlay">
        <span className="photo-tag">{img.label}</span>

        <a
          className="photo-dl"
          href={img.dl}
          download={`${img.alt}.jpg`}
        >
          <DownloadIcon />
          Download
        </a>
      </div>
    </div>
  );
}

export default function PhotoGallery({ images, category }) {
  let finalImages;

  if (category) {
    finalImages = allImages.filter(img => img.category === category);
  } else if (images) {
    finalImages = images;
  } else {
    finalImages = allImages;
  }

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>{category ? category.toUpperCase() : 'COLLECTION'}</h2>

        <span className="gallery-count">
          {finalImages.length} image{finalImages.length !== 1 ? 's' : ''}
        </span>
      </div>

      {finalImages.length === 0 ? (
        <div className="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>

          <p>
            No images found.<br />
            Try another category.
          </p>
        </div>
      ) : (
        <div className="photo-gallery">
          {finalImages.map((img, i) => (
            <PhotoItem key={img.id} img={img} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}