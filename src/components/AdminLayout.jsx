import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function AdminLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === '/admin') return 'Tableau de Bord';
    if (location.pathname === '/admin/news') return 'Gestion des Actualités';
    if (location.pathname === '/admin/programs') return 'Programmes & Cohortes';
    if (location.pathname === '/admin/talents') return 'Vitrine des Talents';
    if (location.pathname === '/admin/volunteers') return 'Candidatures Bénévoles';
    return 'Administration';
  };

  return (
    <div className="admin-layout">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <img src="/Logo officiel CLIC.png" alt="CLIC Logo" style={{ height: '32px', filter: 'brightness(0) invert(1)' }} />
          <p className="font-mono text-xs" style={{ color: 'var(--color-accent-turq)', marginTop: '8px' }}>ADMINISTRATION</p>
        </div>

        <nav style={{ padding: 'var(--space-4) 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <NavLink to="/admin" end className={({isActive}) => isActive ? "admin-link active" : "admin-link"}>
            📊 Vue d'ensemble
          </NavLink>
          <NavLink to="/admin/news" className={({isActive}) => isActive ? "admin-link active" : "admin-link"}>
            📰 Actualités & Blog
          </NavLink>
          <NavLink to="/admin/programs" className={({isActive}) => isActive ? "admin-link active" : "admin-link"}>
            🎓 Programmes & Cohortes
          </NavLink>
          <NavLink to="/admin/talents" className={({isActive}) => isActive ? "admin-link active" : "admin-link"}>
            🌟 Vitrine des Talents
          </NavLink>
          <NavLink to="/admin/volunteers" className={({isActive}) => isActive ? "admin-link active" : "admin-link"}>
            🤝 Candidatures Bénévoles
          </NavLink>
        </nav>

        <div style={{ padding: 'var(--space-4)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <NavLink to="/" style={{ color: 'var(--color-blanc-pur)', fontSize: 'var(--text-sm)', textDecoration: 'underline' }}>← Retour au site public</NavLink>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="admin-content">
        
        {/* Topbar */}
        <header style={{ backgroundColor: 'var(--color-blanc-pur)', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--space-6)', borderBottom: '1px solid var(--color-gris-bordure)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: 'var(--text-xl)', margin: 0, color: 'var(--color-noir-digital)', fontFamily: 'var(--font-ui)', fontWeight: 600 }}>{getPageTitle()}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: 'var(--text-sm)' }}>Admin User</p>
              <p className="text-muted text-xs" style={{ margin: 0 }}>admin@clic-ci.org</p>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-inst)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{ padding: 'var(--space-6)', flexGrow: 1, overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
      
    </div>
  );
}

export default AdminLayout;
