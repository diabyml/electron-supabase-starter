import { useState, useEffect } from "react";
import supabase from "./lib/supabase";
import TestForm from "./components/testForm";
import { Link, Outlet } from "react-router-dom";

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
      <Link to={"/about"}>about</Link>
      <TestForm />
      <div>{JSON.stringify(tests)}</div>

      <div className="w-[200px] h-[200px] bg-gray-400">
        <div className="flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default App;
