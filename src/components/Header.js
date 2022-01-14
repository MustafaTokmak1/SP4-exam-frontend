import { NavLink, Route } from "react-router-dom";

function Header({ loggedIn, logout, validateAccess }) {
  return (
    <ul className="header">
      {console.log(loggedIn)}
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>

      {!loggedIn ? (
        <li>
          <NavLink exact activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
      ) : (
        <>
          
          {validateAccess === "user" ? (
            <li>
              <NavLink exact activeClassName="active" to="/overviewConferences">
                View all conferences
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {validateAccess === "user" ? (
            <li>
              <NavLink exact activeClassName="active" to="/overviewSpeakers">
                View all speakers
              </NavLink>
            </li>
          ) : (
            ""
          )}

        {validateAccess === "user" ? (
            <li>
              <NavLink exact activeClassName="active" to="/overviewTalks">
                View all talks
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {validateAccess === "admin" ? (
            <>
            <li>
              <NavLink exact activeClassName="active" to="/create-talk">
                Create talk
              </NavLink>
            </li>
            </>
          ) : (
            ""
          )}

          {validateAccess === "admin" ? (
            <>
            <li>
              <NavLink exact activeClassName="active" to="/create-speaker">
                Create speaker
              </NavLink>
            </li>
            </>
          ) : (
            ""
          )}
          {validateAccess === "admin" ? (
            <>
            <li>
              <NavLink exact activeClassName="active" to="/create-conference">
                Create conference
              </NavLink>
            </li>
            </>
          ) : (
            ""
          )}
          

          <li>
            {/*Logout is never active. Once you click you gets to the homepage*/}
            <NavLink
              exact
              activeClassName="none"
              to="/"
              onClick={() => logout()}
            >
              Logout
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default Header;
