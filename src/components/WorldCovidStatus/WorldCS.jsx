import React from "react";
import styles from "./WorldCS.module.css";

import CountUp from "react-countup";

function WorldCS({
  covidCases: {
    todayCases,
    todayDeaths,
    todayRecovered,
    totalActive,
    totalAffectedCountries,
    totalCases,
    totalDeaths,
    totalRecovered,
  },
  covidDate,
}) {
  const styleCountUpWorld = {
    fontSize: "4.5rem",
    fontWeight: "300",
    fontFamily: '"Oswald", sans-serif',
  };

  const styleGridItems = {
    fontSize: "1.3rem",
    fontWeight: "500",
    fontFamily: '"Oswald", sans-serif',
  };

  return (
    <div className={styles.outer_worldCS}>
      <div className={styles.worldCS}>
        {/* Left World Content */}
        <div className={styles.left_world}>
          <h1 className={styles.covid_home_first_title}>COVID-19 Tracker</h1>
          <h2 className={styles.covid_home_second_title}>
            <i className="fas fa-globe-asia"></i> Worldwide Status
          </h2>

          <h1 className={styles.total_cases_count}>
            <CountUp
              start={0}
              end={totalCases}
              duration={1}
              separator=","
              style={styleCountUpWorld}
            />
          </h1>
          <p className={styles.total_cases_title}>Total Cases</p>

          <p className={styles.covid_date}>
            Result as of <strong>{covidDate}</strong>
          </p>
        </div>
        {/* Right World Content */}
        <div className={styles.right_world}>
          <div className={styles.world_grid_right}>
            {/*-------------------------------- 1st Row --------------------------------*/}
            <div className={styles.world_grid_items}>
              <h3>Total Active Cases</h3>
              <h2>
                <CountUp
                  start={0}
                  end={totalActive}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.world_grid_items}>
              <h3>Total Deaths</h3>
              <h2>
                <CountUp
                  start={0}
                  end={totalDeaths}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.world_grid_items}>
              <h3>Total Recoveries</h3>
              <h2>
                <CountUp
                  start={0}
                  end={totalRecovered}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            {/*-------------------------------- 2nd Row {/*--------------------------------*/}
            <div className={styles.world_grid_items}>
              <h3>New Cases</h3>
              <h2>
                +
                <CountUp
                  start={0}
                  end={todayCases}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.world_grid_items}>
              <h3>New Deaths</h3>
              <h2>
                +
                <CountUp
                  start={0}
                  end={todayDeaths}
                  duration={1}
                  separator=","
                  style={styleGridItems}
                />
              </h2>
            </div>
            <div className={styles.world_grid_items}>
              <h3>New Recoveries</h3>
              <h2>
                +
                <CountUp
                  start={0}
                  end={todayRecovered}
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
}

export default WorldCS;
