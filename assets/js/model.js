import { v4 as uuidv4 } from "uuid";

export const state = {
  age: {
    years: "",
    months: "",
    days: "",
  },
};

export const calculateAge = function (newAgeInformation) {
  try {
    let day = +newAgeInformation.day;
    let month = +newAgeInformation.month;
    let year = +newAgeInformation.year;

    if (!day && !month && !year) {
      throw new Error("Please Enter Your Birth Date.");
    } else if (!day || typeof day !== "number" || day > 31) {
      throw new Error("Please Enter Your Valid Birth Day.");
    } else if (!month || typeof month !== "number" || month > 12) {
      throw new Error("Please Enter Your Valid Birth Month.");
    } else if (
      !year ||
      typeof year !== "number" ||
      year > new Date().getFullYear()
    ) {
      throw new Error("Please Enter Your Valid  Birth Year.");
    }

    const birthDate = new Date(
      `${year}-${
        month.toString().length === 1
          ? month.toString().padStart(2, "0")
          : month
      }-${day.toString().length === 1 ? day.toString().padStart(2, "0") : day}`
    );

    const currentDate = new Date();

    if (birthDate > currentDate) {
      throw new Error("Please Enter Your Valid Birth Date.");
    } else {
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
      state.age.months = ageCalculateMonth.toString().padStart(2, "0");
      state.age.days = ageCalculateday.toString().padStart(2, "0");
    }
  } catch (error) {
    throw error;
  }
};

//https://www.freecodecamp.org/news/how-to-validate-a-date-in-javascript/
