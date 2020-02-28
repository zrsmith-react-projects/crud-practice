import React, { useState, useEffect } from "react";

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axiosWithAuth()
        .get("animals")
        .then(response => {
          console.log(response.data);
          setAnimals(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(
            `Error fetching animals, you should not beat them ${error.response}`
          );
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="dash">
      {isLoading ? "LOADING" : ""}
      <AnimalForm animals={animals} updateAnimals={setAnimals} />
      <AnimalList animals={animals} />
    </div>
  );
}
