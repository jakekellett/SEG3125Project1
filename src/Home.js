import { useState } from "react"
import location from './images/Location.png';
import nhlLogo from './images/NHLLogo.png';

const Home = () => {

    return ( 
        <div className="home">
            <div style={{ backgroundImage: "url(/image.png)" }}></div>
            <div className="intro">
                <img   className="pin" src={location} alt="Pin" />
                <h2 className="introText">Your #1 destination for elite hockey stats & trends</h2>
                <img src={nhlLogo} alt="" className="nhlLogo" />

                
            </div>
            <br/>
            <br/>
            <br/>
           
        </div>
     );
}
 
export default Home;