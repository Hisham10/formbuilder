// src/components/Canvas.tsx
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../types';
import useFormStore from '../store';

interface DropItem {
  type: string;
}

const renderElement = (element: { id: string; type: string }) => {
  switch (element.type) {
    case 'text':
      return <input type="text" placeholder="Text Input" className="w-full p-2 border rounded-md" />;
    case 'textarea':
      return <textarea placeholder="Text Area" className="w-full p-2 border rounded-md" />;
    case 'dropdown':
      return (
        <select className="w-full p-2 border rounded-md">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      );
    case 'checkbox':
      return (
        <div className="flex items-center">
          <input type="checkbox" id={element.id} className="mr-2" />
          <label htmlFor={element.id}>Checkbox</label>
        </div>
      );
    case 'radio':
      return (
        <div className="flex items-center">
          <input type="radio" id={element.id} name="radio-group" className="mr-2" />
          <label htmlFor={element.id}>Radio Button</label>
        </div>
      );
    default:
      return null;
  }
};

const Canvas: React.FC = () => {
  const { elements, addElement } = useFormStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    drop: (item: DropItem) => {
      addElement(item.type);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-full p-4 border-2 border-dashed rounded-md transition-colors ${
        isOver ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
      }`}
    >
      {elements.length === 0 ? (
        <p className="text-center text-gray-500">
          Drag and drop elements here to build your form
        </p>
      ) : (
        <div className="space-y-4">
          {elements.map((element) => (
            <div key={element.id} className="p-2 bg-gray-100 rounded-md">
              {renderElement(element)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Canvas;
