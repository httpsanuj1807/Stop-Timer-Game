import React, {StrictMode}from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.querySelector('#root');

const root = createRoot(container);

root.render(<StrictMode>
  <App />
</StrictMode>);