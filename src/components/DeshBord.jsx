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
  const [piData, setPiData] = useState([
    { itemCategory: [] },
    { name: "east", value: 0 },
    { name: "west", value: 0 },
    { name: "south", value: 0 },
    { name: "north", value: 0 },
  ]);

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
    for (let item of categoryData) {
      if (item.Seller === clickedData) {
        let xx = categoryData.filter((item) => item.Seller !== clickedData);
        setCategoryData(xx);
        return;
      }
    }
    let xx = allData.filter((item) => item.Seller === clickedData);

    // setCategoryData(allData.filter((item) => item.Seller === clickedData));
    setCategoryData((pre) => [...pre, ...xx]);
    setPiData((pre) => {
      const [_, e, w, s, n] = pre;
      return [
        { itemCategory: [] },
        { name: "east", value: e.value },
        { name: "west", value: w.value },
        { name: "south", value: s.value },
        { name: "north", value: n.value },
      ];
    });
  }

  function handelItem(data, id) {
    console.log(data);
    for (let xxx of piData[0]?.itemCategory) {
      if (xxx === data) return;
    }
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
    setPiData((pre) => {
      const [i, e, w, s, n] = pre;
      return [
        { itemCategory: [...i.itemCategory, data] },
        { name: "east", value: (east += e.value) },
        { name: "west", value: (west += w.value) },
        { name: "south", value: (south += s.value) },
        { name: "north", value: (north += n.value) },
      ];
    });
  }
  return (
    <>
      <section className="grid grid-cols-3 gap-5 h-screen overflow-x-hidden overflow-scroll">
        <section className="col-start-1 col-end-4">
          <h1>Saller_</h1>
          <div className="justify-center items-start flex gap-x-3-3 flex-wrap">
            {saller?.map((data, i) => (
              <Saller key={i} data={data} handelSaller={handelSaller} />
            ))}
          </div>
        </section>
        <section className="col-start-1 col-end-2">
          <h1>All Item_</h1>
          {category?.map((data, i) => (
            <Item handelItem={handelItem} key={i + i} data={data} id={i} />
          ))}
        </section>
        <section>
          {/* chart hobe 4 ta */}
          <div className="h-full col-start-2 col-end-4">
            <LineChart1 piData={piData} />
          </div>
        </section>
        <section className="col-start-1 col-end-4 h-[500px]">
          {/* chart  */}

          <BarChart1 categoryData={categoryData} />
        </section>
      </section>
    </>
  );
}
