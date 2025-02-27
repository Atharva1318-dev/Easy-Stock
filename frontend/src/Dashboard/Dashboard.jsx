import Holdings from './Holdings.jsx';
import Orders from './Orders.jsx';
import Position from './Position.jsx';
import Summary from './Summary.jsx';
import Funds from './Funds.jsx';
import { Routes, Route } from 'react-router-dom';


function Dashboard({ username }) {
    return (
        <div style={{ fontSize: "small", overflowY: "auto" }} className='container'>
            <br /><br />
            <Routes>
                <Route path='/' element={<Summary username={username} />}></Route>
                <Route path='positions' element={<Position />}></Route>
                <Route path='holdings' element={<Holdings />}></Route>
                <Route path='orders' element={<Orders />}></Route>
                <Route path='funds' element={<Funds />}></Route>
            </Routes>

        </div>
    );
}

export default Dashboard;