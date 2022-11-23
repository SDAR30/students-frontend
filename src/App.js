import './App.scss';
import {useState} from 'react';
import Royal from './components/royal/Royal';
import StudentDetailPage from './pages/StudentDetailPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './layout/navbar/Navbar';
import About from './pages/About';
import LoginModal from './components/loginModal/LoginModal';
import Home from './pages/Home';

function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false)

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}/>
        <div className="pageContainer">
          <Routes>
            <Route path="/students/:studentID" element={<StudentDetailPage />} />
            <Route path="/about"  element={<About/>}/>
            <Route path="/contact" element={<Royal />}/>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
