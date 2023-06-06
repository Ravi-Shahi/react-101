import "./index.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Banana",
    },
    {
      id: 2,
      checked: false,
      item: "Cucumber",
    },
    {
      id: 3,
      checked: false,
      item: "Bread",
    },
  ]);
  const handleCheck = (id) => {
    console.log(id);
    let listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Hello" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
