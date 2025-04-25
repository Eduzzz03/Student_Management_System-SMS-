import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SelectRole from './pages/SelectRole';
import AdminLogin from './pages/AdminLogin';
import TeacherLogin from './pages/TeacherLogin';
import StudentLogin from './pages/StudentLogin';
import AdminHomePage from './pages/AdminHomePage';


// import About from './pages/About';
// import Admin from './pages/Admin';
// import Student from './pages/Student';
// import Teachers from './pages/Teachers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/role' element={<SelectRole/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>
          <Route path='/teacher' element={<TeacherLogin/>}/>
          <Route path='/student' element={<StudentLogin/>}/>
          <Route path='/adminhomepage' element={<AdminHomePage/>}/>



          {/* <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teachers" element={<Teachers />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


