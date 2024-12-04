"use client"
import React  from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';








    export default function Myhome(){



        return<div><div className="min-h-screen bg-white flex justify-between pt-24">
            <div className="ml-72 leading-7 font-bold font-l pt-20">
                <h1>
                    HELLO
                </h1>
               
               <h1>
                I AM 
                <Typewriter
  options={{
    strings: ['UROOBA YASEEN', 'FULL STACK DEVELPER'],
    autoStart: true,
    loop: true,
  }}
/>
               </h1>
            </div>
            <div className="mr-56">
                <Image 
                src={require("../data/images.jpeg")}
                height={220}
                width={150}
                alt="profile photo"
                />

            </div>


        </div>
      
      
        </div>
    }