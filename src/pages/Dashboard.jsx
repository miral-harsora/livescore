import React from 'react';
import Form from '../components/Form';
import CarouselComp from '../components/CarouselComp';
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { useDispatch, useSelector } from 'react-redux';
import { updateModal } from '../action';
import { FaCross } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
const Dashboard = () => {
  const show_modal = useSelector(state => state.show_modal)
  const dispatch = useDispatch()
  return (
    <div className='mx-auto '>
      <TEModal show={show_modal} setShow={show_modal}>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 ">
                LiveScore
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => dispatch(updateModal(false))}
                aria-label="Close"
              >
                <IoMdClose  />
                {/* <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="1.5"
                   stroke="currentColor"
                   className="h-6 w-6"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 18L18 6M6 6l12 12"
                   />
                 </svg> */}
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody >Player added successfully!</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => dispatch(updateModal(false))}
                >
                  Close
                </button>
              </TERipple>
             
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
      <div className="relative">
  <CarouselComp />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
    <div className="md:flex flex-col justify-center items-center md:mt-0  md:w-3/4 ">
      <p className="font-bold py-1 text-yellow-500 md:text-3xl text-xl text-center mx-8 w-[75%]  bg-[rgba(255,255,255,0.9)] rounded p-4">
        Welcome to LiveScore!
        <br />
        <span className="md:text-xl text-base text-black font-semibold">
          Your go-to destination for real-time sports updates, match results, and in-depth game analysis.
        </span>
      </p>
    </div>
  </div>
</div>

      <Form className=" mx-8" />
      

    </div>
  );
};

export default Dashboard;