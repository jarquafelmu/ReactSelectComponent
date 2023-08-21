import { useState } from "react";
import { Select } from "./Select";

const options: {
  label: string;
  value: string | number;
}[] = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  return (
    <Select
      options={options}
      onChange={(option) => setValue(option)}
      value={value}
    />
  );
}

export default App;
