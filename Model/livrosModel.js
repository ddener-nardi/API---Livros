const db = require('../DataBase/db');

class Livro {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM livros');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM livros WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(livro) {
        const { titulo, autor, ano } = livro;
        const [result] = await db.query('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)', [titulo, autor, ano]);
        return result.insertId;
    }

    static async update(id, livro) {
        const { titulo, autor, ano } = livro;
        await db.query('UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?', [titulo, autor, ano, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM livros WHERE id = ?', [id]);
    }
}

module.exports = Livro;