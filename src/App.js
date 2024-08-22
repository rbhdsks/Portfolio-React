import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Components/Navbar';
import './style.css';
import Main from './Pages/main';
import Publications from './Components/Publications';
import Projects from "./Components/Projects";
import Activities from './Components/Activities';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <CollapsibleExample/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/publications" element={<Publications />} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/activities' element={<Activities/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>

    </Router>
  );
}

export default App;
