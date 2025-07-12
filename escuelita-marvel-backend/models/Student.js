// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  carnet: {
    type: String,
    required: [true, 'El carnet es obligatorio'],
    unique: true,
    trim: true
  },
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es obligatorio'],
    trim: true,
    maxlength: [50, 'El apellido no puede tener más de 50 caracteres']
  },
  grado: {
    type: String,
    required: [true, 'El grado es obligatorio'],
    enum: [
      '1° Básico', '2° Grado', '3° Grado', '4° Grado', '5° Grado',
      '6° Grado', '7° Grado', '8° Grado', '9° Grado'
    ]
  },
  estado: {
    type: String,
    enum: ['Activo', 'Inactivo'],
    default: 'Activo'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);