import { useState, useEffect } from "react";
import supabase from "./lib/supabase";

function App() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data: tests } = await supabase.from("test").select();
      console.log(tests);
      setTests(tests as any);
    }

    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <div>{JSON.stringify(tests)}</div>
    </div>
  );
}
export default App;
