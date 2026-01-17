# Next.js Item Listing Application

## 📌 Project Description

This is a simple full-stack web application built with **Next.js (App Router)** and **Express.js**. The project demonstrates a modern landing page, public item listing, item details, and a basic authentication system using cookies. It is designed to showcase clean UI, routing, authentication flow, and API integration — suitable for learning and recruiter review.

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd project-name
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:3000
```



## 🧭 Route Summary

| Route         | Access    | Description                         |
| ------------- | --------- | ----------------------------------- |
| `/`           | Public    | Landing page with multiple sections |
| `/login`      | Public    | Mock authentication page            |
| `/items`      | Public    | List of items fetched from API      |
| `/items/[id]` | Public    | Item details page                   |


---

## ✅ Implemented Features

* Modern landing page with 7 sections
* Responsive Navbar & Footer
* Mock authentication using cookies
* Route protection with middleware
* Public item list page
* Item details page
* Protected add-item page
* Toast notifications
* Reusable components
* Clean folder structure

---

## 🧠 Feature Explanation

### 🔐 Authentication

* Uses mock login with a hardcoded email and password
* Authentication state stored in cookies
* Protected routes redirect unauthenticated users to login

### 📦 Item Listing

* Items are fetched from an Express.js API or static JSON
* Each item card shows name,rating, and image

### 📄 Item Details

* Dynamic routing using `[id]`
* Displays full information about a selected item

### ➕ Add Item (Protected)

* Accessible only when logged in
* Form submission sends data to the Express backend
* Shows success toast after item creation

### 🎨 UI & UX

* Modern gradient designs
* Fully responsive layout
* Clear and simple English content

---

## 🚀 Technologies Used

* Next.js 15/16 (App Router)
* React
* Tailwind CSS
* Express.js
* Cookie-based authentication
* React Toastify



