import axios from 'axios';

import Aston from './assets/TeamsPreview/aston-martin.avif';
import Alpine from './assets/TeamsPreview/alpine.avif';
import Ferrari from './assets/TeamsPreview/ferrari.avif';
import Mercedes from './assets/TeamsPreview/mercedes.avif';
import Haas from './assets/TeamsPreview/haas.avif';
import RacingBulls from './assets/TeamsPreview/racing-bulls.avif';
import KickSauber from './assets/TeamsPreview/kick-sauber.avif';
import MClaren from './assets/TeamsPreview/mclaren.avif';
import RedBull from './assets/TeamsPreview/red-bull-racing.avif';
import Williams from './assets/TeamsPreview/williams.avif';

export const GetAvailableTeams = () => {
  const cardDetails = [
      {image: Alpine, title: 'Alpine', color: '#0060A8', id: 'alpine'},
      {image: Aston, title: 'Aston Martin', color: '#135f4f', id: 'aston_martin'},
      {image: Ferrari, title: 'Ferreri', color: '#7c0000', id: 'ferrari'},
      {image: Haas, title: 'Haas', color: '	#B4B7B4', id: 'haas'},
      {image: KickSauber, title: 'Kick Sauber', color: '#104d2b', id: 'sauber'},
      {image: MClaren, title: 'MClaren', color: '#FF9800', id: 'mclaren'},
      {image: Mercedes, title: 'Mercedes', color: '#00D2BE', id: 'mercedes'},
      {image: RacingBulls, title: 'Racing Bulls', color: '#a0a0a0', id: 'rb'},
      {image: RedBull, title: 'Red Bull', color: '#1E41FF', id: 'red_bull'},
      {image: Williams, title: 'Williams', color: '#005F8C', id: 'williams'}
    ];

    return cardDetails;
}

export const GetAllTeamsData = async (raceYear, teamA, teamB) => {

  try {
    const apiURL = 'https://api.jolpi.ca/ergast/f1/'+raceYear+'/constructorstandings/';
    const response = await axios.get(apiURL, {
        params: {
            limit: 100
        }
    });

    const getDriverPoints = async (teamName) => {
      const team = await axios.get(`https://api.jolpi.ca//ergast/f1/${raceYear}/constructors/${teamName}/results/`, {
        params: {
          limit: 100
        }
      });
      const Driver1Points = team.data.MRData.RaceTable.Races.map(race => 
        race.Results?.[0]?.points !== undefined ? Number(race.Results[0].points) : 0
      );
      const Driver2Points = team.data.MRData.RaceTable.Races.map(race => 
        race.Results?.[1]?.points !== undefined ? Number(race.Results[1].points) : 0
      );

      const driverName1 = team.data.MRData.RaceTable.Races?.[0]?.Results?.[0]?.Driver?.givenName || 'Unknown';
      const driverName2 = team.data.MRData.RaceTable.Races?.[0]?.Results?.[1]?.Driver?.givenName || 'Unknown';

      return { Driver1: Driver1Points, Driver2: Driver2Points, Driver1Name: driverName1, Driver2Name: driverName2 };
    };

    const colorData = [
      "#0060A8", // Alpine
      "#135f4f", // Aston Martin
      "#7c0000", // Ferrari
      "#B4B7B4", // Haas
      "#104d2b", // Sauber
      "#FF9800", // McLaren
      "#00D2BE", // Mercedes
      "#a0a0a0", // Racing Bulls (RB)
      "#1E41FF", // Red Bull
      "#005F8C"  // Williams
    ];
    
    const TeamData = response.data.MRData;
    
    let TotalPoints = TeamData.StandingsTable.StandingsLists[0].ConstructorStandings.map(currentTeam => 
      currentTeam?.points !== undefined ? Number(currentTeam.points) : 0
    );
    
    let TeamNames = TeamData.StandingsTable.StandingsLists[0].ConstructorStandings.map(currentTeam => 
      currentTeam?.Constructor?.name !== undefined ? currentTeam.Constructor.name : "No Information"
    );

    let TeamWins = TeamData.StandingsTable.StandingsLists[0].ConstructorStandings.map(currentTeam => 
      currentTeam?.wins !== undefined ? currentTeam.wins : 0
    );

    const data = {
      AllTeamPoints: TotalPoints,
      AllTeamNames: TeamNames,
      TeamColors: colorData,
      TeamWins: TeamWins,
      
    };

    data.Driver1Data = await getDriverPoints(teamA);
    data.Driver2Data = await getDriverPoints(teamB);
    
  let TeamAPoints = 0;
  let TeamBPoints = 0;
  
  for (let index = 0; index < data.Driver1Data.Driver1.length; index++) {
    TeamAPoints += data.Driver1Data.Driver1[index];
    TeamAPoints += data.Driver1Data.Driver2[index];
  }

  for (let index = 0; index < data.Driver2Data.Driver1.length; index++) {
    TeamBPoints += data.Driver2Data.Driver1[index];
    TeamBPoints += data.Driver2Data.Driver2[index];
  }

    data.TeamAPoints = TeamAPoints;
    data.TeamBPoints = TeamBPoints;
    
    return data;
  } catch (error) {
    console.error(error);
  }
};
