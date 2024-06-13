'use client'

import { useState, FormEvent } from 'react'
import axios from 'axios'

function Home() {
  const [barcode, setBarcode] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/barcode', { code: barcode })
      const dataCode = response.data
      console.log('Success:', dataCode)
      setBarcode('')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h1>Leitor de Código de Barras</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} autoFocus />
        <button type="submit"> Enviar</button>
      </form>
    </div>
  )
}

export default Home
