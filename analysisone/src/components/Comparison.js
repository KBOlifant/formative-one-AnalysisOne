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
import axios from 'axios';

const labels = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Round 7', 'Round 8', 'Round 9', 'Round 10', 'Round 11', 'Round 12'];

async function getTeamData(team){
    const apiURL = 'https://api.jolpi.ca//ergast/f1/2024/constructors/'+team+'/results/';

    axios.get(apiURL, {
        params: {
            limit: 100
            }
        })
    
      .then(response => {
        // Handle the success response
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
    
    const fetchF1Data = async () => {
        try {
            const response = await axios.get(apiURL);
            return response.data;
        } catch (error) {
            console.error("Error fetching dog data:", error);
        }
    };
    
    
    
    async function getData(){
        let Currentdata = await axios.get(apiURL);
        let RoundData = [];
        console.log(Currentdata.data.MRData);
        for (let index = 0; index < labels.length; index++) {
            console.log(Currentdata.data.MRData);
            RoundData.push(parseInt(Currentdata.data.MRData.RaceTable.Races[index].Results[0].points) + parseInt(Currentdata.data.MRData.RaceTable.Races[index].Results[1].points));
        }

        return RoundData;
    }

    return getData();
}
//console.log(await getTeamData("ferrari"));
let dataset1 = await getTeamData("ferrari"); 
let dataset2 = await getTeamData("mercedes"); 

//getTeamData();

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
                        <_lineChart dataset1={dataset1} dataset2={dataset2}/>
                    </div>

                    <div className="auxInfo">
                        <_raderChart />
                    </div>
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