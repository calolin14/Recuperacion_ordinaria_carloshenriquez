const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Importar rutas
const studentRoutes = require('./routes/students');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware - CORS configurado una sola vez
app.use(cors({
  origin: 'http://localhost:5173', // 
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/students', studentRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: 'API del Sistema de Gestión Estudiantil - Escuelita Marvel',
    version: '1.0.0',
    endpoints: {
      students: '/api/students',
      stats: '/api/students/stats'
    }
  });
});

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📡 API disponible en: http://localhost:${PORT}`);
  console.log(`👥 Endpoints: http://localhost:${PORT}/api/students`);
});