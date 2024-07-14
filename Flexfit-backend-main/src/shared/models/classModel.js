// classModel.js

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ClassSchema = new mongoose.Schema({
    name: String,
    trainer: String,
    level: String,
    schedule: [{ type: String }], // Assuming schedule is an array of strings
    startDate: Date,
    endDate: Date,
    img: String,
});

ClassSchema.plugin(mongoosePaginate);

// Define text indexes => support text search queries
ClassSchema.index({
    name: "text",
    trainer: "text",
    level: "text",
    schedule: "text",
    startDate: "text",
    endDate: "text",
});

module.exports = mongoose.model("Class", ClassSchema);
