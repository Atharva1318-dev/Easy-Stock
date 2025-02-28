import { Tooltip, Grow, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { watchlist } from './data';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./stockList.css";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import axios from 'axios';



const Options = ({ uid, handleBuyOrder, handleSellOrder }) => {    //uid is required to uniquely identify that which stock is hovered


    return (
        <span>
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}><Button variant='contained' style={{ fontSize: "xx-small" }} onClick={handleBuyOrder}>B</Button></Tooltip>
                <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow}><Button variant='contained' color='error' style={{ fontSize: "xx-small" }} onClick={handleSellOrder}>S</Button></Tooltip>
                <Tooltip title="Chart (C)" placement='top' arrow TransitionComponent={Grow}><Button style={{ backgroundColor: "white", color: "black", fontSize: "xx-small" }}><ShowChartIcon style={{ fontSize: "large" }}></ShowChartIcon></Button></Tooltip>
            </span>
        </span>
    )
}

function SectionTwo({ stock, id }) {
    let [showOptions, setShowOptions] = useState(false);

    const [showOrder, setShowOrder] = useState(false);

    const handleBuyOrder = () => {
        setShowOrder(true);
    }

    const handleSellOrder = () => {
        setShowOrder(true);
    }

    const handleCancelOrder = () => {
        setShowOrder(false);
    }

    const handleMouseEnter = (event) => {
        setShowOptions(true);
    }

    const handleMouseExit = (event) => {
        setShowOptions(false);
    }

    const BuyOrderMenu = ({ id }) => {
        const [stockQuantity, setStockQuantity] = useState(1);
        const [stockPrice, setStockPrice] = useState(0.0);

        const placeOrder = () => {
            axios.post("https://easy-stock-backend.onrender.com/newOrder", {
                name: id,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY",
            });
            console.log("Order placed");

            setShowOrder(false);
        }

        return (
            <div>
                <div className="d-flex justify-content-between">
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={(event) => { setStockQuantity(event.target.value) }} value={stockQuantity} />
                    <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(event) => { setStockPrice(event.target.value) }} value={stockPrice} />
                </div>
                <span><Button variant="contained" onClick={placeOrder}>Buy</Button>&nbsp;<Button variant="contained" style={{ backgroundColor: "#e0e0e0", color: "black" }} onClick={handleCancelOrder}>Cancel</Button></span>
            </div>
        );
    }

    const SellOrderMenu = ({ id }) => {
        const [sellstockQuantity, setSellStockQuantity] = useState(1);
        const [sellstockPrice, setSellStockPrice] = useState(0.0);

        // const sellOrder = () => {
        //     axios.post("https://easy-stock-backend.onrender.com/newOrder", {
        //         name: id,
        //         qty: stockQuantity,
        //         price: stockPrice,
        //         mode: "BUY",
        //     });
        //     console.log("Order placed");

        //     setShowOrder(false);
        // }

        return (
            <div>
                <div className="d-flex justify-content-between">
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={(event) => { setSellStockQuantity(event.target.value) }} value={stockQuantity} />
                    <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(event) => { setSellStockPrice(event.target.value) }} value={stockPrice} />
                </div>
                <span><Button variant="contained">Sell</Button>&nbsp;<Button variant="contained" style={{ backgroundColor: "#ff5722", color: "black" }} onClick={handleCancelOrder}>Cancel</Button></span>
            </div>
        );
    }

    return (
        <>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className='px-2 py-2 watchlistItem list-group-item d-flex justify-content-between align-items-center' style={{ fontSize: "smaller" }}>
                <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
                {showOptions && <Options uid={id} handleBuyOrder={handleBuyOrder} handleSellOrder={handleSellOrder} />}
                <div>
                    <span className='me-2'>
                        {stock.percent}
                    </span>
                    <span>
                        {stock.isDown ? <KeyboardArrowDownIcon style={{ color: "red" }} /> : <KeyboardArrowUpIcon style={{ color: "green" }} />}
                    </span>
                    <span>
                        {stock.price}
                    </span>
                </div>
            </li><hr className='m-0' />
            {showOrder && <BuyOrderMenu id={id} />}
        </>
    );
}


export default SectionTwo;