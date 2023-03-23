import React from "react";
import "../index.css"




function Cardtrain(props) {
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
                        <p>Train number</p>
                        <p>{props.number}</p>
                    </div>
                    <div className="onecall">
                        <p>kilometer</p>
                        <p>{props.kilometer}</p>
                    </div>

                </div>
                <div className="firstrowplane1">
                   
                    <div className="onecalldura">
                        <p>Duration</p>
                        <p>{props.duration}</p>
                    </div>
                    <div className="book">
                    <button>Book</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardtrain;