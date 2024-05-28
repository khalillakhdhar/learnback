const express = require('express');
const {
  getSupports,
  getSupportById,
  createSupport,
  updateSupport,
  deleteSupport,
} = require('../controllers/supportController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getSupports) // Route pour obtenir tous les supports
  .post(protect, createSupport); // Route pour créer un support

router.route('/:id')
  .get(protect, getSupportById) // Route pour obtenir un support par ID
  .put(protect, updateSupport)  // Route pour mettre à jour un support par ID
  .delete(protect, deleteSupport); // Route pour supprimer un support par ID

module.exports = router;
