import React from 'react';

const SectionTitel = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-10' >
            <p className='text-yellow-600 mb-2 ' > ----{subHeading}--- </p>
            <h3 className='text-4xl uppercase font-semibold border-y-2 py-4' >{heading}</h3>
        </div>
    );
};

export default SectionTitel;