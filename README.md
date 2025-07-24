# ✨ NestCraft – Where Style Meets Comfort

A premium, fully-featured E-Commerce Web App crafted with elegance using the MERN stack and MySQL. NestCraft is designed to provide a luxurious online furniture shopping experience, blending intuitive design with powerful backend functionality.

---

## 🚀 Tech Stack & Badges

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/UI-Tailwind%20CSS-38b2ac?logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/Design-Material%20UI-007FFF?logo=mui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Animation-Framer--Motion-black?logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/API-Express.js-black?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-f0c911?logo=cloudinary&logoColor=black)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay-02042b?logo=razorpay&logoColor=white)
![Vercel](https://img.shields.io/badge/Frontend%20Hosting-Vercel-black?logo=vercel)
![Cyclic](https://img.shields.io/badge/Backend%20Hosting-Cyclic-purple)

---

## 📁 Project Structure

```
NestCraft/
│
├── frontend/        # React + Tailwind + MUI + Animations
├── backend/         # Node.js + Express + Sequelize + MySQL
├── admin/           # Admin Dashboard
└── README.md
```

---

## 🌟 Core Features

### 🔐 1. Secure Authentication
- JWT-based Sign Up & Login
- Realtime form validation
- Role-based protected routes (e.g. user checkout)

### 🛋️ 2. Product Browsing & Filtering
- Elegant product grid with pagination
- Individual product detail pages
- Live search with debounce + category filters

### 🛒 3. Smart Cart & Seamless Checkout
- Dynamic cart updates
- Order summary & shipping detail input
- 🔘 Payment Options:
  - Cash On Delivery (COD)
  - Razorpay Gateway for online payments

### 📦 4. Order Management
- Place orders securely
- View previous orders from profile
- Empty states with smooth fallback UI

### 🎨 5. Stunning UI/UX
- Responsive design across all devices
- Smooth transitions with Framer Motion & GSAP
- Lazy image/component loading for speed
- Custom-built Navbar, Footer, and scroll effects

### 🔧 6. Robust Backend APIs
- RESTful endpoints:
  - `/api/user`
  - `/api/product`
  - `/api/cart`
  - `/api/order`
- Cloudinary + Multer for media management
- Centralized error handling for API safety

### 🗃️ 7. Database Design
- Normalized schema for: Users, Products, Carts, Orders
- Cloud-hosted MySQL (PlanetScale or Railway)
- Sequelize ORM: scalable, readable DB access

### 🚀 8. Deployment Ready
- Optimized frontend build on **Vercel**
- API hosted via **Cyclic**
- All secrets handled via `.env` files

---

## 🛠️ Local Setup Instructions

### Prerequisites
- Node.js & NPM
- MySQL (Local or Remote)

### Backend Setup
```bash
cd backend
npm install
node server.js
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

#### `frontend/.env`
```
REACT_APP_API_URL=http://localhost:4000/api
```

#### `backend/.env`
```
PORT=4000
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_db
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
JWT_SECRET=your_jwt_secret
```

---

## 🖼️ Screenshots (To be added)
- Home page
- Product details
- Cart & Checkout
- Order history

---

## 🛠 Admin Dashboard
- Role-based product management
- View & manage orders
- Route: `/admin`

---

## 🌐 Live Deployment
- 🖥 [Frontend – Vercel](#)
- 🛠 [Backend – Cyclic](#)

---

## 🔮 Future Enhancements
- ⭐ Wishlist system
- 📝 Product reviews
- 📈 Admin analytics dashboard
- 📧 Email notifications for order updates

---

## 🤝 Contributing
Open to contributions & feedback! Submit a PR or raise an issue to get started.

---

## 📄 License
Distributed under the [MIT License](LICENSE).

---

> Crafted with passion by **Sahil Kourav** · © 2025 NestCraft – Style Meets Comfort
