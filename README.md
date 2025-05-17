# 📚 Modern Posts App

A beautifully designed, modern, responsive CRUD app built with **React + Vite**, styled using **TailwindCSS**, and powered by [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) API.

> 💡 Includes dark/light mode, animated modals, toast feedback, and full CRUD functionality.

![image](https://github.com/user-attachments/assets/78a5fa2e-ed10-4623-ab7c-72a7774a4c81)
![image](https://github.com/user-attachments/assets/ae52f68c-440d-40db-bb6b-11b3da3c6f03)

---

## 🚀 Live Demo

🔗 GitHub Repo: [github.com/BoegyNat/Modren-Post](https://github.com/BoegyNat/Modren-Post)

---

## 🎯 Features

✅ Fetch post list from public API  
✅ Create / Edit / Delete post (mock API)  
✅ Animated Modals using **Framer Motion**  
✅ Toast Feedback using **react-hot-toast**  
✅ Modern responsive layout  
✅ Dark / Light Mode toggle  
✅ Avatar for each post  
✅ Fully responsive & smooth transitions  

---

## 💻 Tech Stack

| Technology        | Description                          |
|-------------------|--------------------------------------|
| React + Vite      | Core frontend + dev server           |
| TailwindCSS       | Styling framework                    |
| Axios             | API requests                         |
| Framer Motion     | Smooth animations                    |
| React Hot Toast   | Toast notifications                  |
| JSONPlaceholder   | Free public REST API (mock backend)  |

---

## 📁 Folder Structure

```
src/
├── components/
│ ├── layout/ # Header, Footer, ThemeSwitcher
│ ├── CreatePostModal.jsx
│ ├── EditPostModal.jsx
│ ├── DeleteConfirmModal.jsx
│ └── PostCard.jsx
├── context/ # ThemeContext.jsx
├── pages/ # PostList.jsx
├── services/ # API functions (axios)
├── App.jsx
└── main.jsx
```

---

## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/BoegyNat/Modren-Post.git

# 2. Install dependencies
cd Modren-Post
npm install

# 3. Run the dev server
npm run dev
