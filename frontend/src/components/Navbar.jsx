import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const loc = useLocation()
  return (
    <header className="py-4 shadow-sm glass">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">PD</div>
          <div className="hidden sm:block">
            <div className="text-xl font-semibold">Potato Predictor</div>
            <div className="text-xs text-slate-300">Plant health AI</div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className={`px-3 py-2 rounded ${loc.pathname==='/'? 'bg-slate-700':''}`}>Home</Link>
          <Link to="/predict" className={`px-3 py-2 rounded ${loc.pathname==='/predict'? 'bg-slate-700':''}`}>Predict</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
