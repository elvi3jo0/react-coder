import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartWidget from './components/cartwidget/cartwidget'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemlistconteiner/itemlistconteiner'

function App() {
  

  return (
    <div className="container mt-4">
      <header>
      <main>
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center">Bienvenido a Mi Tienda React</h1>
          </div>
        </div>
        <>
            <NavBar />
        <div className="row mt-4">
          <div className="col">
            <ItemListContainer contador = "contador"/>
          </div>
        </div>
            <CartWidget />
        </>
      </main>
      </header>
      
      
      <footer className="text-center mt-4">
        &copy; 2023 Mi Tienda React
      </footer>
    </div>
  )
}

export default App
