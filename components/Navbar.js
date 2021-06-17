import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link href="/">
            <a>
              <Image
                src="/../public/logo.png"
                alt="Logo"
                height="150px"
                width="200px"
              />
            </a>
          </Link>
        </li>
        <li className="nav-right">
          <Link href="/about">
            <a>ABOUT ME</a>
          </Link>
        </li>
        <li className="nav-right">
          <Link href="/blog">
            <a>MY BLOG</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
