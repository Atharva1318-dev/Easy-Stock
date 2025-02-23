
function Summary({ username }) {
    console.log({ username });
    return (
        <div className="container">
            <h5 className='text-muted'>Hi, {username}!</h5>
            <br />
            <hr className='m-0' />
            <div className="container py-5">
                <div className="row gx-0"><span className="fs-4"><i className="fa-regular fa-clock col-1 text-center"></i>Equity</span></div>
                <br />
                <div className="row gx-5">
                    <div className="col-4 border-end border-black"><h3 className="text-muted">3.74k</h3><p className="text-muted">Margin available</p></div>
                    <div className="col-5 text-center"><p>Margin used  0</p>Opening balance  3.74k</div>
                </div>
            </div>
            <hr className="m-0" />
            <div className="container py-5">
                <div className="row gx-0"><span className="fs-4"><i className="fa-regular fa-clock col-1 text-center"></i>Holdings(13)</span></div>
                <br />
                <div className="row gx-5">
                    <div className="col-4 border-end border-black"><h3 className="text-muted">1.55k&nbsp;<span style={{ fontSize: "x-small" }}>+5.20%</span></h3><p className="text-muted">P&L</p></div>
                    <div className="col-5 text-center"><p>Current value  31.43k</p>Invested  29.88k</div>
                </div>
            </div>
            <hr className="m-0" />
        </div>
    );
}

export default Summary;