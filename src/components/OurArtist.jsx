import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa6';
import './item.css'
const OurArtist = () => {
    return (
        <div className='w-11/12 md:w-4/5 mx-auto text-center space-y-10 my-20'>
            <h2 className='text-2xl md:text-4xl font-bold'>Creative Modern Artists</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto gap-6'>
                <div className="card-main relative w-64 overflow-hidden mx-auto">
                    <img className="object-cover object-center" src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    <div className="bg-black card-item absolute h-[45%] text-center flex flex-col items-center justify-center gap-4 w-full -bottom-56 font-bold text-black">
                        <h2 className='text-2xl font-bold text-[#3e454c]'>ELISA CARTER</h2>
                        <h3 className='text-[#676d72] text-xl font-semibold'>Modern Art</h3>
                        <div className='flex gap-6 mt-4 text-[#0eb2e7] text-xl items-center'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaGoogle />
                        </div>
                    </div>
                </div>
                <div className="card-main relative w-64 overflow-hidden mx-auto">
                    <img className="object-cover object-center" src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    <div className="bg-black card-item absolute h-[45%] text-center flex flex-col items-center justify-center gap-4 w-full -bottom-56 font-bold text-black">
                        <h2 className='text-2xl font-bold text-[#3e454c]'>CLINT DAVIS</h2>
                        <h3 className='text-[#676d72] text-xl font-semibold'>Sculptor</h3>
                        <div className='flex gap-6 mt-4 text-[#0eb2e7] text-xl items-center'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaGoogle />
                        </div>
                    </div>
                </div>
                <div className="card-main relative w-64 overflow-hidden mx-auto">
                    <img className="object-cover object-center" src='https://images.unsplash.com/photo-1602442787305-decbd65be507?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                    <div className="bg-black card-item absolute h-[45%] text-center flex flex-col items-center justify-center gap-4 w-full -bottom-56 font-bold text-black">
                        <h2 className='text-2xl font-bold text-[#3e454c]'>THELMA HAYNES</h2>
                        <h3 className='text-[#676d72] text-xl font-semibold'>Ceramist</h3>
                        <div className='flex gap-6 mt-4 text-[#0eb2e7] text-xl items-center'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaGoogle />
                        </div>
                    </div>
                </div>
                <div className="card-main relative w-64 overflow-hidden mx-auto">
                    <img className="object-cover object-center" src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' alt="" />
                    <div className="bg-black card-item absolute h-[45%] text-center flex flex-col items-center justify-center gap-4 w-full -bottom-56 font-bold text-black">
                        <h2 className='text-2xl font-bold text-[#3e454c]'>MUKESH KUMAR</h2>
                        <h3 className='text-[#676d72] text-xl font-semibold'>Modern Artist</h3>
                        <div className='flex gap-6 mt-4 text-[#0eb2e7] text-xl items-center'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaGoogle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurArtist;