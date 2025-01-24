import Link from 'next/link';
import React from 'react';

const page = async({params}) => {
    const {id} = params
     console.log(id);

     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     const post = await res.json();
    return (
        <div className='my-8'>

            <div className='mb-4'>
            <h3 className='font-bold'>Title: {post.title}</h3>
            <h3 className=''>Post id: {post.id}</h3>
            <p className=''>User id: {post.userId}</p>
            <p>Description: {post.body}</p>
            </div>

            <Link href='/' className='py-1 px-3 bg-green-400 font-medium rounded-md mt-4'>Back to home</Link>
        </div>
    );
};

export default page;