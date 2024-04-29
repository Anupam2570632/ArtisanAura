import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../../components/Footer";


const Root = () => {
    return (
        <div className="font-cabin">
            <HelmetProvider>
                <Header/>
                <div className=" mt-[65px]">
                <Outlet/>
                </div>
                <Footer/>
            </HelmetProvider>
            <ToastContainer/>
        </div>
    );
};

export default Root;