import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {
  const [swiper, setSwiper] = useState(null); // State to hold Swiper instance

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const ServiceData = [
    {
      phase: 1,
      title: "Initial Design and Development",
      question: "Q1 2023",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit sit in rem soluta! Omnis, debitis doloremque!",
    },
    {
      phase: 2,
      title: "Testing and Refinement",
      question: "Q2 2023",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit sit in rem soluta! Omnis, debitis doloremque!",
    },
    {
      phase: 3,
      title: "Deployment",
      question: "Q3 2023",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit sit in rem soluta! Omnis, debitis doloremque!",
    },
    {
      phase: 4,
      title: "User Feedback and Iteration",
      question: "Q4 2023",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit sit in rem soluta! Omnis, debitis doloremque!",
    },
    {
      phase: 5,
      title: "Finalization and Launch",
      question: "Q1 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit sit in rem soluta! Omnis, debitis doloremque!",
    },
    {
      phase: 6,
      title: "Post-launch Support and Maintenance",
      question: "Q2 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit sit in rem soluta! Omnis, debitis doloremque!",
    }
  ];

  return (
    <div className="flex items-center justify-center flex-col  relative w-[1100px] bg-main-yellow rounded-3xl m-[100px]" data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      {/* Previous Button */}
      <div className='text-4xl flex justify-center m-[20px]'>
                    Roadmap
                </div>
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-main-yellow w-[100px] p-2 rounded-full shadow-md" onClick={goPrev}>
        Previous
      </button>

      {/* Next Button */}
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-main-yellow w-[100px] p-2 rounded-full shadow-md" onClick={goNext}>
        Next
      </button>

      {/* Swiper */}
      <Swiper
        onSwiper={setSwiper}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] mt-6"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-[20px] mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[314px] w-[250px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col border  bg-main-bgColor h-[314px] gap-[20px] p-4 rounded">
                <div className="w-[100px] p-2 bg-main-yellow rounded m-auto mt-4">
                 Phase {item.phase}
                </div>
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Roadmap;
