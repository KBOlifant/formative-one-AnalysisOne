![AnalysisOne Logo](https://github.com/KBOlifant/formative-one-AnalysisOne/blob/main/analysisone/src/assets/GithubShowcase/AnalysisOneLogo.jpg)

- - - -

# Analysis One - What it's About

In this Project, I have made a web application using mainly using React.js, of which i used the [JolpiAPI](https://api.jolpi.ca/ergast/) to extract F1 data from. In This project you can
analyse the team points, average speed, and position standing over the last 10 years in F1. Since there is a limited amout of F1 teams, i have made the design decision to make all
the cards visiable at once to select and retrieve relevant information.

### Built With
[Javascript](https://www.javascript.com/)
[NodeJS](https://nodejs.org/en)
[React](https://react.dev/)
[ChartJS](https://www.chartjs.org/)
[Bootstrap](https://getbootstrap.com/)

![AnalysisOne Screenshot](https://github.com/KBOlifant/formative-one-AnalysisOne/blob/main/analysisone/src/assets/GithubShowcase/MainShowcase.png)

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

![Wireframe](https://github.com/KBOlifant/formative-one-AnalysisOne/blob/main/analysisone/src/assets/GithubShowcase/Frame%20427318911.png)

## Design and Deployment Process

### Wireframing

Wireframing was done in figma, it was done with the idea of being able to intuitively select a team and get the API to return data based on a selected team.
The Home page was kept simple throughout the design process, however significant changes were made to the comparison and timeline pages without fundementally changing
the intended purpose of the web application's design.

### Home Page

The Home Page was to be kept mostly the same as the wireframes. I decided to be fancy and play around with the carousel componenet by adding in charts into it, which i thought was
a kind of creative endeavour.

### Comparison Page

The Comparison Page was the hardest to make. From fetching data from the API and error prevention, a lot of measures were taken to prevent errors from occuring because the API
does not provide all the valid Data. Making the cards was the easiest above all things, but this is also where all hell about the API broke loose.

### Timeline Page

After tinkering and messing about with the home and comparison pages, I quickly started to understand the convenience of reusable componenets as i used just that in my timeline page.
Small changes in styling were implemented, and the graph had to be adjusted to fit the page, but other than that, this page was quickly developed.

## Mockups

![Javascript](https://github.com/KBOlifant/formative-one-AnalysisOne/blob/main/analysisone/src/assets/GithubShowcase/Frame%20427318912%20(1).png)

## Demonstration
[AnalysisOne Video](https://drive.google.com/file/d/11M5jPvihV-ikSvEJY_9CzL6Ov4i6i265/view?usp=drive_link)