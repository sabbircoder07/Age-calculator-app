import * as model from "./model.js";
import * as confi from "./configure.js";
import ageCalculationView from "./view/ageCalculationView.js";

const controlAgeCalculation = function (newAgeInformation) {
  try {
    model.calculateAge(newAgeInformation);
    console.log(newAgeInformation);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  ageCalculationView.addHandlerAgeCalculation(controlAgeCalculation);
};

init();
