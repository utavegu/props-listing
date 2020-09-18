import React from 'react';
import Listing from "./components/Listing";
import data from "./data/etsy.json";
import './main.css';


function App() {
  const ETSY_DATA = data;

  return (
    <>
      <Listing items = {ETSY_DATA} />
    </>
  );
}

export default App;