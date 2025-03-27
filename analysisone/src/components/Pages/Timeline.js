import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoAccordian from '../Accordian';
import Image from 'react-bootstrap/Image';
import Cards from '../TimeLineCards';
import { GetDataTeam1 } from '../../Team1Data';
import _lineChart from '../TimeLineBarChart';
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

    let accordianTitle = "Timeline Info";
    let accordianInfo = `Curious about how your favorite F1 team has performed over the past decade?
    Our timeline page allows you to explore a team’s position in the standings over the last 10 years.
    With an easy-to-read visual representation, you can track their progress, see their best and
    worst seasons, and analyze trends in performance. Simply select a team, and the timeline will 
    display their finishing positions, total points, and key achievements year by year. Whether 
    you’re a longtime fan or just getting into the sport, this feature provides a deep dive into
    the team’s journey through Formula 1 history!`;

  return(
    <>
      <InfoAccordian Heading={accordianTitle} Info={accordianInfo} />
      <section className="TimeLineSection">
        <div className="timelineTitle m-auto justify-content-center">
            <Row className="tomorrow-light">
                <Col><h1 id="VS-text">Timeline</h1></Col>
            </Row>
        </div>

        <Image className="timeIMG" src={Team1Data.image} style={{ boxShadow: '5px 5px 10px ' + Team1Data.color, border: '3px solid ' + Team1Data.color}}></Image>

        <h1 className="m-auto text-align-center pt-4 pb-3" style={{color: Team1Data.color, borderBottom: '2px solid', width: '80%'}}>{Team1Data.TeamName}</h1>

        <div className="teamScroll tomorrow-extralight mb-2" >
          <Cards setTeamA={pull_TeamA} />
        </div>

        <div className="infoOuter">
          <div className="graphContainer mb-4">
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