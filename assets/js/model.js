import { v4 as uuidv4 } from "uuid";

export const state = {
  age: {
    years: "",
    mounths: "",
    days: "",
  },
};

export const calculateAge = function (newAgeInformation) {
  try {
    let day = +newAgeInformation.day;
    let month = +newAgeInformation.month;
    let year = +newAgeInformation.year;

    if (!day && !month && !year) {
      console.log("its work");
      return;
    }
    if (!day || (typeof day !== "number" && day > 31)) {
      console.log("its work-1");
      return;
    }
    if (!month || (typeof month !== "number" && month > 12)) {
      console.log("its work-2");
      return;
    }

    if (!year || (typeof year !== "number" && year > 2024)) {
      console.log("its work-3");
      return;
    }

    const birthDate = new Date(
      `${year}-${
        month.toString().length === 1
          ? month.toString().padStart(2, "0")
          : month
      }-${day.toString().length === 1 ? day.toString().padStart(2, "0") : day}`
    );

    const currentDate = new Date();

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const ageDiffirenceDay = Math.floor(
      (currentDate - birthDate) / _MS_PER_DAY
    );

    const ageCalculateYear = Math.floor(ageDiffirenceDay / 365);

    const ageCalculateMonth = Math.floor(
      (ageDiffirenceDay - ageCalculateYear * 365) / 30
    );

    const ageCalculateday =
      ageDiffirenceDay - (ageCalculateYear * 365 + ageCalculateMonth * 30);

    state.age.years = ageCalculateYear.toString().padStart(2, "0");
    state.age.mounths = ageCalculateMonth.toString().padStart(2, "0");
    state.age.days = ageCalculateday.toString().padStart(2, "0");

    console.log(ageCalculateYear, ageCalculateMonth, ageCalculateday);
  } catch (error) {
    console.log(error);
  }
};

//https://www.freecodecamp.org/news/how-to-validate-a-date-in-javascript/
