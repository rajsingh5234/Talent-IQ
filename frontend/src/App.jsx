import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ProblemsPage from './pages/ProblemsPage'
import { useUser } from '@clerk/clerk-react'
import { Toaster } from 'react-hot-toast'
import DashboardPage from './pages/DashboardPage'

const App = () => {

  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <>
      <Routes>
        <Route path='/' element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />} />
        <Route path='/problems' element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
