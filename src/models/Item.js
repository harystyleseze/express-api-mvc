let items = [
    { id: 1, name: "Sample Notebook", description: "A simple notebook for your ideas" },
    { id: 2, name: "Starter Pen", description: "A reliable writing instrument" },
    { id: 3, name: "Desk Lamp", description: "Brightens up your workspace" },
    { id: 4, name: "Laptop Stand", description: "Keeps your posture ergonomic" },
    { id: 5, name: "Wireless Mouse", description: "Smooth and precise control" },
    { id: 6, name: "Sticky Notes", description: "Colorful notes for quick thoughts" }
];
let nextId = 7;

const Item = {
    findAll: () => items,

    findById: (id) => items.find(item => item.id === parseInt(id)),

    create: (data) => {
        const newItem = { id: nextId++, ...data };
        items.push(newItem);
        return newItem;
    },

    update: (id, data) => {
        const index = items.findIndex(item => item.id === parseInt(id));
        if (index === -1) return null;
        items[index] = { ...items[index], ...data, id: parseInt(id) };
        return items[index];
    },

    delete: (id) => {
        const index = items.findIndex(item => item.id === parseInt(id));
        if (index === -1) return false;
        items.splice(index, 1);
        return true;
    }
};

module.exports = Item;
