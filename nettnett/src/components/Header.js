import { Link } from 'react-router-dom';

const Header = () => {
  const navItems = ['Home', 'About', 'Bio', 'Gallery', 'Shop', 'Contact'];

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link className="text-3xl font-bold text-indigo-600" to="/">
          Artistry by [Artist's Name]
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                className="text-gray-700 text-lg font-medium hover:text-indigo-600 transition-colors duration-200"
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
