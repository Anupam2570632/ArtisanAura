import { FaArrowRight } from "react-icons/fa";

const BannerMessage = () => {
    return (
        <div className="space-y-4 text-black">
            <h2 className="animate__animated animate__fadeInDown text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to <span className="text-lime-500">ArtisanAura</span> - Explore Our Ceramics and Pottery Collection
            </h2>
            <p className="animate__animated animate__backInRight text-[#CCCC] mt-4 ">
                Find your craft haven at ArtisanAura. From ceramics like clay-made pottery, stoneware, and porcelain to terra cotta and architectural ceramics. Discover home decor pottery too. Start now!
            </p>
            <a data-aos-delay='400' className="animate__animated animate__bounce animate__delay-1s btn font-bold btn-accent btn-outline">
                See Now
                <FaArrowRight />
            </a>
        </div>
    );
};

export default BannerMessage;