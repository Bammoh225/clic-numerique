import React, { useState, useEffect } from 'react';

function TalentsAdmin() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);

  // Form State
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const fetchTalents = async () => {
    try {
      const response = await fetch('/api/talents');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    fetchTalents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/talents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          author,
          role,
          link,
          description,
          visibility: 'Publique'
        })
      });
      setShowForm(false);
      setName('');
      setAuthor('');
      setRole('');
      setLink('');
      setDescription('');
      fetchTalents();
    } catch (error) {
      console.error('Erreur creation talent:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <p className="text-muted">Mettez en avant les meilleurs projets réalisés par nos apprenants.</p>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : '+ Ajouter un Talent'}
        </button>
      </div>

      {showForm ? (
        <div className="card" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-blanc-pur)' }}>
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Nouveau profil talent</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Nom du projet / application</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Ex: CLIC Market" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Lien (URL)</label>
                <input type="url" value={link} onChange={e => setLink(e.target.value)} placeholder="https://" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Nom de l'étudiant</label>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required placeholder="Ex: Jean B." style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Rôle / Spécialité</label>
                <input type="text" value={role} onChange={e => setRole(e.target.value)} required placeholder="Ex: Développeur Backend" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Description du projet</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} rows="3" placeholder="Description courte des technologies utilisées et de l'impact..." style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', resize: 'vertical' }}></textarea>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-4)' }}>
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Annuler</button>
              <button type="submit" className="btn btn-primary">Ajouter à la vitrine</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card">
           <div className="table-responsive"><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', borderBottom: '1px solid var(--color-gris-bordure)' }}>
                <th style={{ padding: '16px' }}>Projet</th>
                <th style={{ padding: '16px' }}>Étudiant</th>
                <th style={{ padding: '16px' }}>Rôle</th>
                <th style={{ padding: '16px' }}>Visibilité</th>
                <th style={{ padding: '16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '16px', textAlign: 'center', color: 'var(--color-gris-texte)' }}>Aucun talent trouvé.</td>
                </tr>
              )}
              {projects.map((proj) => (
                <tr key={proj.id} style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>{proj.name}</td>
                  <td style={{ padding: '16px' }}>{proj.author}</td>
                  <td style={{ padding: '16px' }}>{proj.role}</td>
                  <td style={{ padding: '16px' }}>
                    <span className="badge" style={{ backgroundColor: proj.visibility === 'Publique' ? '#E8F5E9' : '#FFF3E0', color: proj.visibility === 'Publique' ? '#388E3C' : '#F57C00' }}>{proj.visibility}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--color-primary-inst)', cursor: 'pointer', fontWeight: 600, marginRight: '16px' }}>Éditer</button>
                    <button style={{ border: 'none', background: 'transparent', color: '#D32F2F', cursor: 'pointer', fontWeight: 600 }}>Retirer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      )}
    </div>
  );
}

export default TalentsAdmin;
