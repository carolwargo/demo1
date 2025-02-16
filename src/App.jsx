import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage' 
import './App.css'  
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
    <div className="App">
      <BrowserRouter basename='demo1'> 
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>  
      </BrowserRouter>  
    </div>
  )
}

export default App
