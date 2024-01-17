import view from "./view.js";
import * as confi from "../configure.js";

class AgeCalculationView extends view {
  _parentElementAgeCalculation = document.querySelector(".age-calculation");
  _parentElementAgeCalculationResult = document.querySelector(
    ".calculate-result_container"
  );
  _parentElementError = document.querySelector(".error-message");
  _errorMessage = "Please enter Your Valid Birth Date";

  _inputYears = document.querySelector("#year");
  _inputMonths = document.querySelector("#month");
  _inputDays = document.querySelector("#day");

  _years = document.querySelector(".years");
  _months = document.querySelector(".months");
  _days = document.querySelector(".days");

  paddingWithZeroDay = function (event) {
    console.log("Its Work");
    this._inputDays.value.toString().length === 1
      ? (this._inputDays.value = this._inputDays.value.padStart(2, "0"))
      : "";
  };

  paddingWithZeroMonth = function () {
    console.log("Its Work");
    this._inputMonths.value.toString().length === 1
      ? (this._inputMonths.value = this._inputMonths.value.padStart(2, "0"))
      : "";
  };

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
    });
    this._inputDays.addEventListener(
      "change",
      this.paddingWithZeroDay.bind(this)
    );
  }

  addHandlerMonth() {
    this._inputMonths.addEventListener("keydown", function (event) {
      if (
        isNaN(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight"
      ) {
        event.preventDefault();
      }
    });
    this._inputMonths.addEventListener(
      "change",
      this.paddingWithZeroMonth.bind(this)
    );
  }

  addHandlerYear() {
    this._inputYears.addEventListener("keydown", function (event) {
      if (
        isNaN(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight"
      ) {
        event.preventDefault();
      }
    });
  }

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

  _generateMarkup() {
    return `<div class="calculate-result">
    <span class="years">${this._data.years}</span> years
  </div>
  <div class="calculate-result">
    <span class="months">${this._data.months}</span> months
  </div>
  <div class="calculate-result">
    <span class="days"> ${this._data.days} </span> days
  </div>`;
  }
}

export default new AgeCalculationView();
