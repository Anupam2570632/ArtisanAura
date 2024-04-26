import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

export function AddItem() {

    const { user } = useContext(AuthContext)

    const handleSubmit = e => {

        e.preventDefault();
        const form = e.target;
        const item_name = form.elements['name'].value;
        const image = form.elements['photo'].value;
        const price = form.elements['price'].value;
        const rating = form.elements['rating'].value;
        const processing_time = form.elements['time'].value;
        const stockStatus = form.elements['stock'].value;
        const userEmail = form.elements['email'].value;
        const userName = form.elements['userName'].value;
        const shortDescription = form.elements['description'].value;
        const subcategory_name = form.elements['subcategory'].value;
        const customization = form.elements['customization'].value;

        const item = { item_name, image, subcategory_name, price, rating, customization, processing_time, stockStatus, userEmail, userName, shortDescription };
        console.log(item);

        fetch('http://localhost:5000/items', {
            method:'POST', 
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal({
                    title: "Item Added Successfully!",
                    icon: "success",
                    button: "OK!",
                  });
                  form.reset()
            }
        })
    };

    return (
        <div className="w-full bg-[#fff]">
            <Card className="w-[65%] mx-auto p-20" color="transparent" shadow={false}>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Add Item 
                </Typography>
                <Typography color="gray" className="mt-1 text-center font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit} className="mt-8 mb-2 max-w-screen-lg">
                    <div className="space-y-6">
                        <div className="mb-1 flex gap-6">
                            <Input name="name" color="blue" label="Item Name" />
                            <Input name="photo" color="blue" label="Photo URL" />
                        </div>
                        <div className="mb-1 flex gap-6">
                            <Input type="text" name="price" color="blue" label="Price" />
                            <select name="subcategory" className="border w-full border-gray-400 rounded-md p-1  bg-[#fff]" defaultValue="">
                                <option value="">Select Subcategory</option>
                                <option value="Clay-made pottery">Clay-made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra Cotta">Terra Cotta</option>
                                <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                <option value="Home decor pottery">Home decor pottery</option>
                            </select>
                        </div>
                        <div className="mb-1 flex gap-6">
                            <Input type="text" name="rating" color="blue" label="Rating" />
                            <select name="customization" className="border w-full border-gray-400 bg-[#fff] rounded-md p-1" defaultValue="">
                                <option value="">Select Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-1 flex gap-6">
                            <Input name="time" color="blue" label="Processing Time" />
                            <Input name="stock" color="blue" label="Stock Status" />
                        </div>
                        <div className="mb-1 flex gap-6">
                            <Input defaultValue={user?.email} name="email" color="blue" label="User Email" />
                            <Input defaultValue={user?.displayName} name="userName" color="blue" label="User Name" />
                        </div>
                        <Textarea name="description" color="blue" label="Short Description" />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Add Item
                    </Button>
                </form>
            </Card>
        </div>
    );
}
