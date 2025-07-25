## 🪑 NestCraft – Style Meets Comfort

*A Future-Ready Premium Furniture E-Commerce Brand*

NestCraft is not a redesign — it's an original concept and vision for a future luxury furniture brand. Built with the MERN stack and MySQL, NestCraft delivers a seamless, aesthetic, and responsive shopping experience tailored for style-conscious users.

---

## 🚀 Tech Stack & Tools

**Frontend:** React · TailwindCSS · Material UI · Framer Motion · GSAP · Vite · React Bites
**Backend:** Node.js · Express · Sequelize ORM · MYSQL · Cloudinary · Multer · JWT · Razorpay
**Deployment:** Vercel (Frontend & Admin) · Render (Backend) · Railway (MYSQL)
**State Management:** React State · Context API
**Dev Tools:** Nodemon · Postman · Git · GitHub

---

## 🌟 Key Features

### 🔐 Authentication & Authorization

* Secure JWT-based login/signup
* Real-time form validation
* Role-based routing (User/Admin)

### 🛋️ Product Showcase & Filtering

* Elegant grid UI with pagination
* Dynamic product detail pages
* API-based search with category filtering

### 🛒 Cart & Checkout

* Real-time cart updates
* Shipping details form
* Razorpay integration + COD option

### 📦 Order Management

* Place and view orders
* Profile-based order history
* Empty states with smooth fallback UI

### 🎨 Stunning UI/UX

* Fully responsive design
* GSAP + Framer Motion animations
* Lazy loading (components + images)
* Custom Navbar, Footer, and scroll effects

### 🛠 Backend API

* RESTful endpoints for user, product, cart, order
* Sequelize ORM with normalized schema
* Cloudinary integration and Multer for media uploads
* Centralized error handling

### 🗃️ Database Structure

* MySQL (hosted via Railway)
* Tables: Users, Products, Orders, Carts

---

## 📁 Project Structure

```
NestCraft/
├── frontend/       # React, Tailwind, MUI, Animations
│   └── ...
├── backend/        # Node.js, Express, MySQL, APIs
│   └── ...
├── admin/          # Admin dashboard
└── README.md
```

---

## 💻 Local Setup

### Prerequisites

* Node.js (v18+)
* MySQL (Local or Cloud)

### 1. Backend

```bash
cd backend
npm install
node server.js
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Environment Variables

```
# frontend/.env
REACT_APP_API_URL=http://localhost:4000/api

# backend/.env
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

## 🛠 Admin Dashboard

* Role-based access control
* Product management (CRUD)
* Order management
* Route: `/admin`

---

## 🔮 Upcoming Enhancements

* ⭐ Wishlist system
* 📝 Product reviews
* 📈 Admin analytics dashboard
* 📧 Email notifications
* 🔒 Forgot password / reset flow

---

## 🤝 Contribution Guide

1. Fork the repo
2. Create your feature branch `git checkout -b feature/your-feature`
3. Commit your changes `git commit -m 'Add awesome feature'`
4. Push to the branch `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more info.

---

## 👨‍💻 Creator

Crafted with 💖 by **Sahil Kourav**
© 2025 — *NestCraft – Style Meets Comfort*
