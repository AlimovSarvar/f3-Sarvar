import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Row from './components/Row/Row';
import Best from './components/Best/Best';
import Choose from './components/Choose/Choose';
import Custom from './components/Custom/Custom';
import Canada from './components/Canada/Canada';
import Recently from './components/Recently/Recently';
import Weed from './components/Weed/Weed';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Row/>
    <Best/>
    <Choose/>
    <Custom/>
    <Canada/>
    <Recently/>
    <Weed/>
    <Footer/>
   
    </div>
  );
}

export default App;
