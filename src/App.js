import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';

import LandingPage from './containers/LandingPage'

const App = () => {
  return(<div>
    <Header/>
    <Routes>
      <Route path='/' element = {<LandingPage />}/>
    </Routes>
  </div>)
}

export default App;
