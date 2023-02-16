
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PlacmentOfficer from './Components/PlacmentOfficer';
import SingleLearner from './Components/SingleLearner';
import Trainer from './Components/Trainer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/placementOfficer' exact element={<PlacmentOfficer/>}/>
      <Route path='/Trainer' exact element={<Trainer/>}/>
      <Route path='/single-learner' exact element={<SingleLearner/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
