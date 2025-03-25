import React from "react";
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CompareHolderA from '../assets/TeamsPreview/alpineSideProfile.jpg'
import CompareHolderB from '../assets/TeamsPreview/alpineSideProfile.jpg'
import Cards from './Card';
import Barchart from './BarChart';
import _lineChart from './lineChart';
import _raderChart from './radarChart';
import QBarChart from './QuarterBarChart';
import axios from 'axios';
import { data } from "react-router-dom";
import { BarChart } from "lucide-react";
import { GetDataTeam1 } from '../Team1Data';
import { GetDataTeam2 } from '../Team2Data';

function Home() {

    const [Team1Data, setTeamData1] = useState(null);
    const [Team2Data, setTeamData2] = useState(null);

    useEffect(() => {
        GetDataTeam1('mclaren', '2024').then(data => setTeamData1(data));
        GetDataTeam2('ferrari', '2024').then(data => setTeamData2(data));
      }, []);

      if (!Team1Data) {
        return <p>Loading...</p>;
      }

      if (!Team2Data) {
        return <p>Loading...</p>;
      }

      console.log(Team1Data);

  return(
    <>
        <section className="compareSection">
            <div className="compareTitle m-auto justify-content-center">
                <Row className="tomorrow-light">
                    <Col><h2 id="team-text">{Team1Data.TeamName}</h2></Col>
                    <Col><h1 id="VS-text">VS</h1></Col>
                    <Col><h2 id="team-text">{Team2Data.TeamName}</h2></Col>
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
                        <Image className="selectionIMG" src={CompareHolderB}></Image>
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
            <div className="analysisButtonGroup tomorrow-extralight" >
                <button className="asys-btn asys-btn-dimensions active" style={{fontSize: '24px'}}>Points</button>
                <button className="asys-btn asys-btn-dimensions" style={{fontSize: '20px'}}>Average Speed</button>
                <button className="asys-btn asys-btn-dimensions" style={{fontSize: '20px'}}>Fastest Lap Time</button>
                <button className="asys-btn asys-btn-dimensions" style={{fontSize: '24px'}}>Position</button>
            </div>

            {/* <div className="analysisButtonGroup tomorrow-extralight">
                <button className="asys-btn asys-btn-dimensions active ">Teams</button>
                <button className="asys-btn asys-btn-dimensions">Drivers</button>
            </div> */}

            <div className="infoOuter">
                <div className="graphContainer">
                    <div className="infoDisplay">
                        <_lineChart dataset1={Team1Data.points} dataset2={Team2Data.points} dataLength={Team1Data.sampleSize}/>
                    </div>

                    {/* <div className="auxInfo">
                        <_raderChart />
                    </div> */}
                </div>

                <div className="graphContainer">
                    <div className="infoDisplay">
                        <_lineChart/>
                    </div>

                    <div className="auxInfo">
                        <QBarChart />
                    </div>
                </div>
            </div>
        </section>
{/* 
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
        </section> */}
    </>
  );
}

export default Home;