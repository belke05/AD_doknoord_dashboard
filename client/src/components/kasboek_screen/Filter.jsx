import React from "react";
import DatePicker from "../template/DatePicker";

export default function Filter({ filterValues, setFilterValues, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > * + *": {
          margin: "2px"
        }
      }}
    >
      <DatePicker
        label="start"
        filterValues={filterValues}
        isStart={true}
        setFilterValues={setFilterValues}
      ></DatePicker>
      <DatePicker
        label="einde"
        filterValues={filterValues}
        isStart={false}
        setFilterValues={setFilterValues}
      ></DatePicker>
      {children}
    </div>
  );
}
