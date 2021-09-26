import React, { useEffect, useState } from "react";

import Guests from "./Guests";
import TotalCostCard from "../TotalCost/TotalCostCard";

const GuestAndCost = () => {
  const [allGuest, setAllGuest] = useState([]);

  useEffect(() => {
    fetch("./FakeData.JSON")
      .then((data) => data.json())
      .then((data) => setAllGuest(data));
  }, []);

  return (
    <main className='main-container'>
      <Guests allGuest={allGuest}></Guests>
      <TotalCostCard></TotalCostCard>
    </main>
  );
};

export default GuestAndCost;
