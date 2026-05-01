import { useState } from 'react';
import './RequestForm.css';

export default function RequestForm() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xanylnza', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ 'photo-request': value }),
      });
      if (res.ok) {
        setStatus('success');
        setValue('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    
    <section className="request-section" id="contact">
      <div className="request-inner">
        <h3>Can't find what you need?</h3>
        <p>Describe the image you're looking for and we'll add it to the collection.</p>

        <form className="request-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="photo-request"
            placeholder="Describe the photo you need…"
            required
            value={value}
            onChange={e => setValue(e.target.value)}
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Request Photo'}
          </button>
        </form>

        {status === 'success' && (
          <p className="form-feedback form-feedback--ok">
            ✓ Request sent! We'll add it soon.
          </p>
        )}
        {status === 'error' && (
          <p className="form-feedback form-feedback--err">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  );
}
