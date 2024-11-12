import React from 'react';
import { Flask, Cpu, Wrench, Calculator } from 'lucide-react';

const categories = [
  { name: 'Science', icon: Flask, color: 'from-purple-500 to-purple-700' },
  { name: 'Technology', icon: Cpu, color: 'from-blue-500 to-blue-700' },
  { name: 'Engineering', icon: Wrench, color: 'from-green-500 to-green-700' },
  { name: 'Mathematics', icon: Calculator, color: 'from-red-500 to-red-700' }
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">STEM Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${color} 
                         transform hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="p-6 text-white h-full flex flex-col items-center justify-center">
                <Icon size={48} className="mb-4" />
                <h3 className="text-xl font-semibold text-center">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}