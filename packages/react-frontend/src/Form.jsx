// src/Form.jsx
import React, { useState } from "react";

function Form(props) {
  const [person, setPerson] = useState({
    // initially empty fields for name and job
    name: "",
    job: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; // ?
    if (name === "job") {
      setPerson({ name: person["name"], job: value }); // keeps the person name is value inside "name" field and updates "job" field with value.
    } else {
      setPerson({ name: value, job: person["job"] }); // vice-versa
    }
  }

  function submitForm() {
    props.handleSubmit(person);
    setPerson({ name: "", job: "" });
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name} // ?
        onChange={handleChange} // ? how/when does onChange occur
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange} // ?
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;
