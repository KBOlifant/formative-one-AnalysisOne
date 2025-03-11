import { Pi } from 'lucide-react';
import imageHolder from '../assets/3724vwkce7oy.png';
import Carousel from 'react-bootstrap/Carousel';
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const main_Carousel = () => {
    const carouselItems = [
      {Componenet: <PieChart />, title: '', 'text': 'Pie Chart'},
      {Componenet: <PieChart />, title: '', 'text': 'Pie Chart'},
      {Componenet: <PieChart />, title: '', 'text': 'Pie Chart'}
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
  
  export default main_Carousel;