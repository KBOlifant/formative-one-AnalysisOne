import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CompareHolder from '../assets/AdobeStock_586498710.jpeg'
import Card from './Card';

function Home() {
  return(
    <>
        <section className="compareSection">
            <div className="compareTitle m-auto justify-content-center border-bottom">
                <Row>
                    <Col><h2 id="team-text">Team A</h2></Col>
                    <Col><h1 id="VS-text">VS</h1></Col>
                    <Col><h2 id="team-text">Team B</h2></Col>
                </Row>
            </div>

            <div className="compareItems">
                <Row>
                    <Col><Image className="selectionIMG" src={CompareHolder}></Image></Col>
                    <Col><Image className="selectionIMG" src={CompareHolder}></Image></Col>
                </Row>
            </div>

            <div className="teamScroll">
                <Card />
            </div>

            <div className="compareTitle m-auto border-bottom">
                <Row>
                    <Col><h2 id="teamA-Button" className="asys-btn team-btn">Team A</h2></Col>
                    <Col><h1 id="VS-text2">2024 : Round 2</h1></Col>
                    <Col><h2 id="teamB-Button" className="asys-btn">Team B</h2></Col>
                </Row>
            </div>
        </section>

        <section className="analysisSection">
            <div className="analysisButtonGroup">
                <button className="asys-btn asys-btn-dimensions active">Points</button>
                <button className="asys-btn asys-btn-dimensions">Top Speed</button>
                <button className="asys-btn asys-btn-dimensions">Fastest Lap Time</button>
                <button className="asys-btn asys-btn-dimensions">Position</button>
            </div>
        </section>
    </>
  );
}

export default Home;