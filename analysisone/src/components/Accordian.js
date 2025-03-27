import Accordion from 'react-bootstrap/Accordion';

function AccordianInfo( {Heading, Info}) {
  return (
    <div className="InfoAccordian" >
        <Accordion id='AccordianButton'>
        <Accordion.Item eventKey="0" style={{borderRadius: '24px', backgroundColor:'rgb(235, 147, 147)'}}>
            <Accordion.Header><span className='tomorrow-regular' style={{color: 'white', letterSpacing: '1px'}}>{Heading}</span></Accordion.Header>
            <Accordion.Body className='tomorrow-regular'>
            {Info}
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    
  );
}

export default AccordianInfo;