import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureObservablePersistence } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
// Global configuration
configureObservablePersistence({
    pluginLocal: ObservablePersistLocalStorage
})
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
      <Provider store={store}>  
        <App />
    </Provider>
  </React.StrictMode>,
 
)
