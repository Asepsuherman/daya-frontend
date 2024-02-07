import React from 'react'

const MainContent =  ({  children }) => {
    return (
      <div className='ml-52 h-screen overflow-y-auto w-full'>
        {children}
      </div>
    );
};

export default MainContent;