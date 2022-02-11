import React, { useState } from "react";
import { nanoid } from "nanoid";
import CardItem from "../Cardtem/CardItem";
import Button from "../Button/Button";

export default function ListItem({
  onDelete,
  title,
  id,
  childrenValue,
  updateChildren,
}) {
  const [titleHere, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescChange = (e) => {
    setDesc(e.target.value);
  };
  const onDelete1 = (id2) => {
    const taskItems = childrenValue.filter((tas) => {
      return id2 !== tas.id;
    });
    updateChildren(id, [...taskItems]);
  };
  const addCard = () => {
    console.log("cliocked");
    if (titleHere) {
      console.log("inside");

      const newCard = {
        id: nanoid(),
        title: titleHere,
        description: desc ?? "",
      };
      updateChildren(id, [...childrenValue, newCard]);
    }
    setTitle("");
    setDesc("");
  };
  const renderTaskItems = () => {
    return childrenValue.map((ele) => (
      <CardItem
        title={ele.title}
        description={ele.description}
        id={ele.id}
        onClick={onDelete1}
        key={ele.id}
      />
    ));
  };

  return (
    <div
      style={{
        width: "230px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // justifyContent: "flex-start",
        backgroundColor: "grey",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "5px",
        padding: "15px",
        marginLeft: "10px",
        marginRight: "10px",
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
        <div onClick={() => onDelete(id)}>
          <h3>X</h3>
        </div>
      </div>
      {renderTaskItems()}
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          width: "200px",
          marginTop: "10px",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <input
          placeholder="Enter title"
          onChange={onTitleChange}
          value={titleHere}
        ></input>
        <input
          style={{
            marginTop: "10px",
          }}
          placeholder="Enter the description"
          onChange={onDescChange}
          value={desc}
        ></input>
      </div>
      <Button title="Add Card" onClick={addCard} />
    </div>
  );
}
