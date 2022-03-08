import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
// import App from './App'
import MyRoutes from './routes/'

ReactDOM.render(
  <BrowserRouter>
    <MyRoutes />
  </BrowserRouter>,
  document.getElementById('root')
)
