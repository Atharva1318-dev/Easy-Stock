function FooterLinkBox({ title, links }) {
    let list = links.map((e) => (<li className="fs-6 text-muted"><a href="#" style={{ textDecorationLine: "none" }}>{e}</a></li>));

    return (
        <div style={{ maxWidth: "240px !important" }}>
            <p className="ms-3"><b>{title}</b></p>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default FooterLinkBox;