import React from "react";
import "../index.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';




  





function Card(props) {
    console.log(props,props.from);
    return (

        <>
            <div className="cardcont">
                <div className="firstrowplane">
                    <div className="onecall">
                        <p>From</p>
                        <p>{props.from}</p>
                    </div>
                    <div className="onecall">
                        <p>Departure</p>
                        <p>{props.departuretime || props.departuredate }</p>
                    </div>
                    <div className="onecall">
                        <p>Price</p>
                        <p>{props.price}</p>
                    </div>

                </div>


                <div className="firstrowplane">
                    <div className="onecall">
                        <p>To</p>
                        <p>{props.to}</p>
                    </div>
                    <div className="onecall">
                        <p>Return</p>
                        <p>{props.returntime || props.returndate}</p>
                    </div>
                    <div className="onecall">
                        <p>Via</p>
                        <p>{props.via}</p>
                    </div>

                </div>
                <div className="firstrowplane1">
                    <div className="onecall1">
                        <p>Airline</p>
                        <p>{props.airline}</p>
                    </div>
                    <div className="onecall1">
                        <p>Duration</p>
                        <p>{props.duration}</p>
                    </div>
                    <div className="book">
                  <button> <Link  to='/signin'>Book</Link></button> 
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Card;