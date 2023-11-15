import React, { useEffect, useState } from 'react';
import SectionTitel from '../../../Components/SectionTitel/SectionTitel';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
          fetch('menu.json')
          .then(res => res.json())
          .then(data => {

            const popularItem = data.filter(item => item.category === "popular" )
            setMenu(popularItem)
          })
    }, [])
    return (
        <div className='mb-10' >
            <SectionTitel heading='From Our Menu'
            subHeading='Popular Items' >
            
            </SectionTitel>
            
            <div className='grid md:grid-cols-2 gap-4' >
                {
                    menu.map(item => <MenuItem key={item._id} item={item} ></MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularMenu;