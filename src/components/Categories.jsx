import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './item.css'
import { Typography } from "@material-tailwind/react";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://artisan-aura-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories)

    return (
        <div className="w-11/12 md:w-4/5 mx-auto mb-24 space-y-6">
            <Typography className="text-center" variant="h4" color="blue-gray">
                Explore Art & Craft Categories
            </Typography>
            <Typography className="text-center" color="gray">
                Explore a curated collection of ceramics and pottery at Artisan Aura. Find unique pieces for home decor or architectural projects. Start exploring now!
            </Typography>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    categories.map(category => <Link to={`/category/${category.subcategory_name}`} className="category-card relative rounded-lg overflow-hidden" key={category._id}>
                        <div className="h-[270px]">
                            <img className="category_img h-full w-full object-cover object-top" src={category.image} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-50 to-black p-4 flex flex-col justify-between">
                            <div className="inline-block relative">
                                <div className="text-xl font-bold text-white w-fit">{category.subcategory_name}</div>
                                <div className="text-underline absolute border-b-[3px] border-blue-500 w-0"></div>
                            </div>
                            <div className="">
                                <p className="text-gray-300 font-thin">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;