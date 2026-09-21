import React, { useState, useEffect } from 'react';

function ProgramsAdmin() {
  const [showForm, setShowForm] = useState(false);
  const [programs, setPrograms] = useState([]);
  
  // Form state
  const [title, setTitle] = useState('');
  const [cohort, setCohort] = useState('');
  const [capacity, setCapacity] = useState('');
  const [status, setStatus] = useState('Brouillon / À venir');

  // Load programs from API
  const fetchPrograms = async () => {
    try {
      const response = await fetch('/api/programs');
      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      console.error('Erreur lors du chargement des programmes:', error);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // Submit new program to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/programs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          cohort,
          capacity,
          participants: 0,
          status
        })
      });
      // Reset form and reload list
      setShowForm(false);
      setTitle('');
      setCohort('');
      setCapacity('');
      setStatus('Brouillon / À venir');
      fetchPrograms();
    } catch (error) {
      console.error('Erreur lors de la création du programme:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <p className="text-muted">Gérez les programmes de formation, bootcamps et cohortes.</p>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : '+ Nouveau Programme'}
        </button>
      </div>

      {showForm ? (
        <div className="card" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-blanc-pur)' }}>
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Créer un programme</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Nom du programme</label>
                <input type="text" required value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex: Masterclass IA" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Nom de la cohorte</label>
                <input type="text" required value={cohort} onChange={e => setCohort(e.target.value)} placeholder="Ex: Cohorte 5" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Nombre de places (Capacité)</label>
                <input type="number" required value={capacity} onChange={e => setCapacity(e.target.value)} placeholder="Ex: 50" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Statut initial</label>
                <select value={status} onChange={e => setStatus(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', backgroundColor: 'white' }}>
                  <option>Brouillon / À venir</option>
                  <option>Inscriptions Ouvertes</option>
                  <option>En Cours</option>
                  <option>Terminé</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-4)' }}>
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Annuler</button>
              <button type="submit" className="btn btn-primary">Enregistrer le programme</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card">
           <div className="table-responsive"><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', borderBottom: '1px solid var(--color-gris-bordure)' }}>
                <th style={{ padding: '16px' }}>Programme</th>
                <th style={{ padding: '16px' }}>Cohorte</th>
                <th style={{ padding: '16px' }}>Inscrits / Capacité</th>
                <th style={{ padding: '16px' }}>Statut</th>
                <th style={{ padding: '16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '16px', textAlign: 'center', color: 'var(--color-gris-texte)' }}>Aucun programme trouvé.</td>
                </tr>
              )}
              {programs.map((prog) => (
                <tr key={prog.id} style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>{prog.title}</td>
                  <td style={{ padding: '16px' }}>{prog.cohort}</td>
                  <td style={{ padding: '16px', fontFamily: 'var(--font-mono)' }}>{prog.participants}/{prog.capacity}</td>
                  <td style={{ padding: '16px' }}>
                    <span className="badge" style={{ 
                      backgroundColor: prog.status === 'Terminé' ? '#F5F5F5' : (prog.status === 'En Cours' ? '#E3F2FD' : '#E8F5E9'),
                      color: prog.status === 'Terminé' ? '#9E9E9E' : (prog.status === 'En Cours' ? '#1976D2' : '#388E3C')
                    }}>{prog.status}</span>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--color-primary-inst)', cursor: 'pointer', fontWeight: 600 }}>Gérer</button>
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

export default ProgramsAdmin;
