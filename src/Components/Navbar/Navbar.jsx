import  { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import './Navbar.css';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');

  const handleSetActive = (to) => {
    setActiveNavItem(to);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
 // responsive navbar
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed w-full  z-10 bg-black py-6 px-8 md:px-24 flex justify-between items-center'>
      <div className="text-white text-xl">Lubaba Azad</div>
      <ul className="hidden lg:flex items-center space-x-4 text-white ">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'
            
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'
           
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'

          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'

          >
            Contact
          </Link>
        </li>
      </ul>
       {/* Mobile Navbar Section */}
       <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-white' />
          </button>
          {menuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-black border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                       <span className='ml-2 text-xl font-bold tracking-wide text-white uppercase'>
                        Lubaba Azad
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-white' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='ms-6 space-y-4  text-white'>
                  <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'            
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'
           
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'

          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            spy={true}
            activeClass="nav-active"
            className='cursor-pointer hover:text-gray-300'

          >
            Contact
          </Link>
        </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
