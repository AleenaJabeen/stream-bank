import React,{ReactNode} from 'react';
import NavbarContainers from './layoutcontainer/navbarContainers';
import Footer from './component/footer';


interface LayoutProps {
    children: ReactNode;  
  }
function Layout({children}:LayoutProps) {
  return (
    <>
    <NavbarContainers/>
   {children}
    <Footer/>
      
    </>
  )
}

export default Layout;
