![Datamon Header Image](https://github.com/JugheadStudio/Github-assets/blob/main/Datamon/Github-header-blue.png)

- - - -

# Analysis One - What it's About

In this Project, I have made a web application using mainly using React.js, of which i used the [JolpiAPI](https://api.jolpi.ca/ergast/) to extract F1 data from. In This project you can
analyse the team points, average speed, and position standing over the last 10 years in F1. Since there is a limited amout of F1 teams, i have made the design decision to make all
the cards visiable at once to select and retrieve relevant information.

### Built With
[![Javascript]](https://www.javascript.com/)
[![NodeJS]](https://nodejs.org/en)
[![React]](https://react.dev/)
[![ChartJS]](https://www.chartjs.org/)
[![Bootstrap]](https://getbootstrap.com/)

![Datamon Screenshot](https://github.com/JugheadStudio/Github-assets/blob/main/Datamon/datamon-screenshot.png)

## Installation Instructions

Step one -> Clone the repository:
```
git clone https://github.com/KBOlifant/formative-one-AnalysisOne.git
```

Step two -> Install all the dependencies using npm:
```
npm install 
```

Run the app:
```
npm start
```

## Features

| Home Page | Compare Page | Timeline Page |
| :--- | :--- | :--- |
| Web-App Inroduction | Compare Pokemon Details | Single F1 Team View |
| Basic F1 Data Preview (2020 - 2024) | Comparison of 2 F1 Teams | Team Selection Section |
| Basic Pie Charts and Bar Chart in Carousel | Driver Information | Position of Team over the last 10 years |
|  | Team Selection Section |  |
|  | Information View With Graphs and Charts (can switch between the two) |  |

## Idea Explanation

The whole idea of this web app is to compare 2 F1 teams and compare their metric data which can give the user a deeper insight into their favourite or rival teams.

## Wireframes

![Wireframe](https://github.com/JugheadStudio/Github-assets/blob/main/Datamon/wireframes.png)

## Development Process

### Highlights
Highlights of my page are definitely my search bar and my evolution chain, I think these added features really gives a nice user experience and a nice flow to the website

### Challenges
This was my first react project and I made some beginner mistakes by having each component making it's own api calls to [PokeAPI](https://pokeapi.co/) and some of the other components were dependant on the information from other components. I Had to rewrite almost all of my code to have all the api calls in one file that passes the data into an array, which made it a lot easier to get the data I needed, this allowed me to just import the data file into each component and use only what I needed. None of the components were dependant on each other.

Another main challenge I had was with regards to the search bar and the evolution chain. Some pokemon names had '-' high-fins in their names and I made a function that splits then name and only used the first part of the name. Later on in my build, this made issues where my search bar was dependent on having the full name to access the correct api link and this was essential for my evolution chain as well as loading the data for the Pokemon that the user searches for. To fix this issue, I rewrote all my code for my search bar and started by pushing the full name with the high-fins to my array and then a modified version of the names that had only the name.

## Mockups

![Javascript](https://github.com/JugheadStudio/Github-assets/blob/main/Datamon/devices.png)

## Demonstration
[Link To Demonstration Video](https://drive.google.com/file/d/1I742FZpZOqmFGzcIrO6VR4KwbS5fdRv7/view?usp=sharing)