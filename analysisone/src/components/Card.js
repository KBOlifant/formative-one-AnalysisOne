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

function sayCardNameLeft(cardID){
  console.log(cardID + " left");
  sessionStorage.setItem("LeftHand", cardID);
}

function sayCardNameRight(cardID){
  console.log(cardID + " right");
  sessionStorage.setItem("RightHand", cardID);
}



const CardInfo = ({ setTeamA, setTeamB }) => {
  const cardDetails = [
    {image: Alpine, title: 'Alpine', color: '#0060A8', id: 'alpine'},
    {image: Aston, title: 'Aston Martin', color: '#135f4f', id: 'aston_martin'},
    {image: Ferrari, title: 'Ferreri', color: '#7c0000', id: 'ferrari'},
    {image: Haas, title: 'Haas', color: '	#B4B7B4', id: 'haas'},
    {image: KickSauber, title: 'Kick Sauber', color: '#104d2b', id: 'sauber'},
    {image: MClaren, title: 'MClaren', color: '#FF9800', id: 'mclaren'},
    {image: Mercedes, title: 'Mercedes', color: '#00D2BE', id: 'mercedes'},
    {image: RacingBulls, title: 'Racing Bulls', color: '#a0a0a0', id: 'rb'},
    {image: RedBull, title: 'Red Bull', color: '#1E41FF', id: 'red_bull'},
    {image: Williams, title: 'Williams', color: '#005F8C', id: 'williams'}
  ];

  function displayCard(card, index) {
    return(
      <Card className='homeCards' bg="dark" style={{ width: '18rem', borderRadius: '20px'}} key={index}>
        <Card.Img variant="top" onClick={() => setTeamA(card.id)} src={card.image} className='mt-3' />
        <Card.Img variant="top" onClick={() => setTeamB(card.id)} src={card.image} className='mt-3' style={{borderBottom: "2px solid " + card.color, transform: "scaleX(-1)"}}/>
        <Card.Body>
          <h5 className="text-align-center text-warning">{card.title}</h5>
        </Card.Body>
      </Card>
    )
  }

  return <Row className='Cards justify-content-md-center flex-wrap p-3' >{cardDetails.map(displayCard)}</Row>
}

export default CardInfo;