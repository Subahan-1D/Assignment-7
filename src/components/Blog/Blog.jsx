import { FcClock } from "react-icons/fc";
import { AiTwotoneFire } from "react-icons/ai";
import React from 'react';
const Blog = ({ blog, handaleToAddCook }) => {
    const { recipe_img, recipe_name, short_description, ingredients, preparing_time, calories, } = blog;
    return (
        <div>
            <div className='flex justify-between mt-5 border-2 items-center rounded-xl'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_img} alt="Recipe" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className='text-xl text-black font-bold'>{recipe_name}</h2>
                    <p className='text-gray-500'>{short_description}</p>
                    <hr />
                    <p >
                        <h5 className='text-xl'>Ingradients :{ingredients.length}</h5>
                        <p className="mt-3 ">

                            {ingredients.map(ingred => <span key={ingred.id}>
                                <p className="text-gray-500">
                                    <li>{ingred}</li>
                                </p>
                            </span>)
                            }
                        </p>
                    </p>
                    <hr />
                    <div className='flex justify-between '>
                        <div className="flex justify-between items-center gap-2">
                        <p className="text-xl"><FcClock></FcClock></p>
                            <p className="text-xl text-gray-600">{preparing_time}</p>
                        </div>
                        <div className="flex justify-between items-center gap-2 mt-2">
                            <p className="text-xl"><AiTwotoneFire></AiTwotoneFire></p>
                            <p className="text-xl text-gray-600">{calories}</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button onClick={() => handaleToAddCook(blog)} className="btn btn-success text-xl  text-black font-medium">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Blog;