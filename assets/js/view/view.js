import iconsError from "../../../assets/images/icon-error.svg";

export default class view {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      const originalMarkup = `<div class="calculate-result">
      <span class="years"> -- </span> Years
    </div>
    <div class="calculate-result">
      <span class="months"> -- </span> Months
    </div>
    <div class="calculate-result">
      <span class="days"> -- </span> Days
    </div>`;
      this._clearAgeResultInformation();
      this._parentElementAgeCalculationResult.insertAdjacentHTML(
        "afterbegin",
        originalMarkup
      );
    }

    this._data = data;
    const markup = this._generateMarkup();
    this._clearAgeResultInformation();
    this._clearErrorMessage();
    this._parentElementAgeCalculationResult.insertAdjacentHTML(
      "afterbegin",
      markup
    );
  }

  _clearErrorMessage() {
    this._parentElementError.innerHTML = "";
    this._parentElementError.classList.remove("error-message--extend");
    this._inputYears.classList.remove("invalid-input");
    this._inputMonths.classList.remove("invalid-input");
    this._inputDays.classList.remove("invalid-input");
  }

  _clearAgeResultInformation() {
    this._parentElementAgeCalculationResult.innerHTML = "";
  }

  renderASpinner = function () {
    const markup = `<span class="loader"></span>`;
    this._clearAgeResultInformation();
    this._parentElementAgeCalculationResult.insertAdjacentHTML(
      "afterbegin",
      markup
    );
  };

  renderError(message = this._errorMessage) {
    const originalMarkup = `<div class="calculate-result">
      <span class="years"> -- </span> Years
    </div>
    <div class="calculate-result">
      <span class="months"> -- </span> Months
    </div>
    <div class="calculate-result">
      <span class="days"> -- </span> Days
    </div>`;
    this._clearAgeResultInformation();
    this._parentElementAgeCalculationResult.insertAdjacentHTML(
      "afterbegin",
      originalMarkup
    );

    const murkup = `
    <img class="error-icon" src="${iconsError}" alt="error icon">
    <p>${message}</p>`;
    this._clearErrorMessage();
    this._parentElementError.classList.add("error-message--extend");
    if (message === "Please Enter Your Birth Date.") {
      this._inputYears.classList.add("invalid-input");
      this._inputYears.focus();
      this._inputMonths.classList.add("invalid-input");
      this._inputMonths.focus();
      this._inputDays.classList.add("invalid-input");
      this._inputDays.focus();
    } else if (message === "Please Enter Your Valid Birth Day.") {
      this._inputDays.classList.add("invalid-input");
      this._inputDays.focus();
    } else if (message === "Please Enter Your Valid Birth Month.") {
      this._inputMonths.focus();
      this._inputDays.classList.add("invalid-input");
    } else if (message === "Please Enter Your Valid  Birth Year.") {
      this._inputYears.classList.add("invalid-input");
      this._inputYears.focus();
    } else {
      this._inputYears.classList.add("invalid-input");
      this._inputYears.focus();
    }
    this._parentElementError.insertAdjacentHTML("afterbegin", murkup);
  }
}
