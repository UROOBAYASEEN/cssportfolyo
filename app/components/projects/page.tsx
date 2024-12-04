import Link from 'next/link'
import React from 'react'

const  Projects = () => {
  return (
    <div className='bg-white mb-20'>
        <h1 className='text-center text-2xl  font-bold'> MY PROJECTS</h1>
        <div className='grid grid-cols-2 min-h-screen mt-14 ml-16 hover:bg-black hover:text-white gap-6  pt-20'>
            <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> STUDENT MANAGENET PROJECT
              <br></br>  <Link href="https://github.com/UROOBAYASEEN/clistudentmanagment" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
                 </div>
            <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> SIMPLE CALCULATOR
            <br></br>  <Link href="https://github.com/UROOBAYASEEN/simple-calculator" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
               
            </div>
            <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> ATM MACHINE
            <br></br>  <Link href="https://github.com/UROOBAYASEEN/cliatmmachine" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
               
            </div>
            <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> COUNT DOWN TIMMER
            <br></br>  <Link href="https://github.com/UROOBAYASEEN/clicountdown" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
               
            </div>
            <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> NUMBER GUSSING GAME
            <br></br>  <Link href="https://github.com/UROOBAYASEEN/number-gusinggame" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
               
            </div>
            <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> MY TODO LIST     <br></br>  <Link href="https://github.com/UROOBAYASEEN/clitodolist" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
            </div>    
             <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> STATIC RESUME
             <br></br>  <Link href="https://github.com/UROOBAYASEEN/milionstone_one_resume" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
             </div>    
              <div  className='hover:bg-white hover:text-black text-center pt-20 font-bold'> DYNAMIC RESUME 
              <br></br>  <Link href="https://github.com/UROOBAYASEEN/militwo" className='h-12 w-11 border-spacing-2 border-black pt-28 text-center'>VIEW PROJECTS</Link>
               
              </div>


        </div>
    </div>
  )
} 

export default  Projects