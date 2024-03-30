import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Login from './Pages/Login';
import Address from './Pages/Address';
import NewContact from './Pages/NewContact';
import Birthday from './Pages/Birthday';
import Printlabel from './Pages/Printlabel';

function App() {

  return (
    <div className="grid-container">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />

          <Route path="/newcontact" element={<NewContact/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/address" element={<Address/>} />
          <Route path="/birthday" element={<Birthday/>} />
          <Route path="/printlabel" element={<Printlabel/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
