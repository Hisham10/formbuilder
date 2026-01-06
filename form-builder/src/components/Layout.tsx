// src/components/Layout.tsx
import React from 'react';
import ElementsSidebar from './ElementsSidebar';
import Canvas from './Canvas';
import PropertiesSidebar from './PropertiesSidebar';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-200 font-sans">
      {/* Left Sidebar for Form Elements */}
      <div className="w-1/4 bg-white border-r border-gray-300 p-4">
        <h2 className="text-lg font-bold mb-4">Elements</h2>
        <ElementsSidebar />
      </div>

      {/* Center Canvas for the Form Builder */}
      <div className="flex-1 p-6">
        <Canvas />
      </div>

      {/* Right Sidebar for Component Properties */}
      <div className="w-1/4 bg-white border-l border-gray-300 p-4">
        <h2 className="text-lg font-bold mb-4">Properties</h2>
        <PropertiesSidebar />
      </div>
    </div>
  );
};

export default Layout;
