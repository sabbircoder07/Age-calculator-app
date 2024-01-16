import view from "./view.js";
import * as confi from "../configure.js";

class AgeCalculationView extends view {
  _parentElementAgeCalculation = document.querySelector(".age-calculation");
  _parentElementError = document.querySelector(".error-message");
  _errorMessage = "Please enter Your Valid Birth Date";

  _inputYears = document.querySelector("#year");
  _inputMonths = document.querySelector("#month");
  _inputDays = document.querySelector("#day");

  _years = document.querySelector(".years");
  _months = document.querySelector(".months");
  _days = document.querySelector(".days");

  addHandlerDay() {
    this._inputDays.addEventListener("keydown", function (event) {
      if (
        isNaN(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight"
      ) {
        event.preventDefault();
      }
      console.log("its work");
    });
  }

  addHandlerMonth() {}

  addHandlerMonth() {}

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
