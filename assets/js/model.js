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
    const day = newAgeInformation.day;
    const month = newAgeInformation.month;
    const year = newAgeInformation.year;
    if (!day && !month && !year) {
    }
    console.log(day, month, year);
  } catch (error) {
    throw error;
  }
};
