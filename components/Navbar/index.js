import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-6 text-sm">
      <ul className="flex justify-center sm:justify-start space-x-9">
        <li className="tracking-widest text-gray-400 transition duration-300 hover:text-gray-900">
          <Link href="/">Home</Link>
        </li>
        <li className="tracking-widest text-gray-400 transition duration-300 hover:text-gray-900">
          <Link href="/about">About</Link>
        </li>
        <li className="tracking-widest text-gray-400 transition duration-300 hover:text-gray-900">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="tracking-widest text-gray-400 transition duration-300 hover:text-gray-900">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <hr className="mt-5" />
    </nav>
  );
};

export default Navbar;
