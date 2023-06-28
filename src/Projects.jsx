
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from 'react';
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import image1 from '../src/assets/skills/project1.jpg'
import image2 from '../src/assets/skills/project2.jpg';
import image3 from '../src/assets/skills/project3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Modalone from "./Components/Navbar/Modalone";
import ProjectTwo from "./Components/ProjectTwo";

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='mt-32 px-20 py-12 bg-gray-200'>
         <h1 data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="mt-24 text-3xl md:text-4xl lg:text-5xl font-bold  text-center">Projects</h1>

       <div className="flex justify-center items-center mt-8">
       <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16">
       <div className="w-80 h-80 flex justify-center items-center">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className="rounded-md" src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-md"  src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-md"  src={image3} alt="" /></SwiperSlide>
       
      </Swiper>
       </div>
       <div className="flex flex-col justify-center items-center w-full md:w-96 ">
        <h2 className="text-2xl font-bold text-center uppercase pb-4">Sporting Star</h2>
        <p className="text-xl text-justify">A full stack sports academy website for students and instructors where instructors can post classes and dtudents can enroll. </p>

        <div className="flex justify-center space-x-4 pt-4">
        <button    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      <a href='https://assignment-twelve-5e13f.web.app/' >View Website</a> 
        </button>
        <button onClick={()=>window.my_modal_2.showModal()}   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      View Details
        </button>
        <Modalone></Modalone>
        </div>
       </div>
       </div>
       </div>
      <ProjectTwo></ProjectTwo> 
        </div>
    );
};

export default Projects;