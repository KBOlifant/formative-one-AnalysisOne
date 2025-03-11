import Container from "react-bootstrap/esm/Container";
import ScrollSection from './ComponentTesting';
import Carousel from './Carousel';

function homeSection() {
    return(
        <section className="homeSection">
            <div className="overlay"></div>
            <div className="aboveOverlay">
                <div className="headerSection pt-4 m-auto">
                    <h1 className="text-white text-center p-4">Welcome to Analysis one</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h4 className="text-white text-center p-4">Data Preview</h4>
                </div>

                <div className="DataPreview m-auto border-3 border-white">
                    <div className="pieArea">
                        <Carousel />
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default homeSection;