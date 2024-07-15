// controllers/classController.js
const Class = require('../models/classModel');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.createClass = async (req, res) => {
  const { title, description, date, duration, price } = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newClass = new Class({
      title,
      description,
      date,
      duration,
      price,
      image: result.secure_url
    });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
