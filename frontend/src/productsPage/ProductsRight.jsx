import Card from "../Card";

function ProductsRight({ imgUrl, title, text, links }) {
    return (
        <div className="container">
            <div className="row gx-4">
                <div className="col-5  d-flex flex-column justify-content-center">
                    <h3 className="ms-3">{title}</h3>
                    <Card text={text}></Card>
                    <div className="d-flex flex-row align-items-center ms-3">
                        <a href="#" style={{ textDecorationLine: "none" }} className="me-5">{links[0]}&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                        <a href="#" style={{ textDecorationLine: "none" }}>{links[1]}&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-7">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ProductsRight;