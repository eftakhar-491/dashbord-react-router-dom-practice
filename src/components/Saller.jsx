import React from "react";

export default function Saller({ handelSaller, data }) {
  return (
    <div
      onClick={() => handelSaller(data)}
      className="cursor-pointer border-2 px-5 py-1"
    >
      <h1>{data}</h1>
    </div>
  );
}
