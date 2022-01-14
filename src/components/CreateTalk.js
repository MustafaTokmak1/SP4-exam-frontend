import React, { useState } from "react";
import facade from "../apiFacade";
import ErrorToDisplay from "./ErrorToDisplay";
import SuccesToDisplay from "./SuccessToDisplay";
function CreateTalk() {

const [talk, setTalk] = useState(null);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);

    const onChange = (evt) => {
    setTalk({
      ...talk,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //check if some inputs are empty. If yes --> error 
    facade.createTalk(talk)
    .then((res) => {
       console.log(res)
       setSuccess("The talk is now added!")
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
          <label>Topic</label>
          <input id="topic" className="form-field" type="text" required />

          <label>Duration (in minutes)</label>
          <input id="duration" className="form-field" type="text" required />

          <button
            onClick={handleSubmit}
            className="form-field btn-dark"
            type="submit"
          >
            Add talk
          </button>
        </form>
        {error && <ErrorToDisplay errorMsg={error} />}
        {success && <SuccesToDisplay msg={success} />}
      </div>
    );
}

export default CreateTalk;