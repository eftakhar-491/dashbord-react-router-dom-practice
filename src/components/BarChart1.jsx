import React, { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function BarChart1({ categoryData }) {
  console.log(categoryData);
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    let mouse = categoryData.filter((item) => item.Item === "Mouse");
    let Keyboard = categoryData.filter((item) => item.Item === "Keyboard");
    let Printer = categoryData.filter((item) => item.Item === "Printer");
    let WirelessMouse = categoryData.filter(
      (item) => item.Item === "Wireless Mouse"
    );
    let Scanner = categoryData.filter((item) => item.Item === "Scanner");
    let Pendrive = categoryData.filter((item) => item.Item === "Pendrive");
    let HardDisk = categoryData.filter((item) => item.Item === "Hard Disk");
    let Speaker = categoryData.filter((item) => item.Item === "Speaker");
    let Cpu = categoryData.filter((item) => item.Item === "Cpu");
    console.log(Keyboard);
    setBarData([
      {
        name: "mouse",
        val: mouse.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Keybord",
        val: Keyboard.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Printer",
        val: mouse.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Printer",
        val: Printer.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Wireless Mouse",
        val: WirelessMouse.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Scanner",
        val: Scanner.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Pendrive",
        val: Pendrive.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Hard Disk",
        val: HardDisk.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Speaker",
        val: Speaker.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
      {
        name: "Cpu",
        val: Cpu.reduce((acc, crr) => (acc += crr.Sale), 0),
      },
    ]);
  }, [categoryData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={barData} barSize={29}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="val" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
