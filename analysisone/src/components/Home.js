import Container from "react-bootstrap/esm/Container";
import ScrollSection from './ComponentTesting';
import Carousel from './Carousel';

function homeSection() {
    return(
        <section className="homeSection">
            <div className="headerContainer">
                <div className="headerSection pt-4 m-auto">
                    <h1 className="text-white text-center p-4 tomorrow-bold">Welcome to Analysis On</h1>
                    <p className="tomorrow-light">For over 50 years, Formula 1 has delivered some of the most thrilling moments in motorsport history. From legendary rivalries to record-breaking performances, every lap, pit stop, and championship battle is filled with data-driven stories waiting to be uncovered.
                    Analysis One is your go-to platform for in-depth analysis, interactive visualizations, and historical comparisons, all powered by a comprehensive database of F1 statistics. Whether you're a fan, analyst, journalist, or developer, our platform offers everything you need to explore and understand the sport like never before.
                    </p>  
                </div>
            </div>

            <div className="DataPreview m-auto">
                <h4 className="text-white text-center pt-5 tomorrow-light">Data Preview</h4>
                <div className="pieArea">
                    <Carousel />
                </div>
            </div>
        </section>
    );
}

export default homeSection;