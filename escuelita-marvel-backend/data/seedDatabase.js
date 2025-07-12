const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('../models/Student');
const initialStudents = require('./initialData');

// Cargar variables de entorno
dotenv.config();

const seedDatabase = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(' Conectado a MongoDB');

    // Limpiar la colección existente
    await Student.deleteMany({});
    console.log(' Datos existentes eliminados');

    // Insertar datos iniciales
    await Student.insertMany(initialStudents);
    console.log('Datos iniciales insertados exitosamente');

    // Mostrar estadísticas
    const total = await Student.countDocuments();
    const activos = await Student.countDocuments({ estado: 'Activo' });
    const inactivos = await Student.countDocuments({ estado: 'Inactivo' });

    console.log('\n Estadísticas:');
    console.log(`   Total de estudiantes: ${total}`);
    console.log(`   Estudiantes activos: ${activos}`);
    console.log(`   Estudiantes inactivos: ${inactivos}`);

    process.exit(0);
  } catch (error) {
    console.error(' Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedDatabase();