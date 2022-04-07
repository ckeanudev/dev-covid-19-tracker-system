import React from "react";
import styles from "./App.module.css";

import { fetchWorldData } from "./api/index";
import { covidDate } from "./date";
import { fetchCountryData } from "./api/CountryStatus";

import WorldCS from "./components/WorldCovidStatus/WorldCS";
import CountryCS from "./components/CountryCovidStatus/CountryCS";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  state = {
    covidCases: {},
    covidDate: "",
    covidCountryStatus: [],
  };

  async componentDidMount() {
    // Fetching world status data
    const fetchWorldCovidCases = await fetchWorldData();
    this.setState({ covidCases: fetchWorldCovidCases });
    // Get current date
    const newCovidDate = covidDate();
    this.setState({ covidDate: newCovidDate });
    // // Fetching country status data
    const fetchCountryCovidCases = await fetchCountryData();
    this.setState({ covidCountryStatus: fetchCountryCovidCases });
  }

  render() {
    const { covidCases } = this.state;
    const { covidDate } = this.state;
    const { covidCountryStatus } = this.state;

    return (
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.inner_navbar}>
            <h1>
              <i className="fas fa-shield-virus"></i> C-19
            </h1>
          </div>
        </nav>
        <WorldCS covidCases={covidCases} covidDate={covidDate} />
        <CountryCS covidCountryStatus={covidCountryStatus} />

        <Footer />
      </div>
    );
  }
}

export default App;
