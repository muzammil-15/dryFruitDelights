"use client";

import React, { useState } from "react";
import { products } from "@/components/utils";
import Link from "next/link";

const Product = ({ params }) => {
  const { slug } = params;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const product = products.filter((product) => product.slug === slug);
  console.log(product[0]);
  const images = [product[0].image1, product[0].image2, product[0].image3];

  return (
    <div className="min-h-[78vh] p-5 pt-40 lg-pt-20 flex justify-center items-center flex-col lg:flex-row gap-5" >
      <div className="relative w-full lg:w-[45%] flex justify-between items-center gap-2">
      <button className="prev-btn w-10 h-10 text-xl flex justify-center items-center rounded-full bg-orange-700 text-white" onClick={prevSlide}>
          &lt;
        </button>
        <div className="flex ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentIndex ? "visible" : "hidden"
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="w-[400px] h-[400px] object-cover "/>
            </div>
          ))}
        </div>
        
        <button className="next-btn w-10 h-10 text-xl flex justify-center items-center rounded-full bg-orange-700 text-white" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="w-full lg:w-[45%] flex flex-col gap-3">
        <h2 className="text-2xl font-[600] text-orange-900">{product[0].title}</h2>
        <h3 className="text-md font-[700] text-orange-950">{product[0].price} per Kg</h3>
        <h3 className="text-xl font-[700] text-orange-950">Product Details</h3>
        
        <p>{product[0].desc}</p>
        <Link href={'https://whatsapp.com/channel/0029VaAQdHH90x30CMQxwB42'} target="_blank">
        <p className="text-md font-[700] text-orange-950">Contact on Whatsapp for further query +923410707920 </p>
        </Link>
        
        </div>
    </div>
  );
};

export default Product;
