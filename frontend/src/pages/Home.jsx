import React from 'react'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Accurate</h3>
          <p className="text-slate-300 mt-2">Our model classifies Early Blight, Late Blight, and Healthy leaves.</p>
        </div>
        <div className="glass p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Fast</h3>
          <p className="text-slate-300 mt-2">Upload a photo and receive prediction in seconds.</p>
        </div>
        <div className="glass p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Mobile-first</h3>
          <p className="text-slate-300 mt-2">Designed for field use on mobile devices.</p>
        </div>
      </section>
    </div>
  )
}
