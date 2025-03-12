import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CompareHolderA from '../assets/AdobeStock_586498710.jpeg'
import CompareHolderB from '../assets/AdobeStock_5864987102.jpeg'
import Cards from './Card';
import Barchart from './BarChart';

function Home() {
  return(
    <>
        <section className="compareSection">
            <div className="compareTitle m-auto justify-content-center">
                <Row className="tomorrow-light">
                    <Col><h2 id="team-text">Team A</h2></Col>
                    <Col><h1 id="VS-text">VS</h1></Col>
                    <Col><h2 id="team-text">Team B</h2></Col>
                </Row>
            </div>

            <div className="compareItems">
                <Row>
                    <Col><Image className="selectionIMG" src={CompareHolderA}></Image></Col>
                    <Col><Image className="selectionIMG" src={CompareHolderB}></Image></Col>
                </Row>
            </div>

            <div className="teamScroll tomorrow-extralight">
                <Cards />
            </div>
        </section>

        <div className="compareTitle m-auto tomorrow-extralight" id="compareSubSection">
            <div className="compareTitleSection">
                <Row>
                    <Col><h2 id="teamA-Button" className="asys-btn team-btn">Bar Chart</h2></Col>
                    <Col><h1 id="VS-text2">2024 : Round 2</h1></Col>
                    <Col><h2 id="teamB-Button" className="asys-btn">Line Chart</h2></Col>
                </Row>
            </div>   
        </div>

        <section className="analysisSection">
            <div className="analysisButtonGroup tomorrow-extralight">
                <button className="asys-btn asys-btn-dimensions active ">Points</button>
                <button className="asys-btn asys-btn-dimensions">Average Speed</button>
                <button className="asys-btn asys-btn-dimensions">Fastest Lap Time</button>
                <button className="asys-btn asys-btn-dimensions">Position</button>
            </div>

            {/* <div className="analysisButtonGroup tomorrow-extralight">
                <button className="asys-btn asys-btn-dimensions active ">Teams</button>
                <button className="asys-btn asys-btn-dimensions">Drivers</button>
            </div> */}

            <div>
                <div className="infoDisplay">
                    <Barchart />
                </div>
            </div>

        </section>
    </>
  );
}

export default Home;