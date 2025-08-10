import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
export default function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {todo.map((todos) => {
        return (
          <Card
            key={todos.id}
            userId={todos.userId}
            id={todos.id}
            title={todos.title}
            completed={todos.completed}
          />
        );
      })}
    </div>
  );
}
