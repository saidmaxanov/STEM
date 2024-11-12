import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#0B2A5B] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">STEM Education Resources</h1>
            <p className="text-lg text-blue-200 mt-1">Explore STEM Resources for Students and Educators</p>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-6 lg:mt-8`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-2 lg:space-y-0">
            {['Home', 'Resources', 'Projects', 'STEM Subjects', 'Data Access', 'Contact Us'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="border-t border-blue-700 bg-[#0A2347] py-4">
        <div className="container mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}