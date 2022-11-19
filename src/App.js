import './App.scss';
import {useState} from 'react';
import StudentList from './components/studentList/StudentList';
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
            <Route path="/" element={<StudentList />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
