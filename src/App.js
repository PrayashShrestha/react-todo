import React from "react";
import Header from "./layouts/Header";
import AddToDo from "./components/AddToDo";
import List from "./components/List";

const App = () => {
  return (
    <div className="bg-light">
      <Header />
      <AddToDo />

      <List />
    </div>
  );
};

export default App;
