const Cours = require('../models/coursModel');

// Get all cours
const getCours = async (req, res) => {
  try {
    const cours = await Cours.find().populate('responsable').populate('candidats').populate('supports');
    res.status(200).json(cours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single cours
const getCoursById = async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id).populate('responsable').populate('candidats').populate('supports');
    if (!cours) {
      return res.status(404).json({ message: 'Cours not found' });
    }
    res.status(200).json(cours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create cours
const createCours = async (req, res) => {
  const { titre, description, responsable } = req.body;
  try {
    const cours = new Cours({ titre, description, responsable });
    await cours.save();
    res.status(201).json(cours);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update cours
const updateCours = async (req, res) => {
  const { titre, description, responsable } = req.body;
  try {
    const cours = await Cours.findById(req.params.id);
    if (!cours) {
      return res.status(404).json({ message: 'Cours not found' });
    }

    cours.titre = titre || cours.titre;
    cours.description = description || cours.description;
    cours.responsable = responsable || cours.responsable;

    const updatedCours = await cours.save();
    res.status(200).json(updatedCours);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete cours
const deleteCours = async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);
    if (!cours) {
      return res.status(404).json({ message: 'Cours not found' });
    }
    await cours.remove();
    res.status(200).json({ message: 'Cours removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
};
