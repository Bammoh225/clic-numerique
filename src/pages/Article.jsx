import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Article() {
  const { id } = useParams();

  // Contenu fictif simulant une base de données pour l'illustration
  const article = {
    id: id || "1",
    title: "Lancement de CLIC en Côte d'Ivoire : Une nouvelle ère pour l'inclusion numérique",
    category: "Événement",
    date: "15 Janvier 2026",
    author: "Fatou Diaby",
    authorRole: "Directrice Communication",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: [
      "L'ouverture officielle du Centre pour l'Inclusion et la Culture du Numérique (CLIC) marque une étape décisive dans notre engagement pour l'alphabétisation digitale en Afrique de l'Ouest. En présence des acteurs majeurs de l'écosystème tech ivoirien, la cérémonie a mis en lumière notre ambition commune : faire du numérique un levier d'opportunités pour tous.",
      "Le constat est clair : la fracture numérique freine encore le potentiel de milliers de jeunes. En proposant des formations gratuites, allant de la simple initiation à l'informatique jusqu'aux bootcamps intensifs en développement web et cybersécurité, CLIC apporte une réponse concrète aux défis de l'employabilité.",
      "« Nous ne formons pas seulement des codeurs, nous formons des citoyens du numérique, conscients des enjeux éthiques et prêts à innover pour leur communauté », a déclaré notre Président fondateur lors de son discours d'inauguration.",
      "Dès la semaine prochaine, nos premières cohortes d'apprenants prendront place dans nos locaux équipés de matériel de dernière génération. Un accent particulier sera mis sur la participation des femmes, avec pour objectif d'atteindre la parité stricte dans l'ensemble de nos programmes techniques.",
      "Nous appelons tous les acteurs, partenaires privés et bénévoles, à rejoindre ce mouvement. Parce que le numérique n'est pas un luxe, mais un droit fondamental, et qu'il appartient à tous."
    ]
  };

  return (
    <>
      <article>
        {/* En-tête de l'article */}
        <header className="section bg-light" style={{ paddingBottom: 'var(--space-6)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <Link to="/actualites" className="text-sm font-mono" style={{ display: 'inline-block', marginBottom: 'var(--space-4)', color: 'var(--color-primary-inst)' }}>
              ← Retour aux actualités
            </Link>
            
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              <span className="badge badge-turq">{article.category}</span>
              <span className="font-mono text-sm text-muted">{article.date}</span>
            </div>
            
            <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>{article.title}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={article.authorAvatar} alt={article.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 600 }}>{article.author}</p>
                <p className="text-xs text-muted" style={{ margin: 0 }}>{article.authorRole}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Image principale */}
        <div className="container" style={{ maxWidth: '1000px', marginTop: '-var(--space-4)' }}>
          <div style={{ width: '100%', aspectRatio: '21/9', backgroundColor: 'var(--color-gris-clair)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <img src={article.image} alt="Illustration de l'article" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Contenu */}
        <section className="section">
          <div className="container grid-3" style={{ maxWidth: '1000px', gap: 'var(--space-8)' }}>
            
            {/* Colonne Principale (Texte) */}
            <div style={{ gridColumn: 'span 2' }}>
              {article.content.map((paragraph, idx) => {
                // Style particulier pour la citation
                if (paragraph.startsWith("«")) {
                  return (
                    <blockquote key={idx} className="font-times text-xl" style={{ fontStyle: 'italic', color: 'var(--color-primary-profond)', borderLeft: '4px solid var(--color-accent-or)', paddingLeft: 'var(--space-4)', margin: 'var(--space-6) 0' }}>
                      {paragraph}
                    </blockquote>
                  );
                }
                return (
                  <p key={idx} className="text-lg" style={{ color: 'var(--color-noir-digital)', marginBottom: 'var(--space-4)', lineHeight: 1.7 }}>
                    {paragraph}
                  </p>
                );
              })}
              
              <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-gris-bordure)' }}>
                <p className="font-mono text-sm text-muted">Partager cet article :</p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                  <button className="btn btn-outline" style={{ padding: '8px 16px' }}>LinkedIn</button>
                  <button className="btn btn-outline" style={{ padding: '8px 16px' }}>Twitter</button>
                </div>
              </div>
            </div>

            {/* Barre latérale (À lire aussi) */}
            <div>
              <div className="card" style={{ padding: 'var(--space-4)', position: 'sticky', top: '100px' }}>
                <h4 style={{ marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-gris-bordure)', paddingBottom: 'var(--space-2)' }}>À lire aussi</h4>
                
                <Link to="/article/2" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
                  <span className="font-mono text-xs text-muted">05 MAI 2026</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-primary-inst)', margin: '4px 0' }}>Nouveau Cursus : IA et Éthique</p>
                </Link>
                
                <Link to="/article/3" style={{ display: 'block' }}>
                  <span className="font-mono text-xs text-muted">22 AVRIL 2026</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-primary-inst)', margin: '4px 0' }}>Visite du Ministre de l'Économie Numérique</p>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </article>
    </>
  );
}

export default Article;
