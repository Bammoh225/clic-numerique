import React, { useState } from 'react';

function Benevolat() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [expertise, setExpertise] = useState('');
  const [motivation, setMotivation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          role: 'Candidat Bénévole',
          expertise,
        })
      });
      setSubmitted(true);
      setName('');
      setEmail('');
      setExpertise('');
      setMotivation('');
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <>
      <section className="section" style={{ borderBottom: '1px solid var(--color-gris-bordure)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="font-mono text-sm" style={{ color: 'var(--color-primary-inst)', fontWeight: 700, letterSpacing: '0.05em' }}>· DEVENIR MENTOR ·</span>
          <h1 style={{ marginTop: 'var(--space-2)' }}>Transmettez votre passion du numérique.</h1>
          <p className="text-lg text-muted" style={{ marginTop: 'var(--space-4)' }}>
            Vous êtes un expert TI ou un passionné du digital ? Rejoignez notre réseau de mentors et aidez-nous à former la prochaine génération de leaders africains de la Tech.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container grid-2" style={{ gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          
          <div>
            <h3>Pourquoi s'engager avec CLIC ?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-blanc-pur)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-xl)', border: '1px solid var(--color-gris-bordure)' }}>🌱</div>
                <div>
                  <h4>Impact réel</h4>
                  <p className="text-muted text-sm">Formez des jeunes directement dans nos centres et voyez concrètement l'évolution de leurs compétences.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-blanc-pur)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-xl)', border: '1px solid var(--color-gris-bordure)' }}>🤝</div>
                <div>
                  <h4>Réseau professionnel</h4>
                  <p className="text-muted text-sm">Intégrez une communauté active de plus de 120 experts technologiques en Côte d'Ivoire.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-blanc-pur)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-xl)', border: '1px solid var(--color-gris-bordure)' }}>🏆</div>
                <div>
                  <h4>Valorisation</h4>
                  <p className="text-muted text-sm">Obtenez une certification officielle de mentorat et des recommandations pour votre profil LinkedIn.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', backgroundColor: 'var(--color-blanc-pur)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gris-bordure)' }}>
              <h4 style={{ marginBottom: 'var(--space-2)' }}>Contact direct</h4>
              <p className="text-sm">📍 Ateliers : Abidjan (Cocody) & En ligne</p>
              <p className="text-sm">📧 Email : <a href="mailto:benevolat@clic-ci.org" style={{ textDecoration: 'underline' }}>benevolat@clic-ci.org</a></p>
            </div>
          </div>
          
          <div className="card" style={{ padding: 'var(--space-6)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ marginBottom: 'var(--space-1)' }}>Formulaire d'engagement</h3>
            
            {submitted ? (
              <div style={{ padding: 'var(--space-4)', backgroundColor: '#E8F5E9', borderRadius: 'var(--radius-sm)', border: '1px solid #C8E6C9', color: '#2E7D32', marginTop: 'var(--space-4)', textAlign: 'center' }}>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>Candidature envoyée !</h4>
                <p className="text-sm">Merci pour votre engagement. Notre équipe vous recontactera sous 48h.</p>
                <button className="btn btn-outline" style={{ marginTop: 'var(--space-3)' }} onClick={() => setSubmitted(false)}>Nouvelle candidature</button>
              </div>
            ) : (
              <>
                <p className="text-muted text-sm" style={{ marginBottom: 'var(--space-4)' }}>Notre équipe vous recontactera sous 48h.</p>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 'var(--space-3)' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Nom complet</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ex: Jean Dupont" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)' }} />
                  </div>
                  <div style={{ marginBottom: 'var(--space-3)' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Adresse Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jean.dupont@email.com" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)' }} />
                  </div>
                  <div style={{ marginBottom: 'var(--space-3)' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Domaine d'expertise</label>
                    <select value={expertise} onChange={e => setExpertise(e.target.value)} required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)', backgroundColor: 'var(--color-blanc-pur)' }}>
                      <option value="">Sélectionnez un domaine...</option>
                      <option value="Développement Web">Développement Web / Mobile</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cybersécurité">Cybersécurité</option>
                      <option value="Data Science">Data Science / IA</option>
                      <option value="Soft Skills">Soft Skills & Leadership</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: 'var(--text-sm)' }}>Votre Motivation</label>
                    <textarea value={motivation} onChange={e => setMotivation(e.target.value)} rows="4" placeholder="Parlez-nous de ce que vous aimeriez apporter à la jeunesse..." required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-gris-bordure)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)', resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Envoyer ma candidature</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Benevolat;
