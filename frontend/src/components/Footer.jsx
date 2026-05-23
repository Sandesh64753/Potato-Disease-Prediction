import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 mt-8 glass">
      <div className="container flex items-center justify-between">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Potato Predictor</div>
        <div className="text-sm text-slate-400">Built with ❤️ • FastAPI + React</div>
      </div>
    </footer>
  )
}
