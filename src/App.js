import { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, withReact, Editable } from "slate-react";

export default function App() {
  const editor = useMemo(() => {
    return withReact(createEditor());
  }, []);
  const [value, setValue] = useState([
    {
      type: "p",
      children: [{ text: "simple text" }]
    }
  ]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Slate
        editor={editor}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      >
        <Editable />
      </Slate>
    </div>
  );
}
