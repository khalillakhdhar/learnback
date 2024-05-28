const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const candidatRoutes = require('./routes/candidatRoutes');
const coursRoutes = require('./routes/coursRoutes');
const evaluationRoutes = require('./routes/evaluationRoutes');
const supportRoutes = require('./routes/supportRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/candidats', candidatRoutes);
app.use('/api/cours', coursRoutes);
app.use('/api/evaluations', evaluationRoutes);
app.use('/api/supports', supportRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error(`Failed to connect to MongoDB: ${error.message}`);
});
