import { Link } from 'react-router-dom'

export const BlogListItem = ({ blog }) => {
    return (
        <Link to={`/blogs/${blog.id}`} className='blogItem'>
        <div className="blog-item"> 
            <h2>{ blog.title.toUpperCase() }</h2>
            <p>{ blog.body.slice(0,80) }...</p>
        </div>
        </Link>
    )
}
