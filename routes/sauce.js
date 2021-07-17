const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, sauceCtrl.getAllSauces); //Si je chemin de la requette est "get /" on recupère toutes les sauces
router.post('/', auth, multer, sauceCtrl.createSauce); //Si je chemin de la requette est "post /" on créé une sauce
router.get('/:id', auth, sauceCtrl.getOneSauce);  //Si je chemin de la requette est "get/:id" on récupère une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce); //Si je chemin de la requette est "put/:id" on modifie une sauce
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce); //Si je chemin de la requette est
router.post('/:id/like', auth, sauceCtrl.likeSauce); //Si je chemin de la requette est


module.exports = router;