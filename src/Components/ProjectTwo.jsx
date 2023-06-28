// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import image4 from '../../src/assets/skills/project4.jpg'
import image5 from '../../src/assets/skills/project5.jpg';
import image6 from '../../src/assets/skills/project6.jpg'
import ModalTwo from "./ModalTwo";
const ProjectTwo = () => {
    return (
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
        <SwiperSlide><img className="rounded-md" src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-md"  src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-md"  src={image6} alt="" /></SwiperSlide>
       
      </Swiper>
       </div>
       <div className="flex flex-col justify-center items-center w-full md:w-96 ">
        <h2 className="text-2xl font-bold text-center uppercase pb-4">Toyomoy</h2>
        <p className="text-xl text-justify">A multiple seller website where different sellers can post their product and see their added product and update them. </p>
        <div className="flex justify-center space-x-4 pt-4">
        <button    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      <a href='https://assignment-eleven-11d98.web.app/' >View Website</a> 
        </button>
        <button onClick={()=>window.my_modal_3.showModal()}   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      View Details
        </button>
       <ModalTwo></ModalTwo>
        </div>
       </div>
       </div>
       </div>
    );
};

export default ProjectTwo;