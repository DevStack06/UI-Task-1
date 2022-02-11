import React from "react";

export default function CardItem({ title, description, onClick, id }) {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // justifyContent: "flex-start",
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "5px",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h4>{title}</h4>
        <div onClick={() => onClick(id)}>
          <h3>X</h3>
        </div>
      </div>
      <p>{description} </p>
    </div>
  );
}
