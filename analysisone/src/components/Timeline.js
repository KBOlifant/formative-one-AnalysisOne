import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompareHolderA from '../assets/TeamsPreview/alpineSideProfile.jpg'
import Image from 'react-bootstrap/Image';
import Cards from './Card';
import { GetDataTeam1 } from '../Team1Data';
import _lineChart from './lineChart';
import { useState, useEffect } from "react";

function Home() {

  const [Team1Data, setTeamData1] = useState(null);
  
  useEffect(() => {
      GetDataTeam1('mclaren', '2024').then(data => setTeamData1(data));
    }, []);

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

        <Image className="timeIMG" src={CompareHolderA}></Image>

        <div className="teamScroll tomorrow-extralight">
          <Cards />
        </div>

        <div className="compareTitle m-auto tomorrow-extralight" id="compareSubSection">
            <div className="compareTitleSection">
                <Row>
                    <Col><h2 id="teamA-Button" className="asys-btn team-btn">Bar Chart</h2></Col>
                    <Col><h1 id="VS-text2">2024</h1></Col>
                    <Col><h2 id="teamB-Button" className="asys-btn">Line Chart</h2></Col>
                </Row>
            </div>   
        </div>

        <div className="infoOuter">
          <div className="graphContainer">
              <div className="infoDisplay">
                  <_lineChart dataset1={Team1Data.points} dataset2={null} dataLength={Team1Data.sampleSize}/>
              </div>
          </div>
      </div>
      </section>
    </>
  );
}

export default Home;