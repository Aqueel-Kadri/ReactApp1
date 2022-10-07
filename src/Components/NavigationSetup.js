import React from 'react'
import { LoginPage } from './MainApp/LoginPage'
import TablePage from './MainApp/TablePage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export const NavigationSetup = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element = {<TablePage/>}/>
          <Route exact path="/login" element = {<LoginPage/>}/>
        </Routes>
        <Link className="App-link" to = "/">Home</Link>
        <Link className="App-link" to = "/login">Sign in</Link>
      </Router>
  </div>
  )
}
