import { comma } from 'postcss/lib/list';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({handaleToAddCook}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[])
    
    
    return (

        <div className='col-span-8'>
           <div className='grid md:grid-cols-2 gap-2'>
           {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handaleToAddCook={handaleToAddCook}
                ></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;