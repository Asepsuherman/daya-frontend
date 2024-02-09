import React from 'react';

const UnderConstruction = () => {
    return (
        <div className="flex items-center justify-center border ">
            <div className="text-center">
                <img
                    src="./asset/under-construction.png" // Gantilah dengan URL gambar under construction
                    alt="Under Construction"
                    className="mb-4 mx-auto"
                    style={{ maxWidth: '300px' }}
                />
                <h1 className="font-quicksand text-2xl font-bold text-gray-800 mb-2">Under Construction</h1>
                <p className="text-gray-600 font-satoshi">
                    We're working on something amazing for you. Stay tuned!
                </p>
            </div>
        </div>
    );
};

export default UnderConstruction;
