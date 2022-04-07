import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

import CountUp from "react-countup";

import styles from "./CountryCS.module.css";

const CountryCS = ({ covidCountryStatus }) => {
  const [stateCountryData, setStateCountryData] = useState(0);

  // Style for select
  const styleSelect = {
    fontSize: "15px",
  };

  const menuItemCountry = covidCountryStatus.map((data, i) => (
    <MenuItem value={i} key={i} style={styleSelect}>
      {data.country}
    </MenuItem>
  ));

  const handleChangeCountry = (event) => {
    setStateCountryData(event.target.value);
  };
  let countryAPI = covidCountryStatus[stateCountryData];

  // API data
  const countryName = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.country;
    }
  };
  const countryPopulation = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.population;
    }
  };
  const countryFlag = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.countryInfo.flag;
    }
  };
  const countryActive = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.active;
    }
  };
  const countryCases = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.cases;
    }
  };
  const countryDeath = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.deaths;
    }
  };
  const countryRecovered = (countryAPI) => {
    if (!countryAPI) {
      return "Loading...";
    } else {
      return countryAPI.recovered;
    }
  };

  // Style for CountUp
  const styleGridItems = {
    fontSize: "1.3rem",
    fontWeight: "500",
    fontFamily: '"Oswald", sans-serif',
  };
  const styleGridItemsPopulations = {
    fontSize: "1.1rem",
    fontWeight: "500",
    fontFamily: '"Oswald", sans-serif',
  };

  return (
    <div className={styles.country_container}>
      {console.log(stateCountryData)}

      <h1 className={styles.country_h1}>Country Status</h1>
      <div className={styles.inner_country_container}>
        <div className={styles.left_countryCS}>
          <Box sx={{ width: "80%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={0}
                onChange={handleChangeCountry}
                style={styleSelect}
              >
                {menuItemCountry}
              </Select>
            </FormControl>
          </Box>
          <div className={styles.country_population}>
            <p className={styles.country_population_title}>Population:</p>
            <p className={styles.country_population_numbers}>
              <CountUp
                start={0}
                end={countryPopulation(countryAPI)}
                duration={1}
                separator=","
                style={styleGridItemsPopulations}
              />
            </p>
          </div>
          <div className={styles.country_flag}>
            <img src={countryFlag(countryAPI)} alt="" />
          </div>
          <p className={styles.country_description}>
            {countryName(countryAPI)}'s Flag
          </p>
        </div>
        <div className={styles.right_countryCS}>
          <div className={styles.country_right_grid}>
            <div className={styles.country_items}>
              <h3>Active Cases</h3>
              <h2>
                <CountUp
                  start={0}
                  end={countryActive(countryAPI)}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.country_items}>
              <h3>Total Cases</h3>
              <h2>
                <CountUp
                  start={0}
                  end={countryCases(countryAPI)}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.country_items}>
              <h3>Total Deaths</h3>
              <h2>
                <CountUp
                  start={0}
                  end={countryDeath(countryAPI)}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.country_items}>
              <h3>Total Recoveries</h3>
              <h2>
                <CountUp
                  start={0}
                  end={countryRecovered(countryAPI)}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCS;
