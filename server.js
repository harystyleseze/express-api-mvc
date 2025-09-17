const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const itemsRouter = require('./src/routes/items');
const errorHandler = require('./src/middleware/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! Welcome to the API.' });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
