import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useKeycloak } from '../../contexts/KeycloakContext';
import { ShoppingCart, Menu, X, User, LogOut, Home, Search } from 'lucide-react';

type NavbarProps = {
  toggleCart: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleCart }) => {
  const { isAuthenticated, login, logout, userProfile } = useKeycloak();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
              <span className="text-emerald-500">Click</span>
              <span className="text-gray-800">&</span>
              <span className="text-orange-500">Eat</span>
            </div>
          </Link>

          {/* Search - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                placeholder="Search for restaurants or foods..."
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-emerald-600 font-medium">
              Menu
            </Link>
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-emerald-600"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600">
                  <User className="h-6 w-6" />
                  <span className="font-medium text-sm">
                    {userProfile?.firstName || 'Profile'}
                  </span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors font-medium"
              >
                Sign In
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-gray-700"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button onClick={toggleMenu} className="text-gray-700" aria-label="Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleProfileClick}
                  className="flex items-center py-2 text-gray-700 hover:text-emerald-600 font-medium"
                >
                  <User className="h-5 w-5 mr-2" />
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center py-2 text-gray-700 hover:text-emerald-600 font-medium"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full mt-2 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;