import React from 'react';
import MyCarousel from '../Carousel/Carousel';
import Titletext from '../Carousel/titlemeassage';
// import Footer from '../footer/footer';
import Footer from '../footer/foo/footer';
import Missionstatement from '../mission/mission';
import Card from './card'
import Works from '../works/howitworks';
const Home = () => {
    return ( <div>
        <MyCarousel />
        <br />
        
        <Works />
        <hr />
        <Missionstatement />
        {/* <hr /> */}
        {/* <Card /> */}
        {/* <hr /> */}
        {/* <Footer />
        <hr /> */}
        <Footer />
    </div> );
}
 
export default Home;
