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
        borderColor: "#002b3b",
        backgroundColor: "#002b3b",
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



  return (
    <>
      <div className="homepage">
        <div className="section" id="main" style={{'justifyContent':'center','alignItems':'center'}}>
          <p style={{'fontSize':'4vh','color':'#011c0f'}}>Current Readings</p>
          <div style={{'display':'flex'}}>
            <div className='card'>
              <p style={{'fontSize':'2.5vh','color':'black','textTransform':'uppercase'}}>Temperature</p>
              <img style={{'width':'3vw','heigt':'5vh'}} src={require("./temp.png")} />
              <p style={{'fontSize':'5vh','color':'white','textAlign':'center'}}>{temp[temp.length-1]}° C</p>
            </div>
            <div className='card'>
              <p style={{'fontSize':'2.5vh','color':'black','textTransform':'uppercase'}}>Moisture</p>
              <img style={{'width':'3vw','heigt':'5vh'}} src={require("./moisture.png")} />
              <p style={{'fontSize':'5vh','color':'white','textAlign':'center'}}>{moisture[moisture.length-1]}%</p>
            </div>
            <div className='card'>
              <p style={{'fontSize':'2.5vh','color':'black','textTransform':'uppercase'}}>Humidity</p>
              <img style={{'width':'3vw','heigt':'5vh'}} src={require("./humidity.png")} />
              <p style={{'fontSize':'5vh','color':'white','textAlign':'center'}}>{humid[humid.length-1]}%</p>
            </div>
          </div>
        </div>
        <div className="section" id="temperature">
          <p style={{'fontSize':'4vh','color':'#011c0f','textTransform':'uppercase'}}>Temperature</p>
          <Line options={options} data={graph1} />
        </div>
        <div className="section" id="humidity">
          <p style={{'fontSize':'4vh','color':'#011c0f','textTransform':'uppercase'}}>Moisture</p>
          <Line options={options} data={graph2} />
        </div>
        <div className="section" id="moisture">
          <p style={{'fontSize':'4vh','color':'#011c0f','textTransform':'uppercase'}}>Humidity</p>
          <Line options={options} data={graph3} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
