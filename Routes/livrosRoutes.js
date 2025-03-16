
const express = require('express');
const router = express.Router();
const livroController = require('../Controller/livrosController');

router.get('/livros', livroController.getAllLivros);
router.get('/livros/:id', livroController.getLivroById);
router.post('/livros', livroController.createLivro);
router.put('/livros/:id', livroController.updateLivro);
router.delete('/livros/:id', livroController.deleteLivro);

module.exports = router;