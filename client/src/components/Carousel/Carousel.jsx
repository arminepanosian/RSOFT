import React from 'react'
import proj1 from "../../assets/images/project.jpg"
import proj2 from "../../assets/images/project2.avif"
import proj3 from "../../assets/images/project3.avif"
import proj4 from "../../assets/images/project4.jpg"


import bgdonut1 from './image/bg-donut-1.png'
import bgdonut2 from './image/bg-donut-2.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/bundle';

import './Carousel.css'

const slider = [
    {
        title: "Digital Symphony",
        description: "Explore RSOFT's cutting-edge activities in the digital world, shaping tomorrow through innovative solutions and technology prowess.",
        url: proj1
      },
      {
        title: "RSOFT Scholars",
        description: "Meet the brilliant minds of RSOFT – where students thrive, innovate, and shape the future of technology.",
        url: proj2
      },
      {
        title: "Voices of Praise",
        description: "Discover what clients and partners are saying about RSOFT's exceptional services and innovative solutions.",
        url: proj3
      },
    
      {
        title: "Armenian Market Impact",
        description: "Discover our profound activities shaping success in the Armenian market through innovation, dedication, and strategic prowess.",
        url: proj4
      },
]

const Carousel = () => {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>
                <span>discover</span>
                <h1>Welcome to R'SOFT</h1>
                <hr />
                <p>Hello from RSoft, where innovation meets excellence in software development. Elevate your digital experience with us!</p>
                <a href="#" className='slider-btn'>download app</a>
            </div>
        </div>

        <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a href={`${data.url}`} target="_blank" className='slider-btn'>explore</a>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        {/* <img src={bgdonut1} alt="bg image" className='bgdonut1' />
        <img src={bgdonut2} alt="bg image" className='bgdonut2' /> */}
    </div>
  )
}

export {Carousel}