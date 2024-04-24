"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Noto_Sans_Batak } from "next/font/google";
import useSWR from "swr";
import Description from "../Description/Description";
import styles from "../../page.module.css";
import Spline from "@splinetool/react-spline";

const noto = Noto_Sans_Batak({
  subsets: ["latin"],
  weight: "400",
});

function WeatherData() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  //const fetcher = (url: string) => fetch(url).then((res) => res.json());

  //const { data } = useSWR(`http://localhost:3000/api/weather/paarl`, fetcher);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/weather/${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const currentDate = new Date(Date.now());
  const isoString = currentDate.toDateString();
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchDiv}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            className={styles.searchI}
            onChange={handleInputChange}
          />
          <button className={styles.submitB} type="submit">
            Search
          </button>
        </div>
      </form>

      {weatherData ? (
        <>
          <h2 style={{ textAlign: "center", fontWeight: "600",color:"#495E57" }}>
            {weatherData.name}
          </h2>

       
            <Description value={weatherData.weather[0].description} />
            
     

          <div style={{ margin: "20px" }}>
            <p style={{ fontSize: "30px", color: "black" }}>
              {weatherData.main.temp}°C
            </p>
            <p
              className={noto.className}
              style={{ fontSize: "20px", color: "grey" }}
            >
              {weatherData.weather[0].description}
            </p>
            <p
              className={noto.className}
              style={{ fontSize: "20px", color: "rgb(244, 206, 20)" }}
            >
              {isoString}
            </p>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherData;
