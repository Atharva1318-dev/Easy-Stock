function AboutPeople() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 d-flex flex-column justify-content-center align-items-center">
                    <img src="../src/assets/nithinKamath.jpg" alt="" className="rounded-circle" style={{ width: "65%", height: "65%" }} />
                    <br /><br />
                    <p className="muted-text text-center">Nithin Kamath <br /><br />Founder, CEO</p>
                </div>
                <div className="col-7">
                    <h3>People</h3>
                    <br /><br />
                    <p className="small muted-text">Nithin bootstrapped and founded Easy Stock in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Easy Stock has changed the landscape of the Indian broking industry.
                        <br /><br />
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). <br /><br />

                        Playing basketball is his zen. <br /><br />

                        Connect on <a style={{ textDecorationLine: "none" }}>Homepage / TradingQnA / Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default AboutPeople;