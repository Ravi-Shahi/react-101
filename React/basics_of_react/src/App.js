import "./index.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import { useState } from "react";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );

  const [search, setSearch] = useState("");

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (item) => {
    setItems(item);
    localStorage.setItem("shoppingList", JSON.stringify(item));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
    console.log(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem("");
    console.log(newItem);
  };

  const handleCheck = (id) => {
    console.log(id);
    let listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Hello" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLocaleLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
