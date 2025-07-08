import React from 'react';
import { ExternalLink } from 'lucide-react';

const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
          {resource.name}
        </h4>
        <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-300 flex-shrink-0 ml-2" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
        {resource.description}
      </p>
      <a
        href={resource.link}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ResourceCard;