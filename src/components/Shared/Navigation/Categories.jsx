import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-5">
            <h2 className="text-xl font-semibold text-[#403F3F]">All Category</h2>
            <div className="flex flex-col justify-center gap-7 ml-12">
                {
                    categories.map(category =>
                        <NavLink className='text-[#9F9F9F] text-xl' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;