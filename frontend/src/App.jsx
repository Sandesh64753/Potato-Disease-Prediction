import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Predict from './pages/Predict'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toaster from './components/Toaster'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/predict" element={<Predict/>} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
