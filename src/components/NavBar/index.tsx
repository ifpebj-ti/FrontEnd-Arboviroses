import { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Jogos', href: '/', subItems: [
      { label: 'Jogo da Memória', href: '/about/new' },
      { label: 'Certo ou Errado', href: '/about/edit' },
    ]
  },
];

const navItemsAdmin: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Jogos', href: '/about', subItems: [
      { label: 'Jogo da Memória', href: '/about/new' },
      { label: 'Certo ou Errado', href: '/about/edit' },
    ]
  },
  { label: 'Admin', href: '/admin' },
]

interface NavBarProps {
  isAdmin: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isAdmin }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // 300ms delay
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const items = isAdmin ? navItemsAdmin : navItems;

  return (
    <nav className="flex justify-between items-center px-4 bg-primary_300 w-full h-10 z-50">
      <div className="flex items-center justify-between w-full lg:w-auto h-full">
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray_100">
            <FaBars size={24} />
          </button>
        </div>
        <div className="hidden lg:flex h-full">
          <ul className="flex text-gray_100 h-full items-center justify-center gap-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="relative h-full"
                onMouseEnter={item.subItems ? handleMouseEnter : () => { }}
                onMouseLeave={item.subItems ? handleMouseLeave : () => { }}
              >
                <a href={item.href} className="px-4 flex items-center justify-between h-full w-full hover:bg-primary_400">
                  {item.label}
                  {item.subItems && <span className="ml-2">&#x25BE;</span>}
                </a>
                {item.subItems && isDropdownOpen && (
                  <ul
                    className="absolute top-full left-0 mt-2 p-2 bg-white shadow-lg w-48"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.href} className="block px-4 py-2 text-black hover:bg-gray-200">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex h-full justify-center items-center gap-x-2">
        <a href="#" className="text-2l text-gray_100  flex items-center justify-center h-full w-full hover:bg-primary_400 px-4">
          Entrar
        </a>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 w-1/2 h-full bg-primary_300 p-4 shadow-lg z-50">
          <button onClick={toggleMenu} className="text-gray_100 mb-4 flex items-center">
            <FaArrowLeft size={24} />
            <span className="ml-2">Voltar</span>
          </button>
          <ul className="flex flex-col text-gray_100 gap-4">
            {items.map((item, index) => (
              <li key={index} className="relative">
                <button className="block py-2 w-full text-left justify-between items-center" onClick={() => toggleSubMenu(index)}>
                  {item.label}
                  {item.subItems && <span className="ml-2">&#x25BE;</span>}
                </button>
                {item.subItems && openSubMenu === index && (
                  <ul className="pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.href} className="block py-2" onClick={toggleMenu}>
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
