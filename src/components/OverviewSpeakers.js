import React, { useState, useEffect } from "react";
import facade from "../apiFacade";
import SpeakerTable from "./SpeakerTable";
import OverviewModal from "./OverviewModal";


function OverviewSpeakers() {
    const defaultSpeakers = []
    const defaultTalks = []
    let userList = [1,2,3]
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
     const [speakers, setSpeakers] = useState(...[defaultSpeakers]);
     const [talks, setTalks] = useState(...[defaultTalks]);
     const[speakerId, setSpeakerId] = useState(-1);

     const [show, setShow] = useState(false);
       const [submitModal, setSubmitModal] = useState(false);





    useEffect(() => {
      facade
        .getAllSpeakers()
        .then((res) => {
setSpeakers(res)
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
            <SpeakerTable list={speakers} setSpeakerId={setSpeakerId} setShow={setShow} />
     </>
    );

}

export default OverviewSpeakers;
