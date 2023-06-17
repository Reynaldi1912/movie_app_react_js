import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () =>{
    const search = (q) => {
        console.log({q});
    }
    return(
        <div>
            <Navbar variant="dark">
                <Container> 
                <Navbar.Brand>Movie App</Navbar.Brand>
                    <Nav>
                        <input placeholder="Cari Film...." className="rounded border border-white" onChange={({target}) => search(target.value)}/>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                        <Nav.Link href="#superhero">Super Hero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;