import React from 'react';

const Button = ({ action,children,className,...props }) => {
  return (
    <button
      onClick={action}
      className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 disabled:bg-gray-500 ${className?className:""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
