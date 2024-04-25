import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div>
            <HelmetProvider>
                <Header/>
                <Outlet />
            </HelmetProvider>
            <ToastContainer/>
        </div>
    );
};

export default Root;