# Techshop-Ecommerce
TechShop: Full-Stack E-Commerce Catalog  A modern e-commerce platform featuring a responsive product grid and a seamless sliding cart drawer. Built with Node.js and Express, it integrates AWS S3 for cloud-native image hosting. Features include real-time search, dynamic quantity controls (+/-), and a persistent shopping experience via LocalStorage.

🚀 TechShop: Full-Stack E-Commerce Catalog & Cart
A modern, responsive e-commerce product catalog built with a focus on high-end UI/UX and cloud-native architecture. This project demonstrates a full-stack flow: serving dynamic data from a Node.js API, hosting assets on AWS S3, and managing a persistent user shopping experience.

✨ Key Features
🛒 Dynamic Shopping Cart
Sliding Cart Drawer: A sleek, non-disruptive side-menu for viewing items without leaving the product grid.

Persistence: Uses localStorage to ensure user carts remain intact even after page refreshes.

Real-time Totals: Automatic calculation of sub-totals and final payment amounts using JavaScript reduce logic.

🔍 Product Browsing UX
Live Search: Real-time filtering of products by name or category as the user types.

Responsive Grid: A "mobile-first" CSS Grid layout that adapts beautifully from smartphones to ultra-wide monitors.

Premium UI: Features glassmorphism navigation, smooth CSS transitions, and hover-state micro-interactions.

🛡️ Modern Checkout Flow
Interactive Modal: A dedicated checkout overlay with form validation for shipping and payment details.

Order Logic: Clears the cart and provides user feedback upon successful "order placement."

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Flexbox & Grid), Vanilla JavaScript (ES6+).

Backend: Node.js, Express.js, CORS.

.

📂 Project Structure
Plaintext

├── frontend/
│   ├── index.html      # Structure & Modals
│   ├── style.css       # Modern UI & Cart Drawer animations
│   └── script.js       # Cart logic, Search, & API Fetching
├── backend/
│   ├── server.js       # Node/Express API with Product data
│   └── package.json    # Backend dependencies
└── assets/             # Local fallbacks for S3 images
⚙️ Setup & Installation
1. Backend Setup
Bash

cd backend
npm install
node server.js
The server will start at http://localhost:3000.

2. Frontend Setup
Simply open frontend/index.html using a tool like Live Server in VS Code.

3. AWS S3 Configuration (Optional)
To use your own images:

Create an S3 Bucket.

Apply a public-read Bucket Policy: arn:aws:s3:::your-bucket-name/*.

Update the image URLs in server.js with your S3 Object URLs

Cloud Infrastructure: * AWS S3: Used for professional cloud storage of high-resolution product images.

Public Access & Policies: Configured S3 Bucket Policies for secure, public-read object access.
