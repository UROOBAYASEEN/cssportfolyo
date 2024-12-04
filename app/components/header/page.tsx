import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Aboutme = () => {
  return (
    
    <div className='min-h-screen flex  justify-between'>
        <div className='ml-64  pr-28 border-zinc-100'>
            <Image
            src={require("../../data/images.jpeg")}
            height={250}
            width={250}
            alt='aboutpic'

            />
        </div>
        <div>
<h1 className='hover:text-blue-600 pr-64 text-2xl font-thin'>ABOUT ME </h1>
<p className='pt-8 pb-10'>
Hi! i am Urooba Yaseen, a passionate Full Stack Developer specializing in TypeScript, JavaScript, React.js, Next.js, Tailwind CSS, and HTML/CSS. With a strong foundation in both front-end and back-end technologies, I enjoy building seamless and efficient web applications that provide great user experiences.

</p>
<h1 className='hover:text-blue-600 pr-64 text-2xl font-thin uppercase'>My Journey</h1>

<p className='pt-8 pb-10'>I started my journey in tech with a fascination for how things work behind the scenes. After diving into web development, I quickly fell in love with creating dynamic and responsive interfaces. My experiences have led me to work on diverse projects, honing my skills and expanding my knowledge of modern development practices.

</p>
<Link href={"https://www.linkedin.com/in/urooba-yaseen-48964a2b5/"}><button className='border-4  rounded-md border-gray-600 p-5 bg-gray-400 '>CONNECT WITH US </button></Link>
      
        </div>
        
       
     
     
      </div>
    
  )
}

export default Aboutme