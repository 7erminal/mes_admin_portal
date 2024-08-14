import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ARoutes from './ARoutes'
import '../src/assets/css/custom.css'
import { ApplicationProvider } from './resources/ApplicationProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApplicationProvider>
      <Router>
                <ARoutes />
            </Router>
    </ApplicationProvider>
  )
}

export default App
