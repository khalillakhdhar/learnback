const Admin = require('../models/adminModel');

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ role: 'Admin' });
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single admin
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create admin
const createAdmin = async (req, res) => {
  const { nom, prenom, email, mdp, telephone } = req.body;
  try {
    const admin = new Admin({ nom, prenom, email, mdp, telephone, role: 'Admin' });
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update admin
const updateAdmin = async (req, res) => {
  const { nom, prenom, email, mdp, telephone } = req.body;
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    admin.nom = nom || admin.nom;
    admin.prenom = prenom || admin.prenom;
    admin.email = email || admin.email;
    admin.mdp = mdp || admin.mdp;
    admin.telephone = telephone || admin.telephone;

    const updatedAdmin = await admin.save();
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete admin
const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    await admin.remove();
    res.status(200).json({ message: 'Admin removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
