import { NavLink } from "react-router";
function Header() {
  return (
    <div style={{ backgroundColor: '#8b0000' }} className="text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">Chocolat Privé</div>
        <ul className="flex gap-4">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/products" className="hover:text-gray-300">Products</NavLink>
          <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
          <NavLink to="/about" className="hover:text-gray-300">AboutUs</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
