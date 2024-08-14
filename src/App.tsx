import { BrowserRouter as Router } from 'react-router-dom'
import ARoutes from './ARoutes'
import '../src/assets/css/custom.css'
import { ApplicationProvider } from './resources/ApplicationProvider'

function App() {
  return (
    <ApplicationProvider>
      <Router>
                <ARoutes />
            </Router>
    </ApplicationProvider>
  )
}

export default App
