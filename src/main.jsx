import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {reduxStore} from './redux/app/store.jsx'
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={reduxStore}>

    <App />
    </Provider>
  </StrictMode>
)
