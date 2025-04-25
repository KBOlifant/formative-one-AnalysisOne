import { GetAllTeamsData } from '../PreviewData';
import { useState, useEffect } from "react";
import BarChart from './HomeBarChart';


const BentoGrids = () => {
    const randomYear = Math.floor(Math.random() * 5) + 2020;
      
    const [PreviewData, setTeamData1] = useState(null);
    
    useEffect(() => {
        GetAllTeamsData(randomYear).then(data => setTeamData1(data));
    }, [randomYear]);

    <BarChart dataset={PreviewData}/>

    return(
        <div className="grid-container">
            <div className="box" id="box-1" style={{gridArea: 'box-1'}}>
                <div className="welcomeText">
                    <h1>Welcome To Analysis <span style={{color: 'red'}}>One</span></h1>
                </div>
            </div>
            <div className="box" id='box-2' style={{gridArea: 'box-2'}}><h1>Perfomance <span style={{color: '#F91C1C'}}>Analysis</span></h1></div>
            <div className="box" id='box-3'style={{gridArea: 'box-3'}}></div>
            <div className="box" id='box-4'style={{gridArea: 'box-4'}}></div>
            <div className="box" id='box-5'style={{gridArea: 'box-5'}}><div id='bentoGraph'><BarChart dataset={PreviewData} /></div></div>
        </div>
    )
}

export default BentoGrids;