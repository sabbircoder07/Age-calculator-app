import * as model from "./model.js";
import * as confi from "./configure.js";
import ageCalculationView from "./view/ageCalculationView.js";

const controlAgeCalculation = function (newAgeInformation) {
  try {
    model.calculateAge(newAgeInformation);

    ageCalculationView.render(model.state.age);
  } catch (error) {
    console.log(error);
    ageCalculationView.renderError(error.message);
    setTimeout(function () {
      ageCalculationView._clearErrorMessage();
    }, confi.MESSAGE_CLOSE_SEC * 1000);
  }
};

const init = function () {
  ageCalculationView.addHandlerAgeCalculation(controlAgeCalculation);
  ageCalculationView.addHandlerDay();
};

init();
