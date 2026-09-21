import React, { useState, useEffect } from 'react';

function Talents() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/talents')
      .then(res => res.json())
      .then(data => {
        // Ne garder que les talents visibles
        setProjects(data.filter(p => p.visibility === 'Publique'));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <section className="section bg-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="font-mono text-sm" style={{ color: 'var(--color-primary-inst)', fontWeight: 700, letterSpacing: '0.05em' }}>· LA RELÈVE TECH AFRICAINE ·</span>
          <h1 style={{ marginTop: 'var(--space-2)' }}>Vitrine des Talents</h1>
          <p className="text-lg text-muted" style={{ marginTop: 'var(--space-4)' }}>
            Découvrez les projets exceptionnels développés par les bénéficiaires de nos programmes. De l'idée à la production, ils codent l'avenir.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {projects.map((proj, idx) => (
              <div className="card" key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '250px', backgroundColor: 'var(--color-gris-clair)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={proj.image || "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'var(--space-4)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ marginBottom: 'var(--space-1)' }}>{proj.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
                      <img src={proj.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"} alt={proj.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: 'var(--text-sm)' }}>{proj.author}</p>
                      <p style={{ margin: 0, color: 'var(--color-gris-texte)', fontSize: 'var(--text-xs)' }}>{proj.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted" style={{ flexGrow: 1 }}>{proj.description}</p>
                  
                  <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-gris-bordure)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge badge-or">Portfolio Validé</span>
                    <a href="#" className="font-mono text-sm" style={{ fontWeight: 700, color: 'var(--color-primary-inst)' }}>{proj.link} →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Talents;
