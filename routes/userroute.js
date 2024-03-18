const express = require('express');
const router = express.Router();
const user = require("../models/userModel");
const {home,createuser}= require("../controllers/usercontrollers");
router.get("/",home);
router.podt("/create",createuser);
module.exports = router;