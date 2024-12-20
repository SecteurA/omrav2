import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // Close menu when location changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClasses = (isActive: boolean) => 
    isActive 
      ? "text-accent font-bold px-3 py-2 text-lg"
      : "text-gray-900 hover:text-gray-600 px-3 py-2 text-lg font-medium";

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img 
                  src="https://data.wget.ma/travel4you/Travel4you-AR.png" 
                  alt="Travel4You" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            <div className="hidden sm:flex sm:items-center">
              <div className="flex space-x-8 space-x-reverse">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => navLinkClasses(isActive)}
                  end
                >
                  الرئيسية
                </NavLink>
                <NavLink 
                  to="/ramadan-omrah" 
                  className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg text-lg font-medium transition-colors"
                >
                  عمرة رمضان
                </NavLink>
                <NavLink 
                  to="/travel-tips" 
                  className={({ isActive }) => navLinkClasses(isActive)}
                >
                  إرشادات السفر
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => navLinkClasses(isActive)}
                >
                  تواصل معنا
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-accent font-bold' : 'text-gray-900 hover:text-gray-600'} px-3 py-2 text-base font-medium`
              }
              end
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/ramadan-omrah" 
              className="block bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg text-base font-medium transition-colors"
            >
              عمرة رمضان
            </NavLink>
            <NavLink 
              to="/travel-tips" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-accent font-bold' : 'text-gray-900 hover:text-gray-600'} px-3 py-2 text-base font-medium`
              }
            >
              إرشادات السفر
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block ${isActive ? 'text-accent font-bold' : 'text-gray-900 hover:text-gray-600'} px-3 py-2 text-base font-medium`
              }
            >
              تواصل معنا
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}