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
    version: '1.0.0',
    environment: 'development',
  });
});
app.get('/api/users', (req, res) => {
  res.status(200).json({
    message: 'Listado de usuarios',
    data: [],
  });
});
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'Detalle de usuario',
    id: id,
  });
});
app.post('/api/users', (req, res) => {
  const userData = req.body;

  console.log('Body recibido en POST /api/users:', userData);
  res.status(201).json({
    message: 'Usuario recibido para crear',
    data: userData,
  });
});
app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  res.status(200).json({
    message: 'Usuario recibido para actualizar',
    id: id,
    changes: changes,
  });
});
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'Usuario recibido para eliminar o desactivar',
    id: id,
  });
});
app.get('/api/users/me', (req, res) => {
  res.json({
    id: 1,
    name: 'Usuario de prueba',
    email: 'usuario@email.com',
    role: 'USER',
    isActive: true,
  });
});
app.patch('/api/users/:id/status', (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  res.json({
    message: 'Estado de usuario recibido para actualizar',
    id: id,
    isActive: isActive,
  });
});

app.patch('/api/users/:id/role', (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  res.json({
    message: 'Rol de usuario recibido para actualizar',
    id: id,
    role: role,
  });
});

app.post('/api/debug/body', (req, res) => {
  res.status(200).json({
    message: 'Body recibido correctamante',
    body: req.body,
  });
});

app.get('/api/debug/params/:id', (req, res) => {
  res.status(200).json({
    message: 'Params recibidos correctamente',
    params: req.params,
  });
});

app.get('/api/debug/query', (req, res) => {
  res.status(200).json({
    message: 'Query params recibidos correctamente',
    query: req.query,
  });
});

app.get('/api/debug/headers', (req, res) => {
  res.status(200).json({
    message: 'Headers recibidos correctamente',
    headers: req.headers,
  });
});

app.patch('/api/debug/users/:id', (req, res) => {
  const { id } = req.params;
  const { notify } = req.query;
  const authorization = req.headers.authorization;
  const changes = req.body;

  res.status(200).json({
    message: 'Datos combinados recibidos',
    id,
    notify,
    authorization,
    changes,
  });
});

app.post('/api/debug/request', (req, res) => {
  res.status(200).json({
    message: 'Información completa de la petición',
    method: req.method,
    path: req.path,
    params: req.params,
    query: req.query,
    headers: req.headers,
    body: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
