import React, { useState } from 'react';
import './A11yWidget.css';

function A11yWidget({ highContrast, setHighContrast, largeText, setLargeText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`a11y-widget ${isOpen ? 'open' : ''}`}>
      <button className="a11y-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu d'accessibilité">
        <span className="icon">👁️</span>
      </button>
      
      {isOpen && (
        <div className="a11y-panel">
          <h4>Accessibilité</h4>
          <button 
            className={`a11y-btn ${highContrast ? 'active' : ''}`}
            onClick={() => setHighContrast(!highContrast)}
          >
            {highContrast ? 'Désactiver' : 'Activer'} le Contraste Élevé
          </button>
          <button 
            className={`a11y-btn ${largeText ? 'active' : ''}`}
            onClick={() => setLargeText(!largeText)}
          >
            {largeText ? 'Texte Normal' : 'Texte Agrandi'}
          </button>
        </div>
      )}
    </div>
  );
}

export default A11yWidget;
