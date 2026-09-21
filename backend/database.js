import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const dbPath = path.join(dataDir, 'clic.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données SQLite:', err.message);
  } else {
    console.log('Connecté à la base de données SQLite.');
    initDb();
  }
});

function initDb() {
  db.serialize(() => {
    // 1. Table Articles (News)
    db.run(`
      CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        date TEXT NOT NULL,
        excerpt TEXT,
        content TEXT,
        image TEXT,
        status TEXT DEFAULT 'Brouillon'
      )
    `);

    // 2. Table Programmes
    db.run(`
      CREATE TABLE IF NOT EXISTS programs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        cohort TEXT NOT NULL,
        capacity TEXT,
        participants INTEGER DEFAULT 0,
        status TEXT DEFAULT 'Brouillon'
      )
    `);

    // 3. Table Talents
    db.run(`
      CREATE TABLE IF NOT EXISTS talents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        author TEXT NOT NULL,
        role TEXT NOT NULL,
        description TEXT,
        link TEXT,
        image TEXT,
        avatar TEXT,
        visibility TEXT DEFAULT 'Masqué'
      )
    `);

    // 4. Table Bénévoles (Volunteers)
    db.run(`
      CREATE TABLE IF NOT EXISTS volunteers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        expertise TEXT,
        date TEXT,
        status TEXT DEFAULT 'Nouveau'
      )
    `);

    // Seed Data (Insert default mock data if table is empty)
    db.get("SELECT COUNT(*) as count FROM news", (err, row) => {
      if (row && row.count === 0) {
        console.log("Insertion des données de démonstration (Actualités)...");
        const stmt = db.prepare("INSERT INTO news (title, category, date, excerpt, image, status) VALUES (?, ?, ?, ?, ?, ?)");
        stmt.run("Lancement de CLIC en Côte d'Ivoire", "Événement", "15 Jan 2026", "Une nouvelle ère pour l'inclusion numérique s'ouvre à Abidjan.", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "Publié");
        stmt.run("Hackathon : Code ton Avenir", "Compétition", "02 Fév 2026", "Retour sur notre premier événement rassemblant 50 jeunes talents.", "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "Publié");
        stmt.run("Nouveau partenariat", "Institutionnel", "24 Sept 2026", "Signature pour accompagner plus de jeunes.", "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", "Brouillon");
        stmt.finalize();
      }
    });

    db.get("SELECT COUNT(*) as count FROM programs", (err, row) => {
      if (row && row.count === 0) {
        console.log("Insertion des données de démonstration (Programmes)...");
        const stmt = db.prepare("INSERT INTO programs (title, cohort, capacity, participants, status) VALUES (?, ?, ?, ?, ?)");
        stmt.run("Bootcamp Développement Web", "Cohorte 4", "50", 45, "Inscriptions Ouvertes");
        stmt.run("Initiation Cybersécurité", "Cohorte 1", "30", 30, "En Cours");
        stmt.finalize();
      }
    });

    db.get("SELECT COUNT(*) as count FROM volunteers", (err, row) => {
      if (row && row.count === 0) {
        console.log("Insertion des données de démonstration (Bénévoles)...");
        const stmt = db.prepare("INSERT INTO volunteers (name, role, expertise, date, status) VALUES (?, ?, ?, ?, ?)");
        stmt.run("Kouassi Marc", "Mentor", "Cybersécurité", "21 Sept. 2026", "Nouveau");
        stmt.run("Sarah Diomandé", "Formateur", "UI/UX Design", "19 Sept. 2026", "En attente d'entretien");
        stmt.run("Yannick B.", "Staff", "Organisation", "18 Sept. 2026", "Validé");
        stmt.finalize();
      }
    });
  });
}

// Promisify wrapper for easy async/await queries
export const dbQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

export const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

export default db;
