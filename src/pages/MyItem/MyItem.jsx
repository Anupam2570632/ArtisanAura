import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyItem = () => {
    const loadedItems = useLoaderData()

    const { user } = useContext(AuthContext)
    const email = user.email;

    const myData = loadedItems.filter(item => item.userEmail === email)
    console.log(myData)

    return (
        <div>
            {
                
            }
        </div>
    );
};

export default MyItem;