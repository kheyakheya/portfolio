import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import profilePhoto from '../src/assets/profilee.jpg'
import resumePDF from '../src/assets/resume.pdf';



const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
      
    return (
        <div className="py-20 px-12 md:px-24 bg-gray-200">
            <section className=" flex flex-col md:flex-row items-center justify-between py-16 px-8">
                <div data-aos="fade-left" data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="md:w-1/2 mb-8 md:ml-16 md:mb-0 mt-12 md:mt-12">
                    <img
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                        src={profilePhoto}
                        alt="Profile"
                    />
                </div>
                <div data-aos="fade-right" data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="md:w-1/2  md:ml-52">
                   
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Hi, I am Lubaba Azad
                    </h1>
                    <p className="text-lg mb-8">
                        A Frontend Developer from Dhaka.
                    </p>
                    <button    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                      <a href={resumePDF} download>Download Resume</a> 
                    </button>
                </div>
            </section>


        </div>
    );
};

export default Home;