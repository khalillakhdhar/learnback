const Candidat = require('../models/candidatModel');

// Get all candidats
const getCandidats = async (req, res) => {
  try {
    const candidats = await Candidat.find({ role: 'Candidat' });
    res.status(200).json(candidats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single candidat
const getCandidatById = async (req, res) => {
  try {
    const candidat = await Candidat.findById(req.params.id);
    if (!candidat) {
      return res.status(404).json({ message: 'Candidat not found' });
    }
    res.status(200).json(candidat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create candidat
const createCandidat = async (req, res) => {
  const { nom, prenom, email, mdp, telephone } = req.body;
  try {
    const candidat = new Candidat({ nom, prenom, email, mdp, telephone, role: 'Candidat' });
    await candidat.save();
    res.status(201).json(candidat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update candidat
const updateCandidat = async (req, res) => {
  const { nom, prenom, email, mdp, telephone } = req.body;
  try {
    const candidat = await Candidat.findById(req.params.id);
    if (!candidat) {
      return res.status(404).json({ message: 'Candidat not found' });
    }

    candidat.nom = nom || candidat.nom;
    candidat.prenom = prenom || candidat.prenom;
    candidat.email = email || candidat.email;
    candidat.mdp = mdp || candidat.mdp;
    candidat.telephone = telephone || candidat.telephone;

    const updatedCandidat = await candidat.save();
    res.status(200).json(updatedCandidat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete candidat
const deleteCandidat = async (req, res) => {
  try {
    const candidat = await Candidat.findById(req.params.id);
    if (!candidat) {
      return res.status(404).json({ message: 'Candidat not found' });
    }
    await candidat.remove();
    res.status(200).json({ message: 'Candidat removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCandidats,
  getCandidatById,
  createCandidat,
  updateCandidat,
  deleteCandidat,
};
