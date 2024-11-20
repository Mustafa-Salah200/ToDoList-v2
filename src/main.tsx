import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import ContextToDo from './Context/ContextToDo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextToDo>
      <App />
    </ContextToDo>
  </StrictMode>,
)
