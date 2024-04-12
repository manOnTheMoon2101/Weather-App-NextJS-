import WeatherData from "./components/WeatherData/weatherData";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <WeatherData  />
    </div>
  );
}
