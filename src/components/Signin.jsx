import React, { useState, useEffect } from "react" ;
import "../index.css" ;
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from 'react-router-dom';
  
  






function Signin(){
    
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[logindata, setLogindata] = useState({});
    const[error, setError] = useState("");

    
    useEffect(() => {
      let data =  localStorage.getItem("user");
      data = JSON.parse(data);
console.log(data, "done");
if(data.email === email && data.password === password){
navigate("/bill");
}else{
    setError("Please sign up");
}


      },[logindata]);


function handleEmail(e){
setEmail(e.target.value);


}
function handlePassword(e){
setPassword(e.target.value);

}


const handleSignin = () => {
setLogindata( {email: email, password:password})

}
console.log(logindata, "printed");
console.log(email);
console.log(password);

return (
  
<>









<div className="sindiv">
    <div className="sintwodiv">
        <p>{error}</p>
<h2 className="signh2">Sign in.</h2>
<input onChange={handleEmail} className="sininp"  type="text" placeholder="Enter email" />
<input onChange={handlePassword} className="signpass"    type="password" placeholder="Enter Password" />
<button onClick={handleSignin} className="sinlink"    >Sign in</button>
<p  className="supp">New user : sign up here <Link to ="/signup">Sign Up</Link></p>
</div>
</div>


</>

);

}

export default Signin;