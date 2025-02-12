import React from 'react';
import { getPopularPlayers } from '../action';
import { useDispatch } from 'react-redux';
import Card from '../components/Card';
import img from '../assets/carousel11.jpg'
import { img_url } from '../assets/constants';
const PopularPlayer = () => {


    const dispatch = useDispatch()
    dispatch(getPopularPlayers())
    return (
        <div className="mx-auto " >
            {/* style={{ backgroundImage: `url(${img_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover","backgroundPosition":"center" }} */}
            <div className='pt-6 '>
                <p className='flex justify-center m-8 text-blue-500 font-bold text-5xl'>Popular Football Players!</p>

                <Card />
            </div>
        </div>
    );
};

export default PopularPlayer;