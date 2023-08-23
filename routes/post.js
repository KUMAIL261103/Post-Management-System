const express = require('express');
const router = express.Router();
const {getpost,getpostbyid} = require('../controllers/post_controllers/getpost');
const {createpost}= require('../controllers/post_controllers/createpost');
const {deletepost}=require("../controllers/post_controllers/deletepost");
router.get('/getpost',getpost);
router.post('/createpost',createpost);
router.delete('/deletepost/:id',deletepost);
router.get('/getpost/:id',getpostbyid);
module.exports= router;