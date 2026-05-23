import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 30000,
})

export async function ping(){
  const r = await api.get('/ping')
  return r.data
}

export async function predictImage(file){
  const fd = new FormData()
  fd.append('file', file)
  const r = await api.post('/predict', fd, { headers: { 'Content-Type': 'multipart/form-data' }})
  return r.data
}

export default api
