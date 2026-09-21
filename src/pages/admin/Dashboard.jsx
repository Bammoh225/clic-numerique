import React from 'react';

function Dashboard() {
  return (
    <div>
      {/* Statistiques clés */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        
        <div className="card" style={{ padding: 'var(--space-4)', borderLeft: '4px solid var(--color-primary-inst)' }}>
          <p className="text-sm text-muted" style={{ margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Articles Publiés</p>
          <p className="font-mono" style={{ fontSize: '2rem', margin: 0, fontWeight: 700, color: 'var(--color-noir-digital)' }}>24</p>
        </div>
        
        <div className="card" style={{ padding: 'var(--space-4)', borderLeft: '4px solid var(--color-accent-or)' }}>
          <p className="text-sm text-muted" style={{ margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Candidatures Mentor</p>
          <p className="font-mono" style={{ fontSize: '2rem', margin: 0, fontWeight: 700, color: 'var(--color-noir-digital)' }}>12</p>
        </div>

        <div className="card" style={{ padding: 'var(--space-4)', borderLeft: '4px solid var(--color-accent-turq)' }}>
          <p className="text-sm text-muted" style={{ margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Inscrits Bootcamp</p>
          <p className="font-mono" style={{ fontSize: '2rem', margin: 0, fontWeight: 700, color: 'var(--color-noir-digital)' }}>145</p>
        </div>

        <div className="card" style={{ padding: 'var(--space-4)', borderLeft: '4px solid var(--color-primary-profond)' }}>
          <p className="text-sm text-muted" style={{ margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Événements à venir</p>
          <p className="font-mono" style={{ fontSize: '2rem', margin: 0, fontWeight: 700, color: 'var(--color-noir-digital)' }}>3</p>
        </div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-6)' }}>
        
        {/* Dernières candidatures (Fictif) */}
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <h4 style={{ marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-gris-bordure)', paddingBottom: 'var(--space-2)' }}>Dernières candidatures "Mentors"</h4>
           <div className="table-responsive"><table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ color: 'var(--color-gris-texte)', borderBottom: '1px solid var(--color-gris-bordure)' }}>
                <th style={{ padding: '12px 8px' }}>Nom</th>
                <th style={{ padding: '12px 8px' }}>Expertise</th>
                <th style={{ padding: '12px 8px' }}>Date</th>
                <th style={{ padding: '12px 8px' }}>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Kouassi Marc</td>
                <td style={{ padding: '12px 8px' }}>Cybersécurité</td>
                <td style={{ padding: '12px 8px', fontFamily: 'var(--font-mono)' }}>21 Sept.</td>
                <td style={{ padding: '12px 8px' }}><span className="badge badge-or">Nouveau</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Sarah Diomandé</td>
                <td style={{ padding: '12px 8px' }}>UI/UX Design</td>
                <td style={{ padding: '12px 8px', fontFamily: 'var(--font-mono)' }}>19 Sept.</td>
                <td style={{ padding: '12px 8px' }}><span className="badge" style={{ backgroundColor: '#E3F2FD', color: '#1976D2' }}>En cours</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>Yannick B.</td>
                <td style={{ padding: '12px 8px' }}>Dev Frontend</td>
                <td style={{ padding: '12px 8px', fontFamily: 'var(--font-mono)' }}>18 Sept.</td>
                <td style={{ padding: '12px 8px' }}><span className="badge" style={{ backgroundColor: '#E8F5E9', color: '#388E3C' }}>Validé</span></td>
              </tr>
            </tbody>
          </table></div>
        </div>

        {/* Actions rapides */}
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <h4 style={{ marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-gris-bordure)', paddingBottom: 'var(--space-2)' }}>Actions Rapides</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'flex-start' }}>+ Rédiger un article</button>
            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>+ Ajouter un talent</button>
            <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'flex-start' }}>+ Nouvel événement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
