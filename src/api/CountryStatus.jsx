import axios from "axios";

const url2 = "https://disease.sh/v3/covid-19/countries";

let countryData = "";

export const fetchCountryData = async () => {
  try {
    const res = await axios.get(url2);
    countryData = res.data;
    return countryData;
  } catch (error) {
    console.log("!!-- Fetching data ERROR --!!");
  }
};
