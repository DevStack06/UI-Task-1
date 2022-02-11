import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "20px",
        padding: "10px",
        marginTop: "8px",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
