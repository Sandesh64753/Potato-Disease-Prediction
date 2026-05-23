import React, {useState} from 'react'
import usePredict from '../hooks/usePredict'
import ResultCard from './ResultCard'
import { toast } from 'react-toastify'

export default function UploadForm(){
  const { loading, result, error, submit } = usePredict()
  const [file, setFile] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    if(!file){
      toast.error('Please select an image file')
      return
    }
    try{
      await submit(file)
    }catch(err){
      toast.error(err?.response?.data || 'Prediction failed')
    }
  }

  return (
    <div className="glass p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="block">
          <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} />
        </label>
        <div className="flex gap-3">
          <button disabled={loading} className="px-4 py-2 bg-primary text-white rounded">{loading? 'Predicting...':'Predict'}</button>
          <button type="button" onClick={()=>{setFile(null)}} className="px-4 py-2 border rounded">Clear</button>
        </div>
      </form>
      <div className="mt-6">
        {loading && <div className="animate-pulse text-slate-400">Processing image...</div>}
        {error && <div className="text-red-400">Error fetching prediction</div>}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  )
}
