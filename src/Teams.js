import easternConference from './images/EasternConference.png';
import westernConference from './images/WesternConference.png';
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
import {Link} from 'react-router-dom';
const Teams = () => {
    return (  
        <div className="teams">
            <div className="title">
                <img src={westernConference} alt="" className="westernConference" />
                <h2 className="titleText">Teams</h2>
                <img src={easternConference} alt="" className="easternConference" />
                
            </div>
            <div className="teamTables">
                <table className ="westTeamTable">
                    <tr>
                        <th>PACIFIC DIVISION</th>
                        <th>CENTRAL DIVISION</th>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Anaheim Ducks"}}}><img src={ducks} alt="" className="teamLogo" />Anaheim Ducks</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Arizona Coyotes"}}}><img src={coyotes} alt="" className="teamLogo" />Arizona Coyotes</Link></td>
                        
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Calgary Flames"}}}><img src={flames} alt="" className="teamLogo" />Calgary Flames</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Chicago Blackhawks"}}}><img src={blackhawks} alt="" className="teamLogo" />Chicago Blackhawks</Link></td>
                        
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Edmonton Oilers"}}}><img src={oilers} alt="" className="teamLogo" />Edmonton Oilers</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Colorado Avalanche"}}}><img src={avalanche} alt="" className="teamLogo" />Colorado Avalanche</Link></td>
                        
                    </tr>
                    <tr>
                    <td><Link to={{pathname:"/team",state: { fromTeam: "Los Angeles Kings"}}}><img src={kings} alt="" className="teamLogo" />Los Angeles Kings</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Dallas Stars"}}}><img src={stars} alt="" className="teamLogo" />Dallas Stars</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "San Jose Sharks"}}}><img src={sharks} alt="" className="teamLogo" />San Jose Sharks</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Minnesota Wild"}}}><img src={wild} alt="" className="teamLogo" />Minnesota Wild</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Seattle Kraken"}}}><img src={kraken} alt="" className="teamLogo" />Seattle Kraken</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Nashville Predators"}}}><img src={predators} alt="" className="teamLogo" />Nashville Predators</Link></td>
                    </tr>
                    <tr>
                    <td><Link to={{pathname:"/team",state: { fromTeam: "Vancouver Canucks"}}}><img src={canucks} alt="" className="teamLogo" />Vancouver Canucks</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "St. Louis Blues"}}}><img src={blues} alt="" className="teamLogo" />St. Louis Blues</Link></td>
                        
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Vegas Golden Knights"}}}><img src={knights} alt="" className="teamLogo" />Vegas Golden Knights</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Winnipeg Jets"}}}><img src={jets} alt="" className="teamLogo" />Winnipeg Jets</Link></td>
                    </tr>
                </table>
                <table className ="eastTeamTable">
                    <tr>
                        <th>METROPOLITAN DIVISION</th>
                        <th>ATLANTIC DIVISION</th>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Carolina Hurricanes"}}}><img src={hurricanes} alt="" className="teamLogo" />Carolina Hurricanes</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Boston Bruins"}}}><img src={bruins} alt="" className="teamLogo" />Boston Bruins</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Columbus Blue Jackets"}}}><img src={jackets} alt="" className="teamLogo" />Columbus Blue Jackets</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Buffalo Sabres"}}}><img src={sabres} alt="" className="teamLogo" />Buffalo Sabres</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "New Jersey Devils"}}}><img src={devils} alt="" className="teamLogo" />New Jersey Devils</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Detroit Red Wings"}}}><img src={wings} alt="" className="teamLogo" />Detroit Red Wings</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "New York Islanders"}}}><img src={islanders} alt="" className="teamLogo" />New York Islanders</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Florida Panthers"}}}><img src={panthers} alt="" className="teamLogo" />Florida Panthers</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "New York Rangers"}}}><img src={rangers} alt="" className="teamLogo" />New York Rangers</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Montreal Canadians"}}}><img src={canadians} alt="" className="teamLogo" />Montreal Canadians</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Philadelphia Flyers"}}}><img src={flyers} alt="" className="teamLogo" />Philadelphia Flyers</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Ottawa Senators"}}}><img src={senators} alt="" className="teamLogo" />Ottawa Senators</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Pittsburgh Penguins"}}}><img src={penguins} alt="" className="teamLogo" />Pittsburgh Penguins</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Tampa Bay Lightning"}}}><img src={lightning} alt="" className="teamLogo" />Tampa Bay Lightning</Link></td>
                    </tr>
                    <tr>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Washington Capitals"}}}><img src={capitals} alt="" className="teamLogo" />Washington Capitals</Link></td>
                        <td><Link to={{pathname:"/team",state: { fromTeam: "Toronto Maple Leafs"}}}><img src={leafs} alt="" className="teamLogo" />Toronto Maple Leafs</Link></td>
                    </tr>
                </table>
            </div>
        </div>
        
    );
}
 
export default Teams;