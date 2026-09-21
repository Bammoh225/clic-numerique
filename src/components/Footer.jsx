import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark" style={{ paddingTop: 'var(--space-12)' }}>
      <div className="container">
        
        {/* 11. FOOTER INSTITUTIONNEL */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
          
          {/* Col 1 : Logo & Mission */}
          <div>
            <img src="/Logo officiel CLIC.png" alt="CLIC Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)', marginBottom: 'var(--space-3)' }} />
            <p className="text-sm text-muted" style={{ marginBottom: 'var(--space-3)' }}>
              Le Centre pour l'Inclusion et la Culture du Numérique (CLIC) milite pour l'alphabétisation digitale et l'innovation citoyenne en Côte d'Ivoire.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <span style={{ fontSize: '1.5rem', opacity: 0.8, cursor: 'pointer' }}>in</span>
              <span style={{ fontSize: '1.5rem', opacity: 0.8, cursor: 'pointer' }}>tw</span>
              <span style={{ fontSize: '1.5rem', opacity: 0.8, cursor: 'pointer' }}>fb</span>
            </div>
          </div>

          {/* Col 2 : Liens rapides */}
          <div>
            <h4 style={{ color: 'var(--color-blanc-pur)', marginBottom: 'var(--space-3)' }}>Liens rapides</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li><Link to="/" className="text-muted text-sm">Accueil</Link></li>
              <li><Link to="/" className="text-muted text-sm">À propos de CLIC</Link></li>
              <li><Link to="/" className="text-muted text-sm">Notre Équipe</Link></li>
              <li><Link to="/" className="text-muted text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3 : Nos Programmes */}
          <div>
            <h4 style={{ color: 'var(--color-blanc-pur)', marginBottom: 'var(--space-3)' }}>Programmes</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li><Link to="/education" className="text-muted text-sm">Alphabétisation</Link></li>
              <li><Link to="/education" className="text-muted text-sm">Cybersécurité</Link></li>
              <li><Link to="/education" className="text-muted text-sm">Création de contenu</Link></li>
              <li><Link to="/education" className="text-muted text-sm">Entrepreneuriat</Link></li>
            </ul>
          </div>

          {/* Col 4 : Ressources */}
          <div>
            <h4 style={{ color: 'var(--color-blanc-pur)', marginBottom: 'var(--space-3)' }}>Ressources</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li><Link to="/actualites" className="text-muted text-sm">Blog & Actus</Link></li>
              <li><Link to="/talents" className="text-muted text-sm">Vitrine des talents</Link></li>
              <li><Link to="/benevolat" className="text-muted text-sm">Soutenir CLIC</Link></li>
            </ul>
          </div>

          {/* Col 5 : Galerie Photo (Mini grille) */}
          <div>
            <h4 style={{ color: 'var(--color-blanc-pur)', marginBottom: 'var(--space-3)' }}>Sur le terrain</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <div style={{ aspectRatio: '1', backgroundColor: '#2C2D35', borderRadius: '4px', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
              <div style={{ aspectRatio: '1', backgroundColor: '#2C2D35', borderRadius: '4px', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
              <div style={{ aspectRatio: '1', backgroundColor: '#2C2D35', borderRadius: '4px', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
              <div style={{ aspectRatio: '1', backgroundColor: '#2C2D35', borderRadius: '4px', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
              <div style={{ aspectRatio: '1', backgroundColor: '#2C2D35', borderRadius: '4px', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
              <div style={{ aspectRatio: '1', backgroundColor: '#2C2D35', borderRadius: '4px', overflow: 'hidden' }}><img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
            </div>
          </div>
          
        </div>

        {/* Bottom Legal */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: 'var(--space-4) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} CLIC — Côte d'Ivoire. Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <Link to="#" className="text-sm text-muted">Statuts & Règlement</Link>
            <Link to="#" className="text-sm text-muted">Mentions légales</Link>
            <Link to="#" className="text-sm text-muted">Politique de confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
