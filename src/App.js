import './App.scss';
import StudentList from './components/studentList/StudentList';
import StudentDetailPage from './pages/StudentDetailPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './layout/navbar/Navbar';
import About from './pages/About';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <div className="pageContainer">
          <Routes>
            <Route path="/students/:studentID" element={<StudentDetailPage />} />
            <Route path="/about"  element={<About/>}/>
            <Route path="/" element={<StudentList />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
