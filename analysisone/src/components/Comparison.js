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
import _lineChart2 from './lineChartSpeed';
import _raderChart from './radarChart';
import QBarChart from './QuarterBarChart';
import axios from 'axios';
import { data } from "react-router-dom";
import { BarChart } from "lucide-react";
import { GetDataTeam1 } from '../Team1Data';
import { GetDataTeam2 } from '../Team2Data';
import DriverDetails from './DriverDetail';

function Home() {

    const pull_TeamA = (teamFromCardA) => {
        setNewTeamA(teamFromCardA);
        console.log(teamFromCardA + " this is from the prop");
      }
    
    const pull_TeamB = (teamFromCardB) => {
        setNewTeamB(teamFromCardB);
        console.log(teamFromCardB + " this is from the prop");
    }

    const [Team1Data, setTeamData1] = useState(null);
    const [Team2Data, setTeamData2] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [newTeamData1, setNewTeamA] = useState('ferrari');
    const [newTeamData2, setNewTeamB] = useState('mercedes');

    useEffect(() => {
        GetDataTeam1(newTeamData1, '2016').then(data => setTeamData1(data));
        GetDataTeam2(newTeamData2, '2016').then(data2 => setTeamData2(data2));
        console.log("Change");
      }, [newTeamData1, newTeamData2]);

    if (!Team1Data) {
    return <p>Loading...</p>;
    }

    if (!Team2Data) {
    return <p>Loading...</p>;
    }

    console.log(Team1Data);

    const selectionImgStyle1 = {
        boxShadow: isHovered ? "10px 10px 5px " + Team1Data.color + "88" : "10px 5px 5px rgba(0, 0, 0, 0.219)",
        transition: "box-shadow 0.3s ease, transform 0.2s ease",
        transform: isHovered ? "scale(1.01)" : "scale(1)",
        width: '100%'
    };

    const selectionImgStyle2 = {
        boxShadow: isHovered2 ? "10px 10px 5px " + Team2Data.color + "88" : "10px 5px 5px rgba(0, 0, 0, 0.219)",
        transition: "box-shadow 0.3s ease, transform 0.2s ease",
        transform: isHovered2 ? "scale(1.01) scaleX(-1)" : "scale(1) scaleX(-1)",
        width: '100%',
    };

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
                        <Image className="selectionIMG" src={Team1Data.image} style={selectionImgStyle1} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></Image>
                        <DriverDetails data={Team1Data}/>
                    </Col>

                    <Col>
                        <div className="btn-close">
                            <button type="button" class="btn" aria-label="Close"></button> 
                        </div>
                        <Image className="selectionIMG" src={Team2Data.image} style={selectionImgStyle2} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}></Image>
                        <DriverDetails data={Team2Data}/>
                    </Col>
                </Row>
            </div>
            
            <div>
                <h1 id='teamSelectTXT'>Select your teams</h1>
            </div>

            <div className="teamScroll tomorrow-extralight">
                <Cards setTeamA={pull_TeamA} setTeamB={pull_TeamB} />
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

            {/* <div className="analysisButtonGroup tomorrow-extralight" >
                <button className="asys-btn asys-btn-dimensions active" style={{fontSize: '24px'}}>Points</button>
                <button className="asys-btn asys-btn-dimensions" style={{fontSize: '20px'}}>Average Speed</button>
                <button className="asys-btn asys-btn-dimensions" style={{fontSize: '20px'}}>Fastest Lap Time</button>
                <button className="asys-btn asys-btn-dimensions" style={{fontSize: '24px'}}>Position</button>
            </div> */}

            {/* <div className="analysisButtonGroup tomorrow-extralight">
                <button className="asys-btn asys-btn-dimensions active ">Teams</button>
                <button className="asys-btn asys-btn-dimensions">Drivers</button>
            </div> */}

            <div className="infoOuter">
                <div className="graphContainer">
                    <div className="infoDisplay">
                        <_lineChart dataset1={Team1Data} dataset2={Team2Data}/>
                    </div>

                    {/* <div className="auxInfo">
                        <_raderChart />
                    </div> */}
                </div>

                <div className="graphContainer">
                    <div className="infoDisplay">
                        <_lineChart2 dataset1={Team1Data} dataset2={Team2Data}/>
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