import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompareHolderA from '../assets/TeamsCar/alpineSideProfile.jpg'
import Image from 'react-bootstrap/Image';
import Cards from './TimeLineCards';
import { GetDataTeam1 } from '../Team1Data';
import _lineChart from './TimeLineBarChart';
import { useState, useEffect } from "react";

function Home() {

  const pull_TeamA = (teamFromCardA) => {
    setNewTeamA(teamFromCardA);
    console.log(teamFromCardA + " this is from the prop");
  }

  const [Team1Data, setTeamData1] = useState(null);
  const [newTeamData1, setNewTeamA] = useState('alpine');
  
  useEffect(() => {
      GetDataTeam1(newTeamData1, "2024").then(data => setTeamData1(data));
    }, [newTeamData1]);

    if (!Team1Data) {
      return <p>Loading...</p>;
    }

  return(
    <>
      <section className="TimeLineSection">
        <div className="timelineTitle m-auto justify-content-center">
            <Row className="tomorrow-light">
                <Col><h1 id="VS-text">Timeline</h1></Col>
            </Row>
        </div>

        <Image className="timeIMG" src={Team1Data.image}></Image>

        <h1 className="m-auto text-align-center pt-4" style={{color: Team1Data.color}}>{Team1Data.TeamName}</h1>

        <div className="teamScroll tomorrow-extralight">
          <Cards setTeamA={pull_TeamA}/>
        </div>

        <div className="compareTitle m-auto tomorrow-extralight pb-0" id="compareSubSection">
            <div className="compareTitleSection pb-3">
                <Row>
                    <Col><h2 id="teamA-Button" className="asys-btn team-btn">Bar Chart</h2></Col>
                    <Col><h2 id="teamB-Button" className="asys-btn">Line Chart</h2></Col>
                </Row>
            </div>   
        </div>

        <div className="infoOuter">
          <div className="graphContainer">
              <div className="infoDisplay">
                  <_lineChart dataset1={Team1Data} />
              </div>
          </div>
      </div>
      </section>
    </>
  );
}

export default Home;