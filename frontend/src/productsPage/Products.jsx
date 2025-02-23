import ProductsLeft from "./Education";
import ProductsRight from "./ProductsRight";
import Universe from "./Universe";

function Products() {
    return (
        <div className="container my-5">
            <div className="cotainer text-center">
                <h2>Zerodha Products</h2>
                <h6 className="text-muted">Sleek, modern, and intuitive trading platforms</h6>
                <p className="text-muted">Check out our <a href="">investment offerings →</a></p>
            </div>
            <br /><br />
            <hr />
            <br /><br /><br />
            <ProductsLeft imgUrl="../src/assets/kite.png" title="Kite" text="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." links={["Try demo", "Learn more"]}></ProductsLeft>
            <br /><br /><br /><br />
            <ProductsRight imgUrl="../src/assets/console.png" title="Console" text="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." links={["Learn more"]}></ProductsRight>
            <br /><br /><br />
            <ProductsLeft imgUrl="../src/assets/coin.png" title="Coin" text="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." links={["Try demo", "Learn more"]}></ProductsLeft>
            <br /><br /><br /><br />
            <ProductsRight imgUrl="../src/assets/kiteconnect.png" title="Kite Connect API" text="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." links={["Learn more"]}></ProductsRight>
            <br /><br /><br /><br />
            <ProductsLeft imgUrl="../src/assets/varsity.png" title="Varsity mobile" text="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." links={["Try demo", "Learn more"]}></ProductsLeft>
            <br /><br /><br /><br />
            <div className="container">
                <h5 className="text-muted text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
            </div>
            <br /><br /><br />
            <Universe></Universe>
        </div >
    );
}

export default Products;