import React from "react";
import Card from 'react-bootstrap/Card';
import teamHolderImage from '../assets/3724vwkce7oy.png';
import Row from "react-bootstrap/esm/Row";
import Aston from '../assets/AstonMartin.jpg';
import Alpine from '../assets/Alpine.png';
import Ferrari from '../assets/Ferrari.png';
import Mercedes from '../assets/mercedes.avif';
import Haas from '../assets/Logo_Haas_F1.png';
import Redbull from '../assets/Redbull.jpg';

const CardInfo = () => {
  const cardDetails = [
    {image: teamHolderImage, title: 'Aston Martin'},
    {image: teamHolderImage, title: 'Alpine'},
    {image: teamHolderImage, title: 'Ferreri'},
    {image: Mercedes, title: 'Mercedes'},
    {image: teamHolderImage, title: 'Haas'},
    {image: teamHolderImage, title: 'Redbull'},
    {image: teamHolderImage, title: 'MClaren'},
    {image: teamHolderImage, title: 'MClaren'},
    {image: teamHolderImage, title: 'MClaren'},
    {image: teamHolderImage, title: 'MClaren'}
  ];

  const displayCard = (card, index) => {
    return(
      <Card className='homeCards' bg="dark" style={{ width: '18rem', borderRadius: '20px'}} key={index}>
        <Card.Img variant="top" src={card.image} className='mt-3 rounded-4' />
        <Card.Body>
          <h5 className="text-align-center text-warning">{card.title}</h5>
        </Card.Body>
      </Card>
    )
  }

  return <Row className='Cards justify-content-md-center flex-wrap'>{cardDetails.map(displayCard)}</Row>
}

export default CardInfo;