const express = require('express');
const {
  getCandidats,
  getCandidatById,
  createCandidat,
  updateCandidat,
  deleteCandidat,
} = require('../controllers/candidatController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getCandidats)
  .post(protect, createCandidat);

router.route('/:id')
  .get(protect, getCandidatById)
  .put(protect, updateCandidat)
  .delete(protect, deleteCandidat); 

module.exports = router;
