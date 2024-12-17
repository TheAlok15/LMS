import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { appStore } from './app/store'
import { Toaster } from "./components/ui/sonner.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}> 
      {/* this is for redux */}
    <App />
    <Toaster/>
    </Provider>
  </StrictMode>,
)
