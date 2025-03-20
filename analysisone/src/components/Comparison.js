import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CompareHolderA from '../assets/AdobeStock_586498710.jpeg'
import CompareHolderB from '../assets/AdobeStock_5864987102.jpeg'
import Cards from './Card';
import Barchart from './BarChart';
import _lineChart from './lineChart';
import _raderChart from './radarChart';
import QBarChart from './QuarterBarChart';

function Home() {
  return(
    <>
        <section className="compareSection">
            <div className="compareTitle m-auto justify-content-center">
                <Row className="tomorrow-light">
                    <Col><h2 id="team-text">MClaren</h2></Col>
                    <Col><h1 id="VS-text">VS</h1></Col>
                    <Col><h2 id="team-text">Mercedes</h2></Col>
                </Row>
            </div>

            <div className="compareItems">
                <Row>
                    <Col>
                        <div className="btn-close">
                            <button type="button" class="btn" aria-label="Close"></button> 
                        </div>
                        <Image className="selectionIMG" src={CompareHolderA}></Image>
                    </Col>

                    <Col>
                        <div className="btn-close">
                            <button type="button" class="btn" aria-label="Close"></button> 
                        </div>
                        <Image className="selectionIMG" src={CompareHolderA}></Image>
                    </Col>
                </Row>
            </div>
            
            <div>
                <h1 id='teamSelectTXT'>Select your teams</h1>
            </div>

            <div className="teamScroll tomorrow-extralight">
                <Cards />
            </div>
        </section>

        <div className="compareTitle m-auto tomorrow-extralight" id="compareSubSection">
            <div className="compareTitleSection">
                <Row>
                    <Col><h2 id="teamA-Button" className="asys-btn team-btn">Bar Chart</h2></Col>
                    <Col><h1 id="VS-text2">2024</h1></Col>
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

            <div className="infoOuter">
                <div className="infoDisplay">
                    <_lineChart />
                </div>
            </div>
        </section>

        <section className="analysisSection2">
            <div className="graphContainer">
                <Row className="auxGraphs">
                    <Col>
                        <div className="auxInfo">
                            <_raderChart />
                        </div>
                    </Col>

                    <Col>
                        <div className="auxInfo">
                            <QBarChart />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    </>
  );
}

export default Home;