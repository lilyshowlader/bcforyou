import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import BirthControlOptions from "./BirthControlOptions";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<BirthControlOptions />} />
        </Routes>
    </div>
  );
}

export default App;
