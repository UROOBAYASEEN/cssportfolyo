
import React from "react";
import Aboutus from "./components/about";
import Myhome from "./home/page";
import Aboutme from "./components/header/page"
import Contactus from "./components/contact/page";
import Projects from "./components/projects/page";
import Join from "./components/joinus/page";







export default function Home(){



    return<div>
  
  <Aboutus/>
    <Myhome/>
    <Aboutme/>
    <Projects/>
    
    <Contactus/>
    <Join/>

    
    </div>
}