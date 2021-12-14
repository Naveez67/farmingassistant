
import React from 'react';
//import Blogsection from './blogsections';
import MyCarousel from './Carousel/Carousel';
import Titletext from './Carousel/titlemeassage';
import Footer from './footer/footer';
import Missionstatement from './mission/mission';
import Works from './works/howitworks';

const Home = () => {
    return ( 
      <div style={{position:"relative"}}>  
    
         <MyCarousel /> 
         <Titletext />

         <hr style={{marginTop:"3rem"}}/>
         <Works />
         <hr style={{marginTop:"3rem"}}/>

         <Missionstatement />
         <hr style={{marginTop:"3rem"}}/>
         <Footer />
    </div>
    );
}
 
export default Home;