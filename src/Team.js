import {useLocation} from 'react-router-dom';
import {useState} from 'react';

import user from './images/blankUser.png';
import senators from './images/senators.png';
import flyers from './images/flyers.png';
import hurricanes from './images/hurricanes.png';
import bruins from './images/bruins.png';
import jackets from './images/jackets.png';
import sabres from './images/sabres.png';
import devils from  './images/devils.png';
import wings from './images/wings.png';
import islanders from './images/islanders.png';
import panthers from './images/panthers.png';
import rangers from './images/rangers.png';
import canadians from './images/canadians.png';
import penguins from './images/penguins.png';
import lightning from './images/Lightning.png';
import capitals from './images/capitals.png';
import leafs from './images/leafs.png';
import ducks from './images/ducks.png';
import blackhawks from './images/blackhawks.png';
import flames from './images/flames.png';
import avalanche from './images/avalanche.png';
import kings from './images/kings.png';
import wild from './images/wild.png';
import coyotes from './images/coyotes.png';
import predators from './images/predators.png';
import sharks from './images/sharks.png';
import blues from './images/blues.png';
import canucks from './images/canucks.png';
import jets from './images/jets.png';
import oilers from './images/oilers.png';
import kraken from './images/kraken.png';
import knights from './images/knights.png';
import stars from './images/stars.png';
import nhlLogo from './images/NHLLogo.png';


