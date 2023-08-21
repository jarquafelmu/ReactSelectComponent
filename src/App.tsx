import { useState } from "react";
import { Select, SelectOption } from "./Select";

const options: SelectOption[] = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <>
      <Select
        multiple
        options={options}
        onChange={(option) => setValue1(option)}
        value={value1}
      />
      <br />
      <Select
        options={options}
        onChange={(option) => setValue2(option)}
        value={value2}
      />
    </>
  );
}

export default App;
