import React from "react";
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

let sampleSize = 6;

async function getTeamData(team, year, ){
    const apiURL = 'https://api.jolpi.ca//ergast/f1/'+year+'/constructors/'+team+'/results/';

    let RoundData = []

    async function fetchData () {
        try{
            const response = await axios.get(apiURL, {
                params: {
                    limit: 100
                }
            });
            console.log(response);
            return response.data;
        } catch(error){
            console.error('Error: ', error);
        }
    }
    
    async function getRoundData(){
        let _roundData = [];
        let currentData = await fetchData();
        sampleSize = currentData.MRData.RaceTable.Races.length;
        for (let index = 0; index < sampleSize; index++) {
            _roundData.push(parseInt(currentData.MRData.RaceTable.Races[index].Results[0].points) + parseInt(currentData.MRData.RaceTable.Races[index].Results[1].points));
        }
        //console.log(_roundData);
        return _roundData;
    } 

    RoundData = await getRoundData();
    return RoundData;
}
let year = '2024';
let Team1 = 'mclaren';
let Team2 = 'mercedes';
let dataset1 = await getTeamData(Team1, year); 
let dataset2 = await getTeamData(Team2, year);

async function ReloadData(){
    if(Team1 != sessionStorage.getItem("LeftHand")){
        Team1 = sessionStorage.getItem("LeftHand");
        dataset1 = await getTeamData(Team1, year); 
    }

    if(Team2 != sessionStorage.getItem("RightHand")){
        Team2 = sessionStorage.getItem("RightHand");
        dataset2 = await getTeamData(Team2, year); 
    }

    setTimeout(() => {
        ReloadData();
    }, 1000);
}

ReloadData();

function Home() {
  return(
    <>
        <section className="compareSection">
            <div className="compareTitle m-auto justify-content-center">
                <Row className="tomorrow-light">
                    <Col><h2 id="team-text">{Team1}</h2></Col>
                    <Col><h1 id="VS-text">VS</h1></Col>
                    <Col><h2 id="team-text">{Team2}</h2></Col>
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
                        <_lineChart dataset1={dataset1} dataset2={dataset2} dataLength={sampleSize}/>
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