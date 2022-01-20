import React from "react";
import "./App.css";
export default function AboutUs() {
  return (
    <>
      {/*   ABOUT US SECTION STARTS */}
      <div className="section" id="aboutUs">
        <p
          style={{
            fontSize: "4vh",
            color: "#011c0f",
            textTransform: "uppercase",
          }}
        >
          About Us
        </p>
        <div id="contributors">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
<<<<<<< HEAD
              margin:"0 4vw 0 3.8vw",
=======
              marginLeft:'3.9vw',
              marginRight: "4vw",
>>>>>>> 91bbd6601728570eaf5f4e768bd00596617c5b45
            }}
          >
            <img
              style={{ width: "7vw", height: "15vh" }}
              className="contriPics"
              src={require("./yash.jpeg")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: "#d1b500",
                textTransform: "uppercase",
              }}
            >
              <a target="_blank" style={{textDecoration:'none',color:'#d1b500'}} href="https://www.linkedin.com/in/yash-gund-5994281a0/"> Yash</a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "4vw",
            }}
          >
            <img
              style={{ width: "7vw", height: "15vh" }}
              className="contriPics"
              src={require("./shikhar.jpeg")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: "#d1b500",
                textTransform: "uppercase",
              }}
            >
              <a target="_blank" style={{textDecoration:'none',color:'#d1b500'}} href="https://www.linkedin.com/in/shikhar-raizaday-b9a8941ab/"> Shikhar{" "}</a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "4vw",
            }}
          >
            <img
              style={{ width: "7vw", height: "15vh" }}
              className="contriPics"
              src={require("./utkarsh.jpeg")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: "#d1b500",
                textTransform: "uppercase",
              }}
            >
             <a target="_blank" style={{textDecoration:'none',color:'#d1b500'}} href="https://www.linkedin.com/in/utkarsh-thakkar-417aba1b5/">  Utkarsh{" "}</a>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "4vw",
            }}
          >
            <img
              style={{ width: "7vw", height: "15vh" }}
              className="contriPics"
              src={require("./pranav.jpg")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: "#d1b500",
                textTransform: "uppercase",
              }}
            >
              <a target="_blank" style={{textDecoration:'none',color:'#d1b500'}} href="https://www.linkedin.com/in/pranav-c-b44799111/"> Pranav C</a>{" "}
            </p>
          </div>
        </div>
        <div className="motive">
          <p
            style={{
              fontSize: "0.9rem",
              textAlign: "center",
              color: "#21b7ed",
            }}
          >
            <b style={{ fontSize: "1.5rem" }}>"</b> Plant monitoring system is a
            tool used for live monitoring of plants. We provide an arduino and
            IoT based monitoring system to take care of these plants remotely
            cutting off any human intervention.{" "}
            <b style={{ fontSize: "1.5rem" }}>"</b>
          </p>
        </div>
      </div>
      {/*   ABOUT US SECTION ENDS */}
    </>
  );
}
