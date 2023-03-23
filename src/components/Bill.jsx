import React from "react" ;


function Bill() {

    
 
return (
<>
<div className="billboth">
<div className="billcont">
    <h1>Fare Summary</h1>
    <div>
        <p>Base fair</p>
        <p></p>
    </div>
    <div>
        <p>Fee and Surcharges</p>
        <p></p>
    </div>
    <div>
        <p>Total amount</p>
        <p></p>
    </div>

</div>
<div className="paymentmethod">
    <h1 className="payone">Payment Method</h1>
    <input className="payone" type="text" placeholder="Name on card"/>
    <input className="payone" type="number" placeholder="Card number"/>
    <input className="payone" type="date" placeholder="Expiry date"/>
    <input className="payone" type="number" placeholder="cvv"/>
    <button className="payone">Pay</button>
</div>
</div>
</>
)
}

export default Bill;