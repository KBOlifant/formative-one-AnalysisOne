import { GetAllTeamsData, GetAvailableTeams } from '../PreviewData';
import { useState, useEffect } from "react";
import BarChart from './HomeBarChart';
import racer1 from '../assets/TeamsPreview/ferrari.avif';
import racer2 from '../assets/TeamsPreview/mercedes.avif';

const BentoGrids = () => {
    const randomYear = Math.floor(Math.random() * 5) + 2020;

    const [stateYear, setYearState] = useState(randomYear);
      
    const [PreviewData, setTeamData1] = useState(null);

    const [teamAData, setTeamAData] = useState(null);
    const [teamBData, setTeamBData] = useState(null);

    const [loadState, setLoadState] = useState(true);

    useEffect(() => {
        if(teamAData != null && teamBData != null){
            setLoadState(false);
        }
    }, [teamAData, teamBData])
    
    useEffect(() => {
        setTeamAData(GetAvailableTeams()[Math.floor(Math.random() * 9)]);
        setTeamBData(GetAvailableTeams()[Math.floor(Math.random() * 9)]);
        if(loadState === true){
            return;
        }
        GetAllTeamsData(randomYear, teamAData.id, teamBData.id).then(data => {
            setTeamData1(data);
        });
    }, [stateYear, loadState]);

    if(!PreviewData){
        return(<p>Loading...</p>)
    }

    let TotalTeamPoints = PreviewData.TeamAPoints + PreviewData.TeamBPoints;
    let team1Progress = (PreviewData.TeamAPoints / TotalTeamPoints) * 560;
    let team2Progress = (PreviewData.TeamBPoints /TotalTeamPoints) * 560;

    return(
        <div className="grid-container">
            <div className="box" id="box-1" style={{gridArea: 'box-1'}}>
                <div className="welcomeText">
                    <h1>Welcome To Analysis <span style={{color: 'red'}}>One</span></h1>
                </div>
            </div>
            <div className="box" id='box-2' style={{gridArea: 'box-2'}}><h1>Perfomance <span style={{color: '#F91C1C'}}>Analysis</span></h1></div>
            <div className="box" id='box-3'style={{gridArea: 'box-3'}}>
                <div className='racerProgressContainer'>
                    <h1>{teamAData.title} VS {teamBData.title} {randomYear}</h1>
                    <div className='Tprogress'>
                        <div className='team1Progress' style={{ width: `${team1Progress}px`}} >
                            <h3 className='tomorrow-light'>{PreviewData.TeamAPoints} Points</h3>
                        </div>
                        <img src={teamAData.image}  />
                    </div>
                    
                    <div className='Tprogress'>
                        <div className='team1Progress' id='team2Progress' style={{ width: `${team2Progress}px`}} >
                            <h5 className='tomorrow-light'>{PreviewData.TeamBPoints} Points</h5>
                        </div>
                        <img src={teamBData.image}  />
                    </div>
                </div>
            </div>
            <div className="box" id='box-4'style={{gridArea: 'box-4'}}></div>
            <div className="box" id='box-5'style={{gridArea: 'box-5'}}><div id='bentoGraph'><BarChart dataset={PreviewData} /></div></div>
        </div>
    )
}

export default BentoGrids;