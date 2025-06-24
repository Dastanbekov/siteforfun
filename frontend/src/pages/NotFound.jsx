import React from 'react';
import notFoundImage from '../assets/NotFound.png';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="max-w-[80%] max-h-[80%]"
      />
      <h2 className="mt-5 text-xl text-gray-700">Страница не найдена</h2>
    </div>
  );
};

export default NotFound;
