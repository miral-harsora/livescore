import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    const [activeLink,setActiveLink] = useState('')
    const [visible,setVisible]=useState(false)
    const handleClickLink = (linkname)=>{
        setActiveLink(linkname)
        setVisible(false)
    }
    const toggleVisibility = (current)=>{
        setVisible(!current)
    }
    return (
        <div className=' w-full'>
            <div className='flex justify-between items-center shadow bg-transparent w-full'>
                <div className='flex justify-start'>
            <p className='text-blue-500 font-bold italic p-2 mx-4 text-2xl'>LiveScore</p>
            </div>
            <div className='flex justify-end mx-4 text-blue-500'>
            <FaBars className='md:hidden visible ' onClick={()=>toggleVisibility(visible)} />
            <div className={` md:visible  md:flex p-2 hidden`}>
                <Link to="/"><p className={`mx-4  ${activeLink ==='home' ? 'font-bold':''}`} onClick={()=>handleClickLink('home')}>Dashboard</p></Link>
                <Link to="/score"><p className={`mx-4 ${activeLink ==='score' ? 'font-bold':''}`} onClick={()=>handleClickLink('score')}>Score</p></Link>
                <Link to="/popularplayer"><p className={`mx-4 ${activeLink ==='popularplayer' ? 'font-bold':''}`} onClick={()=>handleClickLink('popularplayer')}>Popular Player</p></Link>
                <Link to="/about"><p className={`mx-4 ${activeLink ==='about' ? 'font-bold':''}`} onClick={()=>handleClickLink('about')}>About</p></Link>
                <Link to="/contact"><p className={`mx-4 ${activeLink ==='contact' ? 'font-bold':''}`} onClick={()=>handleClickLink('contact')}>Contact</p></Link>
            </div>
            </div>
            </div>
            <div className={` md:hidden  ${visible===true ?'visible flex flex-col w-full justify-end p-2':'hidden'}`}>
            <Link to="/"><p className={`mx-4 text-end ${activeLink ==='home' ? 'font-bold':''}`} onClick={()=>handleClickLink('home')}>Dashboard</p></Link>
                <Link to="/score"><p className={`mx-4 text-end ${activeLink ==='score' ? 'font-bold':''}`} onClick={()=>handleClickLink('score')}>Score</p></Link>
                <Link to="/popularplayer"><p className={`mx-4  text-end ${activeLink ==='popularplayer' ? 'font-bold':''}`} onClick={()=>handleClickLink('popularplayer')}>Popular Player</p></Link>
                <Link to="/about"><p className={`mx-4 text-end ${activeLink ==='about' ? 'font-bold':''}`} onClick={()=>handleClickLink('about')}>About</p></Link>
                <Link to="/contact"><p className={`mx-4 text-end ${activeLink ==='contact' ? 'font-bold':''}`} onClick={()=>handleClickLink('contact')}>Contact</p></Link>
            </div>
       
        </div>
    );
};

export default Navbar;