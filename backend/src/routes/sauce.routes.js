const express = require('express')
const router = express.Router()
const auth = require("../tools/auth")
const multer = require('../tools/multer-config')

const sauceController = require('../controllers/sauceController');

router.get('/', auth, sauceController.getSauces)
router.post('/', auth, multer, sauceController.createSauce);
router.get('/:id', auth, sauceController.getOneSauce);
router.put('/:id', auth, multer, sauceController.modifySauce);
router.delete('/:id', auth, sauceController.deleteSauce);
router.post("/:id/like", auth, sauceController.likeSauce);

module.exports = router