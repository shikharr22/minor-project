import { React, useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, child, get, set } from "firebase/database";
import database from "./Firebase.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Alert from "./Alert.js";
import AboutUs from "./AboutUs";


const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const dbRef = ref(database);
    get(child(dbRef, `Data`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let array = [];
          snapshot.forEach((element) => {
            array.push(element.val());
          });
          setData({ array: array });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  let humid = [],
    temp = [],
    moisture = [],
    light = [];

  let humidAlertL = 5,
    humidAlertH = 2;

  let labels = [];
  if (data.array != undefined) {
    for (let i = 0; i < data.array.length; i++) {
      humid.push(data.array[i].Humid);

      temp.push(data.array[i].Temp);

      moisture.push(data.array[i].Moisture);

      light.push(data.array[i].Light);
    }

    for (let i = 0; i < data.array.length; i++) {
      labels.push(`${(i + 1) * 10}`);
    }
  }
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          fontFamily: "Secular One",
        },
        position: "bottom",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const graph1 = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        borderColor: "#e8f22c",
        backgroundColor: "#e8f22c",
      },
    ],
  };

  const graph2 = {
    labels,
    datasets: [
      {
        label: "Moisture",
        data: moisture,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  const graph3 = {
    labels,
    datasets: [
      {
        label: "Humidity",
        data: humid,
        borderColor: "#23c9eb",
        backgroundColor: "#23c9eb",
      },
    ],
  };

  const graph4 = {
    labels,
    datasets: [
      {
        label: "Light Intensity",
        data: light,
        borderColor: "orange",
        backgroundColor: "orange",
      },
    ],
  };

  return (
    <>
      <div className="homepage">
        {/*   CURRENT  READINGS SECTION STARTS */}
        <div
          className="section"
          id="currentReadings"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <p style={{ fontSize: "4vh", color: "#011c0f" }}>Realtime Readings</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="card">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem ",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                Temperature
              </p>
              <img
                style={{ marginTop: "2vh", width: "2.5vw", height: "5vh" }}
                src={require("./temp.png")}
              />
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "black",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {temp[temp.length - 1]}° C
              </p>
              <Alert
                type="Temp"
                currVal={temp[temp.length - 1]}
                highCount={0}
                lowCount={0}
                lowLimit={3}
                highLimit={50}
              />
            </div>
            <div className="card">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem ",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                Moisture
              </p>
              <img
                style={{ marginTop: "2vh", width: "2.5vw", height: "5vh" }}
                src={require("./moisture.png")}
              />
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "black",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {moisture[moisture.length - 1]}%
              </p>
              <Alert
                type="Moisture"
                currVal={moisture[moisture.length - 1]}
                highCount={0}
                lowCount={0}
                lowLimit={3}
                highLimit={50}
              />
            </div>
            <div className="card">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem ",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                Humidity
              </p>
              <img
                style={{ marginTop: "2vh", width: "2.5vw", height: "5vh" }}
                src={require("./humidity.png")}
              />
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "black",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {humid[humid.length - 1]}%
              </p>
              <Alert
                type="Humidity"
                currVal={humid[humid.length - 1]}
                highCount={0}
                lowCount={0}
                lowLimit={0}
                highLimit={50}
              />
            </div>
            <div className="card">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem ",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                Light
              </p>
              <img
                style={{ marginTop: "2vh", width: "2.5  vw", height: "5vh" }}
                src={require("./sunlight.png")}
              />
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "black",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {light[light.length - 1]}%
              </p>
              <Alert
                type="Light Exposure"
                currVal={light[light.length - 1]}
                highCount={0}
                lowCount={0}
                lowLimit={3}
                highLimit={50}
              />
            </div>
          </div>
        </div>
        {/*   CURRENT  READINGS SECTION ENDS */}
        {/*   TEMPERATURE SECTION STARTS */}
        <div className="section" id="temperature">
          <p
            style={{
              fontSize: "4vh",
              color: "#011c0f",
              textTransform: "uppercase",
            }}
          >
            Temperature
          </p>
          <Line options={options} data={graph1} />
        </div>
        {/*   TEMPERATURE SECTION ENDS */}
        {/*   MOISTURE SECTION STARTS */}
        <div className="section" id="moisture">
          <p
            style={{
              fontSize: "4vh",
              color: "#011c0f",
              textTransform: "uppercase",
            }}
          >
            Moisture
          </p>
          <Line options={options} data={graph2} />
        </div>
        {/*   MOISTURE SECTION ENDS */}
        {/*   HUMIDITY SECTION STARTS */}
        <div className="section" id="humidity">
          <p
            style={{
              fontSize: "4vh",
              color: "#011c0f",
              textTransform: "uppercase",
            }}
          >
            Humidity
          </p>
          <Line options={options} data={graph3} />
        </div>
        {/*   HUMIDITY SECTION ENDS */}
        {/*   LIGHT INTENSITY SECTION STARTS */}
        <div className="section" id="light">
          <p
            style={{
              fontSize: "4vh",
              color: "#011c0f",
              textTransform: "uppercase",
            }}
          >
            Light Intensity
          </p>
          <Line options={options} data={graph4} />
        </div>
        {/*   LIGHT INTENSITY SECTION ENDS */}
        <AboutUs/>
      </div>
    </>
  );
};

export default HomePage;
