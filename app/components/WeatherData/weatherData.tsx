"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Noto_Sans_Batak } from "next/font/google";
import { Averia_Sans_Libre } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import Description from "../Description/Description";
import styles from "../../page.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const noto = Noto_Sans_Batak({
  subsets: ["latin"],
  weight: "400",
});
const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: "400",
});
function WeatherData() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  //const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // `https://weather-app-next-js-pi.vercel.app/api/weather/${city}`
  //const { data } = useSWR(`http://localhost:3000/api/weather/paarl`, fetcher);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axios.get(
        `https://weather-app-next-js-pi.vercel.app/api/weather/${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
          <button className={styles.icon} type="submit">
            <CiSearch />
          </button>
        </div>
      </form>
      {isLoading ? (
        <div className={styles.skeletonDiv}>
          <SkeletonTheme baseColor="#45474B" highlightColor="#F4CE14">
            <Skeleton className={styles.skeletonLine} count={1} width={200} />
          </SkeletonTheme>
        </div>
      ) : (
        <div></div>
      )}
      {weatherData ? (
        <>
          <h2
            style={{ textAlign: "center", fontWeight: "600", color: "#495E57" }}
          >
            {weatherData.name}
          </h2>

          <Description value={weatherData.weather[0].description} />

          <div style={{ margin: "20px" }}>
            <p style={{ fontSize: "30px", color: "black" }}>
              {weatherData.main.temp}°C
            </p>
            <p
              className={averia.className}
              style={{ fontSize: "20px", color: "grey" }}
            >
              {weatherData.weather[0].description}
            </p>
            <p
              className={averia.className}
              style={{ fontSize: "20px", color: "rgb(244, 206, 20)" }}
            >
              {isoString}
            </p>
          </div>
        </>
      ) : (
        <div className={styles.welcomeDiv}>
          <h2
            style={{ textAlign: "center", fontSize: "60px" }}
            className={averia.className}
          >
            Welcome
            <span>👋</span>
          </h2>
          {/* className={styles.emoji} animations for emoji */}
          <p
            style={{ textAlign: "center", color: "gray" }}
            className={averia.className}
          >
            Enter you designated city in <br />
            the search bar on top.
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherData;
