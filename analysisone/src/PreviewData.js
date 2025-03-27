import axios from 'axios';

export const GetAllTeamsData = async (raceYear) => {

  try {
    const apiURL = 'https://api.jolpi.ca/ergast/f1/'+raceYear+'/constructorstandings/';
    const response = await axios.get(apiURL, {
        params: {
            limit: 100
        }
    });

    const getDriverPoints = async (teamName) => {
      const team = await axios.get(`https://api.jolpi.ca//ergast/f1/2024/constructors/${teamName}/results/`, {
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

    data.DriverData = await getDriverPoints('mercedes');

    console.log(TeamData);
    
    return data;
  } catch (error) {
    console.error(error);
  }
};
