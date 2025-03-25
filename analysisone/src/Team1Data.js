import axios from 'axios';

// Get the pokemon data from the pokeapi
export const GetDataTeam1 = async (teamName, raceYear) => {
  try {
    // Get the pokemon data
    const apiURL = 'https://api.jolpi.ca//ergast/f1/'+raceYear+'/constructors/'+teamName+'/results/';
    const response = await axios.get(apiURL, {
        params: {
            limit: 100
        }
    });

    const team = response.data.MRData.RaceTable;

    let pointsD1 = team.Races.map(races => parseInt(races.Results[0].points));
    let pointsD2 = team.Races.map(races => parseInt(races.Results[1].points));
    let fastestLapTimeD1 = team.Races.map(races => races.Results[0].FastestLap.Time.time);
    let fastestLapTimeD2 = team.Races.map(races => races.Results[1].FastestLap.Time.time);

    // Get all the data we need from the pokemon data and store it in a new object that can be imported into all the pages that need it
    const data = {
      season: team.season,
      constructorID: team.constructorId,
      TeamName: team.Races[0].Results[0].Constructor.name,
      rounds: team.Races.map(races => parseInt(races.round)),
      driver1: {
        driverID: team.Races[0].Results[0].Driver.driverId,
        driverCode: team.Races[0].Results[0].Driver.code,
        driverName: team.Races[0].Results[0].Driver.givenName,
        driverFamilyName: team.Races[0].Results[0].Driver.familyName
      },
      driver2: {
        driverID: team.Races[0].Results[1].Driver.driverId,
        driverCode: team.Races[0].Results[1].Driver.code,
        driverName: team.Races[0].Results[1].Driver.givenName,
        driverFamilyName: team.Races[0].Results[1].Driver.familyName
      },
      fastestLapTimes: fastestLapTimeD1.concat(fastestLapTimeD2),
      points: pointsD1.map((value, index) => value + pointsD2[index]),
      sampleSize: team.Races.length
    };
    
    return data;
  } catch (error) {
    console.error(error);
  }
};
// 