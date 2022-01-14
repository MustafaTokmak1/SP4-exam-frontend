import React, { useState } from "react";
import facade from "../apiFacade";
import ErrorToDisplay from "./ErrorToDisplay";
import SuccesToDisplay from "./SuccessToDisplay";
function CreateSpeaker() {

const [speaker, setSpeaker] = useState(null);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);

    const onChange = (evt) => {
    setSpeaker({
      ...speaker,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //check if some inputs are empty. If yes --> error 
    facade.createSpeaker(speaker)
    .then((res) => {
       console.log(res)
       setSuccess("The speaker is now added!")
       setError(null)
      })
      .catch((err) => {
        console.log(err);
        if (err.status) {
          err.fullError.then((e) => {
            console.log(e.code + ": " + e.message);
            setError("Have you filled in all fields?")
            setSuccess(null)
          });
        } else {
          console.log("Network error");
        }
      });

    //redirects user to home page
  };
    return (
      <div className="form-container">
        <h1 className="text-center mt-3">Register a new talk</h1>
        <form onChange={onChange} class="register-form">
          <label>Name</label>
          <input id="name" className="form-field" type="text" required />
          <label>Profession</label>
          <input id="profession" className="form-field" type="text" required />
          <label>Gender</label>
          <input id="gender" className="form-field" type="text" required />

          <button
            onClick={handleSubmit}
            className="form-field btn-dark"
            type="submit"
          >
            Add speaker
          </button>
        </form>
        {error && <ErrorToDisplay errorMsg={error} />}
        {success && <SuccesToDisplay msg={success} />}
      </div>
    );
}

export default CreateSpeaker;