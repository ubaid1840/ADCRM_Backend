const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors({origin: true, credentials: true}));

// Connect to the database
connectDB();

// Define routes
app.use('/user', userRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/tasks', taskRoutes);

app.use(express.json())

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
