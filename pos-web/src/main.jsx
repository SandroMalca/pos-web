import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StoreProvider } from "./utils/Store";
import './index.css'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>
)
