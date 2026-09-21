import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="container header-container">
      <div class="logo-container">
        <!-- Placeholder for logo, you can replace the src with the actual logo -->
        <img src="/Logo officiel CLIC.png" alt="CLIC Logo" class="logo" />
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#a-propos">À Propos</a></li>
          <li><a href="#programmes">Nos Programmes</a></li>
          <li><a href="#contact" class="btn-primary">Nous Rejoindre</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section id="accueil" class="hero">
      <div class="container hero-content">
        <h1>Parce que le numérique appartient à tous.</h1>
        <p class="subtitle">CONNECTER. FORMER. INCLURE.</p>
        <p class="description">
          Le Centre pour l'Inclusion et la Culture du Numérique (CLIC) œuvre pour rendre le numérique accessible à tous, en particulier à la jeunesse africaine. Une éducation inclusive et équitable en Côte d'Ivoire.
        </p>
        <div class="hero-actions">
          <a href="#programmes" class="btn-primary">Découvrir nos programmes</a>
          <a href="#contact" class="btn-secondary">Soutenir CLIC</a>
        </div>
      </div>
      <div class="hero-bg-accent"></div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="a-propos" class="about">
      <div class="container">
        <h2 class="section-title">Qui Sommes-Nous ?</h2>
        <div class="about-grid">
          <div class="about-card">
            <h3>Notre Mission</h3>
            <p>Promouvoir une éducation inclusive et équitable en Côte d'Ivoire en initiant les jeunes aux outils numériques.</p>
          </div>
          <div class="about-card">
            <h3>Notre Vision</h3>
            <p>Un espace où chaque jeune dispose des compétences numériques pour s'épanouir, innover et contribuer à une société équitable et connectée.</p>
          </div>
          <div class="about-card">
            <h3>Nos Valeurs</h3>
            <ul class="values-list">
              <li><span class="value-dot"></span> Solidarité</li>
              <li><span class="value-dot"></span> Innovation</li>
              <li><span class="value-dot"></span> Transparence</li>
              <li><span class="value-dot"></span> Respect</li>
              <li><span class="value-dot"></span> Engagement citoyen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM SECTION -->
    <section class="team">
      <div class="container">
        <h2 class="section-title">Bureau Exécutif</h2>
        <div class="team-grid">
          <div class="team-member">
            <h4 class="member-name">KONE Idrisse Junior</h4>
            <p class="member-role">Président Fondateur</p>
          </div>
          <div class="team-member">
            <h4 class="member-name">BAMBA Mohamed</h4>
            <p class="member-role">Responsable TI</p>
          </div>
          <div class="team-member">
            <h4 class="member-name">Marc Antoine DA</h4>
            <p class="member-role">Responsable Communication & Design</p>
          </div>
          <div class="team-member">
            <h4 class="member-name">Hassan DIARRASSOUBA</h4>
            <p class="member-role">Trésorier Général</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAMS SECTION -->
    <section id="programmes" class="programs">
      <div class="container">
        <h2 class="section-title">Nos Programmes & Actions</h2>
        <p class="section-subtitle">Du clic à la citoyenneté.</p>
        <div class="programs-grid">
          <div class="program-card">
            <div class="program-icon">🚀</div>
            <h3>Éducation Digitale</h3>
            <p>Développer des programmes de formation, de sensibilisation et d'accompagnement en faveur de l'inclusion numérique.</p>
          </div>
          <div class="program-card">
            <div class="program-icon">🌍</div>
            <h3>Citoyenneté Numérique</h3>
            <p>Favoriser l'émergence d'une citoyenneté numérique responsable pour une société connectée.</p>
          </div>
          <div class="program-card">
            <div class="program-icon">🤝</div>
            <h3>Partenariats Stratégiques</h3>
            <p>Nouer des partenariats avec les institutions publiques, privées et la société civile pour démultiplier notre impact.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="contact">
      <div class="container contact-container">
        <div class="contact-info">
          <h2 class="section-title">Nous Rejoindre</h2>
          <p>L'Afrique qui code son propre avenir. Rejoignez-nous pour construire ensemble une société numérique inclusive.</p>
          <div class="contact-details">
            <p>📍 Siège social : Abidjan, Côte d'Ivoire</p>
            <p>📧 Email : <a href="mailto:contact@clic-ci.org">contact@clic-ci.org</a></p>
          </div>
        </div>
        <div class="contact-form-container">
          <form class="contact-form" action="#" method="POST">
            <div class="form-group">
              <label for="name">Nom complet</label>
              <input type="text" id="name" name="name" placeholder="Votre nom" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="votre.email@exemple.com" required />
            </div>
            <div class="form-group">
              <label for="message">Message ou motivation</label>
              <textarea id="message" name="message" rows="4" placeholder="Je souhaite adhérer en tant que membre actif..." required></textarea>
            </div>
            <button type="submit" class="btn-primary">Envoyer la demande</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-logo">
        <img src="/Logo officiel CLIC.png" alt="CLIC Logo" class="logo-small" />
        <p>Centre pour l'Inclusion et la Culture du Numérique</p>
      </div>
      <div class="footer-links">
        <p>&copy; 2026 CLIC - Côte d'Ivoire. Tous droits réservés.</p>
        <div class="legal-links">
          <a href="#">Statuts & Règlement</a>
          <a href="#">Mentions légales</a>
        </div>
      </div>
    </div>
  </footer>
`
