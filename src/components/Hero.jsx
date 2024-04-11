import React from 'react'

//#4d4d4d
const Hero = () => {
  return (
    <div className="bg-main h-full w-full bg-cover bg-fixed bg-[rgb(0,0,0,0.5)] bg-blend-darken">
      <div className="text-black">
        <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="flex justify-center w-auto h-auto rounded-full mx-auto">
            <img
              className="justify-center size-52 rounded-full p-2 m-5"
              src="./src/assets/user-icon.jpg"
              alt="avatar"
            ></img>
          </div>
          <h1 className="text-4xl md:text-5xl sm:text-4xl lg:text-5xl md:py-2 text-[#Ffffff] font-kaushan -rotate-6">
            - Al-Sharief Dinglasa -
          </h1>
          <div className="text-[15px] md:text-[15px] sm:text-[13px] lg:text-[20px] font-spacemono text-white md:pl-4 p-2 m-3">
            <h3>Backend & Game Developer</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
