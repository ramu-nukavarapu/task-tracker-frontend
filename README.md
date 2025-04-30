
# 📝 Task Tracker

A full-featured **Task Tracker** web application built using **React**, **Material UI**, and **React Router**. It allows users to sign up, log in, manage projects, and track tasks efficiently.

---

## 🚀 Features

- 🖥️ Landing Page with modern UI (Material UI)
- 🔐 Authentication (Login & Signup)
- 📁 Projects Dashboard
- ✅ Task Management for each project
- 🧭 Routing with React Router v6
- 💡 Context API for global authentication state
- 📦 Toast Notifications for user feedback

---

## 🧱 Tech Stack

- **React**
- **Material UI**
- **React Router**
- **React Toastify**
- **Context API** for state management

---

## 🖼️ Pages & Routes

| Route                | Component   | Description                        |
|---------------------|-------------|------------------------------------|
| `/`                 | Landing     | Marketing landing page             |
| `/login`            | Login       | User login page                    |
| `/signup`           | Signup      | User signup/registration           |
| `/dashboard`        | Dashboard   | User dashboard (project overview)  |
| `/projects`         | Projects    | All user projects                  |
| `/task/:projectId`  | Tasks       | View tasks of a specific project   |

---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramu-nukavarapu/task-tracker-frontend.git
   cd task-tracker-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Folder Structure

```
task-tracker/
├── public/
├── src/
│   ├── components/         # Reusable components
│   ├── context/            # Auth context
│   ├── pages/              # Landing, Login, Signup, Dashboard, etc.
│   ├── App.jsx             # App-level routing & theme
│   ├── index.js
├── package.json
└── README.md
```

---

## 📬 Contact

Created by **Ramu Nukavarapu**
📧 bhagyaramu.nukavarapu@gmail.com
🔗 [GitHub: @ramu-nukavarapu](https://github.com/ramu-nukavarapu)
