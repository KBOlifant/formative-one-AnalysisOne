import { Pi } from 'lucide-react';
import imageHolder from '../assets/3724vwkce7oy.png';
import Carousel from 'react-bootstrap/Carousel';
import PieChart from "./PieChart";

const main_Carousel = () => {
    const carouselItems = [
      {title: '', 'text': ''},
    ];
  
    const displayCarousel = (carousel, index) => {
      return(
        <Carousel.Item id='carouselItem' key={index}>
            <div className='previewVisuals'>
                <PieChart />
            </div>
          
            <Carousel.Caption>
              <h3>{carousel.title}</h3>
              <p>{carousel.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
      )
    }
    return <Carousel>{carouselItems.map(displayCarousel)}</Carousel>
  }
  
  export default main_Carousel;