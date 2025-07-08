import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ResourceCard from './ResourceCard';

const CategoryCard = ({ category, isActive, onToggle }) => {
  const IconComponent = category.icon;

  return (
    <div className="category-card bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-t-lg"
        aria-expanded={isActive}
      >
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          {isActive ? (
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-300 transition-transform duration-200" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-300 transition-transform duration-200" />
          )}
        </div>
      </button>

      {isActive && (
        <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 slide-down">
          <div className="grid gap-4 mt-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {category.resources.map((resource, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ResourceCard resource={resource} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;