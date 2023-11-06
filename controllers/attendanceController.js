const Attendance = require('../models/attendanceModel');

const attendanceController = {
  // Get all attendance records
  getAllAttendance: async (req, res) => {
    try {
      const attendance = await Attendance.find();
      res.json(attendance);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get attendance record by ID
  getAttendanceById: async (req, res) => {
    try {
      const record = await Attendance.findById(req.params.id);
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ message: 'Attendance record not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new attendance record
  createAttendance: async (req, res) => {
    const newAttendance = new Attendance(req.body);
    try {
      const attendance = await newAttendance.save();
      res.status(201).json(attendance);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update an attendance record by ID
  updateAttendance: async (req, res) => {
    try {
      const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (attendance) {
        res.json(attendance);
      } else {
        res.status(404).json({ message: 'Attendance record not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete an attendance record by ID
  deleteAttendance: async (req, res) => {
    try {
      const attendance = await Attendance.findByIdAndRemove(req.params.id);
      if (attendance) {
        res.json({ message: 'Attendance record deleted' });
      } else {
        res.status(404).json({ message: 'Attendance record not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = attendanceController;
