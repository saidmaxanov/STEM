import React from 'react';
import { Clock, Eye } from 'lucide-react';

const resources = [
  {
    title: "Advanced Calculus Guide",
    description: "Comprehensive guide covering differential equations and complex analysis",
    views: 1234,
    readTime: 15,
    category: "Mathematics"
  },
  {
    title: "Coding with Python",
    description: "Learn Python programming from basics to advanced concepts",
    views: 2345,
    readTime: 25,
    category: "Technology"
  },
  {
    title: "DNA Structure Analysis",
    description: "Detailed exploration of DNA structure and function",
    views: 1876,
    readTime: 20,
    category: "Science"
  },
  {
    title: "Engineering Mechanics",
    description: "Fundamentals of statics and dynamics in engineering",
    views: 1543,
    readTime: 30,
    category: "Engineering"
  }
].sort((a, b) => a.title.localeCompare(b.title));

export default function ResourceCatalog() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Resource Catalog</h2>
        <div className="grid gap-6">
          {resources.map((resource) => (
            <div 
              key={resource.title}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <div className="flex flex-col items-end space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye size={16} className="mr-1" />
                    <span>{resource.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{resource.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}