import React from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import ResourceCatalog from './components/ResourceCatalog';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CategorySection />
        <ResourceCatalog />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;