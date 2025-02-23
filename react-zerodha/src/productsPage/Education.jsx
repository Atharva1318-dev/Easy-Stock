import Card from "../Card";

function Education({ imgUrl, title, text, links }) {
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col-6">
                    <img src={imgUrl} alt="Education" />
                </div>
                <div className="col-6">
                    <h3 className="ms-3">{title}</h3>
                    <Card text={text}></Card>
                    <div className="d-flex flex-row align-items-center ms-3">
                        <a href="#" style={{ textDecorationLine: "none" }} className="me-5">{links[0]}&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                        <a href="#" style={{ textDecorationLine: "none" }}>{links[1]}&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;