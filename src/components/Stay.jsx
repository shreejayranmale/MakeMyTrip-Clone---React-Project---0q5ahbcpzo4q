import React, { useEffect, useState } from "react";
// import {Link, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import Cradstay from "./Cardstay";


function Stay() {

    const [stay, setStay] = useState([]);
    const [issubmittedd,setSubmittedd] =useState(false);

    useEffect(() => {
        fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setStay(data))
    }, [])

    function formSubmittedd(e){
        e.preventDefault();

        setSubmittedd(true);
        // console.log(flights)
               
        

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

            <form className="tofromcontplane" onSubmit={formSubmittedd}>
                <div className="firstplane">
                    <label htmlFor="fromplane">City</label>
                    <input required type="text"></input>
                </div>

                <div>
                    <label htmlFor="toplane">Check in</label>
                    <input required type="date"></input>
                </div>
                <div>
                    <label htmlFor="departure">Check out</label>
                    <input required type="date"></input>
                </div>
                <div>
                    <label htmlFor="fromplane">Guests</label>
                    <input required type="number"></input>
                </div>

                <button className="submit" type="submit">Submit</button>
            </form>
            <hr className="linebot" />
            { issubmittedd &&      stay.map((item) => <Cradstay 
            hotel ={item.hotel_name}
            checkin= {item.check_in}
            price = {item.price_per_night}
            city = {item.city}
            checkout ={item.check_out}
            room = {item.room_type}
            rating = {item.rating}
            guests = {item.guests}
            />)
           }
        </>
    )
}

export default Stay;