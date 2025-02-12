import React, { useState } from 'react';
import { nameRegex, scoreRegex } from '../helper/Regex';
import { useDispatch } from 'react-redux';
import { addScores, updateModal } from '../action';

const Form = ({ showModal }) => {
    const dispatch = useDispatch()
    const [pname, setPname] = useState("")
    const [score, setScore] = useState("")
    const [error, setError] = useState({ pnameError: "", scoreError: "" })
    const [valid, setValid] = useState(false)

    const handleChange = (e) => {
        if (e.target.id == "pname") {
            validateName(e.target.value)
        } else if (e.target.id == "score") {
            validateScore(e.target.value)
        }
    }
    const validateName = (name) => {
        let err = error.pnameError
        let isvalid = valid
        if (name.trim() == "") {
            err = "Please enter the player name"
            isvalid = false
        } else if (!nameRegex.test(name.trim())) {
            err = "Please enter a valid name"
            isvalid = false
        } else {
            err = ""
            isvalid = true
            setPname(name)
        }
        setError({ ...error, pnameError: err })
        setValid(isvalid)
        return isvalid
    }
    const validateScore = (score) => {
        let err = error.scoreError
        let isvalid = valid
        if (score.trim() == "") {
            err = "Please enter the score"
            isvalid = false
        } else if (!scoreRegex.test(score.trim())) {
            err = "Please enter a valid number"
            isvalid = false
        } else {
            err = ""
            setScore(score)
            isvalid = true
        }
        setError({ ...error, scoreError: err })
        setValid(isvalid)
        return isvalid
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateName(pname) && validateScore(score)) {
            const player = { pname, score }
            dispatch(addScores(player))
            setPname("")
            setScore("")
            dispatch(updateModal(true))

        }
    }
    return (
        <div>
            <div className='md:w-[35%] w-[75%] mx-auto'>
                <div className=' rounded shadow border-[1px] border-gray-800 p-8 mx-auto  mt-10 mb-24 bg-[rgba(255,255,255,0.2)]'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <label htmlFor='pname' className='mb-1 font-semibold text-blue-500'>Player Name</label>
                        <input type='text' id='pname' className='mb-4 border-[1px] border-gray-200 rounded ' onChange={handleChange} value={pname} />
                        <p className='text-red-300'>{error.pnameError}</p>
                        <label htmlFor='score' className='font-semibold text-blue-500'>Score</label>
                        <input type='number' id='score' className='mb-4 border-[1px] border-gray-200 rounded ' onChange={handleChange} value={score} />
                        <p className='text-red-300'>{error.scoreError}</p>
                        <button className='rounded bg-blue-500 p-2 text-white' >Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Form;