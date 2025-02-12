import React, { useEffect, useState } from 'react';
import img3 from "../assets/scores.jpg"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { deleteScores } from '../action';
const Score = () => {
    const [player, setPlayer] = useState([])
    const url = "https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60377.jpg?uid=R184335704&ga=GA1.1.253641614.1733832189&semt=ais_hybrid"
    const dispatch = useDispatch()
    let players = useSelector(state => state.players, shallowEqual);
    useEffect(() => {
        setPlayer(players);
    }, [players]);

    // console.log(player)
    const onSearch = (e) => {
        console.log(e.target.value)
        let filtered = players.filter(p =>
            p.pname.includes(e.target.value)
        )
        setPlayer(filtered)

    }
    const deletePlayer = (player) => {
        console.log("player " + player)
        dispatch(deleteScores(player))
    }

    return (


        <div className="mx-auto " >
            {/* style={{ backgroundImage: `url(${url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
             bg-linear-to-r/shorter from-indigo-500 to-teal-400 */}
            <div className='pt-6 h-screen'>
                <p className='flex justify-center m-8 text-blue-500 font-bold text-5xl'>Check out the latest scores!</p>
                <div className='flex justify-center'>
                    <input type='text' placeholder='Search' className='flex justify-center m-8 border-[1px] border-gray-200 rounded p-2 w-100 text-black' onChange={onSearch} />
                </div>
                {/* <div className={`mx-auto bg-[url(${img3})]`}>
                hi
            </div> */}
                <div className="container mx-auto mb-4">

                    {player.length ? (
                        <div className=' mx-auto grid md:grid-cols-3 gap-8 mb-4 '>
                            {
                                player.map((one) =>
                                (
                                    <div className='flex flex-col  p-4 shadow rounded-xl mb-4 border-2 border-black mb-4 mx-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex flex-col text-black'>
                                                <p className='text-xl '><span className='text-blue-500'>Player Name:</span> {one.pname}</p>

                                                <p className='text-xl'><span className='text-blue-500'>Score:</span> {one.score}</p>
                                            </div>

                                            <MdDelete size={28} onClick={() => deletePlayer(one)} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <div className='flex justify-center'><p className='text-black mx-auto text-xl'>No Players found!</p></div>}
                </div>

            </div>
        </div>
    );
};

export default Score;