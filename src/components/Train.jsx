
import "../index.css";
import React, { useEffect, useState } from "react";
import Cardtrain from "./Cardtrain";


function Train() {
    const [trains, setTrains] = useState([]);
    const [issubmit,setSubmit] =useState(false);

    useEffect(() => {
        fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setTrains(data))
    }, [])

    function formSubmit(e){
        e.preventDefault();

        setSubmit(true);
        // console.log(flights)
               
        

    }
   
    return(
        <>
         <hr />
            <div className="flightform">
                <label htmlFor="Trip type">Trip Type
                    <select default name="" id="">
                        <option value="">Oneway</option>
                    </select>
                </label>
            </div>

            <form className="tofromcontplane" onSubmit={formSubmit}>
                <div className="firstplane">
                    <label htmlFor="fromplane">From</label>
                    <input required type="text"></input>
                </div>

                <div>
                    <label htmlFor="toplane">To</label>
                    <input required type="text"></input>
                </div>
                <div>
                    <label htmlFor="departure">Travel Date</label>
                    <input required type="date"></input>
                </div>
                <div>
                    <label htmlFor="fromplane">Class</label>
                    <input required type="text"></input>
                </div>

                <button className="submit" type="submit">Submit</button>
            </form>
            <hr className="linebot" />

            { issubmit &&      trains.map((item) => <Cardtrain 
            from ={item.from}
            departuretime ={item.departure.departureTime}
            price = {item.price}
            to = {item.to}
            number = {item.train_number}
            kilometer = {item.kilometers}
            duration = {item.duration}

            />)
           }
            </>
            );
    
}

export default Train;