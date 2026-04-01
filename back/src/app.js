const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'teste',
  password: 'password',
  port: 5432,
});

// ================= SWAGGER =================
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API Simples',
    version: '1.0.0',
  },
  servers: [
    { url: 'http://localhost:3000' }
  ],
  paths: {
    '/status': {
      get: {
        summary: 'Status da API',
        tags: ['Geral'],
        responses: { '200': { description: 'OK' } }
      }
    },

    '/usuarios': {
      post: {
        summary: 'Criar usuário',
        tags: ['Geral'],
        responses: { '201': { description: 'Criado' } }
      }
    },

    '/usuarios/{id}': {
      put: {
        summary: 'Editar usuário',
        tags: ['Geral'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } }
        ],
        responses: { '200': { description: 'Atualizado' } }
      },
      delete: {
        summary: 'Remover usuário',
        tags: ['Geral'],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } }
        ],
        responses: { '200': { description: 'Removido' } }
      }
    }
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ================= ROTAS =================

app.get('/status', (req, res) => {
  res.json({ mensagem: 'API funcionando' });
});

// GET
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch {
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});

// POST
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    res.status(201).json(result.rows[0]);
  } catch {
    res.status(500).json({ erro: 'Erro ao inserir' });
  }
});

// PUT
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const result = await pool.query(
      'UPDATE usuarios SET nome=$1, email=$2 WHERE id=$3 RETURNING *',
      [nome, email, id]
    );
    res.json(result.rows[0]);
  } catch {
    res.status(500).json({ erro: 'Erro ao atualizar' });
  }
});

// DELETE
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM usuarios WHERE id=$1', [id]);
    res.json({ mensagem: 'Removido' });
  } catch {
    res.status(500).json({ erro: 'Erro ao remover' });
  }
});

// ================= SERVER =================
app.listen(3000, () => {
  console.log('API em http://localhost:3000/api-docs/,'),
  console.log('Inicie o frontend em outro terminal com "flutter run -d chrome"');
});