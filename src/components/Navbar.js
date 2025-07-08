import React, { useState } from 'react';
import { GraduationCap, Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 shadow-sm border-b-2 border-gray-100 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 fade-in">
            <GraduationCap className="w-8 h-8 text-gray-800 dark:text-white" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Student Resources</span>
          </div>

          {/* Desktop Links + Dark Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Home</a>
            <a href="#resources" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Resources</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile: Toggle + Hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <a href="#home" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Home</a>
            <a href="#resources" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Resources</a>
            <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;