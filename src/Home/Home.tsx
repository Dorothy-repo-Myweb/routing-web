import React from "react";
import { useEffect } from "react";
import httpcall from "../Utility/httpcall";
import DivContainerHome from "./Style";
import { IBodyResponse } from "../Components/Interface";
import home from "./Style";

function Home() {
  const fetchPeople = async () => {
    try {
      const response = await httpcall("https://swapi.dev/api/people", "GET");
      console.log(response);
      console.log("err");
    } catch (err) {
      console.log("err");
    }
  };
  useEffect(() => {
    fetchPeople();
  }, []);
  return <DivContainerHome></DivContainerHome>;
}
export default Home;
