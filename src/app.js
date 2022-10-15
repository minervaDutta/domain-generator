/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("yo");
  // console.log("hi");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".us", ".com"];

  function genDomain() {
    let finalArray = [];
    for (let p in pronoun) {
      for (let a in adj) {
        for (let n in noun) {
          for (let d in domain) {
            finalArray.push(pronoun[p] + adj[a] + noun[n] + domain[d]);
          }
        }
      }
    }
    return finalArray;
  } // end of gendomain

  //document.getElementById("domain").innerHTML = genDomain();
  document.querySelector("#domain").innerHTML = genDomain().join("\n");
};
