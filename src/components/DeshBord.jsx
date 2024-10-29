import React, { useEffect, useState } from "react";
import Saller from "./Saller";
import Item from "./Item";
import LineChart1 from "./LineChart1";
import BarChart from "./BarChart1";
import BarChart1 from "./BarChart1";
import axios, { all } from "axios";
export default function DeshBord() {
  const [allData, setAllData] = useState([]);
  const [saller, setSaller] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [piData, setPiData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((res) => setAllData(res.data));
  }, []);
  useEffect(() => {
    let x = [];
    let y = [];
    for (let item of allData) {
      x.includes(item.Seller) ? "" : x.push(item.Seller);
    }
    for (let item of allData) {
      y.includes(item.Item) ? "" : y.push(item.Item);
    }
    handelSaller("Ap Enterprise");
    setSaller(x);
    setCategory(y);
  }, [allData]);
  function handelSaller(clickedData) {
    console.log(clickedData);
    // let xx = allData.filter((item) => item.Seller === clickedData);

    setCategoryData(allData.filter((item) => item.Seller === clickedData));
  }
  useEffect(() => {
    setPiData([
      { name: "east", value: 100 },
      { name: "west", value: 200 },
      { name: "south", value: 150 },
      { name: "north", value: 350 },
    ]);
  }, []);
  function handelItem(data) {
    console.log(data);
    let east = categoryData
      .filter((item) => data === item.Item)
      .filter((item) => item.Region === "east")
      .reduce((acc, crr) => {
        return (acc += crr.Sale);
      }, 0);
    let south = categoryData
      .filter((item) => data === item.Item)
      .filter((item) => item.Region === "south")
      .reduce((acc, crr) => {
        return (acc += crr.Sale);
      }, 0);
    let north = categoryData
      .filter((item) => data === item.Item)
      .filter((item) => item.Region === "north")
      .reduce((acc, crr) => {
        return (acc += crr.Sale);
      }, 0);
    let west = categoryData
      .filter((item) => data === item.Item)
      .filter((item) => item.Region === "west")
      .reduce((acc, crr) => {
        return (acc += crr.Sale);
      }, 0);
    setPiData([
      { name: "east", value: east },
      { name: "west", value: west },
      { name: "south", value: south },
      { name: "north", value: north },
    ]);
  }
  return (
    <>
      <section className="grid grid-cols-3 gap-5 h-screen overflow-x-hidden overflow-scroll">
        <section className="col-span-3">
          <h1>Saller_</h1>
          <div className="justify-center items-start flex gap-x-3-3 flex-wrap">
            {saller?.map((data, i) => (
              <Saller key={i} data={data} handelSaller={handelSaller} />
            ))}
          </div>
        </section>
        <section className="">
          <h1>All Item_</h1>
          {category?.map((data, i) => (
            <Item handelItem={handelItem} key={i + i} data={data} />
          ))}
        </section>
        <section>
          {/* chart hobe 4 ta */}
          <div className="h-full">
            <LineChart1 piData={piData} />
          </div>
        </section>
        <section className="h-[500px]">
          {/* chart  */}

          <BarChart1 categoryData={categoryData} />
        </section>
      </section>
    </>
  );
}
