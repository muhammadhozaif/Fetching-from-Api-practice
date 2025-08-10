import React from "react";

export default function Card(prop) {
  return (
    <div>
      <p>User id: {prop.userId}</p>
      <p>ID: {prop.id}</p>
      <p>Title:{prop.title}</p>
      <p>Status:{prop.completed}</p>
    </div>
  );
}
