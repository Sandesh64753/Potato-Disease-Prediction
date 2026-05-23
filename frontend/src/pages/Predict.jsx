import React from 'react'
import UploadForm from '../components/UploadForm'

export default function Predict(){
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Predict Potato Disease</h2>
      <p className="text-slate-300 mb-6">Upload an image of a leaf to get a prediction from the model.</p>
      <UploadForm />
    </div>
  )
}
