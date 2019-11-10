/*IMPORTS*/
import React from 'react'; 
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*COMPONENT*/
export default function App() {

    return (
        <div className="app">
            <Navbar />
            <Slider />
            <Footer/>
        </div>
    ); 

};