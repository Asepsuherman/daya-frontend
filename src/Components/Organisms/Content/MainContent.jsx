import React from 'react'

const MainContent = ({ children }) => {
  return (
    <div className='relative w-full'>
      {children}
    </div>
  );
};

export default MainContent;