import "../Dashboard/stock.css";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalChart } from "./VerticalChart";


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
        axios.get("http://localhost:8080/allHoldings").then((res) => {
            setAllHoldings(res.data);
            console.log("holdings recieved");
        })  //will connect to the api we provide
    }, []);

    return (
        <><h3>Holdings  ({allHoldings.length})</h3>
            <br /><hr className="m-0" />
            <table className="table table-hover">
                <thead style={{ fontSize: "x-small" }}>
                    <tr>
                        <th scope="col">Instrument</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Avg cost</th>
                        <th scope="col">LTP</th>
                        <th scope="col">Curr. value</th>
                        <th scope="col">P&L</th>
                        <th scope="col">Net chg.</th>
                        <th scope="col">Day ch.</th>
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
            <VerticalChart data={data}></VerticalChart>
        </>
    );
}

export default Holdings;