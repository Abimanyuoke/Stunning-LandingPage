"use client"

import productImage from "@/assets/product-image.png"
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2ECFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="seection-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-desc mt-5">Effortlessy turn your ideas into a fully functional, responsive, Sass, website in just minute with this my project</p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="image" className="mt-10" />
        <motion.img src={pyramidImage.src} alt="image" height={262} width={262} className="hidden md:block absolute -right-44 -top-32" 
        style={{
          translateY: translateY,
        }}/>
        <motion.img src={tubeImage.src} alt="image" width={248} height={248} className=" hidden md:block absolute bottom-24 -left-36" 
        style={{
          translateY: translateY,
        }}/>
        </div>
      </div>
    </section>
  );
};
