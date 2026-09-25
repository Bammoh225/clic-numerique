import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        // Prendre les 2 derniers articles publiés
        const published = data.filter(a => a.status === 'Publié');
        setLatestNews(published.slice(0, 2));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* 3. HERO SPLIT */}
      <section className="section" style={{ borderBottom: '1px solid var(--color-gris-bordure)' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          
          {/* Hero Content */}
          <div style={{ paddingRight: 'var(--space-4)' }}>
            <p className="font-mono" style={{ color: 'var(--color-accent-turq)', fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>
              · INCLUSION NUMÉRIQUE POUR TOUS ·
            </p>
            <h1>Formons l'Afrique<br />qui <span style={{ color: 'var(--color-primary-inst)' }}>code son avenir.</span></h1>
            <p className="text-lg text-muted" style={{ margin: 'var(--space-4) 0' }}>
              Rejoignez le mouvement pour l'alphabétisation digitale et l'innovation citoyenne. Construisons ensemble une société où la technologie est une chance pour tous.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Link to="/education" className="btn btn-primary">Découvrir nos programmes</Link>
              <Link to="/benevolat" className="btn btn-outline">Faire un don</Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Forme géométrique de fond */}
            <div className="hide-on-mobile" style={{ position: 'absolute', top: '10%', right: '0', width: '300px', height: '300px', borderRadius: '50% 50% 50% 0', backgroundColor: 'var(--color-gris-bg)', zIndex: 0, border: '2px dashed var(--color-primary-inst)', opacity: 0.2 }}></div>

            {/* Placeholder Image Principale */}
            <div style={{ width: '80%', aspectRatio: '4/5', backgroundColor: 'var(--color-gris-clair)', borderRadius: 'var(--radius-md)', zIndex: 1, position: 'relative', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Jeunesse africaine en formation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Cartes Flottantes */}
            <div className="card hide-on-mobile" style={{ position: 'absolute', top: '20%', left: '-10%', zIndex: 2, padding: 'var(--space-2) var(--space-3)' }}>
              <p className="font-mono" style={{ color: 'var(--color-accent-turq)', fontSize: 'var(--text-xl)', fontWeight: 700 }}>5 000+</p>
              <p className="text-xs text-muted" style={{ margin: 0 }}>Jeunes formés</p>
            </div>

            <div className="card hide-on-mobile" style={{ position: 'absolute', bottom: '15%', right: '-5%', zIndex: 2, padding: 'var(--space-2) var(--space-3)' }}>
              <p className="font-mono" style={{ color: 'var(--color-accent-or)', fontSize: 'var(--text-xl)', fontWeight: 700 }}>95%</p>
              <p className="text-xs text-muted" style={{ margin: 0 }}>De satisfaction</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BANDEAU "NOS PROGRAMMES PHARES" */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2>Nos programmes phares</h2>
            <p className="text-lg text-muted">Des cursus adaptés aux réalités locales pour maîtriser les outils de demain.</p>
          </div>

          <div className="grid-4">
            
            {/* Carte Programme 1 */}
            <div className="card">
              <div style={{ height: '160px', backgroundColor: '#E9ECEF', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Alphabétisation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-turq" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)' }}>ALPHABÉTISATION</span>
              </div>
              <div style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ marginBottom: 'var(--space-1)' }}>Initiation au Numérique</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <span className="text-xs text-muted">Durée : 3 mois</span>
                  <span className="text-xs text-muted">Format : Présentiel</span>
                </div>
                <div style={{ borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-accent-or)' }}>★</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--color-primary-profond)' }}>100 PLACES FINANCÉES</span>
                </div>
              </div>
            </div>

            {/* Carte Programme 2 */}
            <div className="card">
              <div style={{ height: '160px', backgroundColor: '#E9ECEF', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Code" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-or" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)' }}>DÉVELOPPEMENT</span>
              </div>
              <div style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ marginBottom: 'var(--space-1)' }}>Bootcamp Code (Web)</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <span className="text-xs text-muted">Durée : 6 mois</span>
                  <span className="text-xs text-muted">Format : Hybride</span>
                </div>
                <div style={{ borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-accent-or)' }}>★</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--color-primary-profond)' }}>50 PLACES FINANCÉES</span>
                </div>
              </div>
            </div>

            {/* Carte Programme 3 */}
            <div className="card">
              <div style={{ height: '160px', backgroundColor: '#E9ECEF', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cyber" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-turq" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)' }}>CITOYENNETÉ</span>
              </div>
              <div style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ marginBottom: 'var(--space-1)' }}>Cybersécurité Citoyenne</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <span className="text-xs text-muted">Durée : 4 semaines</span>
                  <span className="text-xs text-muted">Format : En ligne</span>
                </div>
                <div style={{ borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-accent-or)' }}>★</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--color-primary-profond)' }}>ACCÈS LIBRE</span>
                </div>
              </div>
            </div>

            {/* Carte Programme 4 */}
            <div className="card">
              <div style={{ height: '160px', backgroundColor: '#E9ECEF', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Innovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-or" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)' }}>INNOVATION</span>
              </div>
              <div style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ marginBottom: 'var(--space-1)' }}>Création de Contenu</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <span className="text-xs text-muted">Durée : 2 mois</span>
                  <span className="text-xs text-muted">Format : Présentiel</span>
                </div>
                <div style={{ borderTop: '1px solid var(--color-gris-bordure)', paddingTop: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-accent-or)' }}>★</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--color-primary-profond)' }}>30 PLACES FINANCÉES</span>
                </div>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Link to="/education" className="btn btn-outline">Voir tous les programmes</Link>
          </div>
        </div>
      </section>

      {/* 5. SECTION DOUBLE COLONNE */}
      <section className="section">
        <div className="container grid-2" style={{ gap: 'var(--space-12)' }}>
          
          {/* Gauche : Catégories */}
          <div>
            <h3>Catégories d'action</h3>
            <div className="grid-2" style={{ marginTop: 'var(--space-4)' }}>
              
              <div className="card" style={{ padding: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-gris-bg)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-inst)' }}>💻</div>
                <h4 style={{ fontSize: 'var(--text-base)', margin: 0 }}>Alphabétisation</h4>
              </div>
              <div className="card" style={{ padding: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-gris-bg)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-inst)' }}>🛡️</div>
                <h4 style={{ fontSize: 'var(--text-base)', margin: 0 }}>Cybersécurité</h4>
              </div>
              <div className="card" style={{ padding: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-gris-bg)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-inst)' }}>🎥</div>
                <h4 style={{ fontSize: 'var(--text-base)', margin: 0 }}>Création</h4>
              </div>
              <div className="card" style={{ padding: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-gris-bg)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-inst)' }}>🚀</div>
                <h4 style={{ fontSize: 'var(--text-base)', margin: 0 }}>Entrepreneuriat</h4>
              </div>

            </div>
          </div>

          {/* Droite : Pourquoi CLIC */}
          <div>
            <h2>Pourquoi choisir CLIC ?</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div style={{ color: 'var(--color-accent-turq)', fontSize: 'var(--text-xl)' }}>✦</div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-base)', marginBottom: '4px' }}>Formateurs engagés</h4>
                  <p className="text-sm text-muted">Des experts du terrain dévoués à la réussite de la jeunesse, issus des meilleures entreprises de la région.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div style={{ color: 'var(--color-accent-turq)', fontSize: 'var(--text-xl)' }}>✦</div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-base)', marginBottom: '4px' }}>Pédagogie inclusive</h4>
                  <p className="text-sm text-muted">Des méthodes d'apprentissage adaptées à tous les niveaux initiaux, favorisant la pratique intensive.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <div style={{ color: 'var(--color-accent-turq)', fontSize: 'var(--text-xl)' }}>✦</div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-base)', marginBottom: '4px' }}>Accompagnement terrain</h4>
                  <p className="text-sm text-muted">Un suivi de la formation jusqu'à l'insertion professionnelle avec nos entreprises partenaires.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-4)', display: 'inline-block', backgroundColor: 'var(--color-gris-bg)', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-accent-or)' }}>
              <span className="font-mono text-sm" style={{ fontWeight: 700 }}>3+ ANNÉES D'ENGAGEMENT</span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BANDEAU STATISTIQUES PLEIN-LARGE */}
      <section className="section-sm" style={{ background: 'linear-gradient(90deg, var(--color-primary-inst) 0%, var(--color-primary-profond) 100%)', color: 'var(--color-blanc-pur)' }}>
        <div className="container grid-4" style={{ textAlign: 'center' }}>
          <div>
            <div className="font-mono" style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent-turq)' }}>5000+</div>
            <div className="text-sm" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jeunes Formés</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent-turq)' }}>120</div>
            <div className="text-sm" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Formateurs Actifs</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent-turq)' }}>15</div>
            <div className="text-sm" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Programmes</div>
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent-turq)' }}>95%</div>
            <div className="text-sm" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Taux de satisfaction</div>
          </div>
        </div>
      </section>

      {/* 7. NOTRE ÉQUIPE / FORMATEURS */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2>Nos Formateurs Experts</h2>
            <p className="text-lg text-muted">L'excellence pédagogique au service de l'inclusion.</p>
          </div>

          <div className="grid-4">
            
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--color-gris-clair)', margin: '0 auto var(--space-3)', overflow: 'hidden' }}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="KONE Idrisse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ margin: 0 }}>KONE Idrisse J.</h4>
              <p className="text-xs text-muted" style={{ margin: 'var(--space-1) 0 var(--space-2)' }}>Expert Numérique</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--color-primary-inst)' }}>in</a>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--color-gris-clair)', margin: '0 auto var(--space-3)', overflow: 'hidden' }}>
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="BAMBA Mohamed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ margin: 0 }}>BAMBA Mohamed</h4>
              <p className="text-xs text-muted" style={{ margin: 'var(--space-1) 0 var(--space-2)' }}>Lead Développeur</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--color-primary-inst)' }}>in</a>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--color-gris-clair)', margin: '0 auto var(--space-3)', overflow: 'hidden' }}>
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Marc Antoine DA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ margin: 0 }}>Marc Antoine DA</h4>
              <p className="text-xs text-muted" style={{ margin: 'var(--space-1) 0 var(--space-2)' }}>Formateur Design</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--color-primary-inst)' }}>in</a>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--color-gris-clair)', margin: '0 auto var(--space-3)', overflow: 'hidden' }}>
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Awa CISSE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ margin: 0 }}>Awa CISSE</h4>
              <p className="text-xs text-muted" style={{ margin: 'var(--space-1) 0 var(--space-2)' }}>Experte Cybersécurité</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--color-primary-inst)' }}>in</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. PROCHAINS ÉVÉNEMENTS */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Prochains événements</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="card flex-col-mobile" style={{ display: 'flex', alignItems: 'center', padding: '0', overflow: 'hidden' }}>
              <div className="bg-brand" style={{ padding: 'var(--space-3)', minWidth: '120px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="font-mono text-2xl" style={{ color: 'var(--color-accent-turq)', fontWeight: 700, lineHeight: 1 }}>15</span>
                <span className="font-mono text-sm" style={{ fontWeight: 700 }}>OCT</span>
              </div>
              <div style={{ padding: 'var(--space-3)', flexGrow: 1 }}>
                <h4 style={{ margin: 0 }}>Webinaire : Les métiers du Web</h4>
                <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: '8px', flexWrap: 'wrap' }}>
                  <span className="text-sm text-muted">🕒 14:00 - 16:00</span>
                  <span className="badge badge-turq">En ligne</span>
                </div>
              </div>
              <div style={{ padding: 'var(--space-3)' }}>
                <button className="btn btn-outline">S'inscrire</button>
              </div>
            </div>

            <div className="card flex-col-mobile" style={{ display: 'flex', alignItems: 'center', padding: '0', overflow: 'hidden' }}>
              <div className="bg-brand" style={{ padding: 'var(--space-3)', minWidth: '120px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="font-mono text-2xl" style={{ color: 'var(--color-accent-turq)', fontWeight: 700, lineHeight: 1 }}>22</span>
                <span className="font-mono text-sm" style={{ fontWeight: 700 }}>NOV</span>
              </div>
              <div style={{ padding: 'var(--space-3)', flexGrow: 1 }}>
                <h4 style={{ margin: 0 }}>Hackathon : Tech for Good Abidjan</h4>
                <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: '8px', flexWrap: 'wrap' }}>
                  <span className="text-sm text-muted">🕒 09:00 - 18:00</span>
                  <span className="badge badge-or">Présentiel</span>
                </div>
              </div>
              <div style={{ padding: 'var(--space-3)' }}>
                <button className="btn btn-outline">S'inscrire</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. SECTION 3 COLONNES */}
      <section className="section bg-light">
        <div className="container grid-3">
          
          {/* Col 1 : Témoignage */}
          <div>
            <h3>Témoignage</h3>
            <div className="card" style={{ padding: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
              <p className="font-times text-lg" style={{ fontStyle: 'italic', color: 'var(--color-primary-profond)' }}>
                "Grâce à CLIC, j'ai pu acquérir les bases de la programmation et décrocher mon premier stage en tant qu'intégratrice web au sein d'une agence locale. Un tremplin inestimable pour ma carrière."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-gris-clair)', overflow: 'hidden' }}>
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Fatou" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-base)', margin: 0 }}>Fatou D.</h4>
                  <p className="text-xs text-muted" style={{ margin: 0 }}>Alumni Bootcamp 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 : Actualités */}
          <div>
            <h3>Dernières Actualités</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
              
              {latestNews.map(news => (
                <div key={news.id} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '60px', backgroundColor: 'var(--color-gris-clair)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <img src={news.image || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted">{news.date}</span>
                    <Link to={`/article/${news.id}`}><h4 style={{ fontSize: 'var(--text-base)', margin: 0 }}>{news.title}</h4></Link>
                  </div>
                </div>
              ))}

              {latestNews.length === 0 && <p className="text-sm text-muted">Aucune actualité pour le moment.</p>}
            </div>
          </div>

          {/* Col 3 : FAQ */}
          <div>
            <h3>Foire Aux Questions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              
              <div className="card" style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ fontSize: 'var(--text-base)', display: 'flex', justifyContent: 'space-between', margin: 0 }}>Les formations sont-elles gratuites ? <span>+</span></h4>
              </div>
              <div className="card" style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ fontSize: 'var(--text-base)', display: 'flex', justifyContent: 'space-between', margin: 0 }}>Comment devenir formateur bénévole ? <span>+</span></h4>
              </div>
              <div className="card" style={{ padding: 'var(--space-3)' }}>
                <h4 style={{ fontSize: 'var(--text-base)', display: 'flex', justifyContent: 'space-between', margin: 0 }}>Où se déroulent les ateliers ? <span>+</span></h4>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 10. BANDEAU NEWSLETTER */}
      <section style={{ backgroundColor: 'var(--color-accent-or)', padding: 'var(--space-6) 0' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0 }}>Restez informés de notre impact.</h3>
            <p style={{ margin: 'var(--space-1) 0 0 0', color: 'var(--color-noir-digital)' }}>Abonnez-vous à notre newsletter mensuelle.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <input type="email" placeholder="Votre adresse email" style={{ flexGrow: 1, padding: '12px 16px', border: 'none', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-ui)' }} />
            <button className="btn btn-primary" style={{ border: 'none' }}>S'abonner</button>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
