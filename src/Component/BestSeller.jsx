import React, { useEffect } from "react";
import { BestProduct } from "../Data/BestProduct";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";

const BestSeller = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-20 bg-lime-100 ">
      <h1 className="lg:text-3xl text-xl pb-8 text-center font-bold text-green-800">
        Best Products
      </h1>
      <Slider {...settings}>
        {BestProduct.map((product) => (
          <div data-aos="fade-up" data-aos-duration="2000" key={product.id}>
            <div className="px-2">
              <img
                className="object-center    hover:object-scale-down object-cover h-60 w-80 rounded-md"
                alt={product.name}
                src={product.image}
                width={300}
                height={300}
              />
            </div>
            <div className=" mx-16 py-2 lg:py-0 lg:mx-0 ">
              <h1 className="lg:py-2 text-green-800 font-bold ">
                {product.name}
              </h1>
              <p className="text-green-800 mb-1 font-semibold">
                $ {product.price}
              </p>
              <div className="flex ">
                <IoIosStar className="text-lg text-yellow-400" />
                <IoIosStar className="text-lg text-yellow-400" />
                <IoIosStar className="text-lg text-yellow-400" />
                <IoIosStar className="text-lg text-yellow-400" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
