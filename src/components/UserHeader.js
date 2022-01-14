import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import CreateTalk from "./CreateTalk"
import CreateSpeaker from "./CreateSpeaker"
import CreateConference from "./CreateConference"
import NoMatch from "./NoMatch";
import OverviewConferences from "./OverviewConferences";
import OverviewSpeakers from "./OverviewSpeakers"
import OverviewTalks from "./OverviewTalks"

function UserHeader(props) {
  const { loggedIn, logout, validateAccess } = props;
  return (
    <div>
      <Header
        validateAccess={validateAccess}
        logout={logout}
        loggedIn={loggedIn}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
      
        {validateAccess === "user" ? (
          <Route path="/overviewConferences">
            <OverviewConferences />
          </Route>
        ) : (
          ""
        )}

{validateAccess === "user" ? (
          <Route path="/overviewSpeakers">
            <OverviewSpeakers />
          </Route>
        ) : (
          ""
        )}

{validateAccess === "user" ? (
          <Route path="/overviewTalks">
            <OverviewTalks />
          </Route>
        ) : (
          ""
        )}
        
        {validateAccess === "admin" ? (
          <Route path="/create-talk">
            <CreateTalk />
          </Route>
        ) : (
          ""
        )}

{validateAccess === "admin" ? (
          <Route path="/create-speaker">
            <CreateSpeaker />
          </Route>
        ) : (
          ""
        )}

        {validateAccess === "admin" ? (
          <Route path="/create-conference">
            <CreateConference />
          </Route>
        ) : (
          ""
        )}

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default UserHeader;
