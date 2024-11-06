import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-10 shadow-md">
      <Link to="/">
        <h1 className="text-xl font-semibold">Transactions</h1>
      </Link>
    </header>
  );
}
