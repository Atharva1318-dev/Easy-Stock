import "./stock.css";
import { useEffect, useState } from "react";
import axios from "axios";
import './Holding.css';

function Position() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios.get("https://easy-stock-backend.onrender.com/allPositions").then((res) => {
            setPositions(res.data);
        })
    }, []);

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Holdings</h5>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Instrument</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Avg cost</th>
                                <th scope="col">LTP</th>
                                <th scope="col">Market value</th>
                                <th scope="col">P&L</th>
                                <th scope="col">Chg.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions.map((e, idx) => {
                                const marketValue = e.price * e.qty;
                                const isProfit = marketValue - e.avg * e.qty >= 0.0;
                                const profClass = isProfit ? "profitClass" : "lossClass";
                                const dayClass = e.isLoss ? "lossClass" : "profitClass";
                                return (
                                    <tr key={idx}>
                                        <td>{e.product}</td>
                                        <td>{e.name}</td>
                                        <td>{e.qty}</td>
                                        <td>{e.avg}</td>
                                        <td>{e.price.toFixed(2)}</td>
                                        <td className={profClass}>{(marketValue - e.avg * e.qty).toFixed(2)}</td>
                                        <td className={profClass}>{e.net}</td>
                                        <td className={dayClass}>{e.day}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Position;