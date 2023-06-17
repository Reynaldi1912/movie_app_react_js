import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { getMovies } from '../network/api';

const Trending = () => {
    const [trendingMovie , setTrendingMovie] = useState([]);
    useEffect(() => {
        getMovies().then((result)=>{
            setTrendingMovie(result);
        })
    }, []);

    const TrendingMovie = () =>{
        return trendingMovie.map((movie, i) => {
            return (
                <Col md="3" className='mt-3' key={i}>
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem'  , height: '35rem'}}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height="400px"/>
                            <Card.Body>
                                <Card.Title className='text-center'>{movie.title}</Card.Title>
                                <Card.Text className='text-truncate'>
                                {movie.overview}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            );
        })
    }

    
      
    
    return (
        <div>
            <Container id='trending'>
                <h2 className='text-white'>Film Trending</h2>
            </Container>
            <Row>
                <TrendingMovie/>
            </Row>
        </div>

        
    )
}

export default Trending;