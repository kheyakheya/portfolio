import html from '../src/assets/skills/download.png'
import css from '../src/assets/skills/css.png'
import tail from '../src/assets/skills/tail.png'
import jscript from '../src/assets/skills/jscript.png'
import reaact from '../src/assets/skills/react.png'
import node from '../src/assets/skills/node.png'
import express from '../src/assets/skills/express.png';
import mongo from '../src/assets/skills/mongo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (

        <div className="mt-24 md:mt-0 pt-20">
            <h1 data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="mt-24 text-3xl md:text-4xl lg:text-5xl font-bold  text-center">About Me</h1>
            <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="px-8 pt-12  flex justify-center items-center">
                <p className="px-2 md:w-2/3 md:shadow-xl md:px-16 py-8 text-lg mb-8 text-justify">I am a MERN stack developper with skills in  HTML, CSS, Bootstrap, Tailwind CSS, and some other frame works. I have gained a solid understanding of essential tools such as  Node.js, Express.js, MongoDB, JWT. I thrive on the challenges of crafting exceptional user experiences and continuously pushing the boundaries of what is possible. I eagerly embrace emerging technologies like  Redux, Next.js, and TypeScript, as they offer exciting possibilities for creating more performant and maintainable applications. </p>
            </div>
            <h1 data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="my-12 text-3xl md:text-2xl lg:text-3xl font-bold  text-center">Skills</h1>
           <div  className='flex flex-col'>
           <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className='flex items-center justify-center p-4'>
                <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={html} alt="html 5" title='html-5' />
                </div>
                <progress className="progress progress-warning h-4 pl-8 w-1/2" value="90" max="100"></progress>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className='flex items-center justify-center p-4'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={css} alt="css-3" title='css-3' />
                </div>
                <progress className="progress progress-info h-4 pl-8 w-1/2" value="90" max="100"></progress>
            </div>
           </div>
           <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className='flex items-center p-4 justify-center'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={tail} alt="tailwind css" title='tailwind css' />
                </div>
                <progress className="progress progress-info h-4 pl-8 w-1/2" value="80" max="100"></progress>
            </div>
           <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className='flex items-center p-4 justify-center'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={jscript} alt="javascript" title='javascrript' />
                </div>
                <progress className="progress progress-warning h-4 pl-8 w-1/2" value="85" max="100"></progress>
            </div>
           <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className='flex items-center p-4 justify-center'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={reaact} alt="react js" title='react js' />
                </div>
                <progress className="progress progress-info h-4 pl-8 w-1/2" value="85" max="100"></progress>
            </div>
           
           <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className='flex items-center p-4 justify-center'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={node} alt="node" title='node js' />
                </div>
                <progress className="progress progress-success h-4 pl-8 w-1/2" value="40" max="100"></progress>
            </div>
           <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className='flex items-center p-4 justify-center'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={express} alt="node" title='node js' />
                </div>
                <progress className="progress  h-4 pl-8 w-1/2" value="60" max="100"></progress>
            </div>
          
           <div  className='flex items-center p-4 justify-center'>
            <div className='p-3 flex items-center rounded-full shadow-xl'>
                    <img className='w-12 h-12 ' src={mongo} alt="node" title='node js' />
                </div>
                <progress className="progress progress-success  h-4 pl-8 w-1/2" value="60" max="100"></progress>
            </div>

        </div>
    );
};

export default About;