import React, { useState, useEffect } from "react";
import facade from "../apiFacade";
import ConferenceTable from "./ConferenceTable";
import OverviewModal from "./OverviewModal";


function OverviewConferences() {
    const defaultConferences = []
    const defaultTalks = []
    let userList = [1,2,3]
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
     const [conferences, setConferences] = useState(...[defaultConferences]);
     const [talks, setTalks] = useState(...[defaultTalks]);
     const[conferenceId, setConferenceId] = useState(-1);

     const [show, setShow] = useState(false);
       const [submitModal, setSubmitModal] = useState(false);

       useEffect(() => {
        facade
          .getAllTalksByConferenceId(conferenceId)
          .then((res) => {
  setTalks(res)
  console.log(res)
  
          })
          .catch((err) => {
            console.log(err);
            if (err.status) {
              err.fullError.then((e) => {
                console.log(e.code + ": " + e.message);
                setSuccess(false);
                setError(e.message);
              });
            } else {
              console.log("Network error");
            }
          });
      }, []);

       useEffect(() => {
        facade
          .getAllConferences()
          .then((res) => {
  setConferences(res)
  console.log(res)
  
          })
          .catch((err) => {
            console.log(err);
            if (err.status) {
              err.fullError.then((e) => {
                console.log(e.code + ": " + e.message);
                setSuccess(false);
                setError(e.message);
              });
            } else {
              console.log("Network error");
            }
          });
      }, []);

    useEffect(() => {
      facade
        .getAllConferences()
        .then((res) => {
setConferences(res)
console.log(res)

        })
        .catch((err) => {
          console.log(err);
          if (err.status) {
            err.fullError.then((e) => {
              console.log(e.code + ": " + e.message);
              setSuccess(false);
              setError(e.message);
            });
          } else {
            console.log("Network error");
          }
        });
    }, [submitModal]);
    const changeSubmit = () => {
      setSubmitModal(!submitModal);
  }
  let allInfoTest = {dummy1 : 1,
    dummy2 : "hej"}
  return (
    <>
        <ConferenceTable list={conferences} setConferenceId={setConferenceId} setShow={setShow} />
      {show ? (
       <OverviewModal
       item={talks}
       conferenceId={conferenceId}
       setShow={setShow}
       show={show}
       changeSubmit={changeSubmit}
     />
   ) : (
     ""
   )}
 </>
);

}

export default OverviewConferences;
