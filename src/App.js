import './App.scss';
import StudentList from './components/studentList/StudentList';
import StudentDetailPage from './pages/StudentDetailPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/students/:studentID" element={<StudentDetailPage />} />
          <Route path="/" element={<StudentList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
