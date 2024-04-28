import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#333333] text-white space-y-10 py-16">
            <div className="flex justify-between gap-6 flex-wrap max-w-[1550px] w-11/12 md:w-[85%] mx-auto">
                <div>
                    <Link to={'/'}>
                        <h2 className="font-bold text-[#fff] mb-4 text-3xl p-0">Artisan<span className="text-cyan-500">Aura</span></h2>
                    </Link>
                    <p className="max-w-[400px] text-[#CCCCCC]">
                        Your trusted housing partner. Delivering quality solutions since 2016. Simplifying your property journey with seamless navigation and comprehensive support.
                    </p>
                </div>
                <div className="flex gap-10">
                    <div>
                        <h1 className="text-xl mb-4 font-semibold">Navigation Links</h1>
                        <ul className="flex gap-2 flex-col">
                            <Link className="text-[#CCCCCC]" to={'/'}>Home</Link>
                            <Link className="text-[#CCCCCC]" to={'/allItems'}>All art & craft Items</Link>
                            <Link className="text-[#CCCCCC]" to={'/addItem'}>Add Item</Link>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-xl mb-4 font-semibold">Company</h1>
                        <ul className="flex gap-2 flex-col">
                            <li className="text-[#CCCCCC] hover:cursor-pointer">Term of Services</li>
                            <li className="text-[#CCCCCC] hover:cursor-pointer">Privacy policy</li>
                            <li className="text-[#CCCCCC] hover:cursor-pointer">Return and refund policy</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-xl font-semibold" htmlFor="mail">Subscribe to our email newsletter</label>
                    <div className="flex">
                        <input className="h-full rounded-s-md text-[18px] px-4 text-[#CCCC] " autoComplete="off" type="email" id="mail" placeholder="Enter your email" />
                        <button className="btn rounded-s-none font-bold btn-secondary">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                <div className="flex gap-6 text-[#CCCC] justify-center">
                    <FaFacebook className="text-3xl hover:cursor-pointer"></FaFacebook>
                    <FaLinkedin className="text-3xl hover:cursor-pointer"></FaLinkedin>
                    <FaInstagram className="text-3xl hover:cursor-pointer"></FaInstagram>
                    <FaTwitter className="text-3xl hover:cursor-pointer"></FaTwitter>
                </div>
            </div>
            <div className="border border-b border-dashed max-w-[1300px] mx-auto w-[80%]">

            </div>
            <div className="text-center">
                <p className="">@all rights reserved, <span><Link to={'/'}>
                    <span className="font-bold text-[#fff]">Artisan<span className="text-cyan-500">Aura</span></span>
                </Link></span> services limited.2016</p>
            </div>
        </div>
    );
};

export default Footer;