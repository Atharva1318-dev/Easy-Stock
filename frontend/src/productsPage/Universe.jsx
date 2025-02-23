import SignUpFreeBtn from "../SignUpFreeBtn";

function Universe() {
    return (
        <div className="container">
            <div className="row text-center gy-5">
                <h4>The Zerodha Universe</h4>
                <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p2"><img src="../src/assets/smallcaseLogo.png" alt="" /></div>
                <div className="col-4 p2"><img src="../src/assets/sensibullLogo.svg" alt="" className="w-50 h-75" /></div>
                <div className="col-4 p2"><img src="../src/assets/dittoLogo.png" alt="" className="w-50 h-75" /></div>
                <div className="col-4 p2"><img src="../src/assets/smallcaseLogo.png" alt="" /></div>
                <div className="col-4 p2"><img src="../src/assets/sensibullLogo.svg" alt="" className="w-50 h-75" /></div>
                <div className="col-4 p2"><img src="../src/assets/dittoLogo.png" alt="" className="w-50 h-75" /></div>
                <button type="button" className="btn btn-primary col-2 mx-auto">Sign up for free</button>
            </div >
        </div>
    );
}

export default Universe;