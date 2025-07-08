import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryCard from './components/CategoryCard';
import { resourcesData } from './data/resourcesData';
import { Search } from 'lucide-react';
import './styles/animations.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = resourcesData.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.resources.some(resource => 
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section (Home) */}
      <div id="home" className="bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 fade-in">
              Well-Being Resources
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto fade-in-up">
              Discover comprehensive support services designed to help you thrive academically, 
              personally, and professionally throughout your student journey.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div id="resources" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8 fade-in-up">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {filteredCategories.map((category, index) => (
            <div key={category.id} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CategoryCard
                category={category}
                isActive={activeCategory === category.id}
                onToggle={() => toggleCategory(category.id)}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 fade-in">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No resources found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or browse all categories.
            </p>
          </div>
        )}
      </div>

      {/* Contact Section */}
       <div id="contact" className="mt-12 pt-12 pb-16 border-t border-gray-400 dark:border-gray-700 text-center fade-in-up">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-2">
        Need help finding the right resource? We’re here to support you.
        </p>
        <a
          href="mailto:support@example.edu"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-md font-medium transition-colors duration-200"
        >
          support@example.edu
        </a>
      </div>
    </div>
  );
}

export default App;