import { useEffect, useState } from 'react'
import socketIO from 'socket.io-client'
import './App.css'

const WS = 'http://localhost:8080'

function App() {
  useEffect(() => {
    socketIO(WS)
  }, [])

  return (
    <div>
      <button className=''>Start new meeting</button>
    </div>
  )
}

export default App
