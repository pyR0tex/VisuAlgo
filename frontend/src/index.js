// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18+
import App from './javascript/App';
import './css/index.css'; // Optional: Import global CSS if you have it

// Create a root element for React to render the app into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
