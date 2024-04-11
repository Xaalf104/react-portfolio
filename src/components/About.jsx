import React from 'react'
import Fade from './Animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faPython} from '@fortawesome/free-brands-svg-icons';
import pythonLogo from '../assets/icons/python.png'
import nodejsLogo from '../assets/icons/nodejs.png'
import tailwindLogo from '../assets/icons/TailwindCss.png'

const About = () => {
  return (
    <div className="bg-[#f4f4f4] h-full w-full bg-cover bg-fixed">
      <div className="max-w-[1150px] w-full h-screen text-center lg:mx-auto flex-col ">
        <Fade>
          <h2 className="text-center my-32 my font-spacemono text-[40px]">
            About Me
          </h2>
        </Fade>

        {/*Parent class*/}
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 -my-16">

          <div className="h-50 mb-5 ml-5 mr-5 lg:ml-5 lg:mr-auto w-[420px] sm:w-[600px] lg:w-[350px] md:w-[700px] md:ml-20">
            <ul className="font-spacemono w-[90%] md:mb-3 float-left text-left">
              <li>
                <span className="w-[40%] float-left inline-block font-bold">
                  Full Name:
                </span>
                <span className="w-[60%] text-[rgb(0,0,0,0.5)] inline-block">
                  Al-Sharief Jhulsadjiri Dinglasa
                </span>
              </li>
              <li>
                <span className="w-[40%] float-left inline-block font-bold">
                  Email:
                </span>
                <span className="w-[60%] text-[rgb(0,0,0,0.5)] text-justify lg:block md:inline-block">
                  alsharief.dinglasa06@gmail.com
                </span>
              </li>
              <li>
                <span className="w-[40%] float-left inline-block font-bold">
                  Age:
                </span>
                <span className="w-[60%] text-[rgb(0,0,0,0.5)] inline-block">
                  21 years old
                </span>
              </li>
              <li>
                <span className="w-[40%] float-left inline-block font-bold">
                  Phone:
                </span>
                <span className="w-[60%] text-[rgb(0,0,0,0.5)] inline-block">
                  +63 905 557 1486
                </span>
              </li>
            </ul>
          </div>


          <div className="h-50 col-span-2 2xl:w-[700px] lg:w-[670px] text-left font-spacemono ml-5 mr-5 md:ml-20 md:mr-20 lg:ml-auto">
            <h2 className="text-[30px] mb-5">Hello there!</h2>
            <p className="mb-5 block text-justify text-[#4d4d4d]">
              My name is Al-Sharief Dinglasa and I look forward to becoming a
              Backend Developer in career and Game Developer as a hobby in the future.
            </p>
            <p className="mb-5 block text-justify text-[#4d4d4d]">
              I have always loved playing digital games at an early age and
              cultivated it throughout the years by playing, and given my
              tinkerer lifestyle, I have come to a point where I am now
              dedicated and passionate about conceptualizing and building games.
              Professionally or as a hobby.
            </p>
          </div>

        </div>

        <div>
            <h2 className="text-center my-24 font-spacemono text-[40px]">Tech Stack</h2>
        </div>

        <div className="h-72 grid grid-cols-5">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B"}} size='7x'/>
            <h2 className="text-center font-spacemono font-bold my-5">JavaScript</h2>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC"}} size='7x'/>
            <h2 className="text-center font-spacemono font-bold my-5">React</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={pythonLogo} alt="Python" style={{width: '100px', height:'105px'}}/>
            <h2 className="text-center font-spacemono font-bold my-5">Python</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={nodejsLogo} alt="Node.js" style={{width: '100px', height:'105px'}}/>
            <h2 className="text-center font-spacemono font-bold my-5">Node.js</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={tailwindLogo} alt="Tailwind CSS" style={{width: '150px', height:'100px'}}/>
            <h2 className="text-center font-spacemono font-bold my-5">Tailwind CSS</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
