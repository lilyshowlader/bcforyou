import './App.css';
import { Routes, Route } from 'react-router-dom'; 

// MAIN Pages
import Landing from './Pages/Landing';
import BirthControlOptions from "./BirthControlOptions";

// BC PAGES
import IUD from './Pages/IUD';
import ThePatch from './Pages/ThePatch.jsx'
import NuvaRing from './Pages/NuvaRing.jsx'
import Implanon from './Pages/Implanon.jsx'
import Condoms from './Pages/Condoms.jsx'
import Pills from './Pages/Pills.jsx'

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<BirthControlOptions />} />
        {/* <Route path='/' element={<Landing />} /> */}

        <Route path='/iud' element={<IUD />} />
        <Route path='/patch' element={<ThePatch />} />
        <Route path='/nuvaRing' element={<NuvaRing />} />
        <Route path='/implanon' element={<Implanon />} />
        <Route path='/condoms' element={<Condoms />} />
        <Route path='/pills' element={<Pills />} />
        
      </Routes>
    </div>
  );
}

export default App;
