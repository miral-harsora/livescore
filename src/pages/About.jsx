import React from 'react';
import { img_url } from '../assets/constants';

const About = () => {
    const myStyle = {
        position: "absolute",
        maxWidth: "100%",
        height: "auto",
        top: "20%",
        left: "25%",
        transform: `translate(-25%)`
    }
     const url = "https://png.pngtree.com/background/20230526/original/pngtree-green-field-inside-football-stadium-in-silhouette-under-sky-picture-image_2745416.jpg"
    return (
        <div className="mx-auto  text-blue-500 h-screen" >
            <div className='flex flex-col sm:flex-row text-center text-3xl container mx-auto  pt-6 items-center'>


            <div className='flex flex-col justify-center py-4  w-3/4 mx-auto mt-8'>
                    <p className='md:text-5xl sm:text-2xl font-bold md:mb-4 text-black-700'>About Us</p>
                    <p className='py-4 md:text-xl text-base text-justify md:tracking-wide text-black-700 font-semibold md:leading-8 '>At LiveScore, we are passionate about bringing sports fans the fastest and most accurate real-time updates. Whether it’s football, cricket, basketball, tennis, or any other major sport, we ensure you never miss a moment of the action.</p>
                </div>
                {/* <div className=' flex md:justify-end justify-center items-center'>

                    <div className='md:w-3/5 w-1/2 pe-4'>
                        <img src="https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg?t=st=1736750445~exp=1736754045~hmac=bbe02e65e86bebe286c676a3b04efdd0ac5240da2b283628469e241f9d678957&w=826" />
                    </div>
                </div> */}
            </div>
            <div className=' flex flex-col items-center py-2  mb-8'>
                {/* <img src={"https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1736749825~exp=1736753425~hmac=e5d2faf3d85489a8b00d160175b88d3063dbc0f445f9fea29017e6f07b89b9b8&w=1380"} className='w-1/3'/> */}
                <div className='flex flex-col justify-center py-4  md:w-3/4'>
                    <p className='md:text-5xl sm:text-3xl font-bold text-center text-black-700'>What We Do</p>
                    <p className='md:px-28 px-12 py-8 text-justify md:text-xl text-base font-semibold md:leading-8'>Founded by sports enthusiasts, LiveScore is built to provide instant scores, match analysis, and in-depth statistics for leagues and tournaments across the globe. Our mission is to keep fans connected to the game, no matter where they are.</p>
                </div>
                <div className='flex flex-col justify-center py-4'>
                    <p className='md:text-5xl sm:text-3xl font-bold text-center text-black-700'>What We Offer</p>
                    <p className='md:px-28 px-12 py-8 text-justify md:text-xl text-base font-semibold md:leading-8'>⚡ Real-Time Scores & Stats – Instant updates on live matches.
                       <br></br> 📊 Detailed Match Insights – Lineups, player stats, and game analytics.
                       <br></br> 📢 Custom Alerts – Get notifications for your favorite teams and competitions.
                       <br></br> 📅 Schedules & Fixtures – Stay ahead with upcoming match details.
                        <br></br>🎥 Match Highlights – Relive the best moments with video highlights.</p>
                </div>
            </div>

        </div>

    );
};

export default About;