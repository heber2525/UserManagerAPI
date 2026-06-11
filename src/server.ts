import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'UserManager API',
    version: '1.0.0',
    status: 'running',
    author: 'Heber Baraybar',
  });
});
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'UserManager API funcionando',
    timestamp: new Date().toString(),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
