import AboutSectionOne from "./AboutSectionOne";
import AboutHistory from "./AboutHistory";
import AboutPeople from "./AboutPeople";

function About() {
    return (
        <div className="container">
            <AboutSectionOne></AboutSectionOne>
            <hr />
            <AboutHistory></AboutHistory>
            <br />
            <AboutPeople></AboutPeople>
            <br /><br />
            {/* <People></People> */}
        </div>
    );
}

export default About;