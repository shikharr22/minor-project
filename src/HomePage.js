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
    moisture = [],
    light=[];
  let tempAlert=0,humidAlert=0,moistAlert=0,lightAlert=0;
  //console.log(data.array);
  let labels = [];
  if (data.array != undefined) {
    for (let i = 0; i < data.array.length; i++) {
      humid.push(data.array[i].Humid);
      if(humid[humid.length-1]>50)
      {
        humidAlert++;
      }
      else
      {
        humidAlert--;
      }
      
     
      temp.push(data.array[i].Temp);
      if(temp[temp.length-1]>25)
      {
        tempAlert++;
      }
      else
      {
        tempAlert--;
      }
      
      moisture.push(data.array[i].Moisture);
      if(moisture[moisture.length-1]>20)
      {
        moistAlert++;
      }
      else
      {
        moistAlert--;
      }

      light.push(data.array[i].Light);
      if(light[light.length-1]>20)
      {
        lightAlert++;
      }
      else
      {
        lightAlert--;
      }

    }

    for (let i = 0; i < data.array.length; i++) {
      labels.push(`${(i + 1)*10}`);
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
        <div className="section" id="main" style={{'justifyContent':'center','alignItems':'center'}}>
          <p style={{'fontSize':'4vh','color':'#011c0f'}}>Current Readings</p>
          <div style={{'display':'flex'}}>
            <div className='card'>
              <p style={{'fontSize':'2.5vh','color':'black','textTransform':'uppercase'}}>Temp</p>
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
            <div className='card'>
              <p style={{'fontSize':'2.5vh','color':'black','textTransform':'uppercase'}}>Light</p>
              <img style={{'width':'3vw','heigt':'5vh'}} src={require("./sunlight.png")} />
              <p style={{'fontSize':'5vh','color':'white','textAlign':'center'}}>{light[light.length-1]}%</p>
            </div>
          </div>
          { (humidAlert>3 || tempAlert>3 || moistAlert>3)?
          <div id="alert" style={{'display':''}}>
          <img style={{'width':'40px','height':'40px'}} src={require('./alert.png')}/>
          {(humidAlert>3)?<p id="humidAlter" style={{'display':'','margin':'0 2vh 0 2vh'}}>Humidity too high!!</p>:<p id="humidAlter" style={{'display':'none'}}>Humidity too high!!</p>}
          {(tempAlert>3)?<p id="humidAlter" style={{'display':'','margin':'0 2vh 0 2vh'}}>Temperature too high!!</p>:<p id="humidAlter" style={{'display':'none'}}>Temperature too high!!</p>}
          {(moistAlert>3)?<p id="humidAlter" style={{'display':'','margin':'0 2vh 0 2vh'}}>Moisture too high!!</p>:<p id="humidAlter" style={{'display':'none'}}>Moisture too high!!</p>}
          </div>: <div id="alert" style={{'display':'none'}}>
          <img style={{'width':'40px','height':'40px'}} src={require('./alert.png')}/>
          {(humidAlert>3)?<p id="humidAlter" style={{'display':'','margin':'0 2vh 0 2vh'}}>Humidity too high!!</p>:<p id="humidAlter" style={{'display':'none'}}>Humidity too high!!</p>}
          {(tempAlert>3)?<p id="humidAlter" style={{'display':'','margin':'0 2vh 0 2vh'}}>Temperature too high!!</p>:<p id="humidAlter" style={{'display':'none'}}>Temperature too high!!</p>}
          {(moistAlert>3)?<p id="humidAlter" style={{'display':'','margin':'0 2vh 0 2vh'}}>Moisture too high!!</p>:<p id="humidAlter" style={{'display':'none'}}>Moisture too high!!</p>}
          </div>
}
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
        <div className="section" id="light">
          <p style={{'fontSize':'4vh','color':'#011c0f','textTransform':'uppercase'}}>Light Intensity</p>
          <Line options={options} data={graph4} />
        </div>
        <div className="section" id="aboutUs">
          <p style={{'fontSize':'4vh','color':'#011c0f','textTransform':'uppercase'}}>About Us</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
