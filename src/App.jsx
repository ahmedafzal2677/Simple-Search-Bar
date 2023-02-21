import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TextField from "@mui/material/TextField";

function App() {
  const products = [
    {
      id: 1,
      label: "Sushi",
    },
    {
      id: 2,
      label: "Chow Mein",
    },
    {
      id: 3,
      label: "Dumplings",
    },
    {
      id: 4,
      label: "Kung Pao Chicken",
    },
    {
      id: 5,
      label: "Ma Po Tofu",
    },
    {
      id: 6,
      label: "Peking duck",
    },
    {
      id: 7,
      label: "Wonton Soup",
    },
    {
      id: 8,
      label: "Scallion Pancakes",
    },
  ];

  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <TextField
        id=""
        label="Search Bar"
        value={state}
        onChange={handleChange}
      />

      {products
        .filter((item) => {
          if (state === "") return item;
          else if (
            item.label.toLocaleLowerCase().includes(state.toLocaleLowerCase())
          ) {
            return item.label;
          }
        })
        .map((item) => (
          <div key={item.id}>
            <h4>{item.label}</h4>
          </div>
        ))}
    </div>
  );
}

export default App;
