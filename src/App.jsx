import './App.scss';
import Course from './components/Course/Course';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Laster from './components/Laster/Laster';
import Say from './components/Say/Say';
import Success from './components/Success/Success';
import Totc from './components/Totc/Totc';

function App() {
  return (
    <div className="App">
     
    <Header/>
    <Hero/>
    <Success/>
    <Totc/>
    <Features/>
    <Course/>
    <Say/>
    <Laster/>
    <Footer/>

   
   
    </div>
  );
}

export default App;
