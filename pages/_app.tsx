import Carousel from "../src/components/Carousel";
import "../public/css/styles.css";
import React, { useEffect, useState } from "react";
import { fetchData } from "../src/services/fetchData";
import Car from "../src/models/Car";
import { StyleProvider, ThemePicker } from "vcc-ui";

function HomePage() {
  const [data, setData] = useState<Car[]>([]);
  useEffect(() => {
    const fetchDataFromService = async () => {
      try {
        const jsonData = await fetchData();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromService();
  }, []);
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Carousel cars={data} />
      </ThemePicker>
    </StyleProvider>
    // <React.StrictMode>
    //   <Carousel products={data} />
    // </React.StrictMode>
  );
}

export default HomePage;
