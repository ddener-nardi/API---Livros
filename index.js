const express = require('express');
const livroRoutes = require('./Routes/livrosRoutes');
const app = express();

app.use(express.json());
app.use('/api', livroRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
