import React from "react";
import Card from 'react-bootstrap/Card';
import teamHolderImage from '../assets/3724vwkce7oy.png';
import Row from "react-bootstrap/esm/Row";
import Aston from '../assets/TeamsPreview/aston-martin.avif';
import Alpine from '../assets/TeamsPreview/alpine.avif';
import Ferrari from '../assets/TeamsPreview/ferrari.avif';
import Mercedes from '../assets/TeamsPreview/mercedes.avif';
import Haas from '../assets/TeamsPreview/haas.avif';
import RacingBulls from '../assets/TeamsPreview/racing-bulls.avif';
import KickSauber from '../assets/TeamsPreview/kick-sauber.avif';
import MClaren from '../assets/TeamsPreview/mclaren.avif';
import RedBull from '../assets/TeamsPreview/red-bull-racing.avif';
import Williams from '../assets/TeamsPreview/williams.avif';

function sayCardName(cardName){
  console.log(cardName);
}

const CardInfo = () => {
  const cardDetails = [
    {image: Alpine, title: 'Alpine', color: '#0060A8'},
    {image: Aston, title: 'Aston Martin', color: '#135f13'},
    {image: Ferrari, title: 'Ferreri', color: '#7c0000'},
    {image: Haas, title: 'Haas', color: '	#B4B7B4'},
    {image: KickSauber, title: 'Kick Sauber', color: '#104d2b'},
    {image: MClaren, title: 'MClaren', color: '#FF9800'},
    {image: Mercedes, title: 'Mercedes', color: '#00D2BE'},
    {image: RacingBulls, title: 'Racing Bulls', color: '#a0a0a0'},
    {image: RedBull, title: 'Red Bull', color: '#1E41FF'},
    {image: Williams, title: 'Williams', color: '#005F8C'}
  ];

  const displayCard = (card, index) => {
    return(
      <Card onClick={() => sayCardName(card.title)} className='homeCards' bg="dark" style={{ width: '18rem', borderRadius: '20px'}} key={index}>
        <Card.Img variant="top" src={card.image} className='mt-3' style={{borderBottom: "2px solid " + card.color}}/>
        <Card.Body>
          <h5 className="text-align-center text-warning">{card.title}</h5>
        </Card.Body>
      </Card>
    )
  }

  return <Row className='Cards justify-content-md-center flex-wrap' >{cardDetails.map(displayCard)}</Row>
}

export default CardInfo;