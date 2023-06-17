import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Avenger from '../assets/images/superhero/avenger.jpeg';
import BlackWidow from '../assets/images/superhero/blackwidow.jpg';
import DoctorStrange from '../assets/images/superhero/doctorStrange.jpg';
import Garuda from '../assets/images/superhero/garuda.jpg';

const SuperHero = () => {
    return (
        <div>
            <Container id='superhero'>
                <h2 className='text-white'>Film Super Hero</h2>
            </Container>
            <Row>
                <Col md="3" className='mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={BlackWidow} height="400px"/>
                            <Card.Body>
                                <Card.Title className='text-center'>Black Widow</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                <Col md="3" className='mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Avenger} height="400px"/>
                            <Card.Body>
                                <Card.Title className='text-center'>The Avenger</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                <Col md="3" className='mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Garuda} height="400px"/>
                            <Card.Body>
                                <Card.Title className='text-center'>Garuda</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                <Col md="3" className='mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={DoctorStrange} height="400px"/>
                            <Card.Body>
                                <Card.Title className='text-center'>Doctor Strange</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>

        
    )
}

export default SuperHero;