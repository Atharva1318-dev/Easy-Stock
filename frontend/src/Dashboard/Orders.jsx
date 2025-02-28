import { useState, useEffect } from "react";
import './Holding.css';

function Orders() {

    const [AllOrders, setAllOrders] = useState([]);

    useEffect(() => {
        axios.get("https://easy-stock-backend.onrender.com/allOrders").then((res) => {
            setAllOrders(res.data);
            console.log("orders recieved");
        })  //will connect to the api we provide
    }, []);

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Orders</h5>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Instrument</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllOrders.map((e, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{e.name}</td>
                                        <td>{e.qty}</td>
                                        <td>{e.price}</td>
                                        <td>{e.mode}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br />
            </div>
            <br /><br />
        </div>
    );
}

export default Orders;