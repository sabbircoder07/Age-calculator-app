import * as model from "./model.js";
import * as confi from "./configure.js";
import ageCalculationView from "./view/ageCalculationView.js";

const controlAgeCalculation = function (newAgeInformation) {
  try {
    ageCalculationView.renderASpinner();
    model.calculateAge(newAgeInformation);
    setTimeout(function () {
      ageCalculationView.render(model.state.age);
    }, confi.SHOW_AGE_SEC * 1000);
  } catch (error) {
    ageCalculationView.renderError(error.message);
    setTimeout(function () {
      ageCalculationView._clearErrorMessage();
    }, confi.MESSAGE_CLOSE_SEC * 1000);
  }
};

const init = function () {
  ageCalculationView.addHandlerAgeCalculation(controlAgeCalculation);
  ageCalculationView.addHandlerDay();
  ageCalculationView.addHandlerMonth();
  ageCalculationView.addHandlerYear();
};

init();
