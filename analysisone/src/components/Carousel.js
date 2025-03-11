import imageHolder from '../assets/3724vwkce7oy.png'

const main_Carousel = () => {
    const carouselItems = [
      {title: 'A New Hope', 'text': ''},
    ];
  
    const displayCarousel = (carousel, index) => {
      return(
        <Carousel.Item key={index}>
            <img src={imageHolder} width={1500} height={650} className='blackout' />
          
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