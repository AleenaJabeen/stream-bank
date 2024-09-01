import React from "react";
import Link from "next/link";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}


function Navbar({isMenuOpen,toggleMenu}:NavbarProps){
  return (
    <div className="fixed bg-white pt-4 top-0 left-0 w-full  z-10">
      <nav className="md:flex px-4 md:items-center lg:max-w-7xl justify-between md:px-8 bg-transparent mx-auto">
  <div className="flex items-center justify-between py-3 md:py-4 md:block">
    <div className="text-primary-light font-bold text-2xl">StreamBank</div>
    {/*Menu Icon For mobile screens*/}
    <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-light cursor-pointer" onClick={toggleMenu}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>
</div>
  </div>
  
  <ul className={`text-primary font-semibold md:flex md:items-center bg-white md:pl-7 pl-0 transition-all ease-in duration-400  ${isMenuOpen ? 'md:block' : 'hidden'}`}>
    <Link href={"/#benefitshighlight"}>
      <li className="mx-4 my-6 md:my-0 hover:text-gray-400 duration-500 text-xl">Benefits</li>
    </Link>
    <Link href={"/#security"}>
      <li className="mx-4 my-6 md:my-0 hover:text-gray-400 duration-500 text-xl">Security</li>
    </Link>
    
    <Link href="/download">
      <li className=""><button className='border-2 focus:border-primary focus:bg-transparent  bg-primary text-white text-xl focus:text-primary  font-bold py-2 px-4 rounded-2xl my-4'>Download</button>
      </li>
    </Link>
  </ul>
</nav>

    </div>
  );
};

export default Navbar;
