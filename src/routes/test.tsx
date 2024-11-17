import { Link, useParams } from "react-router-dom";

export default function Test() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Test</h1>
      <Link
        to="/"
        className="cursor-pointer hover:underline text-sm hover:text-blue-400"
      >
        Home
      </Link>
    </div>
  );
}
