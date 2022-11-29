import React from 'react'
import './scss/styles.css'
import Navbar from './components/Navbar'
import Weather from './components/Weather'

function App() {

  return (
    <main className='App'>
      <Navbar logo='Fishing App' />
      <Weather />
    </main>
  )
}

export default App
