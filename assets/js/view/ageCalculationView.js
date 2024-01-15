import view from "./view.js";
import * as confi from "../configure.js";

class AgeCalculationView extends view {
  _parentElementAgeCalculation = document.querySelector(".age-calculation");
  _errorMessage = "Please enter a valid birth date";

  _years = document.querySelector(".years");
  _months = document.querySelector(".months");
  _days = document.querySelector(".days");

  addHandlerAgeCalculation(handler) {
    this._parentElementAgeCalculation.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        const dataArray = [...new FormData(this)];
        const data = Object.fromEntries(dataArray);
        handler(data);
      }
    );
  }
}

export default new AgeCalculationView();
