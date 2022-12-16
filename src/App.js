import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';

import LandingPage from './containers/LandingPage'
import PersonalInfo from './containers/PersonalInfo';

const App = () => {
  return(<div>
    <Header/>
    <Routes>
      <Route path='/' element = {<LandingPage />}/>
      <Route path='personalInfo' element = {<PersonalInfo />} />
    </Routes>
  </div>)
}

export default App;
