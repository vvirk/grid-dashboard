# 📊 Dashboard Widgets

A small dashboard editor built with **React**, **TypeScript**, **Vite**, **dnd-kit**, and **Recharts**.  
The user can add different types of widgets, drag & drop them across the grid, and remove them.  
Charts are rendered using a charting library with mocked data, as required by the task.

---

## 🌐 Live Demo

👉 **https://vvirk.github.io/grid-dashboard/**

---

## 🚀 Features

### 🧩 Widgets
The application supports three widget types:

- **Line Chart** — "Mentions over time"
- **Bar Chart** — "Sentiment breakdown" with multiple data series
- **Text Widget** — placeholder text block (lorem ipsum)

Each widget is built as a separate component.

### 🖱 Drag & Drop
- Implemented via **dnd-kit**
- Smooth drag, hover highlight, correct swapping, proper event isolation
- Deleting a widget does not interfere with dragging

### ➕ Add / ❌ Delete
- Widgets can be added to the grid
- Each widget has a delete button (hidden until hover)
- Layout is stored internally via React Context

### 📐 Grid Layout
- 3-column grid
- Each widget fills its cell
- Charts expand fully inside the block

### 📊 Chart Library
- Powered by **Recharts**
- Mocked data used for both Line and Bar charts
- Rounded bars, legend, tooltips, proper axis styling

### 🧱 Tech Stack
- **React 18**
- **TypeScript**
- **Vite**
- **dnd-kit**
- **Recharts**
- **CSS Modules / custom BEM-style CSS**

---

## 🛠 Running the Project Locally

```bash
npm install
npm run dev