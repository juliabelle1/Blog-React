import axios from 'axios'
import { useEffect, useState } from 'react'
import { BlogListItem } from '../components/BlogListItem'

export const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setBlogs(res.data.slice(0,20))
    }
    console.log(blogs)

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div>
        <div className='container'>
            {blogs.map(blog => (
                <BlogListItem blog = {blog} key={blog.id}/>
            ))}
        </div>
        </div>
    )
}
