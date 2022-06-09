import React from "react";
import Form from "./Form"
import Registered from "./Registered"

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Registered /> : <Form />}
    </div>
  );
}

export default App;
