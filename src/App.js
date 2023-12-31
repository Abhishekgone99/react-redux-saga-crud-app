import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/addUser' element={<AddEditUser />} />
        <Route path='/editUser/:id' element={<AddEditUser />} />
        <Route path='/userInfo/:id' element={<UserInfo />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
