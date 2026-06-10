# Search Bar Practice Project

A simple search bar component built to practice and solidify my understanding of React state management and performance optimization hooks.

> **Note:** This is a personal learning project, not a production-ready library. It serves as a sandbox to experiment with `State management hooks`.

## 🎯 Learning Objectives

This project was built specifically to master the following React hooks:

- **`useState`**: Managing the search input state and the list of results.
- **`useEffect`**: Handling side effects, such as fetching data from a placeholder API when the search term changes.
- **`useMemo`**: Optimizing the filtering logic to prevent unnecessary recalculations on every render.
- **`useCallback`**: Memoizing event handlers to prevent them from being recreated on every render, ensuring child components only re-render when necessary.

## 🚀 Features

- Real-time search input.
- Fetches data from a placeholder API (e.g., JSONPlaceholder or similar).
- Filters results locally based on the search query.
- Loading and error state handling.

## 🛠️ Tech Stack

- **React** 
- **JavaScript**
- **Tailwind**

## 📂 Project Structure

```text
src/
├── components/
│   ├── SearchBar.jsx
│   └── ResultsList.jsx
├── App.jsx
└── index.js
