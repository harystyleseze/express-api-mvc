const Item = require('../models/Item');

const getAllItems = (req, res) => {
    const items = Item.findAll();
    res.json(items);
};

const getItemById = (req, res) => {
    const item = Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
};

const createItem = (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }
    const newItem = Item.create({ name, description });
    res.status(201).json(newItem);
};

const updateItem = (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }
    const updatedItem = Item.update(req.params.id, { name, description });
    if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
    res.json(updatedItem);
};

const deleteItem = (req, res) => {
    const deleted = Item.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Item not found' });
    res.status(204).send();
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
