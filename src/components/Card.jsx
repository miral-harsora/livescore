import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useState } from 'react';
const Card = () => {
    const pop_players = useSelector(state => state.pop_players)
    const [pplayers, setPplayers] = useState([])
    useEffect(() => {
        setPplayers(pop_players)
    }, [pop_players])
    return (
        <div>
            <div className="container mx-auto pt-8">
                <div className=' mx-auto grid md:grid-cols-3 gap-8 mb-4'>
                    {pplayers.players ? pplayers.players.map((pp) => {
                        return (
                            <div className='flex flex-col  bg-[rgba(255,255,255,0.2)] p-4 shadow rounded-xl mb-4 border-2 border-black  font-semibold mx-4'>
                              
                                <p className='text-xl '><span className='text-blue-500'>Player Name:</span> {pp.player.name}</p>
                                <p className='text-xl'><span className='text-blue-500'>Team:</span> {pp.player.team.name}</p>
                                <p className='text-xl'><span className='text-blue-500'>Country: </span>{pp.player.country.name}</p> 
                                <p className='text-xl'><span className='text-blue-500'>Shirt Number: </span>{pp.player.shirtNumber}</p>
                                <p className='text-xl'><span className='text-blue-500'>DOB: </span>{new Date(pp.player.dateOfBirthTimestamp).getDate()+'/'+
                                (new Date(pp.player.dateOfBirthTimestamp).getMonth()+1)+"/"+(new Date(pp.player.dateOfBirthTimestamp).getFullYear())}</p>
                            </div>
                        )
                    }):<p>No Popular Players Found!</p>}
                </div>
            </div>
        </div>
    );
};

export default Card;