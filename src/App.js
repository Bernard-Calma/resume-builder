import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';

import LandingPage from './containers/LandingPage'
import ContactInfo from './containers/ContactInfo';

const App = () => {
  return(<div>
    <Header/>
    <Routes>
      <Route path='/' element = {<LandingPage />}/>
      <Route path='contactinfo' element = {<ContactInfo />} />
    </Routes>
  </div>)
}

export default App;
