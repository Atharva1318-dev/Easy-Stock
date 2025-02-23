import { Tooltip, Grow, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { watchlist } from './data';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./stockList.css";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import axios from 'axios';



const Options = ({ uid, handleBuyOrder }) => {    //uid is required to uniquely identify that which stock is hovered


    return (
        <span>
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}><Button variant='contained' style={{ fontSize: "xx-small" }} onClick={handleBuyOrder}>B</Button></Tooltip>
                <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow}><Button variant='contained' color='error' style={{ fontSize: "xx-small" }}>S</Button></Tooltip>
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
            axios.post("http://localhost:8080/newOrder", {
                name: id,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY",
            })
        }

        return (
            <div>
                <div className="d-flex justify-content-between">
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={(event) => { setStockQuantity(event.target.value) }} value={stockQuantity} />
                    <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(event) => { setStockPrice(event.target.value) }} value={stockPrice} />
                </div>
                <p>Margin Required</p>
                <span><Button variant="contained" onClick={placeOrder}>Buy</Button>&nbsp;<Button variant="contained" style={{ backgroundColor: "#e0e0e0", color: "black" }} onClick={handleCancelOrder}>Cancel</Button></span>
            </div>
        );
    }

    return (
        <>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className='py-2 watchlistItem'>
                <div className="d-flex justify-content-between align-items-center">
                    <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                    {showOptions && <Options uid={id} handleBuyOrder={handleBuyOrder} />}
                    <div className="stock-info">
                        <span>
                            {stock.percent}
                        </span>
                        <span>
                            {stock.isDown ? <KeyboardArrowDownIcon style={{ color: "red" }} /> : <KeyboardArrowUpIcon style={{ color: "green" }} />}
                        </span>
                        <span>
                            {stock.price}
                        </span>
                    </div>
                </div>
            </li><hr className='m-0' />
            {showOrder && <BuyOrderMenu id={id} />}
        </>
    );
}


export default SectionTwo;