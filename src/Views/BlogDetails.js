import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const BlogDetails = () => {

    const { id } = useParams()
    const[blog, setBlog] = useState(null)
    const[loading, setLoading] = useState(false)
    
    const getBlog = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        setBlog(res.data)
        setLoading(false)
    }

    console.log(blog)

    useEffect(() => {
        getBlog()
      }, [])

    return (
        <div>
            {/* <h1>Blog details</h1> */}
            {loading && <p>Loading...</p>}
            {blog && (
                <div className="blog-item">
                    {/* <h3>{ blog.id }</h3> */}
                    <h2>{ blog.title.toUpperCase() }</h2>
                    <p>{ blog.body }</p>
                </div>
            )}
        </div>
    )
}
