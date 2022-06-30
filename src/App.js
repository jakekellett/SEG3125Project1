import Navbar from './Navbar';
import Home from './Home';
import News from './News';
import TwitterFeed from './TwitterFeed';
import Teams from './Teams';
import Team from './Team';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/teams">
                <Teams />
            </Route>
            <Route path="/team">
                <Team />
            </Route>
            <Route path="/">
              <Home/>
              <div className="wrapper">
                <News/>
                <TwitterFeed/>
              </div>
            </Route>
            
            
          </Switch>
          
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;
