import React, { useState, useEffect } from 'react';

function NewsAdmin() {
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([]);
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Événement');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Brouillon');

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e, forceStatus) => {
    if (e) e.preventDefault();
    const finalStatus = forceStatus || status;
    try {
      await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          category,
          date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }),
          excerpt,
          content,
          image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          status: finalStatus
        })
      });
      setShowForm(false);
      setTitle('');
      setCategory('Événement');
      setExcerpt('');
      setContent('');
      setStatus('Brouillon');
      fetchNews();
    } catch (error) {
      console.error('Erreur creation article:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
        <p className="text-muted">Gérez les articles de blog et actualités affichés sur le site public.</p>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : '+ Nouvel article'}
        </button>
      </div>

      {showForm ? (
        <div className="card" style={{ padding: 'var(--space-6)', backgroundColor: 'var(--color-blanc-pur)' }}>
          <h3 style={{ marginBottom: 'var(--space-4)' }}>Rédiger un article</h3>
          <form>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-4)' }}>
              
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Titre de l'article</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex: Cérémonie de remise des diplômes" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)' }} />
              </div>

              <div style={{ marginBottom: 'var(--space-3)' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Catégorie</label>
                <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)', backgroundColor: 'white' }}>
                  <option>Événement</option>
                  <option>Institutionnel</option>
                  <option>Impact</option>
                  <option>Programme</option>
                  <option>Compétition</option>
                </select>
              </div>

            </div>

            <div style={{ marginBottom: 'var(--space-3)' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Extrait (Court résumé pour la carte)</label>
              <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows="2" placeholder="Saisissez un bref résumé..." style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)', resize: 'vertical' }}></textarea>
            </div>

            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Contenu de l'article</label>
              <div style={{ border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'var(--color-gris-bg)', padding: '8px', borderBottom: '1px solid var(--color-gris-bordure)', display: 'flex', gap: '8px' }}>
                  <button type="button" style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>B</button>
                  <button type="button" style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer', fontStyle: 'italic' }}>I</button>
                </div>
                <textarea value={content} onChange={e => setContent(e.target.value)} rows="10" placeholder="Le corps de l'article..." style={{ width: '100%', padding: '12px', border: 'none', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)', resize: 'vertical', outline: 'none' }}></textarea>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-4)' }}>
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Annuler</button>
              <button type="button" className="btn" style={{ backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-noir-digital)' }} onClick={(e) => handleSubmit(e, 'Brouillon')}>Enregistrer en brouillon</button>
              <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e, 'Publié')}>Publier l'article</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--text-sm)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-gris-bg)', color: 'var(--color-gris-texte)', borderBottom: '1px solid var(--color-gris-bordure)' }}>
                <th style={{ padding: '16px' }}>Titre</th>
                <th style={{ padding: '16px' }}>Catégorie</th>
                <th style={{ padding: '16px' }}>Date</th>
                <th style={{ padding: '16px' }}>Statut</th>
                <th style={{ padding: '16px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '16px', textAlign: 'center', color: 'var(--color-gris-texte)' }}>Aucun article trouvé.</td>
                </tr>
              )}
              {articles.map((art) => (
                <tr key={art.id} style={{ borderBottom: '1px solid var(--color-gris-clair)' }}>
                  <td style={{ padding: '16px', fontWeight: 600 }}>{art.title}</td>
                  <td style={{ padding: '16px' }}>{art.category}</td>
                  <td style={{ padding: '16px', fontFamily: 'var(--font-mono)' }}>{art.date}</td>
                  <td style={{ padding: '16px' }}>
                    {art.status === 'Publié' ? (
                      <span className="badge" style={{ backgroundColor: '#E8F5E9', color: '#388E3C' }}>Publié</span>
                    ) : (
                      <span className="badge" style={{ backgroundColor: '#FFF3E0', color: '#F57C00' }}>Brouillon</span>
                    )}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'transparent', color: 'var(--color-primary-inst)', cursor: 'pointer', fontWeight: 600, marginRight: '16px' }}>Éditer</button>
                    <button style={{ border: 'none', background: 'transparent', color: '#D32F2F', cursor: 'pointer', fontWeight: 600 }}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default NewsAdmin;
