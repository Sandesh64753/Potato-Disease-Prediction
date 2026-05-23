import React from 'react'

export default function ResultCard({result}){
  return (
    <div className="mt-4 p-4 rounded-lg glass">
      <h4 className="text-lg font-semibold">Prediction</h4>
      <div className="mt-2 flex items-center gap-4">
        <div className="text-2xl font-bold">{result.class}</div>
        <div className="text-slate-300">Confidence: {(result.confidence*100).toFixed(1)}%</div>
      </div>
    </div>
  )
}
