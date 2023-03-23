import React, { useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


function Signup(){

    const[name, setName] = useState("");
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[signupdata, setSignupdata] = useState({})
  

    useEffect(() => {
          localStorage.setItem("user", JSON.stringify(signupdata))
        },[signupdata]);


const handleName =(e) => {
    setName(e.target.value);
}
const handleEmail =(e) => {
    setEmail(e.target.value);
}
const handlePassword =(e) => {
    setPassword(e.target.value);
}
const handleSignup =() => {
    setSignupdata({email:email, password:password, name:name});
    
}

console.log(signupdata);


return(
<>
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

<div className="signupcont">
<input onChange={handleName} className="signupinp" type="text" placeholder="Enter your name"/>
<input onChange={handleEmail} className="signupmail"   type="text" placeholder="Enter your email"/>
<input onChange={handlePassword} className="signuppass"          type="password" placeholder="Enter your password"/>
<button onClick={handleSignup} className="signupaa" href="">Sign up</button>
</div>

</>
);
}

export default Signup;