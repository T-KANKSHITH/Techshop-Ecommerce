const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
    { 
        id: 1, 
        name: "Wireless Headphones", 
        price: 99, 
        image: "https://techshop-assets-2026.s3.eu-north-1.amazonaws.com/black-and-white-close-up-hanging-159463.jpg", 
        category: "Audio",
        description: "High-quality noise-canceling headphones."
    },
    { 
        id: 2, 
        name: "Smart Watch", 
        price: 199, 
        image: "https://techshop-assets-2026.s3.eu-north-1.amazonaws.com/noise-pulse-2-max-smartwatch_1.webp", 
        category: "Wearables",
        description: "Track your health and notifications on the go."
    },
    { 
        id: 3, 
        name: "Gaming Mouse", 
        price: 59, 
        image: "https://techshop-assets-2026.s3.eu-north-1.amazonaws.com/OIP.jpg", 
        category: "Accessories",
        description: "High-precision optical gaming mouse."
    }
];

// This fixes the "Cannot GET /" error by providing a home page message
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1>🚀 TechShop API is Live</h1>
            <p>Your backend is working perfectly!</p>
            <p>View your data here: <a href="/api/products">/api/products</a></p>
        </div>
    `);
});

app.get('/api/products', (req, res) => {
    try {
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});

app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});