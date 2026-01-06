// src/components/Layout.tsx
import React from 'react';
import ElementsSidebar from './ElementsSidebar';
import Canvas from './Canvas';
import PropertiesSidebar from './PropertiesSidebar';

const Layout: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Form Builder</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Preview
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Publish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex" style={{ height: 'calc(100vh - 68px)' }}>
        {/* Left Sidebar for Form Elements */}
        <div className="w-1/4 bg-white p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Elements</h2>
          <ElementsSidebar />
        </div>

        {/* Center Canvas for the Form Builder */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Canvas />
        </div>

        {/* Right Sidebar for Component Properties */}
        <div className="w-1/4 bg-white p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Properties</h2>
          <PropertiesSidebar />
        </div>
      </main>
    </div>
  );
};

export default Layout;
