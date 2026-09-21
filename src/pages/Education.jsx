import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Education() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then(data => {
        // Exclure les brouillons
        setPrograms(data.filter(p => p.status !== 'Brouillon / À venir'));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <section className="section bg-brand" style={{ paddingBottom: 'var(--space-16)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--color-blanc-pur)' }}>Nos Actions : Éducation Digitale</h1>
          <p className="text-lg" style={{ color: 'var(--color-blanc-pur)', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
            Un espace d'apprentissage ouvert à tous. Acquérez les compétences essentielles du 21e siècle avec nos ressources gratuites, conçues par des experts du terrain.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-100px' }}>
        <div className="container">
          <div className="grid-4">
            {programs.map((prog, index) => (
              <div className="card" key={index} style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-3)' }}>🎓</div>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>{prog.title}</h4>
                
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <span className="badge badge-turq">{prog.cohort}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-gris-bordure)' }}>
                  <span className="text-xs text-muted font-mono">Places: {prog.capacity}</span>
                  <span className="text-xs text-muted font-mono">{prog.status}</span>
                </div>
                
                <button className="btn btn-outline" style={{ marginTop: 'var(--space-3)', width: '100%' }}>Voir détails</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2>Envie d'aller plus loin ?</h2>
            <p className="text-lg text-muted">
              Nous organisons régulièrement des cohortes de formation intensive en présentiel. Rejoignez notre prochain Bootcamp pour un accompagnement personnalisé.
            </p>
            <Link to="/benevolat" className="btn btn-primary" style={{ marginTop: 'var(--space-3)' }}>Découvrir les Bootcamps</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '1', backgroundColor: 'var(--color-gris-clair)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gris-texte)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Étudiants en Bootcamp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
