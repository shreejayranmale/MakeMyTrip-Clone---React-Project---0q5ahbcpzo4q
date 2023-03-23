import React, { useEffect, useState } from "react";

import Card from "./Card";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';




function Flight() {
    const [flights, setFlights] = useState([]);
    const [issubmitted,setSubmitted] =useState(false);

    useEffect(() => {
        fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setFlights(data))
    }, [])
// console.log(flights);
    function formSubmitted(e){
        e.preventDefault();

        setSubmitted(true);
        console.log(flights)
               
        

    }

  
    


    return (
    
        <>
 <hr />
            <div className="flightform">
                <label htmlFor="Trip type">Trip Type
                    <select default name="" id="">
                        <option value="">Oneway</option>
                    </select>
                </label>
            </div>

            <form  onSubmit={formSubmitted} className="tofromcontplane">
                <div className="firstplane">
                    <label htmlFor="fromplane">From</label>
                    <input required type="text"></input>
                </div>

                <div>
                    <label htmlFor="toplane">To</label>
                    <input required type="text"></input>
                </div>
                <div>
                    <label htmlFor="departure">Deaprture</label>
                    <input required type="date"></input>
                </div>
                <div>
                    <label htmlFor="fromplane">Return</label>
                    <input required type="date"></input>
                </div>

                <button  className="submit" type="submit">Submit</button>
            </form>
            <hr className="linebot" />
           { issubmitted &&      flights.map((item, index) => <Card 
            from ={item.from}
            departuretime ={item.departure.departureTime}
            // departuredate ={item.departure.departureDate}
            price = {item.price}
            to = {item.to}
            returntime={item.return.returnTime}
            // returndate={item.return.returnDate}
            via={item.via[0]}
            airline = {item.airlineName}
            duration = {item.duration}
            />)
           }
         
           
        

          
        </>
     
    )
}

export default Flight;