import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Button from "../../foundation/Button/Button";
import ListItem from "../../foundation/ListItem/ListItem";

export default function Dashboard() {
  const [task, setTask] = useState(
    () => JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [taskTitle, setTaskTitle] = useState("");
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(task));
    console.log("taskList", task);
  }, [task]);

  const onChange = (e) => {
    setTaskTitle(e.target.value);
  };
  const addTask = () => {
    if (taskTitle) {
      const newTask = {
        id: nanoid(),
        title: taskTitle,
        children: [],
      };
      setTask([...task, newTask]);
    }
    setTaskTitle("");
  };
  const onDelete = (id) => {
    const taskItems = task.filter((tas) => {
      return id !== tas.id;
    });
    console.log(taskItems);
    setTask(taskItems);
  };
  const updateChildren = (id, children) => {
    const objIndex = task.findIndex((obj) => obj.id === id);
    console.log("objIndex", objIndex);
    task[objIndex].children = children;
    setTask([...task]);
  };
  const renderTaskItems = () => {
    return task.map((ele) => (
      <ListItem
        onDelete={onDelete}
        title={ele.title}
        id={ele.id}
        childrenValue={ele.children}
        updateChildren={updateChildren}
        key={ele.id}
      />
    ));
  };
  return (
    <div
      style={{
        paddingTop: "20px",
        // display: "flex",
      }}
    >
      <div
        style={{
          height: "50px",
          backgroundColor: "grey",
          marginBottom: "20px",
        }}
      >
        <h1>Dashboard</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {renderTaskItems()}

        <div
          style={{
            backgroundColor: "grey",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            width: "200px",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
            maxHeight: "80px",
          }}
        >
          <div>
            <input
              value={taskTitle}
              placeholder="Enter title"
              onChange={onChange}
            />
          </div>
          <Button title="Add Card" onClick={addTask} />
        </div>
      </div>
    </div>
  );
}
