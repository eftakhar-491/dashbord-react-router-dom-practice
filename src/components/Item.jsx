import React from "react";

export default function Item({ handelItem, data }) {
  return (
    <div
      onClick={() => handelItem(data)}
      className="cursor-pointer border-2 px-5 py-1"
    >
      <h1>{data}</h1>
    </div>
  );
}
