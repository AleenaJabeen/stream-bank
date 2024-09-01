import React,{useState} from 'react';
import Navbar from '../../components/navbar';

function NavbarContainers() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
      };
  return (
    <>
       <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}

export default NavbarContainers;
