const express = require("express");
const { imgs } = require("../shared");

const galleryRoute = express.Router();

// @desc  get images in gallery pages
// @route GET /galleryImages
// @access public
galleryRoute.route("/galleryImages").get(async (req, res) => {
    const pageNumber = Number(req.query.pageNumber) || 1;
    const pageSize = Number(req.query.pageSize);

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    res.status(200).json(imgs.slice(startIndex, endIndex));
});

module.exports = { galleryRoute };
