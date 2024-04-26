import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen w-screen flex items-center bg-[#CCCC] justify-center">
            <div className="space-y-4">
                <h3 className="text-center py-2 text-red-500 font-black text-8xl mx-auto border-2 border-red-400 rounded-xl">404</h3>
                <h1 className="text-7xl font-black">Oops...</h1>
                <p>The webpage is not available. We suggest you back to home.</p>
                <div>
                    <Link to={'/'}><button className="btn btn-outline btn-primary">Back to Home <FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;