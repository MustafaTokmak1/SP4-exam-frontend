import React, { useState, useEffect } from "react";
import facade from "../apiFacade";
import TalkTable from "./TalkTable";
import OverviewModal from "./OverviewModal";


function OverviewTalks() {
    const defaultTalks = []
    let userList = [1,2,3]
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [talks, setTalks] = useState(...[defaultTalks]);
    const[talkId, setTalkId] = useState(-1);

     const [show, setShow] = useState(false);
       const [submitModal, setSubmitModal] = useState(false);





    useEffect(() => {
      facade
        .getAllTalks()
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
    }, [submitModal]);
    const changeSubmit = () => {
      setSubmitModal(!submitModal);
  }
  let allInfoTest = {dummy1 : 1,
    dummy2 : "hej"}
    return (
        <>
            <TalkTable list={talks} setTalkId={setTalkId} setShow={setShow} />
     </>
    );

}

export default OverviewTalks;
