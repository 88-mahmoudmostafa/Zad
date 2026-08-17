
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contaxt from "./component/Contaxt/Contaxt.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contaxt>
      <App />
    </Contaxt>
   
  </StrictMode>,
)
