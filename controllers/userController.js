const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Criação de um novo usuário
exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
};

// Listagem de todos os usuários
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

// Atualização de um usuário
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.update({ username, password: hashedPassword }, { where: { id } });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar usuário' });
  }
};

// Deleção de um usuário
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({ where: { id } });
    res.json({ message: 'Usuário deletado' });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar usuário' });
  }
};
