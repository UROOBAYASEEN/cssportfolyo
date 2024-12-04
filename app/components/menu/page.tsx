"use client"
import React from "react"
import Image from "next/image"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";


export default function Manubar(){

function  Menuclick(){
    const mynenu=document.getElementById("Mymenu")
    mynenu?.classList.toggle("hidden")
    
}


    return<div className="h-3/4 bg-white flex">
       <div className="flex h-3/4">
        

       <div className="">
         <Image className="ml-9"
     src={require("../../data/illustration-24753-aroob-arabic-name-females-cursive-name-aroob-black--preview.webp")}
     height={100}
     width={100}
     alt="web logo"/>
        </div>
        <div>
         <ul  className="flex text-black font-medium">
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> HOME</li>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> ABOUT</li>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> CONTACT</li>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> PROJECTS</li>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> JOIN US </li>
         </ul>
        </div>
        <div className="ml-52 mt-7 font-bold">
 <button className="hover:text-gray-500" onClick={Menuclick}><SlMenu /></button>
        </div>
        

       

    </div>
    <div id="Mymenu" className="fixed  inset-0 bg-white flex">
    
        

        <div className="">
         <Image className="ml-9"
     src={require("../../data/illustration-24753-aroob-arabic-name-females-cursive-name-aroob-black--preview.webp")}
     height={100}
     width={100}
     alt="web logo"/>
        </div>
        <div>
         <ul  className="mt-32 text-black font-medium">
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> HOME</li>
             <hr></hr>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> ABOUT</li>
             <hr></hr>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> CONTACT</li><hr></hr>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> PROJECTS</li><hr></hr>
             <li className="hover:bg-gray-100 w-32  m-0  mt-6 h-10 text-center "> JOIN US </li>
         </ul>
        </div>
        <div className="ml-52 mt-7 font-bold">
 <button className="hover:text-gray-500" onClick={Menuclick}>< RxCross1/></button>
        </div>
        
 
     </div>

    </div>
    

}