const Team = () => {

    const updateColour = () =>{
        
        switch(location.state.fromTeam){
            case "Anaheim Ducks":
                return 'orange';
            case 'Arizona Coyotes':
                return 'red';
            case 'Chicago Blackhawks':
                return 'red';
            case 'Calgary Flames':
                return 'red';
            case 'Edmonton Oilers':
                return 'blue';
            case 'Colorado Avalanche':
                return 'red';
            case 'Los Angeles Kings':
                return 'grey';
            case 'Dallas Stars':
                return 'green';
            case 'San Jose Sharks':
                return 'blue';
            case 'Minnesota Wild':
                return 'green';
            case 'Seattle Kraken':
                return '';
            case 'Nashville Predators':
                return 'yellow';
            case 'Vancouver Canucks':
                return 'blue';
            case 'St. Louis Blues':
                return 'blue';
            case 'Vegas Golden Knights':
                return 'yellow';
            case 'Winnipeg Jets':
                return 'blue';
            case 'Carolina Hurricanes':
                return 'red';
            case 'Boston Bruins':
                return 'yellow';
            case 'Columbus Blue Jackets':
                return 'blue';
            case 'Buffalo Sabres':
                return 'blue';
            case 'New Jersey Devils':
                return 'red';
            case 'Detroit Red Wings':
                return 'red';
            case 'New York Islanders':
                return 'orange';
            case 'Florida Panthers':
                return 'yellow';
            case 'New York Rangers':
                return 'blue';
            case 'Montreal Canadians':
                return 'red';
            case 'Philadelphia Flyers':
                return 'orange';
            case 'Ottawa Senators':
                return 'orange';
            case 'Pittsburgh Penguins':
                return 'yellow';
            case 'Tampa Bay Lightning':
                return 'blue';
            case 'Washington Capitals':
                return 'red';
            case 'Toronto Maple Leafs':
                return 'blue';
        }
        
 
    }

    const updateTeam = () =>{
        
        switch(location.state.fromTeam){
            case "Anaheim Ducks":
                return ducks;
            case 'Arizona Coyotes':
                return coyotes;
            case 'Chicago Blackhawks':
                return blackhawks;
            case 'Calgary Flames':
                return flames;
            case 'Edmonton Oilers':
                return oilers;
            case 'Colorado Avalanche':
                return avalanche;
            case 'Los Angeles Kings':
                return kings;
            case 'Dallas Stars':
                return stars;
            case 'San Jose Sharks':
                return sharks;
            case 'Minnesota Wild':
                return wild;
            case 'Seattle Kraken':
                return kraken;
            case 'Nashville Predators':
                return predators;
            case 'Vancouver Canucks':
                return canucks;
            case 'St. Louis Blues':
                return blues;
            case 'Vegas Golden Knights':
                return knights;
            case 'Winnipeg Jets':
                return jets;
            case 'Carolina Hurricanes':
                return hurricanes;
            case 'Boston Bruins':
                return bruins;
            case 'Columbus Blue Jackets':
                return jackets;
            case 'Buffalo Sabres':
                return sabres;
            case 'New Jersey Devils':
                return devils;
            case 'Detroit Red Wings':
                return wings;
            case 'New York Islanders':
                return islanders;
            case 'Florida Panthers':
                return panthers;
            case 'New York Rangers':
                return rangers;
            case 'Montreal Canadians':
                return canadians;
            case 'Philadelphia Flyers':
                return flyers;
            case 'Ottawa Senators':
                return senators;
            case 'Pittsburgh Penguins':
                return penguins;
            case 'Tampa Bay Lightning':
                return lightning;
            case 'Washington Capitals':
                return capitals;
            case 'Toronto Maple Leafs':
                return leafs;
        }
        
 
    }
    const location = useLocation();
    const teamName = location.state.fromTeam;
    const [teamLogo, setTeamLogo] = useState(updateTeam());
    const [currentColor, setCurrentColor] = useState(updateColour);
    return ( 
        <div className="team">
            <div className="title">
                <img className="teamLogo"src={teamLogo} alt="" />
                <h2 className="titleText" style={{backgroundColor: currentColor}}>{teamName} (34-23-7) </h2>
                <img className="nhlLogo"src={nhlLogo} alt="" />
                
            </div>
            <p className="nextGame" style={{
        backgroundColor: currentColor}}>
            Upcoming Game: To be Announced: Fall 2022</p>
            <div className="tables">
                <div className="rosterSection">
                    <h2 className="tableTitle" style={{backgroundColor: currentColor}}>Roster (2021-2022)</h2>
                    <table className ="rosterTable">
                        <tr>
                            <th>Player</th>
                            <th>POS</th>
                            <th>GP</th>
                            <th>G</th>
                            <th>A</th>
                            <th>P</th>
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 1</td>
                            <td>D</td>
                            <td>82</td>
                            <td>21</td>
                            <td>7</td>
                            <td>28</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 2</td>
                            <td>D</td>
                            <td>79</td>
                            <td>18</td>
                            <td>13</td>
                            <td>31</td>          
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 3</td>
                            <td>LW</td>
                            <td>82</td>
                            <td>32</td>
                            <td>14</td>
                            <td>46</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 4</td>
                            <td>RW</td>
                            <td>65</td>
                            <td>31</td>
                            <td>35</td>
                            <td>66</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 5</td>
                            <td>D</td>
                            <td>82</td>
                            <td>21</td>
                            <td>7</td>
                            <td>28</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 6</td>
                            <td>C</td>
                            <td>82</td>
                            <td>41</td>
                            <td>60</td>
                            <td>101</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 7</td>
                            <td>LW</td>
                            <td>80</td>
                            <td>22</td>
                            <td>65</td>
                            <td>87</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 8</td>
                            <td>D</td>
                            <td>79</td>
                            <td>18</td>
                            <td>7</td>
                            <td>25</td>
                            
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 9</td>
                            <td>G</td>
                            <td>45</td>
                            <td>0</td>
                            <td>3</td>
                            <td>3</td>
                            
                        </tr>
                    </table>
                </div>
               <div className="leadersSection">
                <h2 className ="tableTitle" style={{backgroundColor: currentColor}}>Team Leaders</h2>
                <table className ="rosterTable">
                        <tr>
                            <th>Player</th>
                            <th>Stat</th>
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 6</td>
                            <td>41 Goals</td>    
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 7</td>
                            <td>65 Assists</td>    
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 6</td>
                            <td>65 Points</td>    
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 6</td>
                            <td>1.23 PPG</td>    
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 9</td>
                            <td>.903 GAA</td>    
                        </tr>
                        <tr>
                            <td><img  src={user} alt="" className="playerPhoto" />Player 9</td>
                            <td>32 W</td>    
                        </tr>
                    </table>
                    <button className="analyticsBtn" style={{backgroundColor: currentColor}}>Advanced Analytics</button>
                </div>
            </div>
        </div>

     );
}
 
export default Team;