const Enseignant = require('../models/enseignantModel');

// Get all enseignants
const getEnseignants = async (req, res) => {
  try {
    const enseignants = await Enseignant.find({ role: 'Enseignant' });
    res.status(200).json(enseignants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single enseignant
const getEnseignantById = async (req, res) => {
  try {
    const enseignant = await Enseignant.findById(req.params.id);
    if (!enseignant) {
      return res.status(404).json({ message: 'Enseignant not found' });
    }
    res.status(200).json(enseignant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create enseignant
const createEnseignant = async (req, res) => {
  const { nom, prenom, email, mdp, telephone, specialite } = req.body;
  try {
    const enseignant = new Enseignant({ nom, prenom, email, mdp, telephone, specialite, role: 'Enseignant' });
    await enseignant.save();
    res.status(201).json(enseignant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update enseignant
const updateEnseignant = async (req, res) => {
  const { nom, prenom, email, mdp, telephone, specialite } = req.body;
  try {
    const enseignant = await Enseignant.findById(req.params.id);
    if (!enseignant) {
      return res.status(404).json({ message: 'Enseignant not found' });
    }

    enseignant.nom = nom || enseignant.nom;
    enseignant.prenom = prenom || enseignant.prenom;
    enseignant.email = email || enseignant.email;
    enseignant.mdp = mdp || enseignant.mdp;
    enseignant.telephone = telephone || enseignant.telephone;
    enseignant.specialite = specialite || enseignant.specialite;

    const updatedEnseignant = await enseignant.save();
    res.status(200).json(updatedEnseignant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete enseignant
const deleteEnseignant = async (req, res) => {
  try {
    const enseignant = await Enseignant.findById(req.params.id);
    if (!enseignant) {
      return res.status(404).json({ message: 'Enseignant not found' });
    }
    await enseignant.remove();
    res.status(200).json({ message: 'Enseignant removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEnseignants,
  getEnseignantById,
  createEnseignant,
  updateEnseignant,
  deleteEnseignant,
};
