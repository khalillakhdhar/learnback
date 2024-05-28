const Support = require('../models/supportModel');

// Get all supports
const getSupports = async (req, res) => {
  try {
    const supports = await Support.find().populate('cours');
    res.status(200).json(supports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single support
const getSupportById = async (req, res) => {
  try {
    const support = await Support.findById(req.params.id).populate('cours');
    if (!support) {
      return res.status(404).json({ message: 'Support not found' });
    }
    res.status(200).json(support);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create support
const createSupport = async (req, res) => {
  const { titre, pieceJointe, cours } = req.body;
  try {
    const support = new Support({ titre, pieceJointe, cours });
    await support.save();
    res.status(201).json(support);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update support
const updateSupport = async (req, res) => {
  const { titre, pieceJointe, cours } = req.body;
  try {
    const support = await Support.findById(req.params.id);
    if (!support) {
      return res.status(404).json({ message: 'Support not found' });
    }

    support.titre = titre || support.titre;
    support.pieceJointe = pieceJointe || support.pieceJointe;
    support.cours = cours || support.cours;

    const updatedSupport = await support.save();
    res.status(200).json(updatedSupport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete support
const deleteSupport = async (req, res) => {
  try {
    const support = await Support.findById(req.params.id);
    if (!support) {
      return res.status(404).json({ message: 'Support not found' });
    }
    await support.remove();
    res.status(200).json({ message: 'Support removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSupports,
  getSupportById,
  createSupport,
  updateSupport,
  deleteSupport,
};
