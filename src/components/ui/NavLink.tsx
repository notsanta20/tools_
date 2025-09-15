import { Link } from "react-router";

function NavLink({ text, link }: { text: string; link: string }) {
  return (
    <li className="hover:text-(--gray-dark) hover:cursor-pointer list-none">
      <Link to={link}>{text}</Link>
    </li>
  );
}

export default NavLink;
