import { Link } from "react-router";
import NavLink from "../../components/ui/NavLink";

function Header() {
  return (
    <header className="border-b-2 border-(--gray-dark) p-2 flex">
      <h1 className="text-lg font-medium flex-auto">
        <Link to={"/"}>tools_</Link>
      </h1>
      <nav>
        <ul className="flex gap-4 text-xs font-light">
          <NavLink text="hash_gen" link="/hash-generator" />
          <NavLink text="password_gen" link="/password-generator" />
          <NavLink text="all_tools" link="all-tools" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
