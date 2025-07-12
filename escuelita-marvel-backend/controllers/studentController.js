// controllers/studentController.js
const Student = require('../models/Student');

// Obtener todos los estudiantes
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener estudiantes',
      error: error.message
    });
  }
};

// Obtener un estudiante por ID
const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Estudiante no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener estudiante',
      error: error.message
    });
  }
};

// Crear un nuevo estudiante
const createStudent = async (req, res) => {
  try {
    const { nombre, apellido, grado, estado } = req.body;
    
    // Generar carnet automáticamente
    const lastStudent = await Student.findOne().sort({ carnet: -1 });
    let nextCarnet = 1;
    
    if (lastStudent && lastStudent.carnet) {
      nextCarnet = parseInt(lastStudent.carnet) + 1;
    }
    
    const student = await Student.create({
      carnet: nextCarnet.toString().padStart(4, '0'), // Formato: 0001, 0002, etc.
      nombre,
      apellido,
      grado,
      estado: estado || 'Activo'
    });
    
    res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear estudiante',
      error: error.message
    });
  }
};

// Actualizar un estudiante
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Estudiante no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar estudiante',
      error: error.message
    });
  }
};

// Eliminar un estudiante
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Estudiante no encontrado'
      });
    }
    
    res.json({
      success: true,
      message: 'Estudiante eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar estudiante',
      error: error.message
    });
  }
};

// Obtener estadísticas de estudiantes
const getStudentsStats = async (req, res) => {
  try {
    const total = await Student.countDocuments();
    const activos = await Student.countDocuments({ estado: 'Activo' });
    const inactivos = await Student.countDocuments({ estado: 'Inactivo' });
    
    res.json({
      success: true,
      data: {
        total,
        activos,
        inactivos
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener estadísticas',
      error: error.message
    });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentsStats
};