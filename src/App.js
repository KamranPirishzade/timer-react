
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Hour from "./Components/Hour"
import Timer from "./Components/Timer"
import Second from "./Components/Second"
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/hour' element={<Hour/>} ></Route>
          <Route path='/second' element={<Second/>} ></Route>
          <Route path='/timer' element={<Timer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
