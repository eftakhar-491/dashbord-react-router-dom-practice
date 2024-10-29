import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function BarChart1({ categoryData }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={categoryData} barSize={29}>
        <XAxis dataKey="Item" />
        <YAxis />
        <Bar dataKey="Sale" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
