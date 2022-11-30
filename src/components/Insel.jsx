import { createSignal } from "solid-js";

export function Insel() {
  const [todos, setTodos] = createSignal([{ done: false, text: "todo 1" }]);
  console.log('insel!')
  return (
    <div>
      <h1>Insel TODO</h1>
      <ul>
        {todos().map((item) => (
          <li>{item.done ? 'done' : 'todo'} - {item.text}</li>
        ))}
      </ul>
    </div>
  );
}
