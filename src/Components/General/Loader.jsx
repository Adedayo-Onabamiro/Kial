import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement

export const Loader = () => {

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white opacity-75">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-gray-700" />
    </div>,
    document.getElementById("Loader")
  );
};
