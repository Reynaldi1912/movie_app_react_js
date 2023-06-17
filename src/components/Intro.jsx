import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center">
            <Row>
              <Col>
                <div class="title">Nonton Gratis</div>
                <div class="title"> Film Populer Saat Ini</div>
                <div class="introButton mt-5 text-center">
                    <Button variant="dark">Lihat Semua List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro;