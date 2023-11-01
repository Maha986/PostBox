import './App.css'
import RenderPage from './components/RenderPage'
import { PostaProvider } from './contexts/PostContext'


function App() {
  
  return (
    <PostaProvider>
      <RenderPage />
    </PostaProvider>
  )
}

export default App
