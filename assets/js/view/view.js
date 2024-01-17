import iconsError from "../../../assets/images/icon-error.svg";

export default class view {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    this._years.textContent = this._data.years;
    this._months.textContent = this._data.months;
    this._days.textContent = this._data.days;
  }

  _clearErrorMessage() {
    this._parentElementError.innerHTML = "";
    this._parentElementError.classList.remove("error-message--extend");
    //this._email.classList.remove("invalid-email-id");
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
    const murkup = `
    <img class="error-icon" src="${iconsError}" alt="error icon">
    <p>${message}</p>`;
    this._clearErrorMessage();
    this._parentElementError.classList.add("error-message--extend");
    //this._email.classList.add("invalid-email-id");
    //this._email.focus();
    this._parentElementError.insertAdjacentHTML("afterbegin", murkup);
  }
}
