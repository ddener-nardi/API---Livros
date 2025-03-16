
// controllers/livroController.js
const Livro = require('../Model/livrosModel');

exports.getAllLivros = async (req, res) => {
    const livros = await Livro.getAll();
    res.json(livros);
};

exports.getLivroById = async (req, res) => {
    const livro = await Livro.getById(req.params.id);
    livro ? res.json(livro) : res.status(404).json({ message: 'Livro não encontrado' });
};

exports.createLivro = async (req, res) => {
    const id = await Livro.create(req.body);
    res.status(201).json({ message: 'Livro criado', id });
};

exports.updateLivro = async (req, res) => {
    await Livro.update(req.params.id, req.body);
    res.json({ message: 'Livro atualizado' });
};

exports.deleteLivro = async (req, res) => {
    await Livro.delete(req.params.id);
    res.json({ message: 'Livro deletado' });
};