import logo from './logo.svg';
import './App.css';
import React from "react" ;

import Train from "./components/Train";
import Flight from "./components/Flight";
import Stay from "./components/Stay";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Bill from './components/Bill';






function App() {
  return (
    <Router>
    <div className="App">
    <div className="Navbar">
                <div className="logo">
                    <Link to="/flight"><img src="https://th.bing.com/th/id/R.ff7ccaf8f535ccab153b45e167860fbc?rik=ki6vE28GeMyV2Q&riu=http%3a%2f%2fwww.pngimagesfree.com%2fLOGO%2fM%2fMakemytrip%2fMake-My-Trip-Logo-PNG.png&ehk=z2MUhe9rd%2bcJgESoEaa3AvuM7biOxEepLbIA5%2fvkuIg%3d&risl=&pid=ImgRaw&r=0" alt="Logo" ></img></Link>
                </div>
                <div className="options">
                    <Link to="/flight">Flights</Link>
                    <Link to="/stay">Stays</Link>
                    <Link className="trains" to="/train">Trains</Link>
                    <div className="regi">
                        <p>Shree</p>
                    </div>
                </div>
            </div> 
    <Routes>
          <Route exact path='/flight' element={< Flight />}></Route>
          <Route exact path='/stay' element={< Stay />}></Route>
          <Route exact path='/train' element={< Train />}></Route>
        
          <Route exact path='/signin' element={< Signin />}></Route>
          <Route exact path='/signup' element={< Signup />}></Route>
          <Route exact path='/bill' element={< Bill />}></Route>
        
 
   </Routes>
   
   </div>
</Router>
  );
}

export default App;
