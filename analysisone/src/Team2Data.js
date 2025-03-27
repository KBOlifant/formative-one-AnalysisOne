import axios from 'axios';
import alpineIMG from './assets/TeamsCar/alpineSideProfile.jpg';
import astonIMG from './assets/TeamsCar/astonSideProfile.jpg';
import ferreriIMG from './assets/TeamsCar/ferrariSideProfile.jpg';
import haasIMG from './assets/TeamsCar/haasSideProfile.jpg';
import mclarenIMG from './assets/TeamsCar/mclarenSideProfile.jpg';
import mercedesIMG from './assets/TeamsCar/mercedesSideProfile.jpg';
import racing_bIMG from './assets/TeamsCar/racingBullsSideProfile.jpg';
import red_bIMG from './assets/TeamsCar/redbullSideProfile.jpg';
import sauberIMG from './assets/TeamsCar/sauberSideProfile.jpg';
import williamsIMG from './assets/TeamsCar/williamsSideProfile.jpg';

export const GetDataTeam2 = async (teamName, raceYear) => {
  try {
    const apiURL = 'https://api.jolpi.ca//ergast/f1/'+raceYear+'/constructors/'+teamName+'/results/';
    const response = await axios.get(apiURL, {
        params: {
            limit: 100
        }
    });

    const teamData = {
        alpine: { image: alpineIMG, color: "#0060A8" },
        aston_martin: { image: astonIMG, color: "#135f4f" },
        ferrari: { image: ferreriIMG, color: "#7c0000" },
        haas: { image: haasIMG, color: "#B4B7B4" },
        sauber: { image: sauberIMG, color: "#104d2b" },
        mclaren: { image: mclarenIMG, color: "#FF9800" },
        mercedes: { image: mercedesIMG, color: "#00D2BE" },
        rb: { image: racing_bIMG, color: "#a0a0a0" },
        red_bull: { image: red_bIMG, color: "#1E41FF" },
        williams: { image: williamsIMG, color: "#005F8C" },
    };
      
    // Extract the team's data based on teamName, with fallback defaults
    const { image: teamImage = "", color: teamColor = "#000000" } = teamData[teamName] || {};

    const team = response.data.MRData.RaceTable;

    let pointsD1 = team.Races.map(race => 
        race.Results?.[0]?.points !== undefined ? Number(race.Results[0].points) : 0
      );
      
      let pointsD2 = team.Races.map(race => 
        race.Results?.[1]?.points !== undefined ? Number(race.Results[1].points) : 0
      );
      
      let fastestLapTimeD1 = team.Races.map(race => 
        race.Results?.[0]?.FastestLap?.Time?.time !== undefined ? race.Results[0].FastestLap.Time.time : 0
      );
      
      let fastestLapTimeD2 = team.Races.map(race => 
        race.Results?.[1]?.FastestLap?.Time?.time !== undefined ? race.Results[1].FastestLap.Time.time : 0
      );

      let fastestLapSpeedD1 = team.Races.map(race => 
        race.Results?.[0]?.FastestLap?.AverageSpeed?.speed !== undefined ? parseFloat(race.Results[0].FastestLap.AverageSpeed.speed) : 0
      );
      
      let fastestLapSpeedD2 = team.Races.map(race => 
        race.Results?.[1]?.FastestLap?.AverageSpeed?.speed !== undefined ? parseFloat(race.Results[1].FastestLap.AverageSpeed.speed) : 0
      );

    const data2 = {
        image: teamImage,
        color: teamColor,
        season: team.season,
        constructorID: team.constructorId,
        TeamName: team.Races?.[0]?.Results?.[0]?.Constructor?.name || 'No Information',  // Safely access Constructor name
        rounds: team.Races?.map(races => parseInt(races.round)) || [],  // Safely access rounds
        driver1: {
          driverID: team.Races?.[0]?.Results?.[0]?.Driver?.driverId || 'Unknown',
          driverCode: team.Races?.[0]?.Results?.[0]?.Driver?.code || 'Unknown',
          driverName: team.Races?.[0]?.Results?.[0]?.Driver?.givenName || 'Unknown',
          driverFamilyName: team.Races?.[0]?.Results?.[0]?.Driver?.familyName || 'Unknown',
          driverNumber: team.Races?.[0]?.Results?.[0]?.Driver?.permanentNumber || 'Unknown',
          driverNationality: team.Races?.[0]?.Results?.[0]?.Driver?.nationality || 'Unknown'
        },
        driver2: {
          driverID: team.Races?.[0]?.Results?.[1]?.Driver?.driverId || 'Unknown',
          driverCode: team.Races?.[0]?.Results?.[1]?.Driver?.code || 'Unknown',
          driverName: team.Races?.[0]?.Results?.[1]?.Driver?.givenName || 'Unknown',
          driverFamilyName: team.Races?.[0]?.Results?.[1]?.Driver?.familyName || 'Unknown',
          driverNumber: team.Races?.[0]?.Results?.[1]?.Driver?.permanentNumber || 'Unknown',
          driverNationality: team.Races?.[0]?.Results?.[1]?.Driver?.nationality || 'Unknown'
        },
        fastestLapTimes: fastestLapTimeD1.concat(fastestLapTimeD2),
        fastestLapAverageSpeed: fastestLapSpeedD1.map((averageSpeed, index) => Number((averageSpeed + fastestLapSpeedD2[index]) / 2).toFixed(2)),
        points: pointsD1.map((value, index) => value + pointsD2[index]),
        sampleSize: team.Races?.length || 0,  // Safely access the length
      };
    
    return data2;
  } catch (error) {
    console.error(error);
  }
};
// 