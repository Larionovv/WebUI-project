import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainView from "./components/MainView/MainView";
import CalendarOfRaces from "./components/Content/CalendarOfRaces";
import Admin from "./components/Content/Admin";
import Contacts from "./components/Content/Contacts";
import Fans from "./components/Content/Fans";
import News from "./components/Content/News";
import NextRace from "./components/Content/NextRace";
import Ratings from "./components/Content/Ratings";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/calendarRaces" component={CalendarOfRaces} />
          <Route path="/admin" component={Admin} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/fans" component={Fans} />
          <Route path="/news" component={News} />
          <Route path="/nextRace" component={NextRace} />
          <Route path="/ratings" component={Ratings} />
        </Switch>
      </BrowserRouter>
  )
    ;
  }
};

