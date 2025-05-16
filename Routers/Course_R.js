const express = require('express');
const router = express.Router();
module.exports = router;

const course_Mid = require("../middleware/course_Mid");

router.get("/add",(req,res) => {
    res.render("crs_add" , {
        data:{},
    });
});