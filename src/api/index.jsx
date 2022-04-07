import axios from "axios";

const url1 = "https://disease.sh/v3/covid-19/all";
let covidCases = {};

export const fetchWorldData = async () => {
  try {
    const res = await axios.get(url1);

    covidCases = res.data;

    const modifiedData = {
      totalCases: covidCases.cases,
      totalActive: covidCases.active,
      totalRecovered: covidCases.recovered,
      totalDeaths: covidCases.deaths,
      totalAffectedCountries: covidCases.affectedCountries,
      todayCases: covidCases.todayCases,
      todayRecovered: covidCases.todayRecovered,
      todayDeaths: covidCases.todayDeaths,
    };

    return modifiedData;
  } catch (error) {
    console.log("!!-- Fetching data ERROR --!!");
  }
};
