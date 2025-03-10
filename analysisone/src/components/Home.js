import Container from "react-bootstrap/esm/Container";
import Piechart from './PieChart';

function homeSection() {
    return(
        <section className="homeSection">
            <div className="headerSection pt-4 m-auto">
                <h1 className="text-white text-center p-4">Welcome to Analysis one</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* <div className="piearea">
                <Piechart />
            </div> */}
            
        </section>
    );
}

export default homeSection;