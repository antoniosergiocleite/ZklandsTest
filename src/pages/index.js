import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import Courses from '../Components/Courses';
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer';

const Home = () => {

    const[isOpen, setIsOpen] =useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...HomeObjOne}/>
    <Courses />
    <InfoSection {...HomeObjTwo}/>
    <InfoSection {...HomeObjThree}/>
    <Footer/>

    
    </>
  )
};

export default Home