import { React, useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, child, get } from "firebase/database";
import database from "./Firebase.js";
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
  }, []);

  let humid = [],
    temp = [],
    moisture = [];

  console.log(data.array);
  if (data.array != undefined) {
    for (let i = 0; i < 6; i++) {
      humid.push(data.array[i].Humid);
      temp.push(data.array[i].Temp);
      moisture.push(data.array[i].Moisture);
    }

    console.log(`Humidity:${humid}`);

    console.log(`Temperature:${temp}`);

    console.log(`Moisture: ${moisture}`);
  }

  return (
    <>
      <div className="homepage">
        <div className="section" id="humidity"></div>
        <div className="section" id="temperature"></div>
        <div className="section" id="moisture"></div>
      </div>
    </>
  );
};

export default HomePage;
