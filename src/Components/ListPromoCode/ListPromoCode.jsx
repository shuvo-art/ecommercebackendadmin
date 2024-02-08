import React from "react"
import "./ListPromoCode.css"
import cross_icon from "../../assets/cross_icon.png"

const ListPromoCode = () => {

    const [allPromoCodes, setAllPromoCodes] = React.useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allpromocodes')
            .then((res) => res.json())
            .then((data)=> setAllPromoCodes(data))
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        fetchInfo();
    }, [])

    const remove_promocodes = async (id) => {
        await fetch('http://localhost:4000/removepromocode', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <div className="list-product">
            <h1>All PromoCodes List</h1>
            <div className="listproduct-format-main">
                <p>PromoCode</p>
                <p>Usage</p>
                <p>Discount</p>
                <p>StartDate</p>
                <p>EndDate</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allPromoCodes.map((promocode, index) => {
                    const startDate = new Date(promocode.startdate).toLocaleDateString('en-US');
                    const endDate = new Date(promocode.enddate).toLocaleDateString('en-US');

                    return (
                        <React.Fragment key={index}>
                            <div className="listproduct-format-main listproduct-format">
                                <p>{promocode.name}</p>
                                <p>{promocode.usages}</p>
                                <p>{promocode.discount}%</p>
                                <p>{startDate}</p>
                                <p>{endDate}</p>
                                <img onClick={() => remove_promocodes(promocode.id)} className="listproduct-remove-icon" src={cross_icon} alt="remove" />
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    )
}

export default ListPromoCode

