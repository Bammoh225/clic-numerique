import React, { useState, useEffect } from 'react';

function VolunteersAdmin() {
  const [volunteers, setVolunteers] = useState([]);

  const fetchVolunteers = async () => {
    try {
      const response = await fetch('/api/volunteers');
      const data = await response.json();
      setVolunteers(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <p className="text-muted">Gérez les candidatures reçues via le formulaire de bénévolat.</p>
      </div>

      <div className="card">
         <div className="table-responsive"><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', borderBottom: '1px solid var(--color-gris-bordure)' }}>
              <th style={{ padding: '16px' }}>Candidat</th>
              <th style={{ padding: '16px' }}>Type de Bénévolat</th>
              <th style={{ padding: '16px' }}>Expertise</th>
              <th style={{ padding: '16px' }}>Date</th>
              <th style={{ padding: '16px' }}>Statut</th>
              <th style={{ padding: '16px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.length === 0 && (
              <tr>
                <td colSpan="6" style={{ padding: '16px', textAlign: 'center', color: 'var(--color-gris-texte)' }}>Aucune candidature trouvée.</td>
              </tr>
            )}
            {volunteers.map((vol) => (
              <tr key={vol.id} style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                <td style={{ padding: '16px', fontWeight: 600 }}>{vol.name}</td>
                <td style={{ padding: '16px' }}>{vol.role}</td>
                <td style={{ padding: '16px' }}>{vol.expertise}</td>
                <td style={{ padding: '16px', fontFamily: 'var(--font-mono)' }}>{vol.date}</td>
                <td style={{ padding: '16px' }}>
                  <span className="badge" style={{ 
                    backgroundColor: vol.status === 'Nouveau' ? '#FFF9C4' : (vol.status === 'Validé' ? '#E8F5E9' : '#E3F2FD'), 
                    color: vol.status === 'Nouveau' ? '#FBC02D' : (vol.status === 'Validé' ? '#388E3C' : '#1976D2') 
                  }}>
                    {vol.status}
                  </span>
                </td>
                <td style={{ padding: '16px', textAlign: 'right' }}>
                  <button style={{ border: 'none', background: 'transparent', color: 'var(--color-primary-inst)', cursor: 'pointer', fontWeight: 600, marginRight: '16px' }}>Voir Profil</button>
                  <select style={{ border: '1px solid var(--color-gris-bordure)', borderRadius: '4px', padding: '4px 8px', fontSize: '12px' }}>
                    <option>Changer statut...</option>
                    <option>Validé</option>
                    <option>En attente</option>
                    <option>Refusé</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

export default VolunteersAdmin;
