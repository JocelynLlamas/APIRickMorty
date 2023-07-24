import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Information from './components/Information';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Information/:id' element={<Information></Information>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
