import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import SelectRole from './pages/SelectRole';
import AdminHomePage from './pages/Admin/AdminHomePage';
// import About from './pages/About';
// import Student from './pages/Student';
// import Teachers from './pages/Teachers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/role" element={<SelectRole />} />
          <Route path="/adminhomepage" element={<AdminHomePage />} />
          {/* <Route path="/teachers" element={<Teachers />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


