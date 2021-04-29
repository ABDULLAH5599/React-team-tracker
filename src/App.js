import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

import Team from "./components/Team/Team"
import TeamDetails from "./components/TeamDetails/Teamdetails";
function App() {
  return (
    <div className='app-container'>
        
         <Router>
        <Switch>
          <Route path="/Team">
           <Team></Team>
          </Route>
           <Route path="/TeamDetails/:id">
           <TeamDetails></TeamDetails>
          </Route> 
          <Route path="/manageIventory">
           
          </Route>
          <Route exact path="/">
          <Team></Team>
          </Route>
          {/* <Route path="/sifatProduct/:key">
            
          </Route> */}
          {/* <Route path=" ">
           <Notfound></Notfound>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
