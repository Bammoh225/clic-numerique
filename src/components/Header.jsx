import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {/* 1. TOP BAR */}
      <div style={{ backgroundColor: 'var(--color-primary-profond)', color: 'var(--color-blanc-pur)', padding: '6px 0', fontSize: 'var(--text-xs)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 'var(--space-3)', opacity: 0.9 }}>
            <span>📞 +225 00 00 00 00 00</span>
            <span>✉️ contact@clic-ci.org</span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-2)', opacity: 0.9 }}>
            <a href="#" style={{ color: 'var(--color-blanc-pur)' }}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--color-blanc-pur)' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--color-blanc-pur)' }}>Facebook</a>
          </div>
        </div>
      </div>

      {/* 2. HEADER STICKY */}
      <header className="header" style={{ backgroundColor: 'var(--color-blanc-pur)', borderBottom: '1px solid var(--color-gris-bordure)', position: 'sticky', top: 0, zIndex: 1000, padding: 'var(--space-2) 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/Logo officiel CLIC.png" alt="CLIC Logo" style={{ height: '40px' }} />
          </Link>
          
          {/* Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <Link to="/" style={{ fontWeight: 600, color: 'var(--color-noir-digital)' }}>Accueil</Link>
            <Link to="/education" style={{ fontWeight: 600, color: 'var(--color-noir-digital)' }}>Programmes</Link>
            <Link to="/talents" style={{ fontWeight: 600, color: 'var(--color-noir-digital)' }}>Talents</Link>
            <Link to="/actualites" style={{ fontWeight: 600, color: 'var(--color-noir-digital)' }}>Actualités</Link>
          </nav>

          {/* Actions Droite */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--color-noir-digital)' }}>🔍</button>
            <Link to="/benevolat" className="btn btn-accent">Nous rejoindre</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
