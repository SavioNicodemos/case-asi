import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { GlobalStyle } from './styles/global';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Attendances from './pages/Attendances';
import Marks from './pages/Marks';
import Students from './pages/Students';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StudentSave from './pages/Students/save';
import AttendanceSave from './pages/Attendances/save';

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <div className="App">
      <Header/>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/save" element={<StudentSave />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/attendances" element={<Attendances />} />
          <Route path="/attendances/save" element={<AttendanceSave />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
