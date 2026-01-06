// src/components/ElementsSidebar.tsx
import React from 'react';
import DraggableElement from './DraggableElement';

const formElements = [
  { type: 'text', label: 'Text Input' },
  { type: 'textarea', label: 'Text Area' },
  { type: 'dropdown', label: 'Dropdown' },
  { type: 'checkbox', label: 'Checkbox' },
  { type: 'radio', label: 'Radio Button' },
];

const ElementsSidebar: React.FC = () => {
  return (
    <div>
      {formElements.map((element) => (
        <DraggableElement
          key={element.type}
          type={element.type}
          label={element.label}
        />
      ))}
    </div>
  );
};

export default ElementsSidebar;
