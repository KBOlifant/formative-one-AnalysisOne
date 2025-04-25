import React from "react";
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Cards from '../Card';
import Barchart from '../BarChart';
import _lineChart from '../lineChart';
import _lineChart2 from '../lineChartSpeed';
import _raderChart from '../radarChart';
import QBarChart from '../QuarterBarChart';
import { GetDataTeam1 } from '../../Team1Data';
import { GetDataTeam2 } from '../../Team2Data';
import DriverDetails from '../DriverDetail';
import DateInputField from '../YearInput';
import InfoAccordian from '../Accordian';

function Home() {

    const pull_TeamA = (teamFromCardA) => {
        setNewTeamA(teamFromCardA);
        console.log(teamFromCardA + " this is from the prop");
      }
    
    const pull_TeamB = (teamFromCardB) => {
        setNewTeamB(teamFromCardB);
        console.log(teamFromCardB + " this is from the prop");
    }

    const [isPrimaryTeam, setTeamOrientation] = useState(true);

    const [Team1Data, setTeamData1] = useState(null);
    const [Team2Data, setTeamData2] = useState(null);
    const [currentYear, setDate] = useState(2024);
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [newTeamData1, setNewTeamA] = useState('ferrari');
    const [newTeamData2, setNewTeamB] = useState('mercedes');
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        GetDataTeam1(newTeamData1, currentYear).then(data => setTeamData1(data));
        GetDataTeam2(newTeamData2, currentYear).then(data2 => setTeamData2(data2));
      }, [newTeamData1, newTeamData2, currentYear, isToggled]);

    if (!Team1Data) {
    return <p>Loading...</p>;
    }

    if (!Team2Data) {
    return <p>Loading...</p>;
    }

    function loadRelevantGraph(Team1, Team2){
        if(isToggled){
            return <_lineChart dataset1={Team1} dataset2={Team2} />
        }else{
            return <Barchart dataset1={Team1} dataset2={Team2} />
        }
    }

    function loadLineChart(){
        setIsToggled(true);
    }

    function loadBarChart(){
        setIsToggled(false);
    }

    console.log(Team1Data);

    const selectionImgStyle1 = {
        boxShadow: isHovered ? "2px 2px 2px " + Team1Data.color : "10px 5px 5px rgba(0, 0, 0, 0.219)",
        transition: "box-shadow 0.3s ease, transform 0.2s ease",
        transform: isHovered ? "scale(1.01)" : "scale(1)",
        width: '100%'
    };

    const selectionImgStyle2 = {
        boxShadow: isHovered2 ? "2px 2px 2px " + Team2Data.color : "10px 5px 5px rgba(0, 0, 0, 0.219)",
        transition: "box-shadow 0.3s ease, transform 0.2s ease",
        transform: isHovered2 ? "scale(1.01) scaleX(-1)" : "scale(1) scaleX(-1)",
        width: '100%',
    };

    let accordianTitle = "Compare Info";
    let accordianInfo = `Want to see how your favorite F1 teams stack up against each other? Our comparison tool lets 
    you analyze two teams based on their performance in the current season. You can compare key stats such as total points, 
    podium finishes, fastest laps, and average speed to see which team is performing better. Simply select two teams from the cards below in the cards section, and you'll get an
    instant side-by-side breakdown of their results. Whether you're tracking your favorite team’s progress or just
    curious about the competition, our tool gives you all the insights you need. Start comparing now and see who’s leading the 2024 F1 season!`;

  return(
    <>
        <InfoAccordian Heading={accordianTitle} Info={accordianInfo} />
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
                        {/* <div className="m-auto mt-4 dotIndicator"></div> */}
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

            
            
            
            <div className="teamScroll tomorrow-extralight gradientBorder">
                <div className="switchContainer">
                    <label class="switch">
                        <h1 className="text-white">{isPrimaryTeam}</h1>
                        <input type="checkbox"></input>
                        <span class="slider round" onClick={() => setTeamOrientation(!isPrimaryTeam)}></span>
                    </label>
                </div>
                <Cards setTeamA={pull_TeamA} setTeamB={pull_TeamB} isPrimaryTeam={isPrimaryTeam} />
            </div>
        </section>

        <div className="compareTitle m-auto tomorrow-extralight" id="compareSubSection">
            <div className="compareTitleSection">
                <h2 className="text-primary m-auto mb-3" style={{letterSpacing: '15px', borderBottom: '2px solid', width: '300px'}}>Race Year</h2>
                <Row>
                    <Col><button onClick={loadBarChart}><h2 id="teamA-Button" className="asys-btn team-btn">Bar Chart</h2></button></Col>
                    <DateInputField min={2000} max={2025} onValueChange={setDate}/>
                    <Col><button onClick={loadLineChart}><h2 id="teamB-Button" className="asys-btn">Line Chart</h2></button></Col>
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
                        {loadRelevantGraph(Team1Data, Team2Data)}
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
                        <QBarChart apiData1={Team1Data} apiData2={Team2Data} />
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