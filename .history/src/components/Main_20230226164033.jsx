import React from "react";
import { TypeAnimation } from "react-type-animation"

const Main = () => {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover object-right " src="/src/assets/saadelfadil.jpg" alt="saadelfadil" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
            <div className="">
                <h1>I'm Saad El fadil</h1>
                <h2>I'm a
                <TypeAnimation
      sequence={[
        'One', // Types 'One'
        1000, // Waits 1s
        'Two', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Two Three', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
                </h2>
            </div>
        </div>
    </div>
  )
};

export default Main;
