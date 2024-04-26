
const WhyChooseUs = () => {
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 w-[100%] lg:w-[90%] mx-auto md:mx-0">
                <div className="lg:col-span-3 md:col-span-2 bg-[#fdf6f0] py-20 flex justify-evenly">
                    <div className="space-y-8 lg:ml-40">
                        <h2 className="text-[#2d3448] text-4xl">
                            Why
                            <br />
                            Choose Us
                        </h2>
                        <p className="text-[#2d3448] text-[14px] max-w-[320px] leading-7">
                            WE CURATE INSPIRATION FOR THE HOME, CONNECTING THE CREATIVE WORK OF ARTISANS & DESIGNERS TO PEOPLE AND PLACES AROUND THE WORLD
                        </p>
                    </div>
                </div>
                <div className="bg-[#fdf6f0] flex py-10 flex-col justify-center gap-6">
                    <img className="w-28 ml-4" src="https://mintie.boostifythemes.com/wp-content/uploads/2021/09/wcu-1.svg" alt="" />
                    <h2 className="text-[#2d3448] text-center text-xl font-medium">FREE SHIPPING</h2>
                </div>
                <div className="bg-[#fdf6f0] flex py-10 flex-col justify-center gap-6">
                    <img className="w-28 ml-4" src="https://mintie.boostifythemes.com/wp-content/uploads/2021/09/wcu-2.svg" alt="" />
                    <h2 className="text-[#2d3448] text-center text-xl font-medium">SECURE PAYMENT</h2>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;