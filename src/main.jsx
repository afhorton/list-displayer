import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ItemInput from './listInput.jsx'

const breakfast = ["eggs", "bacon", "waffles", "orange juice"];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemInput />
  </React.StrictMode>,
)
