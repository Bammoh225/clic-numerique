import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Actualites() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        // Ne garder que les articles publiés
        setArticles(data.filter(a => a.status === 'Publié'));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <section className="section bg-brand" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <h1 style={{ color: 'var(--color-blanc-pur)' }}>Actualités & Blog</h1>
          <p className="text-lg" style={{ color: 'var(--color-blanc-pur)', opacity: 0.8, maxWidth: '600px' }}>
            Restez informés des dernières avancées de CLIC, de nos événements à venir et de l'impact de nos actions sur le terrain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filtres statiques pour l'UI */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', overflowX: 'auto', paddingBottom: '8px' }}>
            <span className="badge badge-or" style={{ padding: '8px 16px', fontSize: 'var(--text-sm)', cursor: 'pointer' }}>Tout voir</span>
            <span className="badge" style={{ padding: '8px 16px', fontSize: 'var(--text-sm)', backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', cursor: 'pointer' }}>Événement</span>
            <span className="badge" style={{ padding: '8px 16px', fontSize: 'var(--text-sm)', backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', cursor: 'pointer' }}>Institutionnel</span>
            <span className="badge" style={{ padding: '8px 16px', fontSize: 'var(--text-sm)', backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', cursor: 'pointer' }}>Impact</span>
          </div>

          <div className="grid-3">
            {articles.map((art, idx) => (
              <div className="card" key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', backgroundColor: 'var(--color-gris-clair)', position: 'relative', overflow: 'hidden' }}>
                  <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="badge badge-turq" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)' }}>{art.category}</span>
                </div>
                <div style={{ padding: 'var(--space-3)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="font-mono text-xs text-muted" style={{ marginBottom: 'var(--space-2)' }}>{art.date}</span>
                  <h4 style={{ marginBottom: 'var(--space-2)' }}>{art.title}</h4>
                  <p className="text-sm text-muted" style={{ flexGrow: 1 }}>{art.excerpt}</p>
                  <Link to={`/article/${art.id}`} className="btn btn-outline" style={{ marginTop: 'var(--space-3)', width: '100%', display: 'block', textAlign: 'center' }}>Lire l'article</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <button className="btn btn-secondary">Charger plus d'articles</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Actualites;
