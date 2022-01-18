import { React, useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, child, get, set } from "firebase/database";
import database from "./Firebase.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

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
    moisture = [];

  //console.log(data.array);
  let labels = [];
  if (data.array != undefined) {
    for (let i = 0; i < data.array.length; i++) {
      humid.push(data.array[i].Humid);
      temp.push(data.array[i].Temp);
      moisture.push(data.array[i].Moisture);
      
    }

    for (let i = 0; i < data.array.length; i++) {
      labels.push(`${i + 1}`);
    }

    //console.log(`Humidity:${humid}`);

    //console.log(`Temperature:${temp}`);

    //console.log(`Moisture: ${moisture}`);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
 
  const graph = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        borderColor: "black",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Moisture",
        data: moisture,
        borderColor: "pink",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Humidity",
        data: humid,
        borderColor: "yellow",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="homepage">
        <div className='section' id='main'>
        <p>Main</p>
        <p>Humdity: {humid[humid.length-1]}</p>
        <p>Temperature: {temp[temp.length-1]}</p>
        <p>Moisture: {moisture[moisture.length-1]}</p>
        </div>
        <div className='section' id='temperature'>
        <p>Temperature</p>
        <Line options={options} data={graph} />
        </div>
        <div className='section' id='humidity'>
        <p>Humidity</p>
        <Line options={options} data={graph} />
        </div>
        <div className='section' id='moisture'>
        <p>Moisture</p>
        <Line options={options} data={graph} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
