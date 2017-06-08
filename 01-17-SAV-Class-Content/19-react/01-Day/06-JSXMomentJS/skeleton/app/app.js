// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the momentJS library
var moment = require("moment");

// Here we create a variable for holding the name and birthday
var name = "Ahmed";
var dob = moment("02/14/1989", "MM/DD/YYYY");
var now = dob.fromNow();

ReactDOM.render(
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">

        {/* Fill the blanks below with the name, dob, and then age in years  */}
        <h2>My name is {name} </h2>
        <h1>I was born on {dob}</h1>
        <hr />
        <h2>That makes me: {now - dob} old.
        </h2>
      </div>
    </div>
  </div>, document.getElementById("app"));
  