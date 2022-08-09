import { BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Flight from './pages/flight/Flight';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/flights' element={<List/>} />
        <Route path='/flights/:id' element={<Flight/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;