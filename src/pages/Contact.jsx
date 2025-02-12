import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope, FaMapLocation } from 'react-icons/fa6';


const Contact = (props) => {
    const myStyle = {
        position: "absolute",
        maxWidth: "100%",
        height: "auto",
        top: "20%",
        left: "25%",
        transform: `translate(-25%)`
    }


    return (
        <div className="mx-auto  text-blue-500 h-screen" >

            <div className='flex flex-col sm:flex-row text-center text-3xl container mx-auto pt-6  items-center '>


                <div className=' justify-center text-center w-3/4 mx-auto mt-8'  >
                    <p className='md:text-5xl sm:text-2xl font-bold md:mb-4 text-black-700'>Contact Us</p>
                    <p className='py-4 md:text-xl text-base text-center md:tracking-wide text-black-700 font-semibold md:leading-8'>"Have questions, feedback, or suggestions? We’d love to hear from you! At LiveScore, your thoughts help us improve and deliver the best live scoring experience. Reach out to us anytime—we’re here to assist you!"</p>
                </div>

            </div>
            <div className='flex flex-col md:flex-row text-center text-3xl container mx-auto    items-center justify-center w-3/4'>
                <div className=' px-12 flex-col justify-center  '>
                    <div className='py-4 flex '><FaMapLocation /> <p className='text-xl px-4 md:w-3/4 text-start'>2386 S Flower Ave
                        Port Orchard, Washington(WA), 98366</p></div>

                    <div className='py-4 flex '><FaEnvelope /><p className='px-4 text-xl'>help@livescore.com</p></div>
                    <div className='py-4 flex '><FaPhone /><p className='px-4 text-xl'>(360) 697-4451</p></div>
                </div>
                <div className="relative  w-[100%] md:h-80 h-60 overflow-hidden m-8 rounded-xl">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2386%20S%20Flower%20Ave%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Port%20Orchard,%20Washington(WA),%2098366+(livescore)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps handsets</a></iframe></div>

            </div>
        </div>
    );
};

export default Contact;