import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideNav from './components/SideNav';
import Experience from './experience/Experience';
import Home from './home/Home';
import Projects from './projects/Projects';

function App() {
  return (
   <Router>
     <SideNav/>
     <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/experience" element={<Experience/>}/>
     </Routes>
   </Router>
  );
}

export default App;
