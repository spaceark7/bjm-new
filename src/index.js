import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
const firebaseConfig = {
  apiKey: 'AIzaSyCjwYb4cf-tDIjslifs1GkKUHTaZSini88',
  authDomain: 'berkah-jaya-mandiri.firebaseapp.com',
  projectId: 'berkah-jaya-mandiri',
  storageBucket: 'berkah-jaya-mandiri.appspot.com',
  messagingSenderId: '525798303501',
  appId: '1:525798303501:web:4cd448405bb949411ab244',
  measurementId: 'G-K2M84JYRSF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')
