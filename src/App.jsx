import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TablesPage from './pages/TablesPage';
import TopNav from './components/TopNav';
import './App.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lazy, Suspense } from 'react';

// Lazy load the MediaPage component
const MediaVideo = lazy(() => import('./pages/MediaPage'));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='demo1'> 
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
       
          <Route path="/media" element={
            <Suspense fallback={<div>Loading...</div>}>
              <MediaVideo />
            </Suspense>
          } />
          
          <Route path="/tables" element={<TablesPage />} />
        </Routes>  
      </BrowserRouter>  
    </div>
  );
}

export default App;
