import { useDebugValue, useState } from "react";
const Content = () => {
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
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
