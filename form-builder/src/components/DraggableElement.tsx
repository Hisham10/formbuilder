// src/components/DraggableElement.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../types';

interface DraggableElementProps {
  type: string;
  label: string;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 bg-gray-200 border border-gray-300 rounded-md cursor-grab ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {label}
    </div>
  );
};

export default DraggableElement;
