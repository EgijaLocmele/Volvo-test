import Car from "../models/Car";

export const fetchData = async (): Promise<Car[]> => {
  try {
    const response = await fetch("/api/cars.json");
    const jsonData = await response.json();
    console.log("test", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
