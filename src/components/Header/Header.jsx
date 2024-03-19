
import React from 'react';
const Header = () => {
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl">Recipe Calories</a>
            </div>
            <div>
                <ul className='flex justify-between gap-10 mr-44'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                </label>
                <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://res.cloudinary.com/dospsrwzj/image/upload/v1710732414/abw4pilnojut5gx3uvzm.png" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        // banner part 
        
    );
};

export default Header;