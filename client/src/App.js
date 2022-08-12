import { BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Flight from './pages/flight/Flight';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/flights' element={<List/>} />
        <Route path='/flights/:id' element={<Flight/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;