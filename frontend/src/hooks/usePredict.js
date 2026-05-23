import { useState } from 'react'
import * as api from '../api/api'

export default function usePredict(){
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function submit(file){
    setLoading(true)
    setError(null)
    setResult(null)
    try{
      const res = await api.predictImage(file)
      setResult(res)
      return res
    }catch(e){
      setError(e)
      throw e
    }finally{
      setLoading(false)
    }
  }

  return { loading, result, error, submit }
}
