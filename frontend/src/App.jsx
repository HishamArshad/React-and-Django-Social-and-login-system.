 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useState, createContext } from 'react';
import NewLogin from './components/NewLogin';
import Complete from './components/Complete';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import { CountContext } from './components/CountContext';
import { useObservable } from '@legendapp/state/react';
import ContextApi from './context';
function App() {
  const [lg, setLg]  = useState(false)
  const states = useObservable({
    bool: false
  })
  console.log(lg)
  return (
    <>   
 <ContextApi>
	<Router>
    {/* <Navbar isLoggedOut={isLoggedOut}/>
  */}
  <Navbar  lg={lg} />
    <Routes>
		<Route path='/login' element={<LoginForm setLg={setLg}/>} />
		<Route path='/home'element={<Home />} />
 
    </Routes>
  </Router>
  </ContextApi>

    </>
  );
}

export default App;
 