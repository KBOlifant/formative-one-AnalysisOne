import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import teamHolderImage from '../assets/3724vwkce7oy.png';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';

const CardInfo = () => {
  const cardDetails = [
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'},
    {image: teamHolderImage, title: 'MClaren', 'text': 'ww'}
  ];

  const displayCard = (card, index) => {
    return(
      <Card className='homeCards' style={{ width: '18rem', borderRadius: '20px'}} key={index}>
        <Card.Img variant="top" src={card.image} className='mt-3 rounded-4' />
        <Card.Body>
          <h5>{card.title}</h5>
        </Card.Body>
      </Card>
    )
  }

  return <Row className='Cards justify-content-md-center flex-wrap'>{cardDetails.map(displayCard)}</Row>
}

export default CardInfo;