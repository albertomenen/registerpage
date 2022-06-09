import React from "react";
import Input from "./Input"

function Form() {
  return (
    <form className="form">
      <Input type = "text" placeholder= "username"/>
      <Input type = "text" placeholder= "password"/>
      <Input type = "text" placeholder= "confirm password"/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
