import React from "react";
import "./styles.css";

var getMovie = (name, start) => name + " " + start;

class SimpleDate {
  constructor(year, month, date) {
    this.year = year;
    this.month = month;
    this.date = date;
  }
  toString() {
    return `${this.date}.${this.month}.${this.year}`;
  }
}

var txt = "test2";

var rslt = (tx) => {
  txt = tx;
};

const promise = new Promise((resolve, reject) => {
  throw new Error("Alarm");
  if (true) {
    resolve("hello");
  } else {
    reject();
  }
});

//promise.then(data => rslt(data));
promise.catch((error) => rslt("1111111222"));

var test = () => {
  var res = "";
  var a1 = 3;
  res = a1 + "_";
  if (true) {
    var a1 = 5;
    res = res + a1 + "_";
  }
  res = res + a1;
  return today.toString();
};

export default function App() {
  return `${txt}`;
  /* (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>      
    </div> 
  );*/
}
