const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentsStats
} = require('../controllers/studentController');

// Rutas para estudiantes
router.route('/')
  .get(getStudents)      // GET /api/students
  .post(createStudent);  // POST /api/students

router.route('/stats')
  .get(getStudentsStats); // GET /api/students/stats

router.route('/:id')
  .get(getStudent)       // GET /api/students/:id
  .put(updateStudent)    // PUT /api/students/:id
  .delete(deleteStudent); // DELETE /api/students/:id

module.exports = router;