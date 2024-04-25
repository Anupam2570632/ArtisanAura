import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Root = () => {
    return (
        <div>
            <HelmetProvider>
                <Header/>
                <Outlet />
            </HelmetProvider>
        </div>
    );
};

export default Root;