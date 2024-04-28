import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const BannerMessage = () => {

    const handleType = (number) => {
        // access word count number
        console.log(number);
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    }

    return (
        <div className="space-y-4 text-black text-center">
            <h2 className="animate__animated animate__fadeInDown text-center text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to <span className="text-lime-500">ArtisanAura</span> - Explore Our
                <span className="block" style={{ color: 'cyan', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Stoneware', 'Terra Cotta', 'Porcelain', 'Ceramics']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
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
