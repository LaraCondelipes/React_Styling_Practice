//código optimizado

//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Dynamically change the color of the h1 using inline css styles.
const currentHour = new Date();
const hour = currentHour.getHours();

let currentStyle = {
  color: ""
};
let textOnScreen = null;

if (hour <= 12) {
  currentStyle.color = "red";
  textOnScreen = "Morning";
}

if (hour >= 12 && hour <= 18) {
  currentStyle.color = "green";
  textOnScreen = "Afternoon";
}

if (hour > 18) {
  currentStyle.color = "blue";
  s;
  textOnScreen = "Night";
}

ReactDOM.render(
  //Apply the "heading" style in the styles.css
  //Morning = red, Afternoon = green, Night = blue.
  //Show a single h1 that says "Good morning" if between midnight and 12PM.
  //or "Good Afternoon" if between 12PM and 6PM.
  //or "Good evening" if between 6PM and midnight.
  <div>
    <h1 className="heading" style={currentStyle}>
      Good {textOnScreen}!
    </h1>
  </div>,

  document.getElementById("root")
);

/*código feito por mim inicialmente:  Nota: aqui não usei o inline style...

//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Dynamically change the color of the h1 using inline css styles.
const currentHour = new Date();
const hour =currentHour.getHours();

let currentStyle = null;
const morningStyle = {
  color: "red"
};
const afternoonStyle = {
  color: "green"
};
const night = {
  color: "blue"
};

let textOnScreen = null;
const morning = "Good Morning";
const afternoon = "Good Afternoon";
const night = "Good Night";

if (hour <= 12) {
  currentStyle = morningStyle;
  textOnScreen = morning;
}

if (hour >= 12 && hour <= 18) {
  currentStyle = afternoonStyle;
  textOnScreen = afternoon;
}

if (hour > 18) {
  currentStyle = nightStyle;
  textOnScreen = night;
}

ReactDOM.render(
  //Apply the "heading" style in the styles.css
  //Morning = red, Afternoon = green, Night = blue.
  //Show a single h1 that says "Good morning" if between midnight and 12PM.
  //or "Good Afternoon" if between 12PM and 6PM.
  //or "Good evening" if between 6PM and midnight.
  <div>
    <h1 className="heading" style={currentStyle}>
      {textOnScreen}!
    </h1>
  </div>,

  document.getElementById("root")
);

*/
