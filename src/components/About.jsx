import React from "react";
import { apps } from './constant/constant'


const About = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center m-10 p-4 bg-white rounded-3xl">
          <div className="m-12 p-10 text-lg">
            <h2 className="text-3xl font-bold text-lime-600">Welcome to Quiz Apllication</h2>
            <p className="mt-6 text-black">
              Quiz Application is redefining how students prepare for competitive exams like REET, NEET, and State PSCs. With daily test targets, smart revision,
              and gamified routines, we make learning interactive, interesting, and impactful. Join

            </p>
            <p>Quiz Apllication to build habits, retain concepts, and
              <strong> ace your confidence!</strong></p>
          </div>
        </div>
        <div className="text-center mb-8 ">
          <h2 className="text-3xl font-bold">Our Learning Apps</h2>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {apps.map((app, index) => (
            <div key={index} className="bg-white  shadow-md rounded-lg p-4 text-center transform hover:scale-105 transition duration-300   shadow-cyan-500/50">
              <img src={app.image} alt={app.name} className="w-96 h-48 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{app.name}</h3>
              <p className="text-gray-500 mt-2">{app.description}</p>
              <div className="download-app ">
                <button className="m-3  items-center bg-lime-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition">
                  Download App
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;