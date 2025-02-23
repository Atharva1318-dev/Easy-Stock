import "./stock.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Position() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/allPositions").then((res) => {
            setPositions(res.data);
        })
    }, []);

    return (
        <><h3>Positions  ({positions.length})</h3>
            <br /><hr className="m-0" />
            <table className="table table-hover">
                <thead style={{ fontSize: "x-small" }}>
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
        </>
    );
}

export default Position;