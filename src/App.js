import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import LandingPage from './Pages/LandingPage';
import Watch from './Pages/Watch';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div>
      <Header/>
      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/watch-history' element={<Watch/>}/>
        
      </Routes>
     
      <Footer/>
      
    </div>
  );
}

export default App;
