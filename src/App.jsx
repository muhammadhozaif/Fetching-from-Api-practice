import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

  return <div></div>;
}
