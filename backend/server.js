import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dbQuery, dbRun } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir les fichiers statiques du frontend (React compilé)
app.use(express.static(path.join(__dirname, '../dist')));

// ==========================================
// ROUTES : ACTUALITÉS (NEWS)
// ==========================================
app.get('/api/news', async (req, res) => {
  try {
    const news = await dbQuery('SELECT * FROM news ORDER BY id DESC');
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/news', async (req, res) => {
  const { title, category, date, excerpt, content, image, status } = req.body;
  try {
    const result = await dbRun(
      'INSERT INTO news (title, category, date, excerpt, content, image, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, category, date, excerpt, content, image, status]
    );
    res.status(201).json({ id: result.id, message: 'Article créé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// ROUTES : PROGRAMMES
// ==========================================
app.get('/api/programs', async (req, res) => {
  try {
    const programs = await dbQuery('SELECT * FROM programs ORDER BY id DESC');
    res.json(programs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/programs', async (req, res) => {
  const { title, cohort, capacity, participants, status } = req.body;
  try {
    const result = await dbRun(
      'INSERT INTO programs (title, cohort, capacity, participants, status) VALUES (?, ?, ?, ?, ?)',
      [title, cohort, capacity, participants || 0, status]
    );
    res.status(201).json({ id: result.id, message: 'Programme créé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// ROUTES : TALENTS
// ==========================================
app.get('/api/talents', async (req, res) => {
  try {
    const talents = await dbQuery('SELECT * FROM talents ORDER BY id DESC');
    res.json(talents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/talents', async (req, res) => {
  const { name, author, role, visibility, description, link } = req.body;
  try {
    const result = await dbRun(
      'INSERT INTO talents (name, author, role, visibility, description, link) VALUES (?, ?, ?, ?, ?, ?)',
      [name, author, role, visibility || 'Masqué', description, link]
    );
    res.status(201).json({ id: result.id, message: 'Talent créé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// ROUTES : BÉNÉVOLES (VOLUNTEERS)
// ==========================================
app.get('/api/volunteers', async (req, res) => {
  try {
    const volunteers = await dbQuery('SELECT * FROM volunteers ORDER BY id DESC');
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/volunteers', async (req, res) => {
  const { name, role, expertise } = req.body;
  const date = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  try {
    const result = await dbRun(
      'INSERT INTO volunteers (name, role, expertise, date, status) VALUES (?, ?, ?, ?, ?)',
      [name, role || 'Mentor', expertise, date, 'Nouveau']
    );
    res.status(201).json({ id: result.id, message: 'Candidature reçue' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// ROUTE FALLBACK (POUR REACT ROUTER)
// ==========================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Serveur CLIC Backend en cours d'exécution sur http://localhost:${PORT}`);
});
