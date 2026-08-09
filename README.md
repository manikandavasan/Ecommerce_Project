# 🛒 Full Stack E-Commerce Website

A modern and responsive **Full Stack E-Commerce Web Application** built using **React**, **Django**, and **PostgreSQL**. The application provides a complete online shopping experience with secure JWT authentication, product management, shopping cart, checkout, and order management.

---

## 🚀 Tech Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- React Bootstrap

### Backend
- Django 5
- Django REST Framework
- JWT Authentication (Simple JWT)
- PostgreSQL
- Cloudinary (Image Storage)
- CORS Headers

---

# ✨ Features

## 👤 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure API Access

## 🛍️ Products
- Product Listing
- Product Details
- Category-wise Products
- Product Search
- Product Images

## 🛒 Shopping Cart
- Add to Cart
- Update Cart Quantity
- Remove Items
- Cart Summary

## 💳 Checkout
- Checkout Page
- Place Orders
- Order Confirmation

## 📦 Orders
- My Orders
- Order History

## 🎨 UI
- Responsive Design
- Mobile Friendly
- Clean User Interface
- Modern Layout

---

# 🗂️ Project Structure

```
Ecommerce_Full_stack/
│
├── frontend_project/
│   ├── React
│   ├── Components
│   ├── Pages
│   ├── Axios API
│   └── Vite
│
├── ecommerce_project/
│   ├── accounts/
│   ├── products/
│   ├── orders/
│   ├── ecommerce_project/
│   └── manage.py
│
└── README.md
```

---

# 🔑 API Modules

### Authentication
- User Signup
- User Login
- JWT Token Authentication

### Products
- Get Categories
- Get Products
- Product Details
- Search Products
- Add Categories
- Add Products

### Orders
- Add to Cart
- Update Cart
- Delete Cart Item
- Checkout
- Place Order
- My Orders

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/manikandavasan/Ecommerce_Project.git
```

---

## Backend Setup

```bash
cd ecommerce_project

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / Mac
source venv/bin/activate

pip install -r requirements.txt
```

### Configure Environment Variables

Create a `.env` file and add your configuration:

```env
SECRET_KEY=your_secret_key

DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run migrations:

```bash
python manage.py migrate
```

Start the Django server:

```bash
python manage.py runserver
```

---

## Frontend Setup

```bash
cd frontend_project

npm install

npm run dev
```

---

# 🗄️ Database

- PostgreSQL
- Django ORM
- REST APIs

---

# 🔐 Authentication

This project uses **JWT (JSON Web Token)** authentication.

- Secure Login
- Token-based Authorization
- Protected API Endpoints

---

# 📸 Demo

https://github.com/user-attachments/assets/cc07e953-32a9-43fc-ab04-3c26649c5a44


---

# 🚀 Future Enhancements

- Online Payment Gateway
- Wishlist
- Product Reviews & Ratings
- Admin Dashboard
- Email Notifications
- Inventory Management
- Coupons & Discounts
- User Profile Management

---

# 🧪 Built With

- React
- Django
- Django REST Framework
- PostgreSQL
- JWT Authentication
- Bootstrap
- Axios
- Cloudinary
- Vite

---

# 👨‍💻 Author

**Manikandavasan S**

GitHub: https://github.com/manikandavasan/
LinkedIn: https://www.linkedin.com/in/manikandavasan-s/
mail id: m45589207@gmail.com

---


## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.

---
