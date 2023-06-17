import { Container } from "react-bootstrap";
import "../src/style/LandingPage.css";
import './App.css';
import Intro from "./components/Intro";
import NavigationBar from './components/NavigationBar';
import SuperHero from "./components/SuperHero";
function App() {
  return (
    <div>
    {/* Intro Section */}
      <div className='myBG border'>
        <NavigationBar />
        <Intro />
      </div>
    {/* End Of Intro Section */}

    {/* SuperHero Section */}
    <div class="bg-dark">
      <Container className="p-5">
        <SuperHero />
      </Container>
    </div>
    {/* End Of SuperHero Section */}
    </div>
  );
}

export default App;
