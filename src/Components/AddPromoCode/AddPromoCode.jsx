import React from "react";
import "./AddPromoCode.css";

const AddPromoCode = () => {
    const [promoCodeDetails, setPromoCodeDetails] = React.useState({
        name: "",
        usages: "",
        discount: "",
        startdate: "",
        enddate: ""
    });

    const changeHandler = (e) => {
        setPromoCodeDetails({
            ...promoCodeDetails,
            [e.target.name]: e.target.value
        });
    }

    const Add_PromoCode = async () => {
        console.log(promoCodeDetails);
        let responseData;

        // Convert startdate and enddate to ISO 8601 string format
        const promoCode = {
            ...promoCodeDetails,
            startdate: new Date(promoCodeDetails.startdate).toISOString(),
            enddate: new Date(promoCodeDetails.enddate).toISOString(),
        };

        await fetch('http://localhost:4000/addpromocode', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(promoCode),
        })
        .then((resp) => resp.json())
        .then((data) => {
            responseData = data;
            console.log(responseData);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Promocode title</p>
                <input value={promoCodeDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Usage</p>
                    <input value={promoCodeDetails.usages} onChange={changeHandler} type="text" name="usages" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Discount</p>
                    <input value={promoCodeDetails.discount} onChange={changeHandler} type="text" name="discount" placeholder="Type here" />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Promocode Start Date</p>
                <input value={promoCodeDetails.startdate} onChange={changeHandler} type="date" name="startdate" />
            </div>

            <div className="addproduct-itemfield">
                <p>Promocode End Date</p>
                <input value={promoCodeDetails.enddate} onChange={changeHandler} type="date" name="enddate" />
            </div>

            <button onClick={Add_PromoCode()} className="addproduct-btn">Add</button>
        </div>
    );
}

export default AddPromoCode;
