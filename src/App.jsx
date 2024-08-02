import './App.css'
import { AuthProvider } from './contexts/authContext'

import RoutesComponent from './routes/Routes'

function App() {
  

  return (
    <>
    
      <AuthProvider>
        <RoutesComponent/>
      </AuthProvider>
   
      
    </>
  )
}

export default App
