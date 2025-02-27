import "./stock.css";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalChart } from "./VerticalChart";
import './Holding.css';


function Holdings() {

    const [allHoldings, setAllHoldings] = useState([]);

    const labels = allHoldings.map((e) => (e.name));

    const data = {
        labels, datasets: [
            {
                label: 'Stock Price',
                data: allHoldings.map((e) => (e.price)),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    useEffect(() => {
        axios.get("https://easy-stock-backend.onrender.com/allHoldings").then((res) => {
            setAllHoldings(res.data);
            console.log("holdings recieved");
        })  //will connect to the api we provide
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
                                <th>Instrument</th>
                                <th>Qty</th>
                                <th>Avg cost</th>
                                <th>LTP</th>
                                <th>Curr. value</th>
                                <th>P&L</th>
                                <th>Net chg.</th>
                                <th>Day ch.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allHoldings.map((e, idx) => {
                                const marketValue = e.price * e.qty;
                                const isProfit = marketValue - e.avg * e.qty >= 0.0;
                                const profClass = isProfit ? "profitClass" : "lossClass";
                                return (
                                    <tr key={idx}>
                                        <td>{e.name}</td>
                                        <td>{e.qty}</td>
                                        <td>{e.avg.toFixed(2)}</td>
                                        <td>{e.price.toFixed(2)}</td>
                                        <td>{marketValue}</td>
                                        <td className={profClass}>{(marketValue - e.avg * e.qty).toFixed(2)}</td>
                                        <td className={profClass}>{e.net}</td>
                                        <td>{e.day}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-between align-items-center p-2 bg-light">
                    <div>
                        <span className="badge bg-primary">Total: {allHoldings.length} stocks</span>
                    </div>

                </div>
            </div>
            <br />
            <VerticalChart data={data}></VerticalChart>
        </div>
    );
}

export default Holdings;