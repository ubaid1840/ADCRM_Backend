const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  attendanceBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  note: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] } // [longitude, latitude]
  },
  TimeStamp: { type: Date, default: Date.now },
  status: String,
  image: String,
}, {
  collection: 'Attendance'
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
