import axios from 'axios';

const apiURL = 'https://api.jolpi.ca/ergast/f1/2024/results/';

axios.get(apiUrl)
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
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching dog data:", error);
  }
};

async function fetchData(){
    try {
    const response = await axios.get(apiURL);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching dog data:", error);
  }
}

fetchData()