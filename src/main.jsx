import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store'
import { ProductProvider } from './Context/ProductProvider.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ProductProvider>
    <App />
    </ProductProvider>
    </Provider>
  </React.StrictMode>,
)
