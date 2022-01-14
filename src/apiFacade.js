import jwt_decode from "jwt-decode";
import { URL } from "./Settings";

//URL = "https://www.theagns.com/CA2-Backend";
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function handleError(error, setError) {
  if (error.status) {
    error.fullError.then((data) => setError(data));
  } else {
    setError({ code: 500, message: "Some unknown error happened" });
  }
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  //Decode token

  const validateAccess = () => {
    var decoded = jwt_decode(getToken());
    const { roles } = decoded;
    console.log(roles);
    //  console.log(decoded);
    return roles;
  };

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password) => {
    /*TODO*/
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

const registerUser = (registerCredentials) => {
     const options = makeOptions('POST',true,registerCredentials);
     console.log(registerCredentials)
     return fetch(URL + "/api/register", options)
       .then(handleHttpErrors)
       .then((res) => {});
   }

  const fetchData = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
  };

  const createSpeaker = (speaker) => {
    const options = makeOptions('POST',true,speaker);
    return fetch(URL + "/api/talk/createSpeaker", options)
      .then(handleHttpErrors);
  }

   const createTalk = (talk) => {
    const options = makeOptions('POST',true,talk);
    return fetch(URL + "/api/talk/createTalk", options)
      .then(handleHttpErrors);
  }

  const createConference = (conference) => {
    const options = makeOptions('POST',true,conference);
    return fetch(URL + "/api/talk/createConference", options)
      .then(handleHttpErrors);
  }

    
    const getAllConferences = () =>{
      const options = makeOptions("GET", true);
      return fetch(URL + "/api/talk/conferences", options).then(handleHttpErrors);
    };

    const getAllTalks = () =>{
      const options = makeOptions("GET", true);
      return fetch(URL + "/api/talk/talks", options).then(handleHttpErrors);
    };

    const getAllSpeakers = () =>{
      const options = makeOptions("GET", true);
      return fetch(URL + "/api/talk/speakers", options).then(handleHttpErrors);
    };

     const getAllTalksByConferenceId = (conferenceId) => {
      const options = makeOptions("GET", true); //True add's the token
      return fetch(
        URL + "/api/talk/talksByConf/" + conferenceId,
        options
      ).then(handleHttpErrors);
    };


  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }

    return opts;
  };

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    validateAccess,
    handleError,
    registerUser,
    getAllConferences,
    createTalk,
    createSpeaker,
    createConference,
    getAllTalksByConferenceId,
    getAllSpeakers,
    getAllTalks
  };
}
const facade = apiFacade();
export default facade;
