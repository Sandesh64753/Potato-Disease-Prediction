import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="py-12">
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} className="text-4xl md:text-5xl font-bold leading-tight">Fast, accurate potato disease detection with AI</motion.h1>
          <p className="mt-4 text-slate-300">Upload a leaf photo and get instant classification and confidence powered by your FastAPI model.</p>
          <div className="mt-6 flex gap-4">
            <Link to="/predict" className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded text-white shadow">Try Demo</Link>
            <a href="#" className="px-6 py-3 border rounded text-slate-200">Learn more</a>
          </div>
        </div>
        <motion.div initial={{scale:0.98}} animate={{scale:1}} className="glass rounded-xl p-6 shadow-lg">
          <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd" alt="plant" className="rounded-lg w-full h-64 object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
