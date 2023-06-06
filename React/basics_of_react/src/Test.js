import { useState } from "react";

const Test = () => {
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: "Ravi",
      mob: 123456678,
    },
    {
      id: 2,
      name: "Maria",
      mob: 4323145677,
    },
    {
      id: 3,
      name: "Abhishek",
      mob: 990766348343,
    },
    {
      id: 4,
      name: "Epil",
      mob: 232567232323,
    },
  ]);
  const handleCheck = (data) => {};
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="item">
            <input type="checkbox" onChange={() => handleCheck()}></input>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
