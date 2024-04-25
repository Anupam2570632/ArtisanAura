// import slider1 from '../../assets/banner5.avif'
// import slider2 from '../../assets/slider2.avif'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import BannerMessage from './BannerMessage';

const Banner = () => {
    return (
        <Swiper navigation={true} loop={true} modules={[Navigation]} className='mySwiper h-screen rounded-xl object-center object-cover'>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1607384070812-0965d8827f6f?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1465631494067-3e0491e95bd1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://media.istockphoto.com/id/910468040/photo/plates-variation.jpg?b=1&s=612x612&w=0&k=20&c=XP2XqzKIdqSaBfO3n4L-Nzxf8eWxMU4Vk2BM3aeWHa0=" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative w-screen mx-auto h-[30vw]">
                <img className='rounded-xl h-full w-full object-cover object-center' src="https://images.unsplash.com/photo-1557644978-f61037cfbe49?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute px-[15vw] flex items-center justify-center inset-0 bg-black bg-opacity-50 right-0 bottom-0'>
                    <BannerMessage/>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Banner;