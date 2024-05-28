const Evaluation = require('../models/evaluationModel');

// Get all evaluations
const getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find().populate('candidat');
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single evaluation
const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id).populate('candidat');
    if (!evaluation) {
      return res.status(404).json({ message: 'Evaluation not found' });
    }
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create evaluation
const createEvaluation = async (req, res) => {
  const { candidat, note, remarques } = req.body;
  try {
    const evaluation = new Evaluation({ candidat, note, remarques });
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update evaluation
const updateEvaluation = async (req, res) => {
  const { candidat, note, remarques } = req.body;
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) {
      return res.status(404).json({ message: 'Evaluation not found' });
    }

    evaluation.candidat = candidat || evaluation.candidat;
    evaluation.note = note || evaluation.note;
    evaluation.remarques = remarques || evaluation.remarques;

    const updatedEvaluation = await evaluation.save();
    res.status(200).json(updatedEvaluation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete evaluation
const deleteEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) {
      return res.status(404).json({ message: 'Evaluation not found' });
    }
    await evaluation.remove();
    res.status(200).json({ message: 'Evaluation removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
};
