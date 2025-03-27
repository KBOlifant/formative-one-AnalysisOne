import { Pi } from 'lucide-react';
import React from 'react';
import imageHolder from '../assets/3724vwkce7oy.png';
import Carousel from 'react-bootstrap/Carousel';
import PieChart from "./PieChart";
import PieChart2 from "./PieChart2";
import BarChart from "./BarChart";
import { GetAllTeamsData } from '../PreviewData';
import { useState, useEffect } from "react";

const Main_Carousel = () => {

  
  const [PreviewData, setTeamData1] = useState(null);

  useEffect(() => {
      GetAllTeamsData('2024').then(data => setTeamData1(data));
    }, []);

    const carouselItems = [
      {Componenet: <PieChart dataSet={PreviewData}/>, title: '', 'text': '2024 All F1 Team Points'},
      {Componenet: <PieChart2 dataSet={PreviewData}/>, title: '', 'text': '2024 F1 Team Wins'},
      {Componenet: <BarChart dataset={PreviewData}/>, title: '', 'text': '2024 Mercedes Points'}
    ];
  
    const displayCarousel = (carousel, index) => {
      return(
        <Carousel.Item id='carouselItem' key={index}>
            <div className='previewVisuals'>
                {carousel.Componenet}
            </div>
          
            <Carousel.Caption>
              <h3>{carousel.title}</h3>
              <p className='tomorrow-light'>{carousel.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
      )
    }
    return <Carousel>{carouselItems.map(displayCarousel)}</Carousel>
  }
  
  export default Main_Carousel;