import React from "react";
import "../index.css";






function Cardstay(props) {
    console.log(props,props.from);
    return (
        <>
            <div className="cardcont">
                <div className="firstrowplane">
                    <div className="onecall">
                        <p>Hotel</p>
                        <p>{props.hotel}</p>
                    </div>
                    <div className="onecall">
                        <p>Departure</p>
                        <p>{props.checkin }</p>
                    </div>
                    <div className="onecall">
                        <p>Price</p>
                        <p>{props.price}</p>
                    </div>

                </div>


                <div className="firstrowplane">
                    <div className="onecall">
                        <p>City</p>
                        <p>{props.city}</p>
                    </div>
                    <div className="onecall">
                        <p>Checkout</p>
                        <p>{props.checkout}</p>
                    </div>
                    <div className="onecall">
                        <p>Room</p>
                        <p>{props.room}</p>
                    </div>

                </div>
                <div className="firstrowplane1">
                    <div className="onecall1">
                        <p>Rating</p>
                        <p>{props.rating}</p>
                    </div>
                    <div className="onecall1">
                        <p>Guests</p>
                        <p>{props.guests}</p>
                    </div>
                    <div className="book">
                        <button>Book</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardstay;