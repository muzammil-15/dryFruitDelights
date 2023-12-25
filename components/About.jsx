import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col" id="about">
      <div className="text-slate-900 text-5xl font-extrabold leading-normal self-center whitespace-nowrap mt-24 max-md:text-4xl max-md:mt-10">
        About Us
      </div>
      <div className="text-slate-900 text-center text-lg leading-7 self-center max-w-[856px] mt-8 max-md:max-w-full">
        Welcome to our online dry fruit store, where natural goodness meets
        convenience. Discover a delightful assortment of dry fruits and nuts,
        carefully selected to satisfy your cravings and boost your health. With
        a simple click, you can bring the wholesome flavors of dried fruits
        right to your doorstep. Explore our store and savor the essence of
        nature&apos;s bounty, one delicious bite at a time.
      </div>
      <div className="flex-col overflow-hidden relative flex min-h-[449px] w-full justify-center items-stretch mt-7 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10cd87455a6a7a8c4eb9f4b668da2f74203dda34cd0dbdbf541f0e9c2e1311f7?apiKey=fc1c9ce16e8749a69ba304dc7ad86376&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
      </div>
    </div>
  );
};

export default About;
