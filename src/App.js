import './App.css'
import MyNav from './Component/MyNav'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './Component/MyFooter'
import Welcome from './Component/Welcome'
import AllTheBooks from './Component/AllTheBooks'
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  return (
    <div>
      <header>
        <Welcome />
        <MyNav />
      </header>
      <main>
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
