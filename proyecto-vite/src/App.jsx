import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartWidget from './components/cartwidget/cartwidget'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemlistconteiner/itemlistconteiner'

function App() {
  

  return (
    <div className="container">
      <header>
      <main>
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center">Bienvenido a Mi Tienda React</h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <ItemListContainer />
          </div>
        </div>
      </main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={reactLogo} alt="React Logo" width="30" height="30" className="d-inline-block align-top" />
              Mi Tienda React
            </a>
            <NavBar />
            <CartWidget />
          </div>
        </nav>
      </header>
      
      
      <footer className="text-center mt-4">
        &copy; 2023 Mi Tienda React
      </footer>
    </div>
  )
}

export default App